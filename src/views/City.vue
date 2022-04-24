<template>
    <div>
      <van-nav-bar
        :title=city
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
        <div id="city"></div>
    </div>
</template>

<script>
import api from '../api'
import md5 from 'js-md5'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'City',
  props: {
    city: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  mounted () {
    const thisCitys = []
    api.getNcovCity({
      appid: 16346,
      sign: md5('appid16346e90101e137fdf0b1cfc7f9c7d2012f9a')
    }).then(res => {
      for (let i = 0; i < res.data.retdata.length; i++) {
        if (res.data.retdata[i].xArea === this.city) {
          for (let j = 0; j < res.data.retdata[i].subList.length; j++) {
            const temp = {
              name: res.data.retdata[i].subList[j].city + '市',
              value: res.data.retdata[i].subList[j].curConfirm
            }
            thisCitys.push(temp)
          }
        }
      }
      this.$charts.provinceMap('city', this.city, thisCitys)
    })
  }
}
</script>

<style scoped>
#city {
    width: 400px;
    height: 500px;
}
</style>
