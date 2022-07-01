import { defineUserConfig } from "@vuepress/cli";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import {commentPlugin} from "vuepress-plugin-comment2";
// import { componentsPlugin } from "vuepress-plugin-components";


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
      description: "「Java面试+Java学习」",
    },
    // "/zh/": {
    //   lang: "zh-CN",
    //   title: "DearLocation.com",
    //   description: "「Java面试+Java学习」",
    // },
  },

  theme,
  plugins: [
    searchPlugin({
      // 你的选项

      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
  shouldPrefetch: false,
});
