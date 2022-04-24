<template>
    <div>
        <p class="title"><i></i>疫情地图</p>
        <Tabs :currentIndex="currentIndex" @onIndex="getIndex">
            <Tab index="1" label="国内疫情">
                <div id="chinaMap">
                </div>
            </Tab>
            <Tab index="2" label="国外疫情">
                <div id="worldMap"></div>
            </Tab>
        </Tabs>
    </div>
</template>

<script>
import api from '../api'
// import axios from 'axios'
import md5 from 'js-md5'

export default {
  data () {
    return {
      currentIndex: '1',
      value: ''
    }
  },
  mounted () {
    api.getNocvabroad({
      key: '62e34ad34025d5d5127135efa58d4ca8'
    }).then(res => {
      const allCitys = []
      for (let i = 0; i < res.data.newslist.length; i++) {
        const temp = {
          name: res.data.newslist[i].provinceName,
          value: res.data.newslist[i].currentConfirmedCount
        }
        allCitys.push(temp)
      }
      this.$charts.worldMap('worldMap', allCitys)
    }).catch(error => {
      console.log(error)
    })
    api.getNcovCity({
      appid: 16346,
      sign: md5('appid16346e90101e137fdf0b1cfc7f9c7d2012f9a')
    }).then(res => {
      const Citys = []
      for (let i = 0; i < res.data.retdata.length; i++) {
        const temp = {
          name: res.data.retdata[i].xArea,
          value: res.data.retdata[i].curConfirm
        }
        Citys.push(temp)
      }
      this.$charts.chinaMap('chinaMap', Citys)
    })
    // function nocvCity () {
    //   return axios.get(
    //     'http://api.tianapi.com/txapi/ncovcity/index?key=62e34ad34025d5d5127135efa58d4ca8'
    //   )
    // }

    // function nocvaBroad () {
    //   return axios.get(
    //     'http://api.tianapi.com/txapi/ncovabroad/index?key=62e34ad34025d5d5127135efa58d4ca8'
    //   )
    // }
    // // 合并网络请求
    // axios.all([nocvCity(), nocvaBroad()]).then(
    //   axios.spread((nocvCity, nocvaBroad) => {
    //     // 两个请求现在都执行完成
    //     const allCitys = []
    //     for (let i = 0; i < nocvCity.data.newslist.length; i++) {
    //       const temp = {
    //         name: nocvCity.data.newslist[i].provinceShortName,
    //         value: nocvCity.data.newslist[i].currentConfirmedCount
    //       }
    //       allCitys.push(temp)
    //     }
    //     //  { name: '俄罗斯', value: 28397.812 },
    //     const worlds = []
    //     for (let j = 0; j < nocvaBroad.data.newslist.length; j++) {
    //       const temp = {
    //         name: nocvaBroad.data.newslist[j].provinceName,
    //         value: nocvaBroad.data.newslist[j].currentConfirmedCount
    //       }
    //       worlds.push(temp)
    //     }
    //     this.$charts.chinaMap('chinaMap', allCitys)
    //     this.$charts.worldMap('worldMap', worlds)
    //   })
    // )
  },
  methods: {
    getIndex (index) {
      this.currentIndex = index
    }
  }
}
</script>

<style scoped>
#chinaMap {
    width: 400px;
    height: 400px;
}
#worldMap {
    width: 400px;
    height: 400px;
}
.title {
    border-top: 0.005rem solid #ebebeb;
    border-bottom: 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    height: 0.44rem;
    padding: 0 0.16rem;
    font-weight: 500;
    font-size: 0.17rem;
    line-height: 0.44rem;
    background: #fff;
}
.title::before {
    content: "";
    width: 5px;
    height: 20px;
    background: #4169e2;
    margin-right: 10px;
}
</style>
