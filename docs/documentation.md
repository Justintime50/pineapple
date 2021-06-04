# Pineapple CSS Docs

## Banners

* **Banner:** Pineapple's premier feature! Include the `.pa-banner` class on a container to create a fully scalable landing page image and appropriate text-scaling. (see below)
* **Banner Darken:** The `.pa-banner-darken` class will darken your banner image to allow text overlayed over the banner to be seen easier.
* **Banner Heading:** The `.pa-banner-heading` scales a header title in the banner based on screen size.
* **Banner Sub-Heading:** The `.pa-banner-sub-heading` scales a sub-heading title in the banner based on screen size.
* **Banner Text:** The `.pa-banner-text` scales normal paragraph text in the banner based on screen size.
* **Banner Logo:** The `.pa-banner-logo` scales and centers a logo image over the banner based on screen size.
* **Banner Button:** The `.pa-btn-banner` creates a transparent outlined button perfect for us on a banner image (great pairing with `.pa-banner-darken`).

### Full Example

```html
<div class="pa-banner pa-banner-darken">
    <div class="pa-banner-text">
        <img src="banner.jpg" class="pa-banner-logo" alt="logo">
        <h1 class="pa-banner-heading">My Heading Here</h1>
        <p class="pa-banner-sub-heading">My Sub-Heading Here</p>
        <a href="#section1" class="pa-btn-banner">Button on a Banner</a>
    </div>
</div>
```

## Misc

* **Buttons:** The `.pa-btn`, `.pa-btn-blue`, and `.pa-btn-banner` classes can be used to create simple buttons. Style to your needs.
* **Gray Background:** The `.pa-bg-gray` class applies a gray background to the container.
* **Icons:** The `.pa-icon` class applies an icon border to content inside a container.
* **Font Sizes:** The `.pa-font-*` class applies different dynamic font sizes to your element. (Available sizes: xs, sm, md, lg, xl. Replace the * with your size.)
* **Cards:** The `.pa-card` class applies a card border/pop-up to the contents of the container.
* **Slanted Section:** Wrap a `.pa-slanted-content` `<div>` in a `.pa-slanted-container` `<div>` to create a slanted break in the page. Style as needed.
* **Animate Bottom:** The `.pa-animate-bottom` class will give any object a sliding in effect from the bottom of the screen _upon page load_. This is a simple way to add some visual effects to your page. Best if used on the `<body>` tag.
* **Slideanim Effect:** The `.pa-slideanim` class will give any object a sliding in effect _once the element comes into the viewport_. This is a simple way to add some visual effects to your page. Best if used on starting on items that appear below the initial viewport of the page (eg: below the top element). This is a simple way to add some visual effects to your page.
* **Full Width/Height Youtube Embedding:** If you need a Youtube video to scale to the size of it's container, wrap its `<iframe>` with the `.pa-video-container` class.

## Loader

* **Loader:** The `.pa-loader` and `.pa-loader-div` are used to create a loading spiral image upon opening your page. This is great if you have external content that needs to load and you want something visual to display while this happens. You can do this by using the following just after your `<body>` tag: `<div id="pa-loader"></div>` and `<div id="pa-loader-div">`. (Place the end `</div>` tag at the bottom of your page content you want hidden while the loading spinner is on screen.
* **Required:** You must also put `onload="pineapple.pageLoader()"` in your page's body tag. 
* **Optional:** In connection with this, if you'd like your page to scroll up from the bottom after the loader has finished, you can use the `.pa-animate-bottom` class on the `.pa-loader-div` tag.

# Pineapple CSS/Javascript Docs

* **Fading Navbar:** Add `.pa-nav-fade` to the nav tag to have the navbar fade in after scrolling past a full screen banner image. You can define your own value for when it should fade by adding a simple script to your page.

```html
<script>pineapple.navFadeValue = 1000;</script>
```

* You'll also need to configure colors for your faded and non-faded navbar so it's asthetically pleasing. An example of classes you'd want to adjust:

```css
.pa-nav-fade {
    color: #000;
}

.pa-nav-fade.opaque {
    background-color: blue;
}

.pa-nav-fade a {
    color: #fff;
}

.pa-nav-fade .dropdown-menu a {
    color: #000;
}

.pa-nav-fade a.opaque {
    color: red;
}
```

* **Full Screen Bootstrap Carousel:** 

You'll need to define the following somewhere in your css for this to work:

```css
html,
body {
    height: 100%;
}
```

An example of how to impliment the fullscreen carousel:

```html
<div id="bannerCarousel" class="carousel slide" data-ride="carousel" data-interval="3000" data-pause="false"> 
  <div class="carousel-inner" role="listbox"> 
    <div class="carousel-item active"> 
      <h1 class="pa-banner-text">IMAGE 1</h1> 
    </div> 
    <div class="carousel-item"> 
      <h1 class="pa-banner-text">IMAGE 2</h1> 
    </div> 
    <div class="carousel-item"> 
      <h1 class="pa-banner-text">IMAGE 3</h1> 
    </div>
  </div>
</div>
```

Add your image reference in a custom `css` class as follows. The number in the parentheses represents the slide number in order of appearance. Add as many as you desire:

```css
.carousel-item:nth-child(1) { background-image: url("https://mdbootstrap.com/images/regular/nature/img%20(54).jpg");}
.carousel-item:nth-child(2) { background-image: url("https://mdbootstrap.com/images/regular/nature/img%20(55).jpg");}
.carousel-item:nth-child(3) { background-image: url("https://mdbootstrap.com/images/regular/nature/img%20(56).jpg");}
...
```

# Pineapple Javascript Docs

* **Smooth Scroller:** Add `data-offset="pixels"` element to your `<body>` tag to explicitly set an offset, the default will be the height of the `.navbar` class. Whenever a nav link (with the class "nav-link") or a button is selected on the same page as its anchor, the page will smoothly scroll to that portion of the page and highlight the nav link if possible. Additionally you can add the `.pa-scroll` class to any item with an anchor to have it scroll to that spot on the page.
* **Countdown Timer:** Built into Pineapple is the ability to create a customized countdown timer. Simply add this javascript to the end of your page and call it with the unique ID. 

```html
<script>pineapple.countdown.init("2018-12-15", "timer", "Timer has expired");</script>
```

The first section is the time for the countdown (YYYY-MM-DD), the next section is the timer id which can be called wherever on your page. The last section is the message to be displayed once your time has expired.
* **Page Loader:** Define a variable for the amount of time the page loader will show. Default value is 1500 (1.5 seconds).

```html
<script>pineapple.pageLoader(1500);</script>
```
