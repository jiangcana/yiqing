<template>
  <div class="new">
    <div v-for="itme in newsData" :key="itme.id"  class="news">
      <div class="pubDateStr">
        <span style="background:red;font-size:8px;font-weight:bolder;color:#fff;">{{itme.pubDateStr}}</span>
      </div>
    <div class="text">
      <div class="title">{{itme.title}}</div>
      <div class="summary, van-ellipsis">{{itme.summary}}</div>
    </div>
    <div class="sourceUrl">
      <a :href= itme.sourceUrl><van-icon name="arrow" size="20" /></a>
    </div>
    </div>
  </div>
</template>

<script>
import api from '../api/index.js'
import 'vant/lib/index.css'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'News',
  data () {
    return {
      newsData: []
    }
  },
  mounted () {
    api.getNcov({
      key: '82f9d91b5b0582281c6666f399035f45'
    }).then(res => {
      if (res.status === 200) {
        const allNews = []
        for (let i = 0; i < res.data.newslist[0].news.length; i++) {
          const temp = {
            id: res.data.newslist[0].news[i].id,
            pubDateStr: res.data.newslist[0].news[i].pubDateStr,
            sourceUrl: res.data.newslist[0].news[i].sourceUrl,
            summary: res.data.newslist[0].news[i].summary,
            title: res.data.newslist[0].news[i].title
          }
          allNews.push(temp)
        }
        this.newsData = allNews
      }
    })
  }
}
</script>

<style lang="less" scoped>
.new{
  width: 100%;
  background-color: #fff;
  padding: 5px 20px;
  box-sizing: border-box;
}
.news{
  display: flex;
  justify-content: left;
  width: 100%;
  box-shadow: 0 1px 1px 0px rgba(0, 0, 0, 0.2), 0 0px 20px 0 rgba(0, 0, 0, 0.19);
}
.pubDateStr{
  width: 20%;
  height: 60px;
  text-align: center;
}
.text{
  width: 70%;
  height: 60px;
}
.title{
  height: 75%;
  font-size: 15px;
  font-weight: bolder;
}
.summary{
  height: 25%;
}
.sourceUrl{
  width: 10%;
  height: 60px;
  text-align: center;
  line-height:60px;
}
</style>
