<template>
  <div>
    <div class="fromInfo">
      <h3>{{fromInfo.city_name}}</h3>
      <p>{{fromInfo.high_in_desc}}</p>
      <p>{{fromInfo.low_in_desc}}</p>
      <p>{{fromInfo.out_desc}}</p>
    </div>
    <div class="toInfo">
      <h3>{{toInfo.city_name}}</h3>
      <p>{{toInfo.high_in_desc}}</p>
      <p>{{toInfo.low_in_desc}}</p>
      <p>{{toInfo.out_desc}}</p>
    </div>
  </div>
</template>

<script>
import api from '../api'
export default {
  data () {
    return {
      fromInfo: {},
      toInfo: {}
    }
  },
  props: {
    citys: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  mounted () {
    api.springTravelQuery({
      key: '607c86e010023b412dc31df30c2db271',
      from: this.citys[0].value,
      to: this.citys[1].value
    }).then(res => {
      console.log(this.citys)
      if (res.status === 200) {
        this.fromInfo = res.data.result.from_info
        this.toInfo = res.data.result.to_info
      }
    })
  }
}
</script>

<style lang="less" scoped>

</style>
