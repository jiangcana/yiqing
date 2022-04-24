<template>
  <div class="home">
    <Header></Header>
    <CovidInfo />
    <CaseNum :caseNumData="caseNumData"></CaseNum>
    <MapAll></MapAll>
    <MySwiper></MySwiper>
    <SpringTravel></SpringTravel>
    <News :newsData="newsData"></News>
  </div>
</template>

<script>
import api from '../api/index.js'
import Header from '../components/Header.vue'
import CovidInfo from '../components/CovidInfo.vue'
import CaseNum from '../components/CaseNum.vue'
import MapAll from '../components/MapAll.vue'
import MySwiper from '../components/MySwiper.vue'
import SpringTravel from '../components/SpringTravel.vue'
import News from '../components/News.vue'
export default {
  name: 'HomeView',
  data () {
    return {
      caseNumData: {
        // 更新时间
        modifyTime: '',
        // 现存确诊人数
        currentConfirmedCount: '',
        // 累计确诊人数
        confirmedCount: '',
        // 累计境外输入人数
        suspectedCount: '',
        // 累计治愈人数
        curedCount: '',
        // 累计死亡人数
        deadCount: '',
        // 现存无症状人数
        seriousCount: '',
        // 新增境外输入人数
        suspectedIncr: '',
        // 相比昨天现存确诊人数
        currentConfirmedIncr: '',
        // 相比昨天累计确诊人数
        confirmedIncr: '',
        // 相比昨天新增治愈人数
        curedIncr: '',
        // 相比昨天新增死亡人数
        deadIncr: '',
        // 相比昨天现存无症状人数
        seriousIncr: '',
        // 相比昨天新增累计确诊人数
        yesterdayConfirmedCountIncr: '',
        // 相比昨天境外输入确诊人数
        yesterdaySuspectedCountIncr: ''
      },
      newsData: []
    }
  },
  components: {
    Header,
    CovidInfo,
    CaseNum,
    MapAll,
    MySwiper,
    SpringTravel,
    News
  },
  mounted () {
    api.getNcov({
      key: '82f9d91b5b0582281c6666f399035f45'
    }).then(res => {
      if (res.status === 200) {
        const desc = res.data.newslist[0].desc
        // 疫情病例
        this.caseNumData.modifyTime = desc.modifyTime
        this.caseNumData.currentConfirmedCount = desc.currentConfirmedCount
        this.caseNumData.confirmedCount = desc.confirmedCount
        this.caseNumData.suspectedCount = desc.suspectedCount
        this.caseNumData.curedCount = desc.curedCount
        this.caseNumData.deadCount = desc.deadCount
        this.caseNumData.seriousCount = desc.seriousCount
        this.caseNumData.suspectedIncr = desc.suspectedIncr
        this.caseNumData.currentConfirmedIncr = desc.currentConfirmedIncr
        this.caseNumData.confirmedIncr = desc.confirmedIncr
        this.caseNumData.curedIncr = desc.curedIncr
        this.caseNumData.deadIncr = desc.deadIncr
        this.caseNumData.seriousIncr = desc.seriousIncr
        this.caseNumData.yesterdayConfirmedCountIncr = desc.yesterdayConfirmedCountIncr
        this.caseNumData.yesterdaySuspectedCountIncr = desc.yesterdaySuspectedCountIncr
      }
    // eslint-disable-next-line node/handle-callback-err
    }).catch((error) => {})
  }
}
</script>
