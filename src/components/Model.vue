<script setup>
import { onMounted, onUnmounted } from "vue";

import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";
import { PMREMGenerator } from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const props = defineProps({
  modelType: {
    type: Number,
    default: 0,
  },
});

let scene,
  camera,
  renderer,
  model,
  animationFrameId,
  envMap,
  control,
  controlValue;
const loader = new GLTFLoader();
const exrLoader = new EXRLoader();
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.7/"
);
dracoLoader.setDecoderConfig({ type: "js" });
loader.setDRACOLoader(dracoLoader);

onMounted(async () => {
  const domBox = document.querySelector(".model");
  scene = new THREE.Scene();

  controlValue = window.innerWidth < 1024 ? 1.1 : 1;

  camera = new THREE.PerspectiveCamera(
    40,
    domBox.offsetWidth / domBox.offsetHeight,
    0.01,
    1000
  );

  if (props?.modelType === 0) {
    camera.position.set(controlValue, controlValue, controlValue);
  } else if (props?.modelType === 1) {
    camera.position.set(
      controlValue * 1.5,
      controlValue * 1.5,
      controlValue * 1.5
    );
  } else if (props?.modelType === 2) {
    camera.position.set(
      controlValue * 0.4,
      controlValue * 0.4,
      controlValue * 0.4
    );
  }

  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  });
  renderer.setSize(domBox.offsetWidth, domBox.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio * 2);
  renderer.physicallyCorrectLights = true;

  try {
    await Promise.all([loadingModel(), loadingExr()]);
  } catch (error) {
    console.log(error);
  }

  control = new OrbitControls(camera, renderer.domElement);
  control.target.copy(model.position);

  document.querySelector(".modelBox").appendChild(renderer.domElement);
  window.addEventListener("resize", resizeEvent);
  animate();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
  disposeSceneEvent();
});

const loadingModel = () => {
  return new Promise((resolve) => {
    const modelUrl = [
      "/models/folding_wooden_stool/folding_wooden_stool_1k.gltf",
      "/models/WoodenTable_01/WoodenTable_01_1k.gltf",
      "/models/wooden_stool_02/wooden_stool_02_1k.gltf",
    ];

    loader.load(modelUrl[props?.modelType], (modelItem) => {
      if (props?.modelType === 0 || props?.modelType === 2) {
        modelItem.scene.position.y = -0.2 * controlValue;
      }
      model = modelItem.scene;
      scene.add(model);
      resolve();
    });
  });
};

const loadingExr = () => {
  return new Promise((resolve) => {
    exrLoader.load("/models/hotel_rooftop_balcony_1k.exr", (texture) => {
      const pmremGenerator = new PMREMGenerator(renderer);
      envMap = pmremGenerator.fromEquirectangular(texture).texture;
      pmremGenerator.dispose();
      scene.environment = envMap;
      resolve();
    });
  });
};

const disposeSceneEvent = () => {
  scene?.traverse((object) => {
    if (object.geometry) {
      object.geometry.dispose();
    }

    if (object.material) {
      if (Array.isArray(object.material)) {
        object.material.forEach((material) => material.dispose());
      } else {
        object.material.dispose();
      }
    }
  });

  renderer?.dispose();
};

const resizeEvent = () => {
  const domBox = document.querySelector(".model");
  camera.aspect = domBox.offsetWidth / domBox.offsetHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(domBox.offsetWidth, domBox.offsetHeight);
};

const animate = () => {
  animationFrameId = requestAnimationFrame(animate);
  control.update();
  renderer.render(scene, camera);
};
</script>

<template>
  <div class="modelBox"></div>
</template>
