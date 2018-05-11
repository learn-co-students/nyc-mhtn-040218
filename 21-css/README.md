CSS!
====

## Goals

* Review CSS (key points)
* Introduce the Chrome DevTools
* Introduction to CSS Grid


## Outline

We'll do a quick review of CSS; specifically going over inline vs block elements. Then we'll get into the meat of this lecture which will be using the Chrome DevTools and learning CSS Grid. I'll also introduce you to some of the resources I always keep nearby when working with CSS.

### CSS?

- What is CSS?
- Why do we use it?
- How do we use it?


### CSS!

- Using CSS; a quick review
- Block vs inline


### Inspector Tools!

- Visualizing changes
- On the fly editing


### CSS Grid!

- Layouts
- Grid Overview
- Practice


### Advanced!? (optional)

> Hold Strong Opinions Weakly
>
> [Strong Opinions, Weakly Held](https://blog.codinghorror.com/strong-opinions-weakly-held/)

- Frameworks
- CSS Reset


## Lecture Notes


### CSS?

- **Q:** What is CSS?
- **A:** Cascading Style Sheets


- **Q:** Why do we use it?
- **A:** To make things purrty 🐱
  - CSS governs presentation (layout, style, etc.) of _documents_
  - _Documents_ can be anything but for the web, it is HTML => Hypertext _Markup_ Language. Keyword: _Markup_.
  - For a given HTML document, you can style it in an infinite number of ways: [CSS Zen Garden](http://www.csszengarden.com/)


- **Q:** How do we use it?
- **A:** Inline, `style`, stylesheets.


## CSS!

A Quick Review of CSS Usage

```css
/*
Questions:
- What is `p`?
  - selector
- What is `font-size`?
  - property
- What is `2em`?
  - value
- What are selectors?
  - Specificity?
*/
p {
  font-size: 2em;
}
```


**block vs inline vs inline-block**
- Which elements are what?
  - [Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
  - [Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
  - [Differences (not-exhaustive)](https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block)


**Inline elements:**
- respect left & right `margins` and `padding`, **but not** top & bottom
- cannot have a `width` and `height` set
- allow other elements to sit to their left and right.


**Block elements:**
- respect all of those
- force a line break after the block element
- acquires full-width if `width` not defined


**Inline-block elements:**
- allow other elements to sit to their left and right
- respect top & bottom `margins` and `padding`
- respect `height` and `width`


How can we visualize the differences?
- Compare `<p>` and `<span>` and `<div>`


- What is the CSS Block Model? (optional)
  - [Introduction to the CSS basic box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>blo🐱k vs inline vs inline-blo🐱k</title>
    <link rel="stylesheet" href="index.css">
  </head>
  <body>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <span>ullamco</span> laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </body>
</html>
```

```css
span {
  display: inline;
}
```


### Inspector Tools!

Chrome, Firefox, etc. have tools to help debug websites. Use the Chrome one!

To open up Chrome DevTools:
- Menu => Developer Tools
- Shortcut: `⌘⌥I`
- Right Click `Inspect`


What does it let you do?
- Visualizing changes
- On the fly editing
- Go through the different options
  - editing html
  - hovering
  - seeing css rules
  - styles, computed tabs
  - change with color picker
  - disabling styles
  - editing element.style
  - looking for styles that are beung overriden
    - look up chain of html elements to find it in parent
    - you will always be asking yourself where these styles are coming from
    - this is where computed comes from
  - :active, :hover, etc options
  - debugging with it


Gotchas
- Refresh will lose all your changes!
- Sometimes cache will mess with you.
  - You can disable it in Network tab.
  - Force refresh hotkey combination.
  - Or constantly append and "change" the filename.


## CSS Grid!

The new hotness.
- the source order of the grid items doesn't matter
  - your CSS can place them in any order, which makes it super easy to rearrange your grid with media queries


What to go over:
- Layouts
  - [Holy Grail Layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
- Overview
  - [Can I use](https://caniuse.com/)
  - [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Practice
  - [CSS Grid Garden](https://cssgridgarden.com/)
    - Level 1 - grid item stuff
    - Level 20 - grid container stuff


**Terminology**
- Grid Container
- Grid Item
  - Sub Items are not affected
- Grid Line
- Grid Track
- Grid Cell
- Grid Area
- New unit: `fr` == fraction


**Properties for the Grid Container**
- display
- grid-template-columns
- grid-template-rows
- grid-template-areas
  - grid-template
- grid-column-gap
- grid-row-gap
  - grid-gap
- justify-items
- align-items
  - place-items
- justify-content
- align-content
  - place-content
- grid-auto-columns
- grid-auto-rows
- grid-auto-flow
    - grid

_see the spreadsheet that organizes them_


**Properties for the Grid Items**
- grid-column-start
- grid-column-end
- grid-row-start
- grid-row-end
  - grid-column
  - grid-row
    - grid-area
- justify-self
- align-self
  - place-self


**Example of Holy Grail Layout**
- [Holy Grail Layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)


```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Purrty 🐱SS Grid</title>
    <link rel="stylesheet" href="grid.css">
  </head>
  <body>
    <div class="container">
      <header><h1>Grid!</h1></header>
      <div class="column-1">
        <p>hello world</p>
      </div>
      <div class="column-2">
        <p>hello world</p>
      </div>
      <div class="column-3">
        <p>hello world</p>
      </div>
      <footer><p>some footer text</p></footer>
    </div>
  </body>
</html>
```

```css
body {
  margin: 0;
  padding: 0;
}

.container {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 3fr 1fr;
  height: 100vh;
  width: 100vw;
}

header {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
}

div {
  border: 1px solid black;
}

.column-1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
}

.column-2 {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 2;
}

.column-3 {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 2;
}

footer {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 3;
  border: 1px solid black;
}
```


## Resources

Other stuff to look into:
- [Holy Grail Layout](https://philipwalton.github.io/solved-by-flexbox/demos/holy-grail/)
- [CSS Zen Garden](http://www.csszengarden.com/)
- [A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Flexbox Froggy](http://flexboxfroggy.com/)
- [CSS Grid Garden](https://cssgridgarden.com/)
- [Bootstrap](https://getbootstrap.com/)
- [Foundation](https://foundation.zurb.com/)
- [Eric Meyer's CSS Reset](https://meyerweb.com/eric/tools/css/reset/)
- [Can I use](https://caniuse.com/)
- [How CSS Works](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works)
- [List of Block Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements)
- [List of Inline Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements)
- [HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [Introduction to the CSS basic box model](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
- [Chrome DevTools for CSS - Better CSS Coding & CSS Debugging with Developer Tools](https://www.youtube.com/watch?v=Z3HGJsNLQ1E)
- [Chrome DevTools Overview](https://developer.chrome.com/devtools)
- [Chrome DevTools](https://developers.google.com/web/tools/chrome-devtools/)
- [Get Started With Viewing And Changing CSS](https://developers.google.com/web/tools/chrome-devtools/css/)
- [CSS selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
