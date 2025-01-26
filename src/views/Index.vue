<script setup>
import { ref, onMounted, computed } from "vue";

import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";
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
    date: "1/1",
    title: "Test01",
    text: "Test Test Test Test Test Test Test Test Test Test",
    btnText: "Test",
  },
  {
    date: "5/1",
    title: "Test02",
    text: "Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2 Test2",
    btnText: "Test2",
  },
  {
    date: "8/1",
    title: "Test03",
    text: "Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3 Test3",
    btnText: "Test3",
  },
  {
    date: "12/1",
    title: "Test04",
    text: "Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4 Test4",
    btnText: "Test4",
  },
]);

onMounted(() => {});

const onSwiper = (swiper) => {
  swiperItem.value = swiper;
  console.log(swiper)
};

const slideEvent = (e) => {
  swiperItem.value.slideTo(e);
};

const swiperIndex = computed(()=> swiperItem.value?.activeIndex)
</script>

<template>
  <main>
    <section class="newsArea mainBlock">
      <div class="imgBox item_01">
        <img src="https://picsum.photos/400/300" alt="" />
      </div>
      <div class="imgBox item_02">
        <img src="https://picsum.photos/400/300" alt="" />
      </div>
      <div class="imgBox item_03">
        <img src="https://picsum.photos/400/300" alt="" />
      </div>
      <div class="imgBox item_04">
        <img src="https://picsum.photos/400/300" alt="" />
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
    </section>

    <section class="actionArea mainBlock">
      <ul>
        <li :class="{focus: swiperIndex === 0}"><a href="javascript:;" @click="slideEvent(0)">內容0</a></li>
        <li :class="{focus: swiperIndex === 1}"><a href="javascript:;" @click="slideEvent(1)">內容1</a></li>
        <li :class="{focus: swiperIndex === 2}"><a href="javascript:;" @click="slideEvent(2)">內容2</a></li>
        <li :class="{focus: swiperIndex === 3}"><a href="javascript:;" @click="slideEvent(3)">內容3</a></li>
      </ul>
      <swiper
        :slidesPerView="'auto'"
        :spaceBetween="24"
        :loop="true"
        @swiper="onSwiper"
      >
        <template v-for="(data, id) in actionData" :key="id">
          <swiper-slide>
            <div class="actionBox">
              <div class="imgBox">
                <p class="date">{{ data.date }}</p>
                <img src="https://picsum.photos/400/300" alt="" />
              </div>
              <div class="infoBox">
                <p class="title">{{ data.title }}</p>
                <p class="text">{{ data.text }}</p>
                <div class="btnBox">
                  <a href="javascript:;" class="btn">
                    <p>{{ data.btnText }}</p>

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
