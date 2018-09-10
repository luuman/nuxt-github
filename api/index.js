/**
 * api接口统一管理
 * import API from 'API'
 * Vue.prototype.$API = API
 * Vue.use(API)
 *
 * this.$API.Login()
 */
import {get, post} from './http'

export default {
  Users (username) {
    return get(`/users/${username}`)
  },
  Repositories (username) {
    return get('/search/repositories' +`?q=user:${username}&sort=updated`)
  },
  Login (username, reponame) {
    return get(`/repos/${username}/${reponame}`)
  },
  CityList () {
    return get(`/city/citylist`)
  },
  Notifications (page) {
    return get(`/github/notifications?page=${page}`)
  },
  getNews (name, time) {
    if (time) {
      return get(`/get?api=/4/news/${name}/${time}`)
    } else {
      return get(`/get?api=/4/news/${name}`)
    }
  },
  getNewsById (Id) {
    return get(`/get?api=/4/news/${Id}`)
  },
  POST (link) {
    return post(link)
  },
  GET (link) {
    return get(link)
  }
}
