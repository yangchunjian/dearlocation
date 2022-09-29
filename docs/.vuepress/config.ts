import { defineUserConfig } from "@vuepress/cli";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import {commentPlugin} from "vuepress-plugin-comment2";
// import { componentsPlugin } from "vuepress-plugin-components";
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { socialSharePlugin } from 'vuepress-plugin-social-share';
import { seoPlugin } from "vuepress-plugin-seo2";
import { pwaPlugin } from "vuepress-plugin-pwa2";



// const base = (process.env.BASE as "/" | `/${string}/`) || "/";

export default defineUserConfig({
  // base,

  // dest: "./dist",

  head: [
    ["meta",
      {
        name: "baidu-site-verification",
        content: "code-jiOVohMv5f",
      },
    ],
    ['meta', {name: 'referrer', content: 'no-referrer-when-downgrade'}], // 不蒜子统计
    ['script', { src: '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js' }],

  ],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "DearLocation.com",
      description: "「相亲 + 交友」",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "DearLocation.com",
    //   description: "「相亲 + 交友」",
    // },
  },

  theme,
  plugins: [
    pwaPlugin({
      // 你的选项
    }),
    seoPlugin({
      hostname: "dearlocation.com"
    }),
    socialSharePlugin({
      networks: [`douban`, `weibo`, `email`, `qq`, `wechat`],
      email: `1091938307@qq.com`,
      // twitterUser: `ntnyq`,
      fallbackImage: `/dearlocation.jpg`,
      autoQuote: true,
      isPlain: false,
      qrcodeOptions: {
        width: 240,
      },
    }),


    searchPlugin({
      // 你的选项

      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
    copyrightPlugin({
      // 插件选项
      author: "DearLocation.com",
      triggerWords: 30,
      global: true,
    }),
  ],
  shouldPrefetch: false,
});
