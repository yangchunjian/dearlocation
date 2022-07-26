import { defineUserConfig } from "@vuepress/cli";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import {commentPlugin} from "vuepress-plugin-comment2";
// import { componentsPlugin } from "vuepress-plugin-components";
import { copyrightPlugin } from "vuepress-plugin-copyright2";
import { socialSharePlugin } from 'vuepress-plugin-social-share'


// const base = (process.env.BASE as "/" | `/${string}/`) || "/";

export default defineUserConfig({
  // base,

  // dest: "./dist",

  head: [
    [
      "meta",
      {
        name: "baidu-site-verification",
        content: "code-jiOVohMv5f",
      },
    ],
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
    socialSharePlugin({
      networks: [`douban`, `weibo`, `email`, `qq`, `wechat`],
      email: `1091938307@qq.com`,
      // twitterUser: `ntnyq`,
      fallbackImage: `/dearlocation.jpg`,
      autoQuote: true,
      isPlain: true,
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
