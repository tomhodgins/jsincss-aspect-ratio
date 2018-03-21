# jsincss-aspect-ratio

An aspect ratio plugin for [jsincss](https://github.com/tomhodgins/jsincss)

## About

This plugin is a JavaScript module that works with [JS-in-CSS stylesheets](https://responsive.style/theory/what-is-a-jic-stylesheet.html), to set the aspect ratio of an element based on its current width.

## Downloading

You can download `index.js` and add it to your codebase, or download it with npm:

```bash
npm install jsincss-aspect-ratio
```

Another option that works for building or testing, that isn't ideal for production use, is linking to the module directly from a CDN like unpkg:

```html
<script type=module>
  import aspect from 'https://unpkg.com/jsincss-aspect-ratio/index.js'
</script>
```

## Importing

You can import the plugin into your own JavaScript modules in a couple of ways.

The first way is using the native [`import` statement](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) in JavaScript. Here you can assign any name you want to the function you are importing, and you only need to provide a path to the plugin's `index.js` file:

```js
import aspect from './node_modules/jsincss-aspect-ratio/index.js'
```

If you want to use `require` to load this plugin instead, and use a bundler like Webpack or Parcel, make sure to add `.default` as you require it:

```js
const aspect = require('jsincss-aspect-ratio').default
```

Once you have imported this plugin into your module, you can use the plugin as `aspect()`

## Using JS-in-CSS Stylesheets

The main goal of this plugin is to allow CSS authors the ability to supply a desired aspect ratio to define an element's height based on its current width in the browser.

The plugin has the following format:

```js
aspect(selector, ratio)
```

- `selector` is a string containing a CSS selector
- `ratio` is a number representing the desired aspect ratio of width/height

## Example

This example will use the `jsincss` plugin to load a JS-in-CSS stylesheet making use of this plugin. To test it in a JavaScript module, import both the `jsincss` package and any helper plugins you want:

```html
<script type=module>
  import jsincss from 'https://unpkg.com/jsincss/index.js'
  import aspect from 'https://unpkg.com/jsincss-aspect-ratio/index.js'

  jsincss(() => `

    ${aspect('iframe', 16/9)}

  `)
</script>
```

It's also possible to write your stylesheets as a separate JavaScript module like this, where you import any helper plugins at the top of the stylesheet:

```js
import aspect from 'https://unpkg.com/jsincss-aspect-ratio/index.js'

export default () => `

  ${aspect('iframe', 16/9)}

`
```

And then import both the `jsincss` plugin and the stylesheet into your code and run them like this, suppling any `selector` or `events` list the `jsincss` plugin might need to apply the stylesheet only the the element(s) and event(s) you require, depending on what you're doing:

```js
import jsincss from 'https://unpkg.com/jsincss/index.js'
import stylesheet from './path/to/stylesheet.js'

jsincss(stylesheet)
```

## Compatible JS-in-CSS Stylesheet Loaders

- [jsincss](https://github.com/tomhodgins/jsincss)