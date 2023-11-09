# Svelte in your legacy project
This project is compatible with any project that can insert JavaScript into the DOM.

## What you need to know
- Basic understanding of class and prototype, specifically what an instance is
- Familiarity with using import and export statements
- Basic knowledge of Vite.js

## Setup
- Clone this project into your repository
- Rename the folder for your convenience
- Link the generated bundle.umd.js file where you include your JavaScript files in your project

## How to use it
1. Create your component in the components folder
2. Add the import and export statements in modules.ts.
3. Assign a target property to your Counter object to specify where you want to insert your component, for example: `target: document.querySelector('#Counter')`.
4. Create a `props` object and add it to your Counter object
5. Instantiate your component in your legacy code as shown:  ``` var counter = new Component.Counter(); ``` and pass the final object containing both the target property and the `props` object as parameters to `new Component.Counter();`.

### It should look like this:
```
var counter = new app.Counter({
    target: documeny.querySelector('#Counter'),
    props: {
        label: "Text from server side"
    }
}) 
```

## To do
Modifications may be necessary to enable hot reloading with `npm run dev`. These changes can be made in `vite.config.ts`.