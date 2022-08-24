# JavaScript Lib

This is a JavaScript Lib I made in under 3 hours because other libs always have a catch, so I made something that's not complicated.

## Usage

1. Import it
```javascript
import { init, createComponent } from '../lib/dom.js';
```
2. Create a Site
```javascript
const site = init({ name: "My Website" });
```
3. Create an Component
```javascript
const header = createComponent("h1", "Hello, World!", { class: "header" });
```
4. Add the component
```javascript
site.addComponent(header);
```
5. Build the site
```javascript
site.build();
```

### Building to HTML
Replace
```javascript
site.build();
```
with
```javascript
site.build({ out: true });
```

and the site will be built