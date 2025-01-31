<script setup>
import { ref, onMounted } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

import UseSvg from "@/components/UseSvg.vue";
import LightBox from "@/components/LightBox.vue";
import Model from "@/components/Model.vue";

const url =
  "https://iocean.oca.gov.tw/oca_datahub/WebService/GetData.ashx?id=5EC80F9B-418B-4D36-9099-36831AECEC45&API-KEY=";

const newsData = ref([
  {
    case_no: "2506",
    organ: "地方單位\\臺東縣政府\\環境保護局",
    case_name: "長濱港區旗魚CT0-8136漁船沈沒",
    hap_datetime: "2024-12-16 11:20",
    Site_discription: "長濱港區內",
    log: "121.457222222222",
    lat: "23.3130555555556",
    CaseLevel: "1",
    end_datetime: "2024-12-18 10:41",
  },
  {
    case_no: "2507",
    organ: "海洋委員會\\海洋保育署",
    case_name: "高雄得盛造船廠前方水域疑似有油污染",
    hap_datetime: "2024-12-16 08:51",
    Site_discription: "得盛造船廠前方水域",
    log: "120.281858333333",
    lat: "22.5971083333333",
    CaseLevel: "1",
    end_datetime: "2024-12-27 12:39",
  },
  {
    case_no: "2508",
    organ: "地方單位\\臺南市政府\\環境保護局",
    case_name: "安平魚市場旁油污洩漏",
    hap_datetime: "2024-12-25 15:17",
    Site_discription: "安平漁港",
    log: "120.156666666667",
    lat: "22.9952777777778",
    CaseLevel: "1",
    end_datetime: "",
  },
  {
    case_no: "2510",
    organ: "地方單位\\桃園市政府\\環境保護局",
    case_name: "永安漁港港內不明油污事件",
    hap_datetime: "2024-12-24 11:00",
    Site_discription: "",
    log: "121.014166666667",
    lat: "24.9883333333333",
    CaseLevel: "1",
    end_datetime: "2024-12-27 08:57",
  },
  {
    case_no: "2511",
    organ: "地方單位\\高雄市政府\\海洋局",
    case_name: "停靠興達漁港之新裕發CT4-2050）漁船失火案",
    hap_datetime: "2024-12-27 11:53",
    Site_discription: "",
    log: "120.195833333333",
    lat: "22.8694444444444",
    CaseLevel: "1",
    end_datetime: "2025-01-03 15:46",
  },
  {
    case_no: "2514",
    organ: "地方單位\\澎湖縣政府\\環境保護局",
    case_name: "外垵漁港不明油污",
    hap_datetime: "2024-12-27 16:30",
    Site_discription: "外垵自助洗衣店前方海域兩處",
    log: "119.479166666667",
    lat: "23.5636111111111",
    CaseLevel: "1",
    end_datetime: "2024-12-28 21:25",
  },
  {
    case_no: "2515",
    organ: "地方單位\\新竹市政府\\環境保護局",
    case_name: "瑞成號漁船翻覆事件",
    hap_datetime: "2024-12-30 11:26",
    Site_discription: "",
    log: "120.920833333333",
    lat: "24.8458333333333",
    CaseLevel: "1",
    end_datetime: "",
  },
  {
    case_no: "2516",
    organ: "地方單位\\澎湖縣政府\\環境保護局",
    case_name: "外垵漁港不明油污",
    hap_datetime: "2024-12-31 14:00",
    Site_discription: "外垵自助洗衣店右前方",
    log: "119.478888888889",
    lat: "23.5630555555556",
    CaseLevel: "1",
    end_datetime: "2025-01-02 15:47",
  },
  {
    case_no: "2517",
    organ: "地方單位\\桃園市政府\\環境保護局",
    case_name: "豬鼻子海灘之新北市煙火施放工作平台擱淺",
    hap_datetime: "2025-01-02 14:00",
    Site_discription: "",
    log: "121.226666666667",
    lat: "25.1111111111111",
    CaseLevel: "1",
    end_datetime: "2025-01-06 09:18",
  },
  {
    case_no: "2518",
    organ: "海洋委員會\\海洋保育署",
    case_name: "馬紹爾籍「潘諾亞PANORIA」貨輪機艙失火案",
    hap_datetime: "2025-01-04 17:13",
    Site_discription: "鵝鑾鼻西南方23浬",
    log: "120.4895",
    lat: "21.7469472222222",
    CaseLevel: "1",
    end_datetime: "",
  },
]);
const polluteImg = ref([
  new URL("@/assets/images/index/pollute_01.jpg", import.meta.url).href,
  new URL("@/assets/images/index/pollute_02.jpg", import.meta.url).href,
  new URL("@/assets/images/index/pollute_03.jpg", import.meta.url).href,
  new URL("@/assets/images/index/pollute_04.jpg", import.meta.url).href,
  new URL("@/assets/images/index/pollute_05.jpg", import.meta.url).href,
]);
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
const shopData = ref([
  {
    title: "漂流木折凳",
    text: "這款漂流木折凳兼具美感與實用性，簡約設計中蘊藏著大自然的溫度與手作工藝的細膩。折疊式結構方便收納與攜帶，適合多種場景使用，如戶外露營、陽台擺設或室內點綴。每一款皆由天然漂流木製成，保有獨特紋理與手感，讓空間展現樸實而富有靈魂的自然韻味。",
    imgUrl: new URL("@/assets/images/index/shop_01.png", import.meta.url).href,
    id: 0,
  },
  {
    title: "漂流木桌子",
    text: "這款漂流木桌子以歲月雕琢的天然木材製成，每一道紋理都記錄著大自然的軌跡。經過細緻打磨與防護處理，保留原始質感的同時，提升耐用性與穩定性。無論是放置於客廳、餐廳或書房，都能為空間增添獨特的原始魅力與溫潤感，展現純粹的手工工藝與環保理念。",
    imgUrl: new URL("@/assets/images/index/shop_02.png", import.meta.url).href,
    id: 1,
  },
  {
    title: "漂流木椅子",
    text: "承載著海浪與時光洗禮的漂流木椅子，每一張都是獨一無二的藝術品。手工精製的設計，融合天然紋理與舒適的座感，無論作為休閒椅或裝飾椅都別具特色。堅固耐用的結構讓其適合室內外擺放，為居家或商業空間帶來自然氣息與獨特個性，成為生活中最具溫度的存在。",
    imgUrl: new URL("@/assets/images/index/shop_03.png", import.meta.url).href,
    id: 2,
  },
]);

