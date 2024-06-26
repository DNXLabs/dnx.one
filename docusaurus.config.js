// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DNX One',
  tagline: 'DNX Public Documentation',
  url: 'https://dnx.one',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/images/icon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'DNXLabs', // Usually your GitHub org/user name.
  projectName: 'dnx.one', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: ({ versionDocsDirPath, docPath }) => `https://github.com/DNXLabs/dnx.one/edit/main/${versionDocsDirPath}/${docPath}`,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          routeBasePath: '/docs',
        },
        blog: {
          id: 'release-news',
          routeBasePath: '/news',
          postsPerPage: 1,
          path: 'src/news',
          blogTitle: 'Release News',
          blogSidebarTitle: 'All Releases',
          blogDescription: 'Release news for all DNX modules.',
          blogSidebarCount: 'ALL',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} DNX Solutions.`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: 'aws, dnx, dnx solutions, devops, terraform, deployment, automation',
        },
      ],
      navbar: {
        title: 'DNX Solutions',
        logo: {
          alt: 'DNX Solutions logo',
          src: 'assets/images/logo.png',
          href: '#',
        },
        hideOnScroll: true,
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/terraform/modules',
            label: 'Terraform Modules',
            position: 'left' },
          {
            to: '/news',
            label: 'Release News',
            position: 'left',
            path: '/news',
          },
          // {
          //   href: 'https://www.dnx.solutions',
          //   label: 'Website',
          //   position: 'right',
          // },
          {
            href: 'https://dnx.freshdesk.com/support/login',
            label: 'Support',
            position: 'right',
          },
          {
            href: 'https://github.com/DNXLabs',
            // label: 'GitHub',
            position: 'right',
            className: 'navbar-item-github',
          },
          {
            type: 'search',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Onboarding',
          //       to: '/docs/onboarding',
          //     },
          //     {
          //       label: 'Citadel',
          //       to: '/docs/citadel',
          //     },
          //   ],
          // },
          {
            title: 'Community',
            items: [
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/dnx-solutions/',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/SolutionsDNX',
              },
              {
                label: 'Youtube',
                href: 'https://www.youtube.com/channel/UC6EVxNZKthPWa1reAnPy8Sw/featured',
              },
              {
                label: 'Slack',
                href: 'https://join.slack.com/t/dnxlabs/shared_invite/zt-1i9y94534-YiQHBpkbRYNtXGRpGYdRkg',
              },
              {
                label: 'Github',
                href: 'https://github.com/DNXLabs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'News',
                to: '/news',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/DNXLabs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DNX Solutions. Built with Docusaurus.`,
      },
      prism: {
        theme: lightTheme,
        darkTheme: darkTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
}

module.exports = config
