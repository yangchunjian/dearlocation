import { sidebar } from "vuepress-theme-hope";

export const dearlocation = sidebar({
  "/": [
    // "",
    // "home",
    // "slide",
    {
      text: "试题",
      icon: "creative",
      prefix: "exam/",
      // link: "exam/",
      collapsable: true,//可折叠
      children: "structure",
    },{
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
  ],
});
