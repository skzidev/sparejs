<h1 align="center">Spare.js Documentation</h1>

# Classes

## Site

The site class is a class the represents the HTML Document Object

### Methods

1. addComponent(Component component)

    Add a Component to the Site

2. attachScript(String url)

    Add a JavaScript File (Hosted on a CDN) to the document

3. attachStringScript(String js)

    Add a string of JavaScript to the document

4. attachStylesheet(String url)

    Add a CSS Stylesheet (Hosted on a CDN to the document)

5. attachStringStylesheet(String css)

    Add a string of CSS to the document

6. attachIcon(String url)

    Add a favicon to the website

7. build(Object options)

    Turn the site into HTML. Options can include
    
    - boolean `out`; a boolean that defines if the website should be built to `out/debug/{FILENAME}.html`
    - int `port`; The localhost port the website should be served on
    - boolean `test`; A boolean that defines if the website should be put on `localhost:{PORT}`
    - String `filename`; A String that specifies the name of the file your HTML will be built to (if `out` is set to `true`)

## Component

The component class is a class that represents an HTML element.

### Methods

1. addComponent(Component component)

    Add a child component to the component


# Methods

## init(Object options) >> Site

The init function returns a new Site object, you can pass in a Object that can include

- String `name`; The name of the website

## createComponent(String tagname, String content, Object attributes) >> Component

The createComponent funtion returns a new Component, Tagname is **required**, but Content and Attributes are **optional**. Attributes can contain any HTML attribute.

<h2 align="center">That's it for now.</h2>
<p align="center">Time to build a Website!</p>