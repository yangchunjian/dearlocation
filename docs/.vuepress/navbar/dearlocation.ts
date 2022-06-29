import { navbar } from "vuepress-theme-hope";

export const dearlocation = navbar([
  "/",
  // "/home",
  { text: "指南", icon: "creative", link: "/guide/" },
  {
    text: "作者",
    icon: "note",
    link: "/me/",
  },
]);
