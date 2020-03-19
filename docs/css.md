# Pineapple Library CSS Docs

### Banners
- **Banner:** Pineapple's premier feature! Include the `.pa-banner` class on a container to create a fully scalable landing page image and appropriate text-scaling. (see below)
- **Banner Darken:** The `.pa-banner-darken` class will darken your banner image to allow text overlayed over the banner to be seen easier.
- **Banner Heading:** The `.pa-banner-heading` scales a header title in the banner based on screen size.
- **Banner Sub-Heading:** The `.pa-banner-sub-heading` scales a sub-heading title in the banner based on screen size.
- **Banner Text:** The `.pa-banner-text` scales normal paragraph text in the banner based on screen size.
- **Banner Logo:** The `.pa-banner-logo` scales and centers a logo image over the banner based on screen size.

### Misc
- **Gray Background:** The `.pa-bg-gray` class applies a gray background to the container.
- **Icons:** The `.pa-icon` class applies an icon border to content inside a container.
- **Font Sizes:** The `.pa-font-*` class applies different dynamic font sizes to your element. (Available sizes: xs, sm, md, lg, xl. Replace the * with your size.)
- **Cards:** The `.pa-card` class applies a card border/pop-up to the contents of the container.
- **Slanted Section:** Wrap a `.pa-slanted-content` `<div>` in a `.pa-slanted-container` `<div>` to create a slanted break in the page. Style as needed.
- **Animate Bottom:** The `.pa-animate-bottom` class will give any object a sliding in effect from the bottom of the screen _upon page load_. This is a simple way to add some visual effects to your page. Best if used on the `<body>` tag.
- **Slideanim Effect:** The `.pa-slideanim` class will give any object a sliding in effect _once the viewport has scrolled down over its location_. This is a simple way to add some visual effects to your page.
- **Full Width/Height Youtube Embeding:** If you need a Youtube video to scale to the size of it's container, wrap its `<iframe>` with the `.pa-video-container` class.

### Loader
- **Loader:** The `.pa-loader` and `.pa-loaderDiv` are used to create a loading spiral image upon opening your page. This is great if you have external content that needs to load and you want something graphical to display while this happens. You can do this by using the following just after your `<body>` tag: `<div id="pa-loader"></div>` and `<div id="pa-loaderDiv">`. (Place the end `</div>` tag at the bottom of your page content you want hidden while the loading spinner is on screen.
- **Required:** You must also put `onload="pineapple.pageLoader()"` in your page body tag. 
- **Optional:** In connection with this, if you'd like your page to scroll up from the bottom after the loader has finished, you can use the `.pa-animate-bottom` class on the `.pa-loaderDiv` tag.

## CSS/Javascript</h4>
- **Fading Navbar:** Add `.pa-nav-fade` to the nav tag to have the navbar fade in after scrolling past a full screen banner image. You can define your own value for when it should fade by adding a simple script to your page. Ex: 

```html
<script>pineapple.navFadeValue = 1000;</script>
```

  - You'll also need to configure colors for your faded and non-faded navbar so it's asthetically pleasing. An example of classes you'd want to adjust:

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

- **Full Screen BS Carousel:** 

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

Add your image reference in a custom `css` class as follows. The number in the parentheses represents the slide number in order of appearance. Add as many as you desire :

```css
.carousel-item:nth-child(1) { background-image: url("https://mdbootstrap.com/images/regular/nature/img%20(54).jpg");}
```
