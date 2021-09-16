<div align="center">

# Pineapple

CSS and Javascript web development library built on top of Bootstrap.

[![Build Status](https://github.com/Justintime50/pineapple/workflows/build/badge.svg)](https://github.com/Justintime50/pineapple/actions)
[![NPM](https://img.shields.io/npm/v/pineapple-library)](https://www.npmjs.com/package/pineapple-library)
[![Licence](https://img.shields.io/github/license/justintime50/pineapple)](LICENSE)

<img src="https://raw.githubusercontent.com/justintime50/assets/main/src/pineapple/showcase.png" alt="Showcase">

</div>

Pineapple came about as a way to help me quickly build "brochure-style" websites some years ago. I found I was copying and pasting a lot of custom CSS around my projects to extend Bootstrap's library and decided to build my own. Over the years as Bootstrap evolved, certain Pineapple functions were removed in favor of the better battle-tested Bootstrap equivalent. Pineapple still serves as a nice addition to any Bootstrap project.

**Notable Features:**

* Full-screen banners, YouTube videos, and Bootstrap carousels with incredible customization for overlaid text, images, and buttons
* Beautiful sliding animations (full page and individual components)
* Page loader animation
* Countdown timer with custom messaging
* Fading and appearing navbar
* Icons, cards, and slanted sections
* Dynamic screen-sized fonts, buttons, and more

## Install

Pineapple has been compiled into CSS from SCSS and JS. You will find either the beautified or minified equivelant of each along with source maps.

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/pineapple-library@2.3.0/pineapple/dist/css/pineapple.min.css">
<script src="https://cdn.jsdelivr.net/npm/pineapple-library@2.3.0/pineapple/dist/js/pineapple.min.js"></script>
```

### NPM

```bash
npm install pineapple-library
```

**Webpack**

**NOTE:** Requires Pineapple v2.2+

Once installed via NPM, include something similar to the following in your webpack environment and compile your project:

```javascript
window.pineapple = require('pineapple-library/pineapple/dist/js/pineapple');
```

### Manual Download

1. Clone the repo
1. Manually import the Pineapple assets to your project

```bash
git clone https://github.com/justintime50/pineapple.git
```

The Pineapple CSS has been compiled into three separate bundles: 
* `pineapple` includes everything
* `pineapple-styles` includes everything but the `grid` and `animations` CSS and can be used without the accompanying JS
* `pineapple-utilities` includes the `grid` and `animations` CSS which accompanies the JS

**NOTE:** Pineapple Javascript functions require jQuery. With the release of Bootstrap 5 (which does not include or require jQuery), you will either need to remain on Bootstrap 4 or import jQuery separately. Pineapple is not compatible with the `slim` version of jQuery.

## Documentation

See the accompanying [Documentation](/docs/README.md) for more information.

## Development

```bash
# Lint CSS
npm run lint-css

# Lint JS
npm run lint-js

# Compile CSS from SCSS and JS assets
npm run compile
```

## Releasing

1. Bump version in `package.json`
1. Bump version in `CHANGELOG.md`
1. Bump version in `scss` and `js` header comments
1. Bump version in install instruction links in `README.md`
1. Compile assets with `npm run compile`
1. Cut a new Git tag which will automatically release to NPM
