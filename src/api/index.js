import axios from '../utils/request'

const base = {
  baseUrl: 'http://api.tianapi.com',
  ncov: '/ncov/index',
  washujuUrl: 'https://rijb.api.storeapi.net',
  ncovcity: '/api/94/219',
  ncovabroad: '/ncovabroad/index',
  juheBaseUrl: '/api',
  springTravel: '/springTravel/citys',
  springTravelQuery: '/springTravel/query'
  // aliUrl: 'http://ncovdata.market.alicloudapi.com',
  // swiperMap: '/ncov/cityDiseaseInfoWithTrend'
}

const api = {
  // 疫情数据
  getNcov (params) {
    return axios.get(base.baseUrl + base.ncov, {
      params
    })
  },
  // 省市疫情数据
  getNcovCity (params) {
    return axios.get(base.washujuUrl + base.ncovcity, {
      params
    })
  },
  // 世界疫情
  getNocvabroad (params) {
    return axios.get(base.baseUrl + base.ncovabroad, {
      params
    })
  },
  // 各地政策城市数据
  springTravel (params) {
    return axios.get(base.juheBaseUrl + base.springTravel, {
      params
    })
  },
  // 各地政策详情
  springTravelQuery (params) {
    return axios.get(base.juheBaseUrl + base.springTravelQuery, {
      params
    })
  }
  // 折线图数据
  // swiperMap () {
  //   return axios.get(base.aliUrl + base.swiperMap)
  // }
}

export default api
