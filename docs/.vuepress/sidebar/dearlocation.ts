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
      text: "教程",
      icon: "creative",
      prefix: "tutorial/",
      // link: "register/",
      collapsable: true,//可折叠
      children: "structure",
    },
    {
      text: "内容",
      icon: "creative",
      prefix: "posts/",
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
