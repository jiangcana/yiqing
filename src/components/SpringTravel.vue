<template>
  <div class="spring">
    <h3 class="title">春节旅行各地政策</h3>
    <Cascader :options="options" label="出发城市" @onValue="getgoCity"/>
    <Cascader :options="options" label="到达城市" @onValue="getonCity"/>
    <van-button type="info" block @click="gotoSpringView">查看政策</van-button>
  </div>
</template>

<script>
import api from '../api'
import Cascader from './Cascader'
export default {
  data () {
    return {
      options: [],
      citys: []
    }
  },
  components: {
    Cascader
  },
  mounted () {
    api.springTravel({
      key: '607c86e010023b412dc31df30c2db271'
    }).then((res) => {
      const currentAll = []
      if (res.status === 200) {
        for (let i = 0; i < res.data.result.length; i++) {
          const arr = []
          for (let j = 0; j < res.data.result[i].citys.length; j++) {
            const temp2 = {
              text: res.data.result[i].citys[j].city,
              value: res.data.result[i].citys[j].city_id
            }
            arr.push(temp2)
          }
          const temp1 = {
            text: res.data.result[i].province,
            value: res.data.result[i].province_id,
            children: arr
          }
          currentAll.push(temp1)
        }
        this.options = currentAll
      }
    })
  },
  methods: {
    getgoCity (data) {
      this.citys.push(data)
    },
    getonCity (data) {
      this.citys.push(data)
    },
    gotoSpringView () {
      if (this.citys.length === 2) {
        this.$router.push({ name: 'SpringView', params: { citys: this.citys } })
      } else {
        this.$notify({ type: 'danger', message: '请选择城市' })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.spring{
  width: 100%;
  background-color: #fff;
  padding: 10px;
  box-sizing: border-box;
}
.spring .title{
  font-size: 0.16rem;
  margin: 0 0 0.08rem 0.16rem;
}
</style>
