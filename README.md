# Altmeta.org pixel test site

This is the source code for pixel.altmeta.org.  You can fork this repository to create your own pixel testing website.

To fork, login to your github account and then click the (fork) button in the upper right corner of this page to get your own copy.

# Setup instructions for forks

1. Set up a CNAME record from your desired testing domain (e.g. pixeltest.example.com) to {github-alias}.github.io
2. Edit two pieces of code in your fork.  You can do this in-browser with the pencil icon on each file.
    1. Edit the [CNAME file](static/CNAME) to contain your selected testing domain (e.g. pixeltest.example.com)
    2. Edit the [Pixel ID](gatsby-config.js#L40) to contain your pixel ID (you can do this later if you don't already have one)
3. Go to the settings for this repository (last item on tab bar with a gear icon).  In the "Pages" settings:
    1. Set branch to gh-pages
    2. Set custom domain to your selected testing domain (e.g. pixeltest.example.com)
    3. Ideally, tick enforce HTTPS (It takes about an hour after setting up DNS for this to become available)

Now if you go to your selected testing domain it should just work!  Please let me know if there's any missing steps :)
