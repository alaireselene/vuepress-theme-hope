import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  "/",
  "/home",
  { text: "Hướng dẫn", icon: "creative", link: "/guide/" },
  {
    text: "Bài đăng",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "Mục 1-4",
        icon: "edit",
        prefix: "article/",
        children: [
          { text: "Mục 1", icon: "edit", link: "article1" },
          { text: "Mục 2", icon: "edit", link: "article2" },
          "article3",
          "article4",
        ],
      },
      {
        text: "Mụcs 5-12",
        icon: "edit",
        children: [
          {
            text: "Mục 5",
            icon: "edit",
            link: "article/article5",
          },
          {
            text: "Mục 6",
            icon: "edit",
            link: "article/article6",
          },
          "article/article7",
          "article/article8",
        ],
      },
      { text: "Mục 9", icon: "edit", link: "article9" },
      { text: "Mục 10", icon: "edit", link: "article10" },
      "article11",
      "article12",
    ],
  },
  {
    text: "Tài liệu chủ đề",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/",
  },
]);
