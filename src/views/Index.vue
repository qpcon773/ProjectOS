<script setup>
import { ref, onMounted, nextTick } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import UseSvg from "@/components/UseSvg.vue";

const polluteImg = ref([
  new URL("@/assets/images/index/pollute_01.jpg", import.meta.url).href,
  new URL("@/assets/images/index/pollute_02.jpg", import.meta.url).href,
  new URL("@/assets/images/index/pollute_03.jpg", import.meta.url).href,
  new URL("@/assets/images/index/pollute_04.jpg", import.meta.url).href,
  new URL("@/assets/images/index/pollute_05.jpg", import.meta.url).href,
]);

const swiperItem = ref();

const actionData = ref([
  {
    date: "4/15",
    title: "探索海洋奧秘",
    text: "跟隨研究員的腳步，登上研究船一同探索海洋生態奧秘，觀察多樣的海洋生物。親眼見證研究員如何精準記錄物種資訊，並迅速將生物放歸海洋，讓您了解保護生態平衡的每一步細節，激發對海洋保育的熱情。",
    imgUrl: new URL("@/assets/images/index/action_01.jpg", import.meta.url)
      .href,
  },
  {
    date: "7/22",
    title: "淨灘守護行動",
    text: "親手參與淨灘行動，清理散布於海岸線上的垃圾，體驗與夥伴一起守護大自然的成就感。了解塑膠廢棄物對海洋生態的影響，透過行動彰顯環保的重要性，共同努力讓每片沙灘恢復純淨的美麗。",
    imgUrl: new URL("@/assets/images/index/action_02.jpg", import.meta.url)
      .href,
  },
  {
    date: "10/8",
    title: "海洋未來講座",
    text: "在校園內參加專家講座，深入學習海洋保育的重要議題，從科學數據到實際案例，全面了解全球海洋生態現況。透過與專家互動交流，啟發學生們對於環境問題的關注與思考，激勵新世代投入保護行動。",
    imgUrl: new URL("@/assets/images/index/action_03.jpg", import.meta.url)
      .href,
  },
  {
    date: "12/1",
    title: "奇妙水族之旅",
    text: "走進水族館展開一場奇妙之旅，透過專業導覽深入了解深海生物的生活習性與環境挑戰。從五光十色的珊瑚礁到深海獨特物種，這場活動將讓您沉浸於知識與視覺的雙重饗宴，喚起人們對海洋保護的重視。",
    imgUrl: new URL("@/assets/images/index/action_04.jpg", import.meta.url)
      .href,
  },
]);

onMounted(() => {});

const onSwiper = (swiper) => {
  swiperItem.value = swiper;
  console.log(swiper);
};

const slideEvent = async (e) => {
  swiperItem.value.slideToLoop(e);
};

const slideChangeEvent = async (e) => {
  swiperIndex.value = e.realIndex;
};

const swiperIndex = ref(0);
</script>

<template>
  <main>
    <section class="newsArea mainBlock">
      <div class="imgBox item_01">
        <img src="@/assets/images/index/news_01.jpg" alt="" />
      </div>
      <div class="imgBox item_02">
        <img src="@/assets/images/index/news_02.jpg" alt="" />
      </div>
      <div class="imgBox item_03">
        <img src="@/assets/images/index/news_03.jpg" alt="" />
      </div>
      <div class="imgBox item_04">
        <img src="@/assets/images/index/news_04.jpg" alt="" />
      </div>
      <div class="newsBox">
        <p class="boxTitle">最新消息</p>
        <ul class="newsList">
          <template v-for="(data, id) in 10">
            <li>
              <a href="javascript:;">
                <p class="date">2025/01/10</p>
                <p class="title">
                  標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題標題
                </p>
                <div class="fishBox">
                  <UseSvg name="fish" />
                  <UseSvg name="fish" />
                </div>
              </a>
            </li>
          </template>
        </ul>
      </div>
    </section>

    <section class="polluteArea mainBlock">
      <template v-for="(data, id) in polluteImg" :key="id">
        <div class="imgBox">
          <img :src="data" alt="" />
        </div>
      </template>
      <ul class="pollutePhotoList">
        <li></li>
        <li></li>
        <li></li>
      </ul>

      <p class="title">守護海洋，共創永續未來</p>
      <p class="text">
        蔚藍的海洋正因人類的努力而綻放新的希望。透過持續推動「未來海洋」計畫，我們致力於打造一片潔淨的海域，讓每個生命都能自在成長。
        <br /><br />
        在這場保護行動中，來自各地的人們攜手合作，共同創造正面的影響。從減少塑膠廢棄物到推動海洋生態修復，我們為未來的每一滴海水注入純淨的可能。
        <br /><br />
        開放的合作精神也將您（支持者）與這片大海緊密相連。
        <br /><br />
        參與這場守護海洋的旅程，感受與自然和諧共生的美好。海洋的未來，就掌握在我們的雙手中。
      </p>
    </section>

    <section class="actionArea mainBlock">
      <ul>
        <li :class="{ focus: swiperIndex === 0 }">
          <a href="javascript:;" @click="slideEvent(0)">春季活動</a>
        </li>
        <li :class="{ focus: swiperIndex === 1 }">
          <a href="javascript:;" @click="slideEvent(1)">夏季活動
          </a>
        </li>
        <li :class="{ focus: swiperIndex === 2 }">
          <a href="javascript:;" @click="slideEvent(2)">秋季活動</a>
        </li>
        <li :class="{ focus: swiperIndex === 3 }">
          <a href="javascript:;" @click="slideEvent(3)">冬季活動</a>
        </li>
      </ul>
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="24"
        :loop="true"
        @swiper="onSwiper"
        @slideChangeTransitionStart="slideChangeEvent"
      >
        <template v-for="(data, id) in actionData" :key="id">
          <swiper-slide>
            <div class="actionBox">
              <div class="imgBox">
                <p class="date">{{ data.date }}</p>
                <img :src="data.imgUrl" alt="" />
              </div>
              <div class="infoBox">
                <p class="title">{{ data.title }}</p>
                <p class="text">{{ data.text }}</p>
                <div class="btnBox">
                  <a href="javascript:;" class="btn size-l">
                    <p>查看更多</p>

                    <div class="fishBox">
                      <UseSvg name="fish" />
                      <UseSvg name="fish" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </section>

    <section class="shopArea mainBlock">
      <div class="shopListBox">
        <ul>
          <template v-for="(data, id) in 3" :key="id">
            <li>
              <a href="javascript:;">
                <div class="imgBox">
                  <img src="https://picsum.photos/300" alt="" />
                </div>
                <div class="infoBox">
                  <p>標題標題標題標題標題標題{{ data }}</p>
                  <span>文字文字文字文字文字文字文字文字</span>
                </div>
              </a>
            </li>
          </template>
        </ul>
        <ul>
          <template v-for="(data, id) in 3" :key="id">
            <li>
              <a href="javascript:;">
                <div class="imgBox">
                  <img src="https://picsum.photos/300" alt="" />
                </div>
                <div class="infoBox">
                  <p>標題標題標題標題標題標題</p>
                  <span>文字文字文字文字文字文字文字文字</span>
                </div>
              </a>
            </li>
          </template>
        </ul>
      </div>
      <div class="btnBox">
        <a href="javascript:;" class="btn">
          <p>查看更多</p>

          <div class="fishBox">
            <UseSvg name="fish" />
            <UseSvg name="fish" />
          </div>
        </a>
      </div>
    </section>
  </main>
</template>

<style lang="scss" src="@/assets/scss/views/index.scss" scoped></style>