const aboutBlock = ref([]);
const swiperItem = ref();
const swiperIndex = ref(0); // 0 => 最新消息; 1 => 行動計畫; 2 => 捐愛海洋;
const lightSwitch = ref(false);
const lightType = ref(0);
const previewDataIndex = ref(0);
const formData = ref({
  event: null,
  name: "",
  mail: "",
  phone: "",
});
const judgeFormRes = ref([false, false, false, false]);
const maxWidth = ref(0);

onMounted(() => {
  setGsap();
});

const setGsap = () => {
  gsap.registerPlugin(ScrollTrigger);
  aboutBlock.value = gsap.utils.toArray(".aboutArea .aboutBox");
  window.addEventListener("resize", getMaxWidth);

  getMaxWidth();

  if (aboutBlock.value.length) {
    const timeLineMain = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutArea",
        start: "top-=72",
        pin: true,
        scrub: 1,
      },
    });

    const timeLineA = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutArea",
        start: 0,
        // end: "top+=100vw",
        scrub: 1,
        markers: true,
      },
    });

    const timeLineB = gsap.timeline({
      scrollTrigger: {
        trigger: ".aboutArea",
        start: "100vh",
        end: "200vw",
        scrub: 1,
      },
    });

    timeLineMain.to(".aboutScrollBox", {
      x: () => `-${maxWidth.value - window.innerWidth}`,
      ease: "none",
    });

    timeLineA.to(".aboutBgBox .img_01", {
      clipPath: "inset(0% 100% 0% 0%)",
      ease: "none",
    });

    timeLineB.to(".aboutBgBox .img_02", {
      clipPath: "inset(0% 100% 0% 0%)",
      ease: "none",
    });
  }
};

