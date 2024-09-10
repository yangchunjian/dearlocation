// @ts-ignore
import { sidebar } from "vuepress-theme-hope";

export const dearlocation = sidebar({
  "/": [
    // "",
    // "home",
    // "slide",

    {
      text: "指南",
      icon: "creative",
      prefix: "guide/",
      // link: "exam/",
      collapsable: true,//可折叠
      children: "structure",
    },
    {
      text: "问卷",
      icon: "creative",
      prefix: "survey/",
      // link: "survey/",
      collapsable: true,//可折叠
      children: "structure",
    },
    {
      text: "登记",
      icon: "creative",
      prefix: "register/",
      // link: "register/",
      collapsable: true,//可折叠
      children: "structure",
    },
    {
      text: "书籍",
      icon: "creative",
      prefix: "book/",
      // link: "exa m/",
      collapsable: true,//可折叠
      children: "structure",
    },
    {
      text: "文章",
      icon: "creative",
      prefix: "posts/",
      // link: "posts/",
      collapsable: true,
      children: "structure",

    },
    {
      text: "财商",
      icon: "creative",
      prefix: "fq/",
      // link: "posts/",
      collapsable: true,
      children: "structure",

    },

    {
      text: "情商",
      icon: "creative",
      prefix: "eq/",
      // link: "posts/",
      collapsable: true,
      children: "structure",

    },

    {
      text: "智商",
      icon: "creative",
      prefix: "iq/",
      // link: "posts/",
      collapsable: true,
      children: "structure",

    },
    // {
    //   text: "作者",
    //   icon: "creative",
    //   prefix: "me/",
    //   // link: "posts/",
    //   collapsable: true,
    //   children: "structure",
    //
    // },
  ],
});
