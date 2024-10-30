import { navbar } from "vuepress-theme-hope";

export const zh = navbar([
  "/zh/",
  "/zh/home",
  { text: "使用指南", icon: "creative", link: "/zh/guide/" },
  {
    text: "博文",
    icon: "edit",
    prefix: "/zh/posts/",
    children: [
      {
        text: "内容 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "内容 1", icon: "edit", link: "article1" },
          { text: "内容 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "内容 5-12",
        icon: "edit",
        children: [
          {
            text: "内容 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "内容 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "内容 9", icon: "edit", link: "article9" },
      { text: "内容 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
