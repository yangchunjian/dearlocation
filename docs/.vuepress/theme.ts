import { hopeTheme } from "vuepress-theme-hope";
import * as navbar from "./navbar";
import * as sidebar from "./sidebar";

const hostname =
  process.env.HOSTNAME || "https://dearlocation.com/";

export default hopeTheme({
  hostname,
  fullscreen: true,

  author: {
    name: "DearLocation.com",
    url: "https://dearlocation.com",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",
  iconPrefix: "iconfont icon-",
  repo: "https://github.com/yangchunjian/dearlocation",
  docsDir: "docs",
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime","Word","PageView"],

  blog: {
    medias: {
      Pocket: "https://yjava.cn/docbook/imgs/qrcode_for_gh_8756901e5b12_344.jpg",
    },
  },

  locales: {
    "/": {
      // navbar
      navbar: navbar.dearlocation,

      // sidebar
      sidebar: sidebar.dearlocation,

      footer: "<a href='https://beian.miit.gov.cn/'></a>",

      displayFooter: true,
      //浏览量
      visitor: true,

      blog: {
        description: "「亲位」",
        intro: "/intro.html",
      },

      metaLocales: {
        editLink: false,
      },
    },

    /**
     * Chinese locale config
     */
    // "/zh/": {
    //   // navbar
    //   navbar: navbar.zh,
    //
    //   // sidebar
    //   sidebar: sidebar.zh,
    //
    //   footer: "<a href='https://beian.miit.gov.cn/'></a>",
    //
    //   displayFooter: true,
    //   //浏览量
    //   visitor: true,
    //
    //   blog: {
    //     description: "一个来自黑龙江的朋友",
    //     intro: "/zh/intro.html",
    //   },
    //
    //   // page meta
    //   metaLocales: {
    //     editLink: "编辑此页",
    //   },
    // },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
      "/zh/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    components: ["Badge", "CodePen", "PDF", "StackBlitz", "YouTube"],
    //rss
    feed: {
      rss: true,
    },

    blog: {
      autoExcerpt: true,
    },

    // If you don't need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    comment: {
      /**
       * Using Giscus
       */
      // provider: "Giscus",
      // repo: "vuepress-theme-hope/giscus-discussions",
      // repoId: "R_kgDOG_Pt2A",
      // category: "Announcements",
      // categoryId: "DIC_kwDOG_Pt2M4COD69",

      /**
       * Using Twikoo
       */
      // provider: "Twikoo",
      // envId: "https://twikoo.ccknbc.vercel.app",

      /**
       * Using Waline
       */
      // provider: "Waline",
      // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
      // 插件选项
      provider: "Waline",
      comment: true,
      login: "disable",
      copyright: false,
      serverURL: "https://my-dearlocation-mhohh3ekc-yangchunjian.vercel.app",

    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },

    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Guide",
    //         short_name: "Guide",
    //         url: "/guide/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //           {
    //             src: "/assets/icon/guide-monochrome.png",
    //             sizes: "192x192",
    //             purpose: "monochrome",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },

    // seo:
    //   hostname === "https://vuepress-theme-hope.github.io"
    //     ? {}
    //     : { canonical: "https://vuepress-theme-hope.github.io/v2/v2-demo/" },
  },

});
