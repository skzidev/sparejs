# Spare.JS Docs

### init()

Takes in a Dictionary as a parameter with the string value `name`

Returns a `Site` Object

### createComponent

Takes in 3 Parameters

1. Tag-Name/Type

ex. `h1`, `p`, .etc

2. Content

ex. `hello, world!`, .etc

3. Attributes

`{ id: 'tb', class: 'class' }`

Returns a `Component` Object

### Site

An Object that represents the HTML `Document`

**Methods**

- addComponent()

    Add a `Component` to the HTML Renderer

- attachScript()
    
    Add a `script` Element with the `src` specified

- attachStringScript()
    
    Add a `script` Element with the `js` specified as a value

- attachStylesheet()

    Add a `style` Element with the `href` specified

- attachStringStylesheet()

    Add a `style` Element with the `css` specified as a value

- build()

    Build the site and create a server at `localhost:6422`, serving the HTML created, optionally being able to write the output to a file when `out` is specified `true` in the properties

### Component

An Object that repressents a HTML Element

**Methods**

- addComponent()

    add the specified component as a child to the parent