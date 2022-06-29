import { sidebar } from "vuepress-theme-hope";

export const dearlocation = sidebar({
  "/": [
    "",
    // "home",
    // "slide",
    {
      text: "试题",
      icon: "creative",
      prefix: "exam/",
      // link: "exam/",
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
  ],
});
