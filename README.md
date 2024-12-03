# Turbo slider

A lightweight package to dispay items in a list as a slider. Turbo slider leverages native scrolling with modern CSS-features as '[scroll-snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_scroll_snap)', creating a natural feel on any touch enabled device.

## Usage

Install the package from npm:

```javascript
npm i turbo-slider
```

Import the package in the javascript-file where you want to initialize the Turbo slider:

```javascript
import TurboSlider from 'turbo-slider';
```

You can initialize it without any provided options:
```javascript
const turboSlider = new TurboSlider();

turboSlider.init();
```

Or if you prefer, initialize it with custom options:

```javascript
const turboSlider = new TurboSlider({
  customSelector: ".custom-selector",
  disableScrollbar: true,
  itemWidth: "250px",
  scrollbarMargin: "100px",
});

turboSlider.init();
```

Index.html:

```html
<div id="turbo-slider" class="turbo-slider">
  <div class="button-group">
    <button class="t-slide-prev" aria-label="Previous" data-ts-prev></button>
    <button class="t-slide-next" aria-label="Next" data-ts-next></button>
  </div>
  <ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
    <li>Item 6</li>
    <li>Item 7</li>
    <li>Item 8</li>
    <li>Item 9</li>
  </ol>
</div>
```
## Multiple sliders
On occasions the amount of sliders is rendered programmatically, you can simply render a new instance of the slider inside a loop:


```javascript
const sliders = document.querySelectorAll(".turbo-slider");

sliders.forEach((slider => {
  const turboSlider = new TurboSlider({
    customSelector: `#${slider.id}`,
    disableScrollbar: false,
    scrollbarMargin: "20px",
    itemWidth: "250px"
  });

  turboSlider.init();
}));
```
## Options

```javascript
const turboSlider = new TurboSlider({
  // Initialize slider on custom element (default: '#turbo-slider')
  customSelector: string,

  // Disable the native scrollbar (default: false)
  disableScrollbar: boolean,

  // Set the width of the items in the slider. It can be a relative or absolute value (default: auto)
  itemWidth: string,

  // Set the distance between scrollbar and slider items (default: 2rem)
  scrollbarMargin: string 
});
```

