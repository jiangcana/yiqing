<script>
import Content from './content'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tabs',
  data () {
    return {
      pans: []
    }
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: '1'
    }
  },
  methods: {
    getIndex (index) {
      this.$emit('onIndex', index)
    }
  },
  render () {
    // pans = [tab,tab,tab]
    return (
            <div>
                <ul class="tabs-header">{ this.$slots.default }</ul>
                <Content pans={ this.pans }/>
            </div>
    )
  }
}
</script>

<style scoped>
.tabs-header {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    border-bottom: 2px solid #ededed;
}
</style>
