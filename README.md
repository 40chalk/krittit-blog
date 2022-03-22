#KrittIT Blog
An easy to configure and customise, fully featured, NextJS blog using .md files. Host on providers like [Vercel](https://vercel.com/). Then just push your md files to your git repository and your blog will be automatically updated. No database needed.

## Format for .md files

## Normal Blog Post

`---`

title: example

image: example.png

date: 2022-01-12

filterKeys: ex, examp, example

excerpt: This is an example excerpt

`---`

Then the content of your blog post.
## Series Blog Post

`---`

title: example

image: example.png

date: 2022-01-12

filterKeys: ex, examp, example

excerpt: This is an example excerpt

series: Example Series

numberInSeries: 1

`---`

Then the content of your blog post.

## Directory and .md File Name
When adding a blog post you will need to create a directory without spaces in the name. Then place a .md file, with the same name as the directory, in that directory. All photos that have to do with this post will be in this directory as well. Then you will put that directory and all its contents into the public/blog-posts directory. When the site is launched the .md files will be automatically moved to another folder on the server, so they can not be directly downloaded.

If you are using someone like Vercel to host that is watching the git repository for your blog. You just need to upload the individual post directory you created into the public/blog-posts directory. They will see the change and automatically rebuild the site with the new blog post.

### Photos
You can link too photos that are in the same folder as your blog post. They will be automatically optimized for you, so you don't need to worry about photo size.

### Code
KrittIT Blog is set up to properly show code examples as well just wrap your code with ``` above and the same below followed by the abbreviation for your code.

```` ```php ````

Code goes here.

```` ``` ````

### Series Posts
Any posts that you want to be grouped together you can make them a series by defining the series key as shown above. Then defining the numberInSeries key with the number in the series. As long as they are sequential starting from 1 there will be a link at the bottom of the post to take the reader to the next post or the previous post.

### Styling
To change the color scheme go into the styles-page-global directory then the globals.css file and change the color variables in the body to what you prefer. You can also import your preferred font and set that in this file as well.

### Home and Contact Page content, Logo, Social, Filters and metadata
In the global directory go into site-settings-and-info.js file and update everything there to what you want. For the logo and about photo replace the placeholder photos in the public directory.
