import { sidebar } from "vuepress-theme-hope";

export const zh = sidebar({
  "/zh/": [
    "",
    "home",
    "slide",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
    {
      text: "内容",
      icon: "note",
      prefix: "posts/",
      children: [
        {
          text: "内容 1-4",
          icon: "note",
          collapsable: true,
          prefix: "article/",
          children: ["article1", "article2", "article3", "article4"],
        },
        {
          text: "内容 5-12",
          icon: "note",
          children: [
            {
              text: "内容 5-8",
              icon: "note",
              collapsable: true,
              prefix: "article/",
              children: ["article5", "article6", "article7", "article8"],
            },
            {
              text: "内容 9-12",
              icon: "note",
              children: ["article9", "article10", "article11", "article12"],
            },
          ],
        },
      ],
    },
  ],
});