const getMaxWidth = () => {
  maxWidth.value = 0;
  aboutBlock.value.forEach((block) => {
    maxWidth.value += block.offsetWidth;
  });
  console.log(maxWidth.value);
};

const onSwiper = (swiper) => {
  swiperItem.value = swiper;
};

const slideEvent = async (e) => {
  swiperItem.value.slideToLoop(e);
};

const slideChangeEvent = async (e) => {
  swiperIndex.value = e.realIndex;
};

const dateFormat = (e) => {
  return e.split(" ")[0];
};

const lightBoxEvent = (situation, index) => {
  lightType.value = situation;
  previewDataIndex.value = index;

  if (situation === 1) {
    formData.value = {
      event: index,
      name: "",
      mail: "",
      phone: "",
    };
  }

  lightSwitch.value = true;
};

const judgeForm = () => {
  const isEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const keys = Object.keys(formData.value);

  keys.forEach((e, id) => {
    if (e === "event") {
      judgeFormRes.value[id] = formData.value[e] === 999;
    } else if (e === "mail") {
      judgeFormRes.value[id] = !isEmail(formData.value[e]);
    } else {
      judgeFormRes.value[id] = formData.value[e] === "";
    }
  });
};
</script>

<template>
  <main>
    <LightBox :focus="lightSwitch" @closeEvent="(e) => (lightSwitch = false)">
      <template #content>
        <template v-if="lightType === 0">
          <div class="lightNewsBox">
            <p class="title">海洋污染事件</p>
            <ul>
              <li><b>機關：</b> {{ newsData[previewDataIndex]?.organ }}</li>
              <li>
                <b>案件名稱：</b> {{ newsData[previewDataIndex]?.case_name }}
              </li>
              <li>
                <b>發生時間：</b> {{ newsData[previewDataIndex]?.hap_datetime }}
              </li>
              <li>
                <b>結束時間：</b> {{ newsData[previewDataIndex]?.end_datetime }}
              </li>
              <li>
                <b>案件等級：</b> {{ newsData[previewDataIndex]?.CaseLevel }}
              </li>
              <li>
                <b>地點描述：</b>
                {{ newsData[previewDataIndex]?.Site_discription }}
              </li>
              <li><b>經度：</b> {{ newsData[previewDataIndex]?.log }}</li>
              <li><b>緯度：</b> {{ newsData[previewDataIndex]?.lat }}</li>
            </ul>
            <div class="btnBox">
              <a
                :href="`https://www.google.com/maps/search/?api=1&query=${newsData[previewDataIndex]?.lat},${newsData[previewDataIndex]?.log}`"
                target="_blank"
                class="btn deep"
              >
                <p>在Google地圖上查看</p>
                <div class="fishBox">
                  <UseSvg name="fish" />
                  <UseSvg name="fish" />
                </div>
              </a>
            </div>
          </div>
        </template>
        <template v-if="lightType === 1">
          <form class="lightForm">
            <label class="selectBox" :class="{ error: judgeFormRes[0] }">
              <span>報名活動</span>
              <div class="selectContent">
                <select v-model="formData.event">
                  <template v-for="(data, id) in actionData">
                    <option :value="id">{{ data.title }}</option>
                  </template>
                </select>
              </div>
              <b>請輸入正確資訊</b>
            </label>
            <label class="textBox" :class="{ error: judgeFormRes[1] }">
              <span>姓名</span>
              <input type="text" v-model="formData.name" />
              <b>請輸入正確資訊</b>
            </label>
            <label class="textBox" :class="{ error: judgeFormRes[2] }">
              <span>電子信箱</span>
              <input type="text" v-model="formData.mail" />
              <b>請輸入正確資訊</b>
            </label>
            <label class="textBox" :class="{ error: judgeFormRes[3] }">
              <span>手機號碼</span>
              <input type="text" v-model="formData.phone" />
              <b>請輸入正確資訊</b>
            </label>

            <div class="btnBox">
              <a href="javascript:;" class="btn deep" @click="judgeForm">
                <p>送出</p>
                <div class="fishBox">
                  <UseSvg name="fish" />
                  <UseSvg name="fish" />
                </div>
              </a>
            </div>
          </form>
        </template>
        <template v-if="lightType === 2">
          <div class="lightShopBox">
            <div class="model">
              <Model
                :modelType="previewDataIndex"
                :key="previewDataIndex"
              ></Model>
            </div>
            <div class="infoBox">
              <p class="title">
                {{ shopData[previewDataIndex]?.title }}
              </p>
              <p class="text">
                {{ shopData[previewDataIndex]?.text }}
              </p>
            </div>

            <p class="remind">
              *很抱歉，本產品尚未提供線上交易服務。請至實體據點選購。
            </p>
          </div>
        </template>
      </template>
    </LightBox>

    <section class="aboutArea mainBlock">
      <div class="aboutScrollBox">
        <div class="aboutBox"></div>
        <div class="aboutBox"></div>
        <div class="aboutBox"></div>
      </div>

      <div class="aboutBgBox">
        <img src="@/assets/images/index/about_01.jpg" alt="" class="img_01" />
        <img src="@/assets/images/index/about_02.jpg" alt="" class="img_02" />
        <img src="@/assets/images/index/about_03.jpg" alt="" class="img_03" />
      </div>
    </section>

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
          <template v-for="(data, id) in newsData" :key="id">
            <li>
              <a href="javascript:;" @click="lightBoxEvent(0, id)">
                <p class="date">
                  {{ data?.hap_datetime ? dateFormat(data.hap_datetime) : "" }}
                </p>
                <p class="title">
                  {{ data?.case_name }}
                </p>
                <div class="fishBox">
                  <UseSvg name="fish" />
                  <UseSvg name="fish" />
                </div>
              </a>
            </li>
          </template>
        </ul>
        <p class="remind">
          *資料來源：
          <a
            href="https://iocean.oca.gov.tw/OCA_DataHub/DataSetView.aspx?k=336F1B9D-1806-48ED-B36C-F63BB728F12D#"
            target="_blank"
            class="link"
            >海洋保育資料倉儲系統</a
          >
        </p>
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
          <a href="javascript:;" @click="slideEvent(1)">夏季活動 </a>
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
                  <a
                    href="javascript:;"
                    class="btn size-l"
                    @click="lightBoxEvent(1, id)"
                  >
                    <p>報名活動</p>

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
      <p class="title">海岸拾光，重塑新生</p>
      <p class="text">
        我們從海岸撿拾合法可再生利用的素材，如漂流木、貝殼、廢棄漁網等，手工製作成獨特的工藝品與家具，賦予它們全新生命。您的每一次購買，都是對環境的支持，所有收益將全額捐贈給海洋保育單位，共同守護海洋生態。
      </p>

      <div class="shopListBox">
        <ul>
          <template v-for="(data, id) in shopData" :key="id">
            <li>
              <a href="javascript:;" @click="lightBoxEvent(2, id)">
                <div class="imgBox">
                  <img :src="data.imgUrl" alt="" />
                </div>
                <div class="infoBox">
                  <p>{{ data.title }}</p>
                  <span>{{ data.text }}</span>
                </div>
              </a>
            </li>
          </template>
        </ul>
        <ul>
          <template v-for="(data, id) in shopData" :key="id">
            <li>
              <a href="javascript:;" @click="lightBoxEvent(2, id)">
                <div class="imgBox">
                  <img :src="data.imgUrl" alt="" />
                </div>
                <div class="infoBox">
                  <p>{{ data.title }}</p>
                  <span>{{ data.text }}</span>
                </div>
              </a>
            </li>
          </template>
        </ul>
      </div>
      <div class="btnBox">
        <a href="javascript:;" class="btn size-l">
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
