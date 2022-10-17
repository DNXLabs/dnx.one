// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DNX One',
  tagline: 'DNX Public Documentation',
  url: 'https://dnx.one',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          { to: '/terraform/modules', label: 'Terraform Modules', position: 'left' },
          { to: '/news', label: 'News', position: 'left' },
          {
            href: 'https://www.dnx.solutions',
            label: 'Website',
            position: 'right',
          },
          {
            href: 'https://github.com/DNXLabs',
            // label: 'GitHub',
            position: 'right',
            className: 'navbar-item-github',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Onboarding',
                to: '/docs/onboarding',
              },
              {
                label: 'Citadel',
                to: '/docs/citadel',
              },
            ],
          },
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
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
