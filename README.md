# Spare.js

Spare.js is a Small and Simple JavaScript Framework used for creating websites, It has no dependenices and uses string manipulation to create HTML.

**Spare.js is not feature-complete, and is just for making simple static HTML websites. Spare.js is not for large-scale projects.**

## Installation

```
npm i @animated/sparejs
```

**For those who don't want to use NPM, You can go to the latest release for a .zip containing the files in the NPM package**
## Usage

```javascript
// Import the Lib
import { init, createComponent } from '@animated/sparejs';

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
