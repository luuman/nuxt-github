/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * imgBaseUrl: 图片所在域名地址
 *
 */

let baseUrl
let routerMode
const imgBaseUrl = 'https://fuss10.elemecdn.com'

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'https://api.github.com/'
  routerMode = 'hash'
} else {
  baseUrl = 'https://api.github.com/'
  routerMode = 'hash'
}

// if (process.env.NODE_ENV == 'development') {
// 	// 开发环境
//   baseUrl = 'https://www.baidu.com';}
// else if (process.env.NODE_ENV == 'debug') {
// 	// 测试环境
//   baseUrl = 'https://www.ceshi.com';
// }
// else if (process.env.NODE_ENV == 'production') {
// 	// 生产环境
//   baseUrl = 'https://www.production.com';
// }

export {
  baseUrl,
  routerMode,
  imgBaseUrl
}
