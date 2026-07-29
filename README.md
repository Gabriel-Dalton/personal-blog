# personal-blog

A static blog from 2025 that never shipped. Superseded. Writing now lives on https://gabrieldalton.com.

Five posts sit in `posts/` as finished HTML pages. `assets/js/posts.js` is the index: slug, title, date, excerpt and tags for each post, exposed on `window.POSTS`, with the tag list built from it. `home.html` reads that index to render the post list and a row of tag chips, and it keeps the active tag in a `?tag=` query parameter so a filtered view can be linked. Publishing a post meant writing the page and adding an entry to the array by hand.

There is no `index.html`, no generator and no feed. The posts are dated November and December 2024, and the design got no further than this.

## Run it

Open `home.html` in a browser, or serve the folder and visit `/home.html`.
