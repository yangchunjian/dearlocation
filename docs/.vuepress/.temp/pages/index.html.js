export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroImage\":\"/dearlocation-backgroup.svg\",\"heroText\":\"DearLocation\",\"heroFullScreen\":true,\"tagline\":\"「Java面试+Java学习」\",\"projects\":[{\"icon\":\"friend\",\"name\":\"面试题\",\"desc\":\"面经+试题\",\"link\":\"/willbe/\"},{\"icon\":\"article\",\"name\":\"文章\",\"desc\":\"文章列表\",\"link\":\"/posts/\"},{\"icon\":\"book\",\"name\":\"作者\",\"desc\":\"简介\",\"link\":\"/me/\"}],\"footer\":\"Copyright © 2020-present DearLocation.com\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://dearlocation.com/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"DearLocation.com\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
