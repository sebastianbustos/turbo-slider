# Turbo slider

A lightweight package to dispay items in a list as a slider. Turbo slider leverages native scrolling with modern CSS-features as 'scroll-snap', creating a natural feel on any touch enabled device.

## Usage

Install package from npm:

```javascript
npm i turbo-slider
```

Index.js:

```javascript
// Import the package
import turboSlider from 'turbo-slider';

// Initialize without options...
new turboSlider();

// ...or initialize with options:
new turboSlider({
  customSelector: ".custom-selector",
  disableScrollbar: true,
  itemWidth: "250px",
  scrollbarMargin: "100px",
});
```

Index.html:

```html
<div class="turbo-slider">
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

## Options

```javascript
new turboSlider({
  // Initialize slider on custom element (default: div[data-js-turboslider])
  customSelector: string,

  // Disable the native scrollbar (default: false)
  disableScrollbar: boolean

  // Set the width of the items in the slider. It can be a relative or absolute value (default: auto)
  itemWidth: string

  // Set the distance between scrollbar and slider items (default: 2rem)
  scrollbarMargin: string 
});
```

