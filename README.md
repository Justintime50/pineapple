<div align="center">

# Pineapple 🍍

CSS and Javascript web development library built on top of Bootstrap.

[![Build Status](https://github.com/Justintime50/pineapple/workflows/build/badge.svg)](https://github.com/Justintime50/pineapple/actions)
[![NPM](https://img.shields.io/npm/v/pineapple-library)](https://www.npmjs.com/package/pineapple-library)
[![Licence](https://img.shields.io/github/license/justintime50/pineapple)](LICENSE)

</div>

## Background

Pineapple was created as a way to fill in the gaps that Bootstrap did not fill years ago. Since Bootstrap 4 and other frameworks have been updated, many of the original issues Pineapple fixed have found their way into these other frameworks and therefore, the Pineapple equivelent has been removed. This library is now quite dated.

## Install

Pineapple includes both SCSS and Javascript files. The SCSS will need to be compiled into CSS as raw CSS is not included in this repo. Choose between implementing the `styles`, `utilities`, or the entire `Pineapple library`, all three options are included in the root of the `css` folder.

**NOTE:** Pineapple Javascript functions require jQuery. With the release of Bootstrap 5 (which does not include or require jQuery), you will either need to remain on Bootstrap 4 or import jQuery separately. Pineapple is not compatible with the `slim` version of jQuery.

## Usage

Once the CSS has been compiled, include the CSS and Javascript in your project:

```html
<link rel="stylesheet" href="path/to/pineapple.css">
<script src="path/to/pineapple.js"></script>
```

## Documentation

See the accompanying [CSS Docs](/docs/css.md) or [Javascript Docs](/docs/js.md) for more information.

## Development

```bash
# Lint CSS
npm run lint-css

# Lint JS
npm run lint-js

# Compile CSS from SCSS
npm run compile
```
