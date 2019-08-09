/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  docsSideNavCollapsible: true,
  title: '', // Title for your website.
  tagline: 'BLiP | Help Center',
  url: 'hmg-help.blip.ai', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  algolia: {
    apiKey: 'dba1ba1153052cc0f5f78d622135cedf',
    indexName: 'hmg_helpcenter',
    placeholder: 'Pesquisa',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  // Used for publishing and more
  projectName: 'blip-help-center',
  organizationName: 'take',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'concepts/builder/builder-visao-geral-variaveis', label: 'Artigos'},
    {doc: 'api', label: 'Áreas do BLiP'},
    {page: 'help', label: 'Recursos'},
    {page: 'help', label: 'Cursos'},
    {page: 'help', label: 'Comunidade'},
    {page: 'help', label: 'Políticas'},
    {languages: true},
    {search: true}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/logo.svg',
  footerIcon: 'img/footer_logo.png',
  favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#2CC3D5',
    secondaryColor: '#3D4554',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} BLiP Powered by Take`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'vs2015',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  //onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/takenet/helpcenter',
  gaTrackingId: 'UA-79317370-14',
};

module.exports = siteConfig;
