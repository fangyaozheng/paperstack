// .vuepress/config.js
const { mdEnhancePlugin } = require("vuepress-plugin-md-enhance");
const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')


module.exports = {
    lang: 'zh-CN',
    title: 'PaperStack',
    description: 'A site for paper reading and sharing.',
    theme: defaultTheme({
        logo: '/imgs/logo.png',
        search: 'auto',
        navbar: [
          // NavbarItem
          {
            text: '首页',
            link: '/',
          },
          {
            text: '链接们',
            link: '/links.md',
          },
          {
            text: '关于',
            link: '/about.md',
          },
          {
            text: '南开大学',
            link: 'https://www.nankai.edu.cn/',
          },
        ],
        sidebar: {
            '/': [
                {
                  text: '索引',
                  collapsible: false,
                  children: ['/README.md', '/links.md', '/about.md'],
                },
                {
                  text: '分布式可信计算框架',
                  collapsible: true,
                  sidebarDepth: 1,
                  children: ['/discomputing/README.md']
                },
            ],
        },
      }),
    plugins: [
        mdEnhancePlugin({
            tabs: true,
            container: true,
            // 启用属性支持
            attrs: true,
        }),
        searchPlugin({
            locales: {
              '/': {
                placeholder: '搜索',
              },
            },
          }),
  ],
};
