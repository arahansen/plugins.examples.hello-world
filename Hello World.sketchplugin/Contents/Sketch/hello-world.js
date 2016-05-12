// Hello World, by Sam Deane — Source code available at [GitHub](https://github.com/BohemianCoding/plugins.examples.hello-world)
//
// This is an extremely simple plugin example, which illustrates how to add a menu command to the Plugins menu
// and execute some code when it is selected.

//
// ## Layout
//
// The first thing to do when making a plugin is to setup the folder structure, which should
// look something like this:
//
// ```
//    MyPlugin.sketchplugin/
//      Contents/
//        Sketch/
//          manifest.json
//          script.js
// ```
//
// ## Manifest
//
// The plugin needs a manifest.json file. This tells Sketch which menu items your plugin supplies,
// as well as giving some general information about the plugin such as its name, author, and so on.
//
// A single plugin can supply multiple menu items, and each one can execute different code,
// or they can all share code. In our case though, we just have one command.
//
//  ```json
// {
//     "name" : "Hello World!",
//     "identifier" : "com.sketchapp.examples.helloworld",
//     "version" : "1.0",
//     "description" : "Pretty much the smallest example Sketch Plugin you could have.",
//     "authorEmail" : "sam@sketchapp.com",
//     "author" : "Sam Deane",
//     "commands" : [
//     {
//       "script" : "hello-world.js",
//       "handler" : "onRun",
//       "shortcut" : "",
//       "name" : "Hello World!",
//       "identifier" : "helloworld"
//     }
//   ]
// }
// ```

// ## Code
// ### Defining The Run Handler
//
// In the manifest, we told Sketch that every time the "Hello World!" menu is selected,
// we want to execute  a javascript handler called `onRun`.
//
// So now we need to put some code into the `hello-world.js` file to implement that command.

function onRun(context) {

  // We are passed a context variable when we're run.
  // This is a dictionary containing a reference to the document,
  // the current selection, the plugin, curren URL and more.

  // One of the things that the context contains is the current document,
  // so let's fetch that.
  var doc = context.document;

  // From the document, we can fetch the current page that the user is looking at.
  var page = [doc currentPage];

  // We can now use this page to create a new text layer...
  var layer = page.addLayerOfType("text")

  // ...give it a large font...
  layer.font = NSFont.systemFontOfSize_(36.0)

  // And set its text to a traditional value...
  layer.stringValue = "Hello World!"

  // Finally, lets center the view on our new layer
  // so that we can see where it is.
  doc.currentView.centerRect_(layer.rect())
};
