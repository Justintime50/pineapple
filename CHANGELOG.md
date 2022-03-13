# CHANGELOG

## NEXT RELEASE

- Completely rewrites the entire Javascript library to use Vanilla JS instead of relying on jQuery. This change now makes Pineapple compatible with Bootstrap 5 without pulling jQuery back in as a dependency to your projects
- Ajax calls no longer require standalone JS calls but are instead now inline `onclick` calls to the elements that trigger them. See the updated documentation for details on how to use the update Ajax syntax
- Fixes an error printed to console in the browser due to using the `export` keyword without checking if the library was being used in Node or the browser
- Fixes a few CSS issues related to buttons making them more compatible with Bootstrap's buttons
- Modernized the Waterfall template
- Moves the flexbox CSS from `.pa-banner-text` to `.pa-banner` to encapsulate everything in the banner container and not just text
- Swaps the deprecated `node-sass` for the `sass` dev dependency, recompiles the entire library
- Compatible with Bootrap ^4 || ^5

## v2.3.0 (2021-08-12)

- Re-introduced the Ajax functionality to the library which allows you to make Ajax requests (eg: dynamically replacing content on a page without reloading it)
- Reworked the playground to use a Dockerfile

## v2.2.1 (2021-07-29)

- Fixed a bug where `pa-banner-darken` was pinned to the top of the page regardless of where the actual `pa-banner` and content were. This now also allows for multiple uses of `pa-banner-darken` on the same page

## v2.2.0 (2021-07-28)

- Exports the pineapple module so that this library can be used with webpack
- Adds a persistent header comment to CSS and JS files that displays the library name, version, and link (closes #9)

## v2.1.0 (2021-07-02)

- Complete overhaul of documentation
  - Items are now grouped by category
  - Better use of markdown
  - Additional code examples
  - Clarified information
- Removes not-implemented `grid` scss
- Recompiled SCSS after moving classes around to match the new categories they fall into (matches docs), cleaned up comments and other small internal naming changes (`elements` are now called `components`, their usage remains the same)

## v2.0.3 (2021-06-30)

- Reduces background black opacity from 50% to 35% for the `pa-banner-darken` class so that images can show through better (easier viewing of darker images)
- Updates documentation surroudning `Fullscreen Carousels` as there were missing classes in the example (closes #7)
- Bumps dev dependencies

## v2.0.2 (2021-06-03)

- Corrects typo in `.pa-slideanim` logic to fix the sliding animation

## v2.0.1 (2021-06-03)

- Fixed an unintentional bug where `Smooth Scroller` didn't work due to a bad fallback value
- Added installation and releasing instructions to the README

## v2.0.0 (2021-06-03)

- Pineapple CSS is now completely `SCSS` and gets compiled upon release to a beautified and minified version along with source maps
- Pineapple JS is now compile to a beautified and minified version along with source maps
- Introduced linters and linted the entire project fixing hundreds of errors and best practices
- Cut out a lot of fluff in the JS of the library
- Added much needed inline comments and additional documentation on how to use the library and what each piece does
- Cleaned up themes, removed unneeded assets, and now use `SCSS` for theme CSS, compiled just like the library
- Unified color palette by using SCSS variables and less variations of each color
- Fixed various bugs related to Javascript functions and CSS including:
  - Years long bug where smooth-scrolling would scroll to the right location but then jump back to the anchor point (without the offset)
  - Smooth scrolling buttons now actually scroll instead of jumping
  - Pineapple no longer sets the `.navbar` background-color to initial
  - Dozens of other small bugs throughout the JS and CSS
- Changed `.pa-loaderDiv` to `.pa-loader-div` to match the style of dash notation for all classes
- Compatible with Bootstrap ^4

## v1.0.0 (2020)

- Stable release

## v0.1.0 (2017)

- Initial release, compatible with Bootstrap ^3
