<script setup>
import { ref, onMounted } from "vue";
import UseSvg from "@/components/UseSvg.vue";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/all";

const navData = ref([
  {
    text: "關於我們",
    path: "",
  },
  {
    text: "最新消息",
    path: "",
  },
  {
    text: "汙染影響",
    path: "",
  },
  {
    text: "行動計畫",
    path: "",
  },
  {
    text: "捐愛海洋",
    path: "",
  },
]);
const rwdSwitch = ref(false);

const navEvent = (id) => {
  gsap.registerPlugin(ScrollToPlugin);
  const targets = gsap.utils.toArray(".mainBlock");
  const navHeight = document.querySelector("nav").offsetHeight;
  gsap.to(window, { duration: 0.6, scrollTo: {y: id === 0 ? 0 : targets[id], offsetY: navHeight} });
  rwdSwitch.value = false
};
</script>

<template>
  <nav :class="{ focus: rwdSwitch }">
    <a href="javascript:;" class="logo"
      ><img src="@/assets/images/logo.svg" alt=""
    /></a>
    <a href="javascript:;" class="hamBtn" @click="rwdSwitch = !rwdSwitch">
      <b></b>
      <b></b>
      <b></b>
    </a>
    <ul class="navList">
      <template v-for="(data, id) in navData" :key="id">
        <li>
          <a href="javascript:;" @click="navEvent(id)">
            <UseSvg :name="`nav_0${id + 1}`" />
            {{ data.text }}
          </a>
        </li>
      </template>
    </ul>
  </nav>
</template>

<style lang="scss" src="@/assets/scss/views/components/nav.scss" scoped></style>
