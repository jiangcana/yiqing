<template>
  <div class="info">
    <van-button block type="info" @click="showPopup">新冠肺炎预防须知</van-button>
    <div class="content">
      <van-popup
      v-model="show"
      closeable
      close-icon="close"
      position="bottom"
      :style="{ height: '40%' }">
        <span><van-icon name="warning" color="blue" />个人清洁</span>
        <ul>
          <li>经常保持双手清洁，求其在触摸口，鼻眼之前。</li>
          <li>经常用洗手液和清水清洗双手，搓手至少20秒，并用纸巾擦干。</li>
          <li>打喷嚏或咳嗽时应用纸巾掩盖口鼻，把用过的纸巾弃置与有盖垃圾箱内，然后彻底清洗双手。</li>
        </ul>
        <span><van-icon name="clear" color="red" />尽量避免</span>
        <ul>
          <li>减少前往人流密集的场所，如不可避免，应戴上外科口罩。</li>
          <li>避免到医院。如有必要到访医院，应佩戴外科口罩及时刻注重个人和手部卫生</li>
          <li>避免接触动物（包括野味）、禽鸟或其粪便；避免到海鲜、活禽市场或农场。</li>
          <li>切勿进食野味及切勿光顾提供野味的餐馆。</li>
          <li>注意食物安全和卫生，避免进食或饮用生的或未熟透的动物产品，包括奶类，蛋类和肉类。</li>
        </ul>
        <span><van-icon name="add" color="green" />尽快就诊</span>
        <ul>
          <li>如有身体不适，特别是有发烧或咳嗽，应戴上外科口罩并尽快就诊。</li>
        </ul>
      </van-popup>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      show: false
    }
  },
  props: {
    covidInfo: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  methods: {
    showPopup () {
      this.show = true
    }
  }
}
</script>

<style lang="less" scoped>
.info {
    padding: 0.16rem;
    background: #fff;
    border-bottom: 1px solid #f1f1f1;
}
span{
  font-size: 20px;
  font-weight: bolder;
  i{
    size: 20px;
    padding-right: 10px;
  }
}
li:before{
           content: "";
           width: 5px;
           height: 5px;
           display: inline-block;
           border-radius: 50%;
           background: #4F8EFF;
           vertical-align: middle;
           margin-right: 8px;
}
li{
  font-size: 10px;
  font-weight: bolder;
  border: 5px 5px 5px 0;
}
</style>
