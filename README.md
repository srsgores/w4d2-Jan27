# W4D2
Introduction to Client-Side JavaScript and jQuery

## NodeJS Review
NodeJS runs JavaScript **server-side**

So far, we have rendered our pages using *ejs* (SSR, server-rendered).

**Problem: how do we deal with interactive data coming in and out of the page?**

* Real-time applications
* Data that changes often

### Differences Between NodeJS and Client-Side JavaScript

#### `window` replaces `process`
* No access to `process` or `process.argv`
* `window` is **global** scope; the same as declaring without `var`, `let`, or `const`
* `window` is *implicit*: `window.location` === `location`

## DOM
*Document Object Model*

![DOM tree example](https://andydlindsay-portfolio.s3.amazonaws.com/dom-example.png)

* *Tree-like* structure
* Composition (vs. inheritence)
* Like a tree: leaf, root node (`html`)
* Hierchical structure

Elements **all** are `Node`s; multiple elements are `NodeList` instances

### JS DOM Interaction

1. `document.getElementById`
2. `document.getElementByTagName`
3. `document.querySelector`
4. `document.querySelectorAll`

| Method (Singular) | Method (Plural) | Support |
| --- | --- | :---: |
| `document.getElementById` | `document.getElement**s**ById` | ✅|
| `document.getElementByTagName`| `document.getElement**s**ByTagName` | ✅|
| N/A | `document.getElement**s**ByClassName` | ✅|
| `document.querySelector`| `document.querySelector**All**` | 𐄂|

`document.querySelector` and `document.querySelectorAll` generally preferred

### JS Event Handling

Events **bubble up** unless otherwise prevented.

!(https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/05/1495534508eventflow.svg)[event bubbling diagram]

#### `Node.prototype.addEventListener`

Works for any event.  [List of all the events](https://developer.mozilla.org/en-US/docs/Web/Events)

## JQuery
Client-side JS library used for DOM interaction

Introduced due to inconsistent browser APIs: Internet Explorer vs. Firefox vs. Chrome

Ex.

```javascript
var list = document.getElementById("list"); // works in all browsers
var list = document.getElementByTagName("ul"); // works still :)
const listItem = document.getElementById("list"); // doesn't work in IE, old Chrome, old FF
```
`document.querySelector` and `document.querySelectorAll` [now have good support](https://caniuse.com/#search=query)

Historically, jQuery has been very pervasive on the web due to the inconsistencies of browser support, so we still have to learn it.

### `$` Selector

Equivalent to `document.querySelectorAll`, but works in all browsers.

#### jQuery `$` vs. `document.querySelectorAll`

jQuery returns an *Array-like* object, whereas `document.querySelectorAll` returns a `NodeList`.

**Vanilla JS**
```javascript
const celebritiesContainer = document.querySelector(".celebrities");
const celebrities = celebritiesContainer.querySelectorAll(".celebrity"); // a NodeList (not an Array!)

Array.from(celebrities).map((celebrity) => console.log(celebrity.innerText));
```

**jQuery**
```javascript
const $celebritiesContainer = $(".celebrities");
const $celebrities = $celebritiesContainer.find(".celebrity"); // an array of Node(s)

$celebrities.map((celebrity) => console.log($(celebrity).text()));
```

No need to choose between `document.querySelector` and `document.querySelectorAll`; one method to rule them all

### `.click`

Don't use this one; use `.on` instead

No:

```javascript
$(document).ready(function() {
	console.log("ready");
});

```

Yes:

```javascript
$(document).on("ready", function() {
	console.log("ready");
})
```

### Dealing with HTML

Roughly 5 options:

1. `.html`: renders **raw** HTML
2. `.append`, `.prepend` (to)
3. `.before`, `.after`

Place your HTML in backticks ```:

```javascript
const text = "list item text";

const $listItem = $(`
	<li>${text}</li>
`).appendTo("body");
```

Or place your template in a [`<template>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template) tag.

```html
<template id="listItemTemplate">
	<li>
		<slot id="listItemSlot"></slot>
	</li>
</template>
```

```javascript
const text = "list item text";
const $listItemTemplate = $("#listItemTemplate");
const $body = $("body");

$listItemHTML = $listItemTemplate.clone();
$listItemHTML.find("slot:first").parent().text(text);

$body.append($listItemHTML);
```

`<slot>`s tell us where to place dynamic content.  **We can have as many `<slot>`s as we want**.

`<template>` tags **don't get rendered**, so we don't need to hide them.  **We can have as many `<template>` tags as we want**.

Use back-ticks when placing HTML in your JS for small HTML; use the `<template>` tag when you have complex markup.

### Showing/Hiding

* `.show`
* `.hide`
* `.toggle`
* `.slideToggle`
* `.slideIn`
* `.slideOut`

**CSS Methods**

* `.css`
* `.toggleClass`
* `.addClass`
* `.removeClass`

The above use CSS transforms under the hood.  **Best to use `.toggleClass` or `.addClass`/`.removeClass` instead.

Also, check out the `hidden` attribute.

### Attributes

`.attr("attribute")` to get, and `.attr("attribute", value)` to set

### AJAX

`$.ajax` most verbose

`$.get` and `$.post` shorthands for `$.ajax({method: "GET"})` and `$.ajax({method: "POST", data: {}})` respectively.

### jQuery Conventions

* Prefix variables with the `$`: `$const $userMenu = $(".menu");`
* Load jQuery via a CDN or NPM
* Check if `.length !== 0` in case the element doesn't exist
* Start with your container element, then call `.find` subsequently on that element
* Run your jQuery code in an [IIFE](https://codeburst.io/javascript-what-the-heck-is-an-immediately-invoked-function-expression-a0ed32b66c18)
* Run your jQuery code in a `.on("ready")` callback
* Use jQuery or don't; choose one or the other
* Load your `<script>` tags with `async defer`
* Separate out your templates in `<template>` tags (opinion); separate HTML and JS
* Build your HTML separately, without jQuery, only updating the DOM once

### Useful Links
* [MDN: The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
* [W3C DOM Standard](https://www.w3.org/DOM/)
* [MDN: Browser Events](https://developer.mozilla.org/en-US/docs/Web/Events)
* [What is the `$` in DevTools?](https://thewebivore.com/exactly-wth-is-up-with-in-devtools/)
* [jQuery Docs](https://jquery.com/)