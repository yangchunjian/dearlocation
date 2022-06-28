import { navbar } from "vuepress-theme-hope";

export const dearlocation = navbar([
  "/",
  "/home",
  { text: "指南", icon: "creative", link: "/guide/" },
  {
    text: "试题",
    icon: "edit",
    prefix: "/willbe/",
    children: [
      {
        text: "文章 1-n",
        icon: "edit",
        children: [
          { text: "面试题-MyBatis", icon: "edit", link: "mybatis-interview-must" },
          { text: "面试题-MySQL", icon: "edit", link: "mysql-interview-must" },
        ],
      },
    ],
  },
  {
    text: "作者",
    icon: "note",
    link: "/me/",
  },
]);
