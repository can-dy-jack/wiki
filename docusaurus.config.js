// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

// baseUrl
const base = "/wiki/";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Frontend Wiki',
  tagline: '前端开发知识库',
  favicon: 'logo/frontend wiki.png',

  url: 'https://kartjim.gitee.io',
  baseUrl: base,

  // for github pages
  organizationName: 'can-dy-jack',
  projectName: 'wiki',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/can-dy-jack/wiki/tree/master/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
          admonitions: {
            tag: ':::',
            keywords: [
              'note', 'tip', 'info', 'caution', 'danger',
              'purple', 'paper',
              'pink',
              'colorful'
            ],
          },
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/can-dy-jack/wiki/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: base + 'katex/katex.min.css',
      type: 'text/css'
    },
  ],

  plugins: ['docusaurus-plugin-sass', './src/plugins/local-search'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'logo/frontend wiki.png',
      navbar: {
        title: 'Frontend Wiki',
        logo: {
          alt: 'Frontend Wiki logo',
          src: 'logo/frontend wiki.gif',
        },
        hideOnScroll: true,
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Tutorial',
          // },

          {
            type: 'docSidebar',
            sidebarId: 'js',
            position: 'left',
            label: 'JavaScript'
          },
          {
            to: '/docs/react',
            sidebarId: 'react',
            position: 'left',
            label: 'React'
          },
          {
            to: '/docs/leetcode',
            sidebarId: 'leetcode',
            position: 'left',
            label: '力扣'
          },
          // {
          //   to: '/docs/vue',
          //   sidebarId: 'Vue',
          //   position: 'left',
          //   label: 'Vue'
          // },
          // {
          //   to: '/docs/css',
          //   sidebarId: 'CSS',
          //   position: 'left',
          //   label: 'CSS'
          // },
          {to: '/blog', label: '博客', position: 'left'},
          {
            type: 'search',
            position: 'right'
          },
          {
            href: 'https://github.com/can-dy-jack/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: '文章',
            items: [
              {
                label: 'Learn React',
                to: '/docs/react',
              },
              {
                label: 'Learn JavaScript',
                to: '/docs/js',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'github Issue',
                href: 'https://github.com/can-dy-jack/wiki/issues',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: '博客',
                to: '/blog',
              },
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Frontend Wiki, Inc. Built with Docusaurus and ❤️`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
