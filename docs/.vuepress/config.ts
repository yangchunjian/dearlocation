import { defineUserConfig } from "@vuepress/cli";
import theme from "./theme";
import { searchPlugin } from "@vuepress/plugin-search";
import {commentPlugin} from "vuepress-plugin-comment2";


// const base = (process.env.BASE as "/" | `/${string}/`) || "/";

export default defineUserConfig({
  // base,
  head: [
    ["link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    //被搜索引擎搜索标签
    ["meta",
      {
        name: 'keywords',
        content: 'DearLocation,java,爬虫,毕业设计,python,计算机毕业设计,elasticsearch,springboot',
      }
    ],
    //360站长的验证代码
    ["meta",
      {
        name: "360-site-verification",
        content: "63b223c45248d2ea87cb9b1042148dda",
      },
    ],
    //百度站长的验证代码
    ["meta",
      {
        name: "baidu-site-verification",
        content: "code-jiOVohMv5f",
      },
    ],
    // 添加360站长的自动推送代码
    ["script",
      {
        src: "/assets/js/autopush-360.js",
      },
    ],
    ['script', {},
      `
                  var _hmt = _hmt || [];
                  (function() {
                    var hm = document.createElement("script");
                    hm.src = "https://hm.baidu.com/hm.js?469aa022c0181622bdf0357a8ca0fd9a";
                    var s = document.getElementsByTagName("script")[0];
                    s.parentNode.insertBefore(hm, s);
                  })();
                `
    ],
  ],
  dest: "./dist",

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

    }),

    // commentPlugin({
    //   // 插件选项
    //   provider: "Waline",
    //   comment: true,
    //   login: "disable",
    //   copyright: false,
    //   serverURL: "https://my-dearlocation-mhohh3ekc-yangchunjian.vercel.app",
    //
    // }),

  ],
  shouldPrefetch: false,
});
