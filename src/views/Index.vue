<script setup></script>

<template>
  <main>
    <section class="eventArea">
      <div class="eventListBox">
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
