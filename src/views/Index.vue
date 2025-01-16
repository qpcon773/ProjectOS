<script setup></script>

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
              </a>
            </li>
          </template>
        </ul>
      </div>
    </section>
    <section class="polluteArea mainBlock"></section>
    <section class="actionArea mainBlock"></section>

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
                  <p>標題標題標題標題標題標題{{ id }}</p>
                  <span>文字文字文字文字文字文字文字文字</span>
                </div>
              </a>
            </li>
          </template>
        </ul>
      </div>
    </section>
  </main>
</template>

<style lang="scss" src="@/assets/scss/views/index.scss" scoped></style>
