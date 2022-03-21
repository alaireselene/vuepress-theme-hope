import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig([
  "",
  "home",
  "slide",
  {
    icon: "creative",
    text: "Hướng dẫn",
    prefix: "guide/",
    link: "guide/",
    children: "structure",
  },
  {
    text: "Các bài đăng",
    icon: "note",
    prefix: "posts/",
    children: [
      {
        text: "các mục 1-4",
        icon: "note",
        collapsable: true,
        prefix: "article/",
        children: ["article1", "article2", "article3", "article4"],
      },
      {
        text: "các mục 5-12",
        icon: "note",
        children: [
          {
            text: "các mục 5-8",
            icon: "note",
            collapsable: true,
            prefix: "article/",
            children: ["article5", "article6", "article7", "article8"],
          },
          {
            text: "các mục 9-12",
            icon: "note",
            children: ["article9", "article10", "article11", "article12"],
          },
        ],
      },
    ],
  },
]);
