/*
 * @LineStart: -------------------------------------------
 * @Copyright: © 2020, dearlocation. All rights reserved.
 * @LineEnd: ----------------------------------------------
 * @Product:
 * @Mode Name:
 * @Autor: vxPublic:dearlocation
 * @Date: 2020-05-29
 * @Version: xxx.v1.0
 * @LastEditors: 春建
 * @LastEditTime: 2021-03-04 09:24:54
 * @Description: 头部navs导航配置文件,入口文件原本在config.js文件中,但抽离到了themeConfig.js中,该文件通过module.exports导出,在themeConfig.js中通过require方式引入
 * 集中配置管理头部nav导航栏
 * @docs: https://vuepress.docschina.org/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F-navbar
 */

const navs = [
  {
    text: '首页',
    link: '/',
  },

  {
    text: '最新',
    link: '/latestarticle/',
  },
  {
    text: '后端',
    items: [
      {
        text: 'Node',
        link: '/backend/node/',
      },
    ],
  },
  {
    text: '面试',
    items: [
      { text: 'CSS', link: '/interview/css/' },
      { text: 'JavaScript', link: '/interview/js/' },
    ],
  },
  {
    text: '读书',
    items: [
      { text: '人性', link: '/read/wealth/' },
    ],
  },
  { text: '作者', link: '/about/' },
];

module.exports = navs;
