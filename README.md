# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**


## set up

Goals of the project

  - Solidify and practice Typescript, React and Apollo knowledge.
  - Create an applications tha makes use of react-router

For the set up, it was important to make use of Typescript, since I am using `react-router-dom` the following dependencies were required.

- `yarn add @types/react-router-dom`

For the icons I decided to use the react-icons librabry by  intalling them with the following command `npm install react-icons --save`

## Road bumps

When I first initialized this project I decided to made use of `Yarn` as a package manager but I quickly realized that it was a bad idea to have both `npm` and `yarn`. I decided t switch to npm insted just because I had all the commands needed to install the dependencies needed.

Another thing it took me a little bit to figure out was that I had to wrap `App` within `<BrowserRouter>` to use the library. Silly of me!!

## Styling

 I decied to use CSS to handle the styles.
 I also discovered that in a React project `@import normalize` can be used to normalize `CSS` styles