<template>
    <div>
        <van-field
            v-model="City"
            is-link
            readonly
            :label="label"
            placeholder="请选择所在地区"
            @click="show = true"
        />
        <van-popup v-model="show" round position="bottom">
            <van-cascader
                title="请选择所在地区"
                :options="options"
                @close="show = false"
                @finish="onFinish"
            />
        </van-popup>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Cascader',
  data () {
    return {
      show: false,
      City: '',
      cascaderValue: ''
    }
  },
  props: {
    options: {
      type: Array,
      default: function () {
        return []
      }
    },
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish ({ selectedOptions }) {
      this.show = false
      this.City = selectedOptions
        .map((option) => option.text)
        .join('/')
      this.$emit('onValue', selectedOptions[1])
    }
  }
}
</script>

<style>
</style>
