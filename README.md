# Browser-Based Tic-Tac-Toe

In this project, you'll build HTML views for your Tic-Tac-Toe game. You're not
going to write any of the core game code. Instead, you'll just write **view
classes** that display the game in the browser and handle browser user input.
Ultimately, you're looking to build something like this:

**[Live Demo][ttt-demo]**

## Learning goals

By the end of this practice, you should be able to

- Set up Webpack
- Explain how a frontend (this project) and backend (the Node version of this
  project) relate to and communicate with each other
- Use JavaScript to manage the DOM
  - Query the DOM using JavaScript
  - Change the DOM using JavaScript
  - Create event listeners
- Use CSS to style a web page

## Setup

Clone the project starter. (You can access the starter repo by clicking the
`Download Project` button at the bottom of this page.) It includes the
Tic-Tac-Toe Node solution in the __ttt_node__ folder.

The Node solution contains all the game logic of Tic-Tac-Toe, so you can focus
on building the UI. You will need to reference the files in the Node solution
because you'll be using `Board`, `Game`, and `MoveError`. You shouldn't have to
change anything in the Node solution, however; just read and refer to it!

As you may remember, TTT Node uses Common JS's `require` and `module.exports`
syntax for importing and exporting. That's fine--you will leave those files as
they are. For the new files in this project, however, you will use ES6's
`import` and `export` syntax, allowing Webpack to bundle everything together for
the browser.

To set up Webpack, first run `npm init -y` in the root directory. This will
create a __package.json__ file and accept the default configuration (`-y`). Open
the __package.json__ and remove the `"main"` key-value pair. Feel free to update
the `"description"` and `"author"` fields as well. Adding a `"private": true`
pair will ensure that you don't accidentally publish your package to the NPM
registry.

Next, install Webpack by running `npm install -D webpack webpack-cli`. The `-D`
causes these two packages to be added to your __package.json__ as
`"devDependencies"`, meaning that they should only be installed when your app
runs in development mode. (To install packages as regular `"dependencies"` that
should always be installed, just omit the `-D`.)

Finish setting up your __package.json__ by replacing the `"test"` pair under
`"scripts"` with this: `"start": "webpack --watch --mode=development"`. Your
__package.json__ should now look something like this:

```json
{
  "name": "browser-ttt",
  "version": "1.0.0",
  "description": "Tic-Tac-Toe--in your browser!",
  "private": true,
  "scripts": {
    "start": "webpack --watch --mode=development"
  },
  "author": "<Your Name>",
  "license": "ISC",
  "devDependencies": {
    "webpack": "^5.77.0",
    "webpack-cli": "^5.0.1"
  }
}
```

(Don't worry if the version numbers are a little different.)

Add the `import` statements at the top of __src/index.js__ to import `View` and
`Game`. (Although `Game` is exported from __ttt_node/game.js__ using CJS
`module.exports` syntax, you can `import` it as if it were a default export.)

To run Webpack, run `npm start` in the terminal. This will run the `start`
script defined in your __package.json__, i.e., `webpack --watch
--mode=development`. The `--watch` flag directs Webpack to re-bundle your app
whenever you save a bundled file.

When Webpack processes __src/index.js__ (the default entry file), it will
include all required files within __dist/main.js__ (the default output file). A
script tag to load __dist/main.js__ has already been included in __index.html__.

Once Webpack has bundled your app into __main.js__, just load the __index.html__
file in a browser to play!

## Instructions

The __src/ttt-view.js__ file contains the outline of a `View` class. The
`constructor` takes in a `Game` object and an `HTMLElement` in which to display
the grid.

Create your `View` and `Game` objects in the entry point (__src/index.js__).
Since you have imported these classes, you can create a new game simply with
`new Game()`.

Use a DOM Selector to find the container element in the view that is created in
__index.html__. Note that the `script` tag in __index.html__ does not have a
`defer` attribute, so make sure you put your selector inside the
`document.addEventListener("DOMContentLoaded", () => {...})` to ensure that the
container element has loaded before your selector does its search.

Write a `setupBoard` method in `View`. It should make a grid to represent the
board. Build the grid using an unordered list (`<ul>`). Represent the cells
inside the grid using `<li>` elements. You'll want to store each `<li>`'s
position to use later, but avoid non-standard HTML attributes for best
practices. [`data-*`][data-attr] attributes allow you to do just that.

In the __ttt.css__ file, set the `display` property of the `<ul>` to `flex`.
Give it a fixed width and set `flex-wrap` to `wrap`; the `<li>` elements will
appear as a 3x3 grid! (You need to do some quick division or tinkering to figure
out how wide the `<li>` elements need to be.) Set a border on the cells to make
it look like a real grid. Style unclicked cells with a gray `background`. Change
the background to yellow while the user `:hover`s over an unclicked cell.

Call View's `setupBoard` method inside the `constructor` and place the new
`<ul>` inside your container element (`el`); check that this is drawing a grid.

Write a `handleClick` method inside `View` and install it on the board at the
end of `setupBoard`. When a user clicks on a cell, call
`Game.prototype.playMove` to register their move. (Remember that in JavaScript,
`prototype.` in a method name simply signifies an instance method, like a `#` in
a Ruby method name.) Manipulate the cell `<li>` to show the current player's
mark. Add/remove CSS classes to change the cell background to white and display
the 'X's and 'O's in different colors. You might find it helpful to write a
`View.prototype.makeMove` method that handles all of this. Consider popping an
`alert` if a move is invalid.

Display a congratulatory message when a player wins!

**Note:** Since the solution classes are written for the node console, the
`Game` class has a `Game.prototype.run` and a `Game.prototype.promptMove`
method. Ignore these. You're going to call `Game.prototype.playMove` directly
from your `View.prototype.makeMove` method.

[ttt-demo]: http://appacademy.github.io/curriculum/browser-ttt
[data-attr]: https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
