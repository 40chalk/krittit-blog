// Turns series functionality on. false = off true = one
export const seriesOn = true

// Turns contact form on. false = off true = on
export const contactFormOn = false

// The text that shows up on home page
export const aboutInfo =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'

// The text that shows up on contact page
export const contactStatement =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad'

// SEO meta tag data for each of the pages. What you write here will show up as the description in google.
export const metaData = {
  title: 'KrittIt Blog',
  homePage:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad.',
  allPostsPage:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  seriesPage:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
  contactPage:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad',
}

// Filters for posts. These should match the filterKeys in your post's md files
export const filters = ['Lorem', 'ipsum', 'dolor', 'amet']

// Social media links for footer leave and empty string to exclude a specific one.
export const social = {
  bitbucket: '',
  facebook: 'https://example.com',
  github: '',
  gitlab: '',
  instagram: 'https://example.com',
  linkedin: '',
  patreon: '',
  stackoverflow: '',
  twitter: 'https://example.com',
  youtube: '',
}

// Logo for site. You can choose between an image or text. If you choose text the alt text is what will render
export const logo = {
  imagePath: '/images/logo/logo.png',
  alt: 'Example',
  imageOrText: 'text',
}

// Paths for each page don't change!
export const paths = {
  postDir: '/blog-posts', // directory in public folder where posts and their images are placed
  home: '/',
  allPost: '/posts',
  allSeries: '/series',
  contact: '/contact',
}
