import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";
import { defineUserConfig } from "vuepress";
export default defineUserConfig({
  theme: hopeTheme({
    // 此处放置主题配置
    hostname: "https://dearlocation.com/",

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
// export default defineThemeConfig({
//
// });
