import {
  HopeLangLocalesConfig,
  HopeNavBarConfig,
  HopeSideBarConfig
} from '@mr-hope/vuepress-shared-utils';
import { VuepressConfig, VuepressThemeConfig } from './vuepressConfig';
import { CommentOptions } from '@mr-hope/vuepress-plugin-comment';
import { MarkdownEnhanceOption } from 'vuepress-plugin-md-enhance';
import { ThemeColorOptions } from '@mr-hope/vuepress-plugin-theme-color';

export interface HopeFooterConfig {
  /** 页脚的默认文字 */
  text?: string;
  /** 是否显示默认页脚 */
  displayDefault?: boolean;
}

/** vuepress-theme-hope 主题配置 */
export interface HopeThemeConfig extends VuepressThemeConfig {
  /** 根目录对应的语言 */
  baseLang?: string;
  /** 导航栏链接 */
  nav?: HopeNavBarConfig;
  /** 侧边栏配置 */
  sidebar?: HopeSideBarConfig;
  /** 默认作者 */
  author?: string;
  /** 图标前缀 */
  iconPrefix?: string;
  /** 是否全局启用路径导航 */
  breadcrumb?: boolean;
  /** 是否在路径导航显示图标 */
  breadcrumbIcon?: boolean;
  /** 是否在侧边栏显示图标 */
  sidebarIcon?: boolean;
  /** 页脚配置 */
  footer?: HopeFooterConfig;
  /** 是否显示返回顶部按钮 */
  backToTop?: boolean;
  /** 是否在导航栏显示仓库链接 */
  repoDisplay?: boolean;
  /** 主题色配置 */
  themeColor?: ThemeColorOptions;
  /** 是否显示 ”全屏“ 按钮 */
  fullscreen?: boolean;
  /** Markdown 增强设置 */
  markdown?: MarkdownEnhanceOption;
  /** 评论设置 */
  comment?: CommentOptions;
}

/** 处理后的 vuepress-theme-hope 主题配置 */
export interface ResolvedHopeThemeConfig extends HopeThemeConfig {
  /** 根目录对应的语言 */
  baseLang: string;
  /** 侧边栏深度 */
  sidebarDepth: number;
  /** 图标 FontClass 前缀 */
  iconPrefix: string;
  /** 多语言配置 */
  locales: Record<string, HopeLangLocalesConfig>;
  /** 页脚配置 */
  footer: HopeFooterConfig;
  /** 显示编辑本页链接 */
  editLinks: boolean;
}

export interface HopeHeadOptionConfig {
  /** 网站的图标 */
  icon?: string;
  /** PWA 设置 */
  pwa?: {
    /** manifest 文件的路径 */
    manifest?: string;
    /** 主题色 */
    themeColor?: string;
    /** 苹果导航栏颜色 */
    appleStatusBarColor?: 'black' | 'white';
    /** 苹果的图标 */
    appleIcon?: string;
    /** 微软磁贴图片 */
    msTileImage?: string;
    /** 微软磁贴颜色 */
    msTileColor?: string;
  };
}

/** vuepress-theme-hope 项目配置 */
export interface HopeVuepressConfig extends VuepressConfig {
  /** 自定义主题的配置 */
  themeConfig: HopeThemeConfig;
  /** 构建头部选项 */
  headOption?: HopeHeadOptionConfig;
}

/** 处理过的 vuepress-theme-hope 项目配置 */
export interface ResolvedHopeVuepressConfig extends HopeVuepressConfig {
  /** 使用的自定义主题 */
  theme: 'hope';
  /** 自定义主题的配置 */
  themeConfig: ResolvedHopeThemeConfig;
  /** 构建头部选项 */
  headOption?: HopeHeadOptionConfig;
}
