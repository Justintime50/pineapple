# Pineapple Docs

CSS and Javascript web development library that supplements Bootstrap.

## Modules

- [General Notes](#general-notes)
- [Animations](#animations)
- [Backgrounds](#backgrounds)
- [Banner](#banner)
- [Buttons](#buttons)
- [Components](#components)
- [Fonts](#fonts)
- [Hacks](#hacks)
- [Structure](#structure)

## General Notes

For various fullscreen functionality of the Pineapple Library (Banner, Fullscren YouTube videos, etc), you will need to define the following somewhere in your css before it will take effect:

```css
html,
body {
  height: 100%;
}
```

## Animations

### Ajax

Ajax allows you to replace the contents of an element with the contents of another HTML file without needing to reload the page. This can be accomplished by using the Javascript `onclick` function on the element you want to trigger the Ajax call. You then pass the path or URL to the content you'd like to swap in and the ID of the element where you want it to end up.

```html
<div id="pa-ajax-content">
  <button class="btn" onclick="pineapple.ajax('ajax.html', 'pa-ajax-content')">Press to make an Ajax call</button>
</div>
```

### Animate Bottom

The `.pa-animate-bottom` class will give any object a sliding-in effect from the bottom of the screen _upon page load_. This is a simple way to add some visual effects to your page. Best if used on the `<body>` tag.

### Countdown Timer

Create a customized countdown timer that updates each second and displays a message once the countdown is reached.

```html
<div id="timer"></div>

<script>
  pineapple.countdown.init(
    '2018-12-15', // date to countdown to
    'timer', // timer ID
    'Timer has expired' // message displayed once countdown has expired
  );
</script>
```

### Fading Navbar

The `.pa-nav-fade` allows the navbar to fade in after scrolling past a certain pixel threshold. By default, if there is a `pa-banner` class on your page, the height of that element will be used. You can define your own value for when it should fade if desired:

```html
<script>
  pineapple.navFadeThreshold = 1000;
</script>
```

- You'll also want to configure colors for your faded and non-faded navbar. An example of classes you'd want to adjust:

```css
.pa-nav-fade {
  /* Use a transparent nav background for full-screen banner images */
  background-color: transparent;
  color: #000;
}

.pa-nav-fade.opaque {
  /* Fill in the nav background once we've scrolled past the full-screen banner image */
  background-color: blue;
}

.pa-nav-fade a {
  color: #fff;
}

.pa-nav-fade .dropdown-menu a {
  color: #000;
}

.pa-nav-fade a.opaque {
  color: #fff;
}
```

### Page Loader

The `.pa-loader` and `.pa-loader-div` are used to create a loading spiral image upon opening your page. This is great if you have external content that needs to load and you want something visual to display while this happens. You can do this by using the following just after your `<body>` tag: `<div id="pa-loader"></div>` and `<div id="pa-loader-div">`. (Place the end `</div>` tag at the bottom of your page content you want hidden while the loading spinner is on screen.

```html
<body onload="pineapple.pageLoader()">
  <div id="pa-loader"></div>
  <div id="pa-loader-div">
    <!-- page content goes here -->
  </div>
  <script>
    pineapple.pageLoader(1500); // the number of milliseconds to pause on the page loader, default is 1500
  </script>
</body>
```

### Slideanim Effect

The `.pa-slideanim` class will give any element a sliding-in effect _once the element comes into the viewport_. This is a simple way to add some visual effects to your page. Best if used on elements that appear below the initial viewport of the page (eg: below the top items that load when a user first visits the page). This is a simple way to add some visual effects to your page.

### Smooth Scrolling

Whenever a nav link (with a class of "nav-link" or "navbar-brand"), link, or link with the role of a button is selected on the same page as its anchor, the page will scroll smoothly to that portion of the page (this feature is enabled by default). Additionally, you can add the `.pa-scroll` class to any item with an anchor to have it scroll to that spot on the page. If you'd like to disable this feature for certain elements, you can simpley add the `.pa-noscroll` class.

Alternatively, you can disable Smooth Scrolling globally:

```html
<script>
  pineapple.disableSmoothScrolling = true;
</script>
```

## Backgrounds

Create stylized backgrounds.

### Slanted Sections

Wrap a `.pa-slanted-content` `<div>` in a `.pa-slanted-container` `<div>` to create a slanted break in the page. Style as needed.

```html
<div class="pa-slanted-container">
  <div class="pa-slanted-content">
    <p>Slanted Section</p>
  </div>
</div>
```

### Gray Background

The `.pa-bg-gray` class applies a gray background to the container.

## Banner

Pineapple's premier feature! Create a large banner image, perfect for showcasing a product, showing off your photography, or welcoming visitors with a picture.

### Banner Container

The `.pa-banner` class will create a fully scalable "landing page" style image and appropriate text-scaling. (see below for details on text scaling)

### Banner Darken

The `.pa-banner-darken` class will darken your banner image to allow text overlayed over the banner to be seen easier.

### Banner Heading

The `.pa-banner-heading` scales a header title in the banner based on screen size.

### Banner Sub-Heading

The `.pa-banner-sub-heading` scales a sub-heading title in the banner based on screen size.

### Banner Text

The `.pa-banner-text` scales normal paragraph text in the banner based on screen size.

### Banner Logo

The `.pa-banner-logo` scales and centers a logo image over the banner based on screen size.

### Banner Button

The `.pa-btn-banner` creates a transparent outlined button perfect for use on a banner image (great pairing with `.pa-banner-darken`).

### Example

```html
<div class="pa-banner pa-banner-darken">
  <div class="pa-banner-text">
    <img src="banner.jpg" class="pa-banner-logo" alt="logo" />
    <h1 class="pa-banner-heading">My Heading Here</h1>
    <p class="pa-banner-sub-heading">My Sub-Heading Here</p>
    <a href="#section1" class="pa-btn-banner">Button on a Banner</a>
  </div>
</div>
```

## Buttons

Create stylized buttons.

The `.pa-btn` (white), `.pa-btn-blue`, and `.pa-btn-banner` (transparent) classes can be used to create simple buttons. Style to your needs.

## Components

### Cards

The `.pa-card` class applies a card border/pop-up to the contents of the container.

## Icons

The `.pa-icon` class applies an icon border, padding, and margins to content inside a container.

## Fonts

Create simple, dynamically scaling text.

The `.pa-font-*` class applies different dynamic font sizes to your element. Replace the `*` with your size. Available sizes:

- xs
- sm
- md
- lg
- xl

## Hacks

### Fullscreen YouTube Videos

If you need a YouTube video to scale to the size of it's container, wrap its `<iframe>` with the `.pa-video-container` class.

#### Example

```html
<div
  id="bannerCarousel"
  class="carousel slide pa-carousel-full"
  data-bs-ride="carousel"
  data-bs-interval="3000"
  data-bs-pause="false"
>
  <div class="carousel-inner pa-carousel-inner-full" role="listbox">
    <div class="carousel-item active pa-carousel-item-full pa-active-full">
      <h1 class="pa-banner-text">IMAGE 1</h1>
    </div>
    <div class="carousel-item pa-carousel-item-full">
      <h1 class="pa-banner-text">IMAGE 2</h1>
    </div>
    <div class="carousel-item pa-carousel-item-full">
      <h1 class="pa-banner-text">IMAGE 3</h1>
    </div>
  </div>
</div>
```

Add your image reference in a custom `css` class as follows. The number in the parentheses represents the slide number in order of appearance. Add as many as you desire:

```css
.carousel-item:nth-child(1) {
  background-image: url('https://mdbootstrap.com/images/regular/nature/img%20(54).jpg');
}
.carousel-item:nth-child(2) {
  background-image: url('https://mdbootstrap.com/images/regular/nature/img%20(55).jpg');
}
.carousel-item:nth-child(3) {
  background-image: url('https://mdbootstrap.com/images/regular/nature/img%20(56).jpg');
}
```

## Structure

The following CSS classes are available to quickly structure your website:

```scss
// display mode: none
.display-none

// display mode: block
.inline-block

// 0 padding on all sides
.padding-0

// 0 margins on all sides
.margin-0

// flex container (no centering)
.flex-container

// flex container (centering vertically and horizontally)
.flex-center-container
```
