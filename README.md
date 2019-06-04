# Pineapple - CSS & JS Library

![Pineapple Logo](/pineapple.png)

Pineapple is a web development library including frequently used CSS and Javascript functions. Built over Bootstrap, Pineapple allows websites to be easily and quickly built.
 
Pineapple was started as a way to fill in the gaps that Bootstrap did not fill. Since Bootstrap 4 and other frameworks have been updated, many of the original issues Pineapple fixed have found their way into these other frameworks and therefore, the Pineapple equivelent has been removed. What remains are functions or classes I often continue to use in my projects today in some form or another.

<br>

# Documentation
Here you'll find easy installation guides, features of Pineapple, and information about our themes and more.

### Installation

Pineapple must be downloaded and placed in your project directory. Something like this:
```
<link rel="stylesheet" href="pineapple/1.3/css/pineapple.min.css">
```

## Themes

We've created some awesome themes to use as templates when creating your site. Each theme runs on Pineapple and Bootstrap 4.0. Input your content into our themes to quickly build a site, customizable as needed.

- Pineapple themes require Bootstrap 4.0 or newer.

### Waterfall Theme

- Simple website, single page.
- "Waterfall" effect created by the page sliding into the users view.

## SASS/CSS

- Our themes use SASS to quickly manipulate CSS. Please visit http://sass-lang.com for more info on using SASS.
- If you do not plan to use SASS, simply replace the SASS variables with your values (EX: change '$primary-color' to 'red')
**Files are used as follows:**
- Code is entered into theme.scss file.
- Code is then compiled from SASS to CSS with a 3rd party program such as [Koala]http://koala-app.com.
- Reference your .css file in your project and your SASS code will be loaded as a css file (the reason for compiling the file.)

# Usage

## CSS

### Banners

- **Banner:** Pineapple's premier feature! Include the `.pa-banner` class to a container to create a fully scalable landing page image and appropriate text-scaling.
- **Banner Darken:** The `.pa-banner-darken` class will darken your banner image to allow text overlayed over the banner to be seen easier.
- **Banner Heading:** The `.pa-banner-heading` scales a header title in the banner nicely.
- **Banner Sub-Heading:** The `.pa-banner-sub-heading` scales a sub-heading title in the banner nicely.
- **Banner Text:** The `.pa-banner-text` scales normal paragraph text well in the banner.
- **Banner Logo:** The `.pa-banner-logo` scales and centers a logo image over the banner background well on desktop and mobile.

### Misc

- **Gray Background:** The `.pa-bg-gray` class applies a gray background to the container.
- **Icons:** The `.pa-icon` class applies an icon border to content inside a container.
- **Font Sizes:** The `.pa-font-*` class applies different dynamic font sizes to your element. (Available sizes: xs, sm, md, lg, xl. Replace the * with your size.)
- **Cards:** The `.pa-card` class applies a card border/pop-up to the contents of the container.
- **Slanted Section:** Wrap a `.pa-slanted-content` div in a `.pa-slanted-container` div to create a slanted break in the page.
- **Animate Bottom:** The `.pa-animate-bottom` class will give any object a sliding in effect from the bottom of the screen. This is a simple way to add some visual effects to your page. Best if used on the `<body>` tag.
- **Full Width/Height Youtube Embeding:** If you need a Youtube video to scale to the size of it's container completely, wrap its `<iframe>` with the `.pa-videoWrapper` class.
- **Bootstrap 3.0 "Well" Class:** We loved the BS 3.0 "well" class so much we brought it back in Pineapple. Simply use the `.pa-well` class on a container to create the opposite of a Pineapple card.

### Loader

- **Slideanim Effect:** The `.pa-slideanim` class will give any object a sliding in effect once the screen has scrolled down over its location. This is a simple way to add some visual effects to your page.

- **Loader:** The `.pa-loader` and `.pa-loaderDiv` are used to create a loading spiral image upon opening your page. This is great if you have external content that needs to load and you want something graphical to display while this happens. You can do this by using the following just after your `<body>` tag: `<div id="pa-loader"></div>` and `<div id="pa-loaderDiv">`. (Place the end `</div>` tag at the bottom of your page content you want hidden while the loading spinner is on screen.

- **Required:** You must also put `onload="pineapple.pageLoader()"` in your page body tag. Optional function: In connection with this, if you'd like your page to scroll up from the bottom after the loader has finished, you can use the `.pa-animate-bottom` class on the `.pa-loaderDiv` tag.

## CSS/Javascript</h4>
        
- **Fading Navbar:** Add `.pa-nav-fade` to the nav tag to have the navbar fade in after scrolling past a full screen banner image. You can define your own value for when it should fade by adding a simple script to your page. Ex: 
```
<script>pineapple.navFadeValue = 1000;</script>
```

- **Full Screen BS Carousel:** 
```
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

Add your image reference in a custom class as follows. The number in the parentheses represents the slide number in order of appearance. Add as many as you desire 
```
.carousel-item:nth-child(1) { background-image: url("https://mdbootstrap.com/images/regular/nature/img%20(54).jpg");}
```

## Javascript</h3>

- **Smooth Scroller:** Add `data-offset="pixels"` element to your `<body>` tag. Whenever a nav link (with the class "nav-link") or a button is selected on the same page as its anchor, the page will smoothly scroll to that portion of the page and highlight the nav link if possible. Additionally you can add the `.pa-scroll` class to any item with an anchor to have it scroll to that spot on the page.
- **Countdown Timer:** Built into Pineapple is the ability to create a customized countdown timer. Simply add this javascript to the end of your page and call it with the unique ID. `<script>pineapple.countdown.init("2018-12-15","timer","Timer has expired");</script>`. The first section is the time for the countdown (year, month, day), the next section is the timer id which can be called wherever on your page. The last section is the message to be displayed once your time has expired.
- **Page Loader:** Define a variable for the amount of time the page loader will show. Default value is 1500 (1.5 seconds). Usage: <!-- TODO: ADD SYNTAX -->
- **AJAX:** Use Ajax to dynamically change the content of a webpage. Usage: <!-- TODO: ADD SYNTAX -->

<br>

# Contributors
Feel free to use this code on any of your projects!

Code licensed under [Creative Commons by 3.0](creativecommons.org/licenses/by/3.0/).

- [Justin Hammond](https://github.com/Justintime50) (Project Manager, CSS)
- [Jeffrey Woodward](https://github.com/Jefnull) (Javascript)
- Weston Barnes (CSS)