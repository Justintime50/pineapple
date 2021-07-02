# CHANGELOG

## v2.1.0 (2021-07-02)

* Complete overhaul of documentation
  * Items are now grouped by category
  * Better use of markdown
  * Additional code examples
  * Clarified information
* Removes not-implemented `grid` scss
* Recompiled SCSS after moving classes around to match the new categories they fall into (matches docs), cleaned up comments and other small internal naming changes (`elements` are now called `components`, their usage remains the same)

## v2.0.3 (2021-06-30)

* Reduces background black opacity from 50% to 35% for the `pa-banner-darken` class so that images can show through better (easier viewing of darker images)
* Updates documentation surroudning `Fullscreen Carousels` as there were missing classes in the example (closes #7)
* Bumps dev dependencies

## v2.0.2 (2021-06-03)

* Corrects typo in `.pa-slideanim` logic to fix the sliding animation

## v2.0.1 (2021-06-03)

* Fixed an unintentional bug where `Smooth Scroller` didn't work due to a bad fallback value
* Added installation and releasing instructions to the README

## v2.0.0 (2021-06-03)

* Pineapple CSS is now completely `SCSS` and gets compiled upon release to a beautified and minified version along with source maps
* Pineapple JS is now compile to a beautified and minified version along with source maps
* Introduced linters and linted the entire project fixing hundreds of errors and best practices
* Cut out a lot of fluff in the JS of the library
* Added much needed inline comments and additional documentation on how to use the library and what each piece does
* Cleaned up themes, removed unneeded assets, and now use `SCSS` for theme CSS, compiled just like the library
* Unified color palette by using SCSS variables and less variations of each color
* Fixed various bugs related to Javascript functions and CSS including:
    * Years long bug where smooth-scrolling would scroll to the right location but then jump back to the anchor point (without the offset)
    * Smooth scrolling buttons now actually scroll instead of jumping
    * Pineapple no longer sets the `.navbar` background-color to initial
    * Dozens of other small bugs throughout the JS and CSS
* Changed `.pa-loaderDiv` to `.pa-loader-div` to match the style of dash notation for all classes

## v1.0.0 (2020)

* Stable release

## v0.1.0 (2017)

* Initial release, compatible with Bootstrap 3
