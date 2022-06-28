import { defineHopeConfig } from "vuepress-theme-hope";
// import themeConfig from "./themeConfig";

import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar/zh";
import * as sidebar from "./sidebar/zh";
// import * as navbar from "./navbar";
// import * as sidebar from "./sidebar";

export default defineUserConfig({
  theme: hopeTheme({
    //   base: "/",
  title: "DearLocation",//默认信息
  description: "专注于面试、副业，技术人的成长记录",//默认信息

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    //被搜索引擎搜索标签
    [
      "meta",
      {
        name: 'keywords',
        content: 'DearLocation,java,爬虫,毕业设计,python,计算机毕业设计,elasticsearch,springboot',
      }
    ],
    //360站长的验证代码
    [
      "meta",
      {
        name: "360-site-verification",
        content: "63b223c45248d2ea87cb9b1042148dda",
      },
    ],
    // 添加360站长的自动推送代码
    [
      "script",
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
  // <meta name="360-site-verification" content="63b223c45248d2ea87cb9b1042148dda" />




  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     title: "Theme Demo",
  //     description: "A demo for vuepress-theme-hope",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "主题演示",
  //     description: "vuepress-theme-hope 的演示",
  //   },
  // },

    // 此处放置主题配置

      // 此处放置主题配置
      hostname: "http://javapub.net.cn/",

      author: {
        name: "Chunjian Yang",
        url: "http://javapub.net.cn",
      },

      iconPrefix: "iconfont icon-",

      logo: "/javapub-backgroup.svg",

      repo: "https://github.com/yangchunjian",

      docsDir: "demo/src",

      pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

      footer: "<a href='https://beian.miit.gov.cn/'>京ICP备xxx号</a>",

      displayFooter: true,



      locales: {
        "/": {
          // navbar
          navbar: navbar.javapub,

          // sidebar
          sidebar: sidebar.javapub,

          footer: "<a href='https://beian.miit.gov.cn/'>京ICP备xxx号</a>",

          displayFooter: true,

          //浏览量
          visitor: true,

          blog: {
            description: "一个来自黑龙江的朋友",
            intro: "/intro.html",
          },
        },

        /**
         * Chinese locale config
         */
        "/zh/": {
          // navbar
          navbar: navbar.zh,

          // sidebar
          sidebar: sidebar.zh,

          footer: "<a href='https://beian.miit.gov.cn/'>京ICP备xxx号</a>",

          displayFooter: true,

          blog: {
            description: "后端人员",
            intro: "/zh/intro.html",
          },
        },
      },

      encrypt: {
        config: {
          "/guide/encrypt.html": ["1234"],
          "/zh/guide/encrypt.html": ["1234"],
        },
      },

      plugins: {
        //rss
        feed: {
          rss: true,
        },
        //搜索start
        search: {
          locales: {
            "/": {
              placeholder: "搜索",
            }
          },
        },
        //搜索end
        blog: {
          autoExcerpt: true,
        },

        // If you don't need comment feature, you can remove following option
        // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
        // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
        comment: {
          /**
           * Using giscus
           */
          // type: "giscus",
          // repo: "yangchunjian/DearLocation-Blog",
          // repoId: "R_kgDOHK-WNg",
          // category: "Announcements",
          // categoryId: "DIC_kwDOHK-WNs4COsXL",


          /**
           * Using twikoo
           */
          // type: "twikoo",
          // envId: "https://twikoo.ccknbc.vercel.app",

          /**
           * Using Waline
           */
          type: "waline",
          serverURL: "https://yangchunjian-java-pub-blog-cq4tgfqik-yangchunjian.vercel.app",
          dark: "auto",//自适应深色模式
          meta: ['nick', 'mail', 'link'],
          login: "force",
        },

        mdEnhance: {
          enableAll: true,
          presentation: {
            plugins: ["highlight", "math", "search", "notes", "zoom"],
          },
        },
      },
    }),

});
// export default defineHopeConfig({
//   base: "/",
//   title: "DearLocation",//默认信息
//   description: "专注于面试、副业，技术人的成长记录",//默认信息
//
//   head: [
//     [
//       "link",
//       {
//         rel: "stylesheet",
//         href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
//       },
//     ],
//     //被搜索引擎搜索标签
//     [
//       "meta",
//       {
//         name: 'keywords',
//         content: 'DearLocation,java,爬虫,毕业设计,python,计算机毕业设计,elasticsearch,springboot',
//       }
//     ],
//     //360站长的验证代码
//     [
//       "meta",
//       {
//         name: "360-site-verification",
//         content: "63b223c45248d2ea87cb9b1042148dda",
//       },
//     ],
//     // 添加360站长的自动推送代码
//     [
//       "script",
//       {
//         src: "/assets/js/autopush-360.js",
//       },
//     ],
//     ['script', {},
//       `
//       var _hmt = _hmt || [];
//       (function() {
//         var hm = document.createElement("script");
//         hm.src = "https://hm.baidu.com/hm.js?469aa022c0181622bdf0357a8ca0fd9a";
//         var s = document.getElementsByTagName("script")[0];
//         s.parentNode.insertBefore(hm, s);
//       })();
//       `
//    ],
//   ],
//   // <meta name="360-site-verification" content="63b223c45248d2ea87cb9b1042148dda" />
//
//
//
//
//   // locales: {
//   //   "/": {
//   //     lang: "en-US",
//   //     title: "Theme Demo",
//   //     description: "A demo for vuepress-theme-hope",
//   //   },
//   //   "/zh/": {
//   //     lang: "zh-CN",
//   //     title: "主题演示",
//   //     description: "vuepress-theme-hope 的演示",
//   //   },
//   // },
//
//   themeConfig,
// });
