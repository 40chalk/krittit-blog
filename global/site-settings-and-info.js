// Turns series functionality on. false = off true = one
export const seriesOn = true

// Turns contact form on. false = off true = on
export const contactFormOn = false

// The text that shows up on home page
export const aboutInfo =
  'I am a multi lingual dev as I imagine most devs are these day. I work with primarily PHP and JavaScript along with most of their big frameworks and libraries. I also dabble in Java and Python as well. Making the occasional MineCraft mod or mod-pack. This is a collection of project showcases, thoughts related to dev, and problems that I have encountered where I thought the solutions might be helpful to others.'

// The text that shows up on contact page
export const contactStatement =
  "Want some help with a job? Have a question? Feel free to contact me through the form bellow and I'll get back to you promptly."

// SEO meta tag data for each of the pages. What you write here will show up as the description in google.
export const metaData = {
  title: 'KrittIt Blog',
  homePage:
    'KrittIt Blog is a collection of project showcases, thoughts related to dev, and problems that I have encountered in regards to PHP, JavaScript, React, NextJS, Laravel, WordPress, CSS, and Java.',
  allPostsPage:
    'Post related to PHP, JavaScript, React, NextJS, Laravel, WordPress, CSS, and Java.',
  seriesPage:
    'Collections of posts related to PHP, JavaScript, React, NextJS, Laravel, WordPress, CSS, and Java.',
  contactPage:
    'Contact me with a question or hire me for a job related to PHP, JavaScript, React, NextJS, Laravel, WordPress, CSS, and Java.',
}

// Filters for posts. These should match the filterKeys in your post's md files
export const filters = [
  'JavaScript',
  'NextJS',
  'React',
  'Angular',
  'NodeJs',
  'PHP',
  'Laravel',
  'WordPress',
]

// Social media links for footer leave and empty string to exclude a specific one.
export const social = {
  bitbucket: '',
  facebook: 'https://bitbucket.com',
  github: '',
  gitlab: '',
  instagram: 'https://bitbucket.com',
  linkedin: '',
  patreon: '',
  stackoverflow: '',
  twitter: 'https://bitbucket.com',
  youtube: '',
}

// Logo for site. You can choose between an image or text. If you choose text the alt text is what will render
export const logo = {
  imagePath: '/images/logo/logo.png',
  alt: '< KrittIT Blog />',
  imageOrText: 'text',
}

// Paths for each page
export const paths = {
  postDir: '/blog-posts', // directory in public folder where posts and their images are placed
  home: '/',
  allPost: '/posts',
  allSeries: '/series',
  contact: '/contact',
}
