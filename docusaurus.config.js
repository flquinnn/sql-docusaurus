// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';




/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LEARNing SQL',
  tagline: 'SQL is so interesting!!!',
  favicon: 'img/Q.ico',

  // Set the production url of your site here
  url: 'https://sql4u.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/flquinnn',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'quinnn', // Usually your GitHub org/user name.
  projectName: 'flquinnn', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/learningsql.jpg',
      navbar: {
        title: 'LEARNing SQL',
        logo: {
          alt: 'LEARNing SQL Logo',
          src: 'img/Q.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Course',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/docs/intro', label: 'Certificates', position: 'left'},                 
          {to: '/blog', label: 'About', position: 'left'},

          {
            href: 'https://github.com/flquinnn',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Course',
                to: '/docs/intro',
              },
              {
                label: 'Certificates',
                href: 'https://github.com/flquinnn',
              },
            ],
          },
          
          {
            title: 'Community',
            items: [           
              {
                label: 'Facebook',
                href: 'https://github.com/flquinnn',
              },
              {
                label: 'Twitter',
                href: 'https://github.com/flquinnn',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/flquinnn',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Quinnn's Web, Inc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
