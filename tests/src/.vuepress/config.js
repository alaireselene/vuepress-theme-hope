const { config } = require("vuepress-theme-hope");
const navBarConfig = require("./config/navBar");
const sideBarConfig = require("./config/sideBar");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = config({
  title: "Theme Demo",
  description: "vuepress-theme-hope 的 demo",

  headOption: {
    icon: "/favicon.ico",
    pwa: {
      manifest: "/manifest.json",
      themeColor: "#46bd87",
      appleStatusBarColor: "black",
      appleIcon: "/assets/icon/apple-icon-152.png",
      msTileImage: "/assets/icon/ms-icon-144.png",
      msTileColor: "#ffffff",
    },
  },

  dest: "./dist",

  locales: {
    "/en/": {
      title: "Theme Demo",
      description: "A demo for vuepress-theme-hope",
    },
  },

  extraWatchFiles: [
    ".vuepress/config/navBar.js",
    ".vuepress/config/sideBar.js",
    ".vuepress/config/theme.js",
  ],

  themeConfig: {
    baseLang: "zh-CN",
    logo: "/logo.svg",

    nav: navBarConfig.zh,
    sidebar: sideBarConfig.zh,

    author: "Mr.Hope",

    footer: {
      display: false,
    },

    pageInfo: [
      "Author",
      "Category",
      "ReadTime",
      "Tag",
      "Time",
      "Word",
      "Visitor",
    ],

    themeColor: false,

    mdEnhance: { enableAll: true },

    comment: {
      type: "valine",
      appId: "msnseO76haIVIGvfJ10BKnpv-gzGzoHsz",
      appKey: "9QMulKhu7EDp1va0TYXR2PrI",
    },

    encrypt: {
      global: "01311031",
      config: {
        "/en/": ["1234", "5678"],
        "/test/detail/": "1234",
        "/test/footer/default": "5678",
      },
    },

    blog: {
      intro: "/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://zhihu.com",
        Baidu: "https://baidu.com",
        Github: "https://github.com",
      },
    },

    locales: {
      "/en/": {
        nav: navBarConfig.en,
        sidebar: sideBarConfig.en,
      },
    },

    pwa: {
      cachePic: true,
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
        ],
      },
    },

    hostname: "https://vuepress-theme-demo.mrhope.site/",
    repo: "https://github.com/mister-hope/vuepress-theme-hope",
    repoLabel: "Github",
  },
});
