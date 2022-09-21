# Spare.js

Spare.js is a Small and Simple JavaScript Framework used for creating websites.

It's very light-weight and has very little code, So dead code isn't in your application, taking up space.

**Spare.js is in it's infancy. The project is not feature-complete. If you plan to make a big web app, please Beware of this.**

## Installation

There are 2 ways to install sparejs

1. Through NPM

Scaffold a JavaScript Project, then run the command below:

```
npm i @animated/sparejs
```

2. Through a .zip

Go to the [Latest Release](https://github.com/AnimaTed6422/sparejs/releases/latest), and follow th instructions there.

## Usage

```javascript
// Import the Lib
import { init, createComponent } from '@animated/sparejs/spare.js';

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
