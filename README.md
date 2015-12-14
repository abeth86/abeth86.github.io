# abeth86.github.io
My personal page

## How does it work?
All visible content is produced using react, redux handles routing prop passing, less for css, and it all gets bundled up by webpack.  You should be able to visualize the workflow from the file tree and peeking through package.json and the webpack config files.

## But react... why?
I didn't just write a bunch of html markup and toss jquery over it because that isn't how I develop, and it would be rather poor form for me to say I can use these tools and technologies without actually using them as the gateway to my repository store.  Sure, it's a bit overkill to use all these extra tools to lay down a simple static content page, but aren't you supposed to have a bit of fun when you do this?

## Neat workflow!
If you like it, I'll soon be turning it in to a static site starter kit.  This line will be replaced with a link to it.

In the mean time, feel free to clone the repo and hack around on it.
```
npm install
```
Can't go far without the dependencies.
```
npm start
```
This will run webpack-dev-server and you'll be able to view content on localhost:8080
```
npm run build
```
..and this will bundle/minify the code in to the dist folder so you can use it in the real world.
