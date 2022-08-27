# Spare.js

This is a JavaScript Framework I made in under 3 hours because other frameworks always have a catch, so I made something that's not complicated.

## Usage

```javascript
// Import the Lib
import { init, createComponent } from 'sparejs/spare.js';

// Create the Site
const site = init({ name: "My Website" });

// Create a Component and add it
const header = createComponent("h1", "Hello, World!", { class: "header" });
site.addComponent(header);

// Turn it into HTML and create a server to host it at localhost:6422
site.build();
```

### Building to HTML
Pass `{ out: true }` as a parameter for `site.build();`

**Note: For filenames other than `index.html`, use `filename: "filename"` and it will output to `filename.html`**


### Examples
Examples can be found in the `examples` folder.
