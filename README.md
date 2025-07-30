# Rocket UI

This project is a small component library showcase built with [Create React App](https://github.com/facebook/create-react-app). You can explore various UI components such as buttons, inputs, modals and more. The demo pages live under `src/routes` and show how each component works.

## Project Structure

```
/public               # Static assets and HTML template
/src
  actions             # Redux action creators
  api                 # Axios configuration for the Unsplash API
  assets              # Images used across the demo
  components          # Reusable React components (Button, Modal, etc.)
  reducers            # Redux reducers for modal and toaster settings
  styles              # SCSS sources and global styles
  routes               # Example pages demonstrating the components
index.js              # Application entry point
firebase.json         # Firebase hosting configuration
```

`src/index.js` sets up the Redux store and renders the main `App` component. Routing is defined in `App.js` where each page under `src/routes` is registered. Styling is handled with SCSS from `src/styles` and can be toggled between light and dark themes. An Unsplash helper in `src/api/unsplash.js` fetches demo images.

## Available Scripts

In the project directory you can run:


### `npm start`

Runs the app in development mode and opens [http://localhost:3000](http://localhost:3000). The page reloads on edits and shows lint errors in the console.


### `npm test`

Launches the test runner in interactive watch mode.


### `npm run build`

Builds the app for production into the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

## Next Steps

1. Review the example pages in `src/routes` to learn how each component is used.
2. Explore the SCSS files under `src/styles` for variables and mixins.
3. Add more components or integrate additional APIs to extend the demo.
4. Consider adding more tests with Jest and React Testing Library.

Happy hacking!
