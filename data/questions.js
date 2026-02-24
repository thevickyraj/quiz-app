export const questionBank = [
    {
        id: 1,
        question:
            "Whenever you are assigning two classes to a tag, you must separate them with a",
        options: ["Space", "Comma", "Dash"],
        answer: "Space",
    },
    {
        id: 2,
        question:
            "____________ contains the navigation menu, or other navigation functionality for the page",
        options: ["section", "header", "nav", "aside"],
        answer: "nav",
    },
    {
        id: 3,
        question:
            "The main purpose of the placeholder attribute in input controls is:",
        options: [
            "Allow the end-user to remember the location in form",
            "There is no such attribute known as 'placeholder'",
            "Allow the end-user to replace the data control with another",
            "Display 'watermark' data to assist the end-user",
        ],
        answer: "Display 'watermark' data to assist the end-user",
    },
    {
        id: 4,
        question:
            "Which of the following values are accepted by the float property?",
        options: ["left", "right", "none", "all of the above"],
        answer: "all of the above",
    },
    {
        id: 5,
        question:
            "Which of the following CSS Property controls how an element is positioned?",
        options: ["position", "set", "static", "fix"],
        answer: "position",
    },
    {
        id: 6,
        question:
            "If you are designing a column to occupy 3 of the 12 columns in your desktop design, what is the width in CSS?",
        options: ["Width:25%", "Width:33.3333%", "Width:21%"],
        answer: "Width:25%",
    },
    {
        id: 7,
        question: "In what direction does float work? img { float: right; }",
        options: ["left", "top", "bottom", "right"],
        answer: "right",
    },
    {
        id: 8,
        question:
            "Which of the following CSS Property sets the stacking order of positioned elements?",
        options: ["x-index", "y-index", "z-index"],
        answer: "z-index",
    },
    {
        id: 9,
        question: "You indicate a class selector with",
        options: ["the hash (#) symbol", "the dot (.)", "the tag"],
        answer: "the dot (.)",
    },
    {
        id: 10,
        question:
            "Which of the following media queries would apply to a tablet reporting a screen width of 768px?",
        options: [
            "@media only screen and (min-width: 1140px){}",
            "@media only screen and (min-width: 641px){}",
            "@media only screen and (max-width: 1140px){}",
        ],
        answer: "@media only screen and (min-width: 641px){}",
    },
    {
        id: 11,
        question: "To get the first or nth child you use",
        options: ["the nested selector", "A pseudo-class"],
        answer: "A pseudo-class",
    },
    {
        id: 12,
        question:
            "Which of the following rules allows users to import style rules from other style sheets?",
        options: ["@media", "@important", "@import", "@style"],
        answer: "@import",
    },
    {
        id: 13,
        question:
            "I have a <p> which is the child of a <div> which is the child of a <section>, does the style in the section affect the p tag?",
        options: [
            "Yes, inheritance accumulates",
            "No, only the immediate parent's style is inherited",
        ],
        answer: "Yes, inheritance accumulates",
    },
    {
        id: 14,
        question: "Which HTML tag allows styling from an external .css file?",
        options: ["link", "css", "style"],
        answer: "link",
    },
    {
        id: 15,
        question:
            "Which of the following properties sets the distance between an element’s right border and the rightmost edge of its content?",
        options: ["auto", "padding-left", "padding-right", "padding-top"],
        answer: "padding-right",
    },
    {
        id: 16,
        question:
            "What built-in function allows you to convert a string into an integer?",
        options: ["toInt()", "parseInt()", "toInteger()", "parseString()"],
        answer: "parseInt()",
    },
    {
        id: 17,
        question: "What is the catch method for a promise?",
        options: [
            "To compose two promises",
            "To listen to the result of a promise",
            "To listen only for a rejected promise",
            "There is no catch method on a promise",
        ],
        answer: "To listen only for a rejected promise",
    },
    {
        id: 18,
        question: "What is the effect of using await?",
        options: [
            "The awaited function runs in parallel",
            "A promise is returned from a function instead of a value",
            "A value is returned from a function instead of a promise",
        ],
        answer: "A value is returned from a function instead of a promise",
    },
    {
        id: 19,
        question: "What is a function in JavaScript?",
        options: [
            "An instance of a class",
            "A statement that evaluates an expression",
            "A block of organized, reusable code that performs a single action",
            "Code that allows us to write loops",
        ],
        answer: "A block of organized, reusable code that performs a single action",
    },
    {
        id: 20,
        question: "What does an async function return?",
        options: [
            "A promise in a promise",
            "The value returned from the function",
            "A promise",
        ],
        answer: "A promise",
    },
    {
        id: 21,
        question: "What is dependency injection?",
        options: [
            "A coding technique in which all dependencies are defined with import statements",
            "A coding technique for registering services",
            "A coding pattern in which a class receives the instances of objects it needs from an external source",
        ],
        answer: "A coding pattern in which a class receives the instances of objects it needs from an external source",
    },
    {
        id: 22,
        question:
            "Which is the proper syntax to make sessionTemplate available by name from a JavaScript module?",
        options: [
            "export function sessionTemplate(sessions) {...}",
            "export default function sessionTemplate(sessions) {...}",
            "module.exports = function sessionTemplate(sessions) {...}",
            "require function sessionTemplate(sessions) {...}",
        ],
        answer: "export function sessionTemplate(sessions) {...}",
    },
    {
        id: 23,
        question: "What is a callback?",
        options: [
            "A function that is called when a parallel operation is done",
            "A boolean that is set to true when a parallel operation is done",
            "A function that can be used with the 'await' keyword",
        ],
        answer: "A function that is called when a parallel operation is done",
    },
    {
        id: 24,
        question: "There is no catch method on a promise.",
        options: ["true", "false"],
        answer: "false",
    },
    {
        id: 25,
        question:
            "What is blog.name? var blog = { name: 'Ski Utah' }; var updatedBlog = blog; updatedBlog.name = 'Rocky Mountain Skiing';",
        options: ["Ski Utah", "undefined", "blog", "Rocky Mountain Skiing"],
        answer: "Rocky Mountain Skiing",
    },
    {
        id: 26,
        question:
            "What is the output of the following? greet = function(...months){ months.forEach(month => console.log('Month: ' + month)); } greet(['Jan','Feb']);",
        options: [
            "Jan Feb",
            "ReferenceError",
            "Month: Jan,Feb",
            "Month: Jan",
            "Month: Feb",
        ],
        answer: "Month: Jan,Feb",
    },
    {
        id: 27,
        question: "What is the relationship between JavaScript and ECMAScript?",
        options: [
            "ECMAScript is a standard that JavaScript implements.",
            "They are different terms for the same thing.",
            "JavaScript is a standard that ECMAScript implements.",
            "JavaScript is an old term for what is now called ECMAScript.",
        ],
        answer: "ECMAScript is a standard that JavaScript implements.",
    },
    {
        id: 28,
        question:
            "What will show in the console? var value = 'no value'; console.log(!!value);",
        options: ["false", "an empty string", "true", "no value"],
        answer: "true",
    },
    {
        id: 29,
        question:
            "What is the output of the following? function display(num1, num2){ console.log(num1, num2);} let nums = '12345'; display(...nums);",
        options: ["1 2", "21", "12345", "45"],
        answer: "1 2",
    },
    {
        id: 30,
        question:
            "What is the console output? function printName(){ name = 'Mary'; name = 'John'; console.log(name);} ",
        options: ["Empty", "None", "John", "Mary"],
        answer: "John",
    },
    {
        id: 31,
        question: "Where is the correct place to insert a Javascript?",
        options: [
            "The <head> section",
            "Both the <head> section and the <body> section are correct.",
            "The <body> section.",
            "The <footer> section.",
        ],
        answer: "Both the <head> section and the <body> section are correct.",
    },
    {
        id: 32,
        question:
            "What syntax allows for a variable number of arguments to a function where the arguments are passed as an array?",
        options: [
            "function([]numbers) { }",
            "function(*numbers) { }",
            "function(...numbers) { }",
            "function(numbers[]) { }",
        ],
        answer: "function(...numbers) { }",
    },
    {
        id: 33,
        question:
            "What statement will load a module from a script named employee.js?",
        options: [
            'reference "employee";',
            'import "employee";',
            'import "employee.js";',
            'reference "employee.js";',
        ],
        answer: 'import "employee.js";',
    },
    {
        id: 34,
        question: "Which flags are required to run nodes with ES6?",
        options: [
            "harmony and strict-mode",
            "experimental and strict-mode",
            "harmony and block-binding",
            "harmony and experimental",
        ],
        answer: "harmony and experimental",
    },
    {
        id: 35,
        question:
            "What contextual keyword is used in a class definition to identify a function containing initialization logic for an object?",
        options: ["ctor", "new", "constructor", "class"],
        answer: "constructor",
    },
    {
        id: 36,
        question: "What syntax will create the array [1, 2, 3, 4, 5, 6]?",
        options: [
            "[1, 2, [3, 4]..., 5, 6];",
            "[1, 2, ...[3, 4], 5, 6];",
            "[1, 2, [3, 4], 5, 6];",
            "[1, 2, {3, 4}, 5, 6];",
        ],
        answer: "[1, 2, ...[3, 4], 5, 6];",
    },
    {
        id: 37,
        question: "What symbol identifies a generator function?",
        options: ["&", "@", "$", "*"],
        answer: "*",
    },
    {
        id: 38,
        question:
            "By default, if you load a module that's not a JavaScript file, what will SystemJS do?",
        options: [
            "Raise an error when loading the module.",
            "Attempt to load the module as if it were a JavaScript file.",
            "Look for a plugin with the name of the file extension to load the file.",
        ],
        answer: "Look for a plugin with the name of the file extension to load the file.",
    },
    {
        id: 39,
        question: "Babel compiles the JavaScript code you write into",
        options: [
            "ECMAScript 5",
            "ECMAScript 7",
            "ECMAScript 3",
            "ECMAScript 6",
        ],
        answer: "ECMAScript 5",
    },
    {
        id: 40,
        question: "Which of these phrases describes Babel?",
        options: [
            "JavaScript compiler",
            "Requires a runtime",
            "A programming language",
            "Experimental",
        ],
        answer: "JavaScript compiler",
    },
    {
        id: 41,
        question: 'The string "api/route" in Express is an example of a...',
        options: ["Middleware", "Route", "Error Handler"],
        answer: "Route",
    },
    {
        id: 42,
        question:
            'Which library allows the use of the "require" keyword in front-end code?',
        options: ["guid", "Browserify", "React", "jQuery"],
        answer: "Browserify",
    },
    {
        id: 43,
        question:
            "The ______ attribute of a React form is called when the main action button inside the form is pressed.",
        options: ["onSubmit", "onChange", "onComplete"],
        answer: "onSubmit",
    },
    {
        id: 44,
        question: "Which of the following are automation tools?",
        options: ["Gulp", "JSX", "Express"],
        answer: "Gulp",
    },
    {
        id: 45,
        question: "Which of the following is not a method of a dispatcher?",
        options: ["register", "vector", "dispatch"],
        answer: "vector",
    },
    {
        id: 46,
        question: "What React function is used to define a new element tag?",
        options: ["renderComponent", "createClass", "setInnerHTML"],
        answer: "createClass",
    },
    {
        id: 47,
        question: "Isomorphic means to focus exclusively on an app's back-end.",
        options: ["True", "False"],
        answer: "False",
    },
    {
        id: 48,
        question:
            "React's abstraction of the document object model is often called...",
        options: ["Virtual DOM", "Meta DOM", "Virtualized Model"],
        answer: "Virtual DOM",
    },
    {
        id: 49,
        question:
            "True or false: The only thing that can change the data inside a store is the store itself.",
        options: ["false", "true"],
        answer: "true",
    },
    {
        id: 50,
        question: "The Gulp task which takes a stream and outputs a file is...",
        options: ["src", "task", "dest"],
        answer: "dest",
    },
    {
        id: 51,
        question: "The best way to detect when a user has completed a form is",
        options: [
            "to handle the onClick event on the form's submit element",
            "to handle the onBlur event of the last form element",
            "to handle the form's onSubmit event",
            "to accumulate the onChange events for each form element",
        ],
        answer: "to handle the form's onSubmit event",
    },
    {
        id: 52,
        question: "React is",
        options: [
            "A library that represents asynchronous data streams with observables",
            "A comprehensive client-side application framework",
            "An optimizing compiler for JavaScript",
            "A client-side library providing rendering and event handling",
        ],
        answer: "A client-side library providing rendering and event handling",
    },
    {
        id: 53,
        question: "Routing can be added to a React application by",
        options: [
            "adding an HTML5 or hash fragment based routing library",
            "rendering the application on the server using react-page",
            "handling the window.onLocationChanged event",
            "using the React.route function",
        ],
        answer: "adding an HTML5 or hash fragment based routing library",
    },
    {
        id: 54,
        question: "Behavior is shared between components using",
        options: ["propTypes", "state", "mixins", "props"],
        answer: "mixins",
    },
    {
        id: 55,
        question: "An advantage of React is",
        options: [
            "jQuery syntax",
            "static type checking",
            "speed",
            "easy integration with other JavaScript libraries",
        ],
        answer: "speed",
    },
    {
        id: 56,
        question: "The JSX pre-processor is packaged as a",
        options: ["dynamic link library", "Nuget package", "Gem", "npm module"],
        answer: "npm module",
    },
    {
        id: 57,
        question: "The just-in-time JSX transformer is good for",
        options: [
            "integrating with JavaScript tools",
            "simple development workflow",
            "reusing behavior",
            "performance",
        ],
        answer: "simple development workflow",
    },
    {
        id: 58,
        question: "The function that creates React components is",
        options: [
            "React.component.extend",
            "React.createComponent",
            "React.renderComponent",
            "React.createClass",
        ],
        answer: "React.createClass",
    },
    {
        id: 59,
        question:
            "How does React Router make URL params accessible to components?",
        options: ["parseUrlParams", "State", "getUrlParams", "Props"],
        answer: "Props",
    },
    {
        id: 60,
        question: "Why is the Link component useful?",
        options: [
            "It allows you to hyperlink to routes by name",
            "It enhances page load performance",
            "It removes invalid characters from the URL",
            "It provides faster navigation than hyperlinks",
        ],
        answer: "It allows you to hyperlink to routes by name",
    },
    {
        id: 61,
        question: "How do Flux stores find out about Flux actions?",
        options: [
            "They query the server via AJAX",
            "They poll HTML5 localstorage",
            "They register a callback with the dispatcher.",
            "They call action creators directly",
        ],
        answer: "They register a callback with the dispatcher.",
    },
    {
        id: 62,
        question: "Where should mutable data for React components be stored?",
        options: ["props", "reactData", "state", "React.cookie"],
        answer: "state",
    },
    {
        id: 63,
        question:
            "What mechanism is recommended for passing data down to child components in React?",
        options: ["props", "sendChildData", "getDefaultProps", "state"],
        answer: "props",
    },
    {
        id: 64,
        question: "What is JSX?",
        options: [
            "A language that looks like JavaScript that compiles to HTML.",
            "A styling language that compiles down to CSS.",
            "A language for querying RESTful web services.",
            "A language that looks like HTML that compiles down to JavaScript.",
        ],
        answer: "A language that looks like HTML that compiles down to JavaScript.",
    },
    {
        id: 65,
        question: "What function should all your JSX be placed in?",
        options: ["render", "compile", "jsx", "emit"],
        answer: "render",
    },
    {
        id: 66,
        question: "What does the “webpack” command do?",
        options: [
            "Runs React Local Development Server.",
            "Transpiles all the Javascript down into one file.",
            "Both A and B.",
        ],
        answer: "Both A and B.",
    },
    {
        id: 67,
        question:
            "Which of the following API is a MUST for every React Component?",
        options: ["getInitialState.", "render", "renderComponent."],
        answer: "renderComponent.",
    },
    {
        id: 68,
        question: "What are the advantages of React?",
        options: [
            "React can be used on client as well as server side.",
            "Using React increases readability and makes maintainability easier.",
            "React can be used with any other framework as it is just a View Layer.",
            "All of the above.",
        ],
        answer: "All of the above.",
    },
    {
        id: 69,
        question:
            "How does React handle the Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) standard?",
        options: [
            "aria-* HTML attributes are fully supported in JSX and should be lowercase.",
            "React processes aria-* attributes separately and updates the DOM.",
            "aria-* attributes should be converted to camelCase.",
            "React is yet to support the WAI-ARIA standard.",
        ],
        answer: "React is yet to support the WAI-ARIA standard.",
    },
    {
        id: 70,
        question: "What is React in MVC?",
        options: ["Controller", "Middleware", "Model", "Router"],
        answer: "Controller",
    },
    {
        id: 71,
        question: "What is React?",
        options: [
            "Just a server-side framework",
            "Just a user-interface framework",
            "Both a server-side framework as well as a user-interface framework",
        ],
        answer: "Both a server-side framework as well as a user-interface framework",
    },
    {
        id: 72,
        question: "What are the limitations of React?",
        options: [
            "React is only for the view layer of the app so we still need the help of other technologies to get a complete tooling set for development.",
            "React uses inline templating and JSX. This can seem awkward to some developers.",
            "The library of React is too large.",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 73,
        question:
            "How can you access the state of a component from inside of a member function in React?",
        options: [
            "this.getState()",
            "this.prototype.stateValue",
            "this.state",
            "this.values",
        ],
        answer: "this.values",
    },
    {
        id: 74,
        question:
            "You can also use an ES6 class to define a component in React.",
        options: ["True", "False"],
        answer: "True",
    },
    {
        id: 75,
        question:
            "Which of the following API is a MUST for every React component?",
        options: ["getInitialState", "render", "renderComponent"],
        answer: "renderComponent",
    },
    {
        id: 76,
        question:
            "At the highest level, React components have lifecycle events that fall into _______.",
        options: [
            "Initialization",
            "State/Property updates",
            "Destruction",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 77,
        question: "What are the advantages of React?",
        options: [
            "React can be used on client as well as server side.",
            "Using React increases readability and makes maintainability easier.",
            "React can be used with any other framework as it is just a view layer.",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 78,
        question:
            "How does React handle the Web Accessibility Initiative - Accessible Rich Internet Applications (WAI-ARIA) standard?",
        options: [
            "aria-* HTML attributes are fully supported in JSX and should be lowercase.",
            "React processes aria-* attributes separately and updates the DOM.",
            "aria-* attributes should be converted to camelCase.",
            "React is yet to support the WAI-ARIA standard.",
        ],
        answer: "React is yet to support the WAI-ARIA standard.",
    },
    {
        id: 79,
        question: 'What does the "webpack" command do?',
        options: [
            "Transpiles all the Javascript down into one file",
            "Runs react local development server",
            "Both A and B",
        ],
        answer: "Both A and B",
    },
    {
        id: 80,
        question: "What is React in MVC?",
        options: ["Controller", "Middleware", "Model", "Router"],
        answer: "Model",
    },
    {
        id: 81,
        question: "Which features does TypeScript support natively?",
        options: [
            "Support for standard JavaScript code",
            "Classes and modules",
            "Static typing",
            "Interfaces",
            "Constructors",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 82,
        question: "Which of the following is not a type keyword in TypeScript?",
        options: [
            "float",
            "bool",
            "all are valid types in TypeScript",
            "number",
            "string",
        ],
        answer: "float",
    },
    {
        id: 83,
        question:
            "Interfaces defined in TypeScript are included in the JavaScript that is generated?",
        options: ["True", "False"],
        answer: "False",
    },
    {
        id: 84,
        question: "How do you extend an interface in TypeScript?",
        options: [
            "interface ITruckOptions extends IAutoOptions",
            "interface ITruckOptions => IAutoOptions",
            "interface ITruckOptions : IAutoOptions",
            "interface ITruckOptions implements IAutoOptions",
        ],
        answer: "interface ITruckOptions extends IAutoOptions",
    },
    {
        id: 85,
        question: "Benefits offered by TypeScript include:",
        options: [
            "Code encapsulation",
            "All of these",
            "More maintainable code",
            "Strongly-typed code",
        ],
        answer: "All of these",
    },
    {
        id: 86,
        question:
            "How do you automatically generate fields in a TypeScript class?",
        options: [
            "Add the public keyword to a constructor parameter",
            "None of these",
            "Use the auto keyword",
            "TypeScript doesn't support automatically generated fields",
        ],
        answer: "Add the public keyword to a constructor parameter",
    },
    {
        id: 87,
        question:
            "Which TypeScript function will accept 2 parameters that must be numbers and return their product?",
        options: [
            "var func = (x: number, y: number) => x * y;",
            "var func = (x, y) => x * y;",
            "None of these",
            "var func = function(x, y) => x * y;",
            "All of these",
        ],
        answer: "var func = (x: number, y: number) => x * y;",
    },
    {
        id: 88,
        question:
            "Which statement will allow your code to reference an internal module in a file named shapes.ts using TypeScript?",
        options: [
            '/// <reference="shapes.ts" />',
            '/// <reference path="shapes.ts" />',
            'import "shapes"',
            "/// shapes.ts",
        ],
        answer: 'import "shapes"',
    },
    {
        id: 89,
        question:
            "Which TypeScript statement will import an external module in a file named viewmodels.ts that is in the same folder as your code?",
        options: [
            "import vm = module(viewmodels);",
            "import vm = module('../viewmodels');",
            "import module('viewmodels');",
            "import vm = module('viewmodels');",
        ],
        answer: "import vm = module('viewmodels');",
    },
    {
        id: 90,
        question:
            "Which TypeScript compiler parameter will emit JavaScript that is AMD compliant?",
        options: ["--AMD", "--module AMD", "Neither of these"],
        answer: "--module AMD",
    },
    {
        id: 91,
        question:
            "What keyword is used to apply all of the properties on one interface to another interface?",
        options: ["implements", "extends", "class", "furthers", "references"],
        answer: "extends",
    },
    {
        id: 92,
        question:
            "What value will be output at the end of the following code block? enum Color { Red = 5, Green = 10, Blue = 15 }; console.log(Color.Green);",
        options: ["2", "Color.Green", "1", "Green", "10"],
        answer: "10",
    },
    {
        id: 93,
        question: 'Which of the following best defines a "class"?',
        options: [
            "Objects with no implementation details",
            "Object with no properties or methods",
            "JSON objects with methods",
            "Collection of private, reusable functions",
            "Template for creating objects",
        ],
        answer: "Template for creating objects",
    },
    {
        id: 94,
        question:
            "What term describes the concept of treating an object as if it were a particular type, even if it weren't declared as that type?",
        options: [
            "Extension Typing",
            "Duck Typing",
            "Interface Typing",
            "Generic Typing",
            "Ruby Typing",
        ],
        answer: "Duck Typing",
    },
    {
        id: 95,
        question:
            "What access modifier limits the accessibility of a class member to its own class and subclasses?",
        options: ["export", "internal", "protected", "private", "sensitive"],
        answer: "protected",
    },
    {
        id: 96,
        question:
            "What is the primary difference between a generic class and a non-generic class?",
        options: [
            "Generic classes do not accept constructor parameters.",
            "Generic classes are always declared abstract.",
            "Generic classes may not implement interfaces.",
            "Generic classes accept a type parameter.",
            "Generic classes must inherit from a base class.",
        ],
        answer: "Generic classes accept a type parameter.",
    },
    {
        id: 97,
        question:
            "Which TypeScript compiler option lets you specify the location of the tsconfig.json file to be used for the compilation?",
        options: ["--project", "--json", "--outDir", "--input", "--source"],
        answer: "--project",
    },
    {
        id: 98,
        question:
            "Which of the following symbols is used to denote that a function parameter is a rest parameter?",
        options: ["<>", ">>>", "!!", "...", "||"],
        answer: "...",
    },
    {
        id: 99,
        question:
            "Which of the following will correctly import the items exported by this export statement? export { GetUser as GetLibraryUser, GetBook as GetLibraryBook };",
        options: [
            "import TypeScript from './library';",
            "import namespace from './library';",
            "import { GetLibraryUser, GetLibraryBook } from './library';",
            "import { GetUser, GetBook } from './library';",
            "import all from './library';",
        ],
        answer: "import { GetLibraryUser, GetLibraryBook } from './library';",
    },
    {
        id: 100,
        question: "Which are the different Data Types supported by TypeScript?",
        options: ["Boolean", "Number", "String", "All of the above mentioned"],
        answer: "All of the above mentioned",
    },
    {
        id: 101,
        question: "What are the variable scopes available in TypeScript?",
        options: [
            "Global Scope",
            "Class Scope",
            "Local Scope",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 102,
        question: "Which object oriented terms are supported by TypeScript?",
        options: ["Modules", "Classes", "Interfaces", "All of these"],
        answer: "All of these",
    },
    {
        id: 103,
        question:
            "In TypeScript, it calls JavaScript internally and then performs validations.",
        options: ["True", "False"],
        answer: "True",
    },
    {
        id: 104,
        question: "To change the datatype from one type to another, we require",
        options: ["TypeOperator", "TypeAssertion", "InferredTyping"],
        answer: "TypeAssertion",
    },
    {
        id: 105,
        question: "For a variable, without specifying any data type is",
        options: ["InferredTyping", "TypeOperator", "TypeAssertion"],
        answer: "InferredTyping",
    },
    {
        id: 106,
        question:
            "Which of the following is valid command to compile TypeScript file?",
        options: ["ts abc.ts", "t abc.ts", "tsc abc.ts", "tst abc.ts"],
        answer: "tsc abc.ts",
    },
    {
        id: 107,
        question:
            'What will be output of: var a:string = 47; console.log("Value of a="+a);',
        options: [
            "Value of a=47",
            "Value of a=0",
            "Value of a=",
            "None of the above",
        ],
        answer: "None of the above",
    },
    {
        id: 108,
        question: "Internal Modules are known as namespaces in TypeScript.",
        options: ["True", "False"],
        answer: "True",
    },
    {
        id: 109,
        question: "Which of the following Arrow Functions are true?",
        options: [
            "var reflect = value => value;",
            "var sum = (num1, num2) => num1 + num2;",
            'var getName = () => "Nicholas";',
            "var sum = (num1, num2) => { return num1 + num2; };",
            "All",
        ],
        answer: "All",
    },
    {
        id: 110,
        question:
            "Which concept resemble the following program? function fun1(...params) { console.log(params.length); }",
        options: [
            "String Interpolation",
            "Tagged Templates",
            "Spread Operator/Rest Parameters",
            "Object Destructuring",
        ],
        answer: "Spread Operator/Rest Parameters",
    },
    {
        id: 111,
        question: "TypeScript is a",
        options: [
            "Strongly typed",
            "Object oriented",
            "Compiled Language",
            "All the above",
        ],
        answer: "All the above",
    },
    {
        id: 112,
        question: "TypeScript is",
        options: ["Language", "Set of tools", "Both", "None"],
        answer: "Both",
    },
    {
        id: 113,
        question: "Select user defined data types in TypeScript",
        options: ["arrays", "String", "Boolean", "Void"],
        answer: "arrays",
    },
    {
        id: 114,
        question: "Which of the following are true in TypeScript?",
        options: [
            "we can use printf in TypeScript",
            "we can use console.log in TypeScript",
        ],
        answer: "we can use console.log in TypeScript",
    },
    {
        id: 115,
        question: "Which of the following are array methods?",
        options: ["Unshift()", "Sort()", "Pop()", "All the above"],
        answer: "All the above",
    },
    {
        id: 116,
        question: "Supertype of all datatypes in TypeScript",
        options: ["number", "Enum", "Void", "Any"],
        answer: "Any",
    },
    {
        id: 117,
        question: "Which of the following are true?",
        options: [
            "var a=new String(hii)",
            "var b=new array[1]",
            "var a:String=hii;",
            "All the above",
        ],
        answer: "var b=new array[1]",
    },
    {
        id: 118,
        question: "List some features of TypeScript?",
        options: [
            "TypeScript can be compiled to all major versions of JavaScript",
            "TypeScript can be used for cross-browser development and is open source",
            "TypeScript is a superset of JavaScript that provides typed nature to your code",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 119,
        question: "What are the components of TypeScript?",
        options: [
            "TypeScript Language",
            "TypeScript Compiler",
            "TypeScript Language Service",
            "All of these",
        ],
        answer: "All of these",
    },
    {
        id: 120,
        question: "How to declare variables in TypeScript?",
        options: ["Var", "Let", "Both"],
        answer: "Both",
    },
    {
        id: 121,
        question: "TypeScript uses which data type?",
        options: ["String", "Number", "Boolean", "All above option"],
        answer: "All above option",
    },
    {
        id: 122,
        question: "Default access modifier in TypeScript?",
        options: ["public", "private", "protected"],
        answer: "public",
    },
    {
        id: 123,
        question: "What is async/await?",
        options: [
            "New syntax to write JavaScript promises",
            "New syntax to consume JavaScript promises",
            "New syntax to consume asynchronous callbacks",
        ],
        answer: "New syntax to consume JavaScript promises",
    },
    {
        id: 124,
        question: "Which of the following is an attribute CSS selector?",
        options: ["[selector]", ".selector", "#selector"],
        answer: "[selector]",
    },
    {
        id: 125,
        question:
            "When is it recommended to pass this.setState a function instead of an object?",
        options: [
            "When the new state should completely replace the old state.",
            "When the new state does not depend on the old state.",
            "When the new state depends on the old state.",
        ],
        answer: "When the new state depends on the old state.",
    },
    {
        id: 126,
        question: "A promise represents what?",
        options: [
            "A single value in the future",
            "Multiple values in the present",
            "Multiple values in the future",
            "A single value in the present",
        ],
        answer: "A single value in the future",
    },
    {
        id: 127,
        question: "Can a component be styled with a global styled sheet?",
        options: [
            "Only function components can be styled with a global styled sheet",
            "Only if the component returns HTML elements",
            "Yes",
            "No",
        ],
        answer: "Yes",
    },
    {
        id: 128,
        question:
            "When binding to data in templates, how do you avoid issues with binding to properties of null or undefined objects?",
        options: [
            "You don't need to worry about null objects, Angular will handle them gracefully.",
            "Use the * operator on any object that could be null.",
            "Use the ? operator on any object that could be null.",
            "Ensure the objects are never null.",
        ],
        answer: "Use the ? operator on any object that could be null.",
    },
    {
        id: 129,
        question: "Where should you sort and filter data?",
        options: [
            "In a directive",
            "In a pipe",
            "In your component",
            "In a filter",
        ],
        answer: "In your component",
    },
    {
        id: 130,
        question:
            "What's the right syntax to assign the function doSomething as the handler of a click event?",
        options: [
            "onClick={doSomething}",
            "onClick={() => doSomething}",
            "onClick={doSomething()}",
        ],
        answer: "onClick={doSomething}",
    },
    {
        id: 131,
        question:
            "Assuming you define the statement: var person: string; TypeScript will alert you that there is an error if you enter which additional code?",
        options: [
            "person = { name: 'Colleen', age: 25 }",
            "person = 0",
            "person = ['Colleen', 'John']",
            "All of the above",
        ],
        answer: "All of the above",
    },
    {
        id: 132,
        question:
            "When bootstrapping an Angular app, how do you specify the main, top-level app component to be used?",
        options: [
            "Add the component as a package in SystemJs config",
            "Load the component directly in index.html",
            "Add the component to the bootstrap array in your main app module",
            "Load the component from main.ts",
        ],
        answer: "Add the component to the bootstrap array in your main app module",
    },
    {
        id: 133,
        question:
            "What is the format of the data returned by the JSON Server API?",
        options: ["YAML", "XML", "JSON"],
        answer: "JSON",
    },
    {
        id: 134,
        question:
            "What syntax do you use to render the App component into an HTML element with id 'root'?",
        options: [
            "ReactDOM.render(App, document.getElementById('root'));",
            "React.render(App, document.getElementById('root'));",
            "ReactDOM.mountNode(<App />, document.getElementById('root'));",
            "ReactDOM.render(<App />, document.getElementById('root'));",
        ],
        answer: "ReactDOM.render(<App />, document.getElementById('root'));",
    },
    {
        id: 135,
        question:
            "What function can be used to change the state of a React component?",
        options: ["this.state = {}", "this.setState", "this.changeState"],
        answer: "this.setState",
    },
    {
        id: 136,
        question:
            "If components A and B are siblings and require access to the same state element, where should the state be placed?",
        options: [
            "In either A or B",
            "In a third sibling component",
            "In the parent component of A and B",
        ],
        answer: "In the parent component of A and B",
    },
    {
        id: 137,
        question:
            "What is the name of the file that manages TypeScript projects?",
        options: [
            "tsproj.config",
            "tsmeta.json",
            "tsconfig.json",
            "package.json",
        ],
        answer: "tsconfig.json",
    },
    {
        id: 138,
        question:
            "When dealing with asynchronous functions, what type of generic must your return type be?",
        options: ["Async", "Promise", "Array", "AsyncAwait"],
        answer: "Promise",
    },
    {
        id: 139,
        question: "What tool installs type declaration files?",
        options: ["Duck", "npm", "Ruby", "NuGet"],
        answer: "npm",
    },
    {
        id: 140,
        question:
            "What should appear to the left of the arrow in an arrow function?",
        options: [
            "Function name",
            "Function parameters",
            "Curly braces",
            "Function return value",
        ],
        answer: "Function parameters",
    },
    {
        id: 141,
        question:
            "We need to tell AngularJS what part of our HTML page contains the AngularJS app. You do so by adding the ______ attribute to the root HTML element.",
        options: ["ng-app", "ag-app", "js-app", "aj-app"],
        answer: "ng-app",
    },
    {
        id: 142,
        question:
            "AngularJS can show or hide HTML depending on the state of data in the model using directives such as ______.",
        options: [
            "ng-shown, ng-hidden",
            "ng-show, ng-hide",
            "nt-show, nt-hide",
            "ng-shows, ng-hides",
        ],
        answer: "ng-show, ng-hide",
    },
    {
        id: 143,
        question:
            "EventEmitter class’s simple interface encompasses two methods that can be used to trigger custom events and listen to events.",
        options: ["exit()", "superscript()", "subscribe()", "emit()"],
        answer: "subscribe()",
    },
    {
        id: 144,
        question:
            "The ______ directive substitutes the normal href property and is used to navigate between routes in Angular.",
        options: ["RouterLinks", "RouterLinking", "RouterLink", "RouterLinq"],
        answer: "RouterLink",
    },
    {
        id: 145,
        question: "Three main components of Routing are:",
        options: ["RouteObject", "RouterOutlet", "RouterState", "RouterLink"],
        answer: "RouteObject, RouterOutlet, RouterLink",
    },
    {
        id: 146,
        question:
            "Route ______ allow us to pass values in our URL to dynamically change view content.",
        options: ["pipes", "modules", "variables", "parameters"],
        answer: "parameters",
    },
    {
        id: 147,
        question:
            "To use observables, Angular uses a third-party library called ______.",
        options: [
            "ng2-bootstrap",
            "angular-cli",
            "numeral",
            "Reactive Extensions (RxJS)",
        ],
        answer: "Reactive Extensions (RxJS)",
    },
    {
        id: 148,
        question: "Observables help you manage ______ data.",
        options: [
            "synchronous",
            "asynchronous",
            "Both asynchronous & synchronous",
            "None of above",
        ],
        answer: "asynchronous",
    },
    {
        id: 149,
        question: "We subscribe to the observable using the ______ method.",
        options: ["subscribe()", "subs()", "subscribed()", "None of above"],
        answer: "subscribe()",
    },
    {
        id: 150,
        question:
            "A promise represents the final result of an ______ operation.",
        options: ["asynchronous", "synchronous"],
        answer: "asynchronous",
    },
    {
        id: 151,
        question: "The promise becomes ______ after resolving or rejecting.",
        options: ["mutable", "ignored", "immutable", "recurring"],
        answer: "immutable",
    },
    {
        id: 152,
        question: "Which of the following is not a built-in pipe in Angular?",
        options: ["DatePipe", "CurrencyPipe", "DataPipe", "PercentPipe"],
        answer: "DataPipe",
    },
    {
        id: 153,
        question:
            "If you chain multiple pipes together, they are executed ______.",
        options: [
            "in parallel",
            "LIFO order",
            "in the order in which you specify them",
            "none of above",
        ],
        answer: "in the order in which you specify them",
    },
    {
        id: 154,
        question:
            "The ______ filter waits for a promise and returns the most recent value received.",
        options: ["sync", "async", "promise", "custom"],
        answer: "async",
    },
    {
        id: 155,
        question:
            "The ______ decorator allows us to define the pipe name that is globally available.",
        options: ["@pipeName", "@pipeDeco", "$Pipe", "@Pipe"],
        answer: "@Pipe",
    },
    {
        id: 156,
        question:
            "Data bindings are applied as ______ or as special sequences of characters in strings.",
        options: [
            "expressions",
            "attributes on HTML elements",
            "elements itself",
            "none of above",
        ],
        answer: "attributes on HTML elements",
    },
    {
        id: 157,
        question: "A data binding has these four parts:",
        options: [
            "host element, curly brackets, target, expression",
            "host element, square brackets, target, evaluation",
            "host element, square brackets, target, expression",
            "host element, parentheses, target, expression",
        ],
        answer: "host element, square brackets, target, expression",
    },
    {
        id: 158,
        question:
            "Attribute binding is similar to property binding but is tied to the ______ rather than the DOM property.",
        options: [
            "Page attribute",
            "DOM attribute",
            "Root attribute",
            "HTML attribute",
        ],
        answer: "HTML attribute",
    },
    {
        id: 159,
        question:
            "To make your applications ready for animations, you must include the AngularJS Animate library and refer to the ______ module.",
        options: ["ng-repeat", "ngAnimation", "ngAnimate", "None of above"],
        answer: "ngAnimate",
    },
    {
        id: 160,
        question:
            "Using the ______ animation function, the parent animation can allow the child animation to run at the correct time.",
        options: ["animateChild", "childAnimate", "animateInner", "innerChild"],
        answer: "animateChild",
    },
    {
        id: 161,
        question:
            "Animations are fired using animation property bindings prefixed with which symbol?",
        options: ["&", "#", "$", "@"],
        answer: "@",
    },
    {
        id: 162,
        question:
            "Which animation-specific function is designed to be used inside Angular's animation DSL and kick off a reusable animation?",
        options: [
            "useAnimation",
            "reuseAnimation",
            "in-useAnimation",
            "All of above",
        ],
        answer: "useAnimation",
    },
    {
        id: 163,
        question:
            "It's possible to use animation input parameters by setting more data via the ______ property.",
        options: [
            "options.param",
            "option.params",
            "option.param",
            "options.params",
        ],
        answer: "options.params",
    },
    {
        id: 164,
        question:
            "Which Bootstrap styles are used to create a vertical pills navigation?",
        options: [
            ".nav, .nav-tabs",
            ".nav, .nav-pills",
            ".nav, .nav-pills, .nav-stacked",
            ".nav, .nav-tabs, .nav-justified",
        ],
        answer: ".nav, .nav-pills, .nav-stacked",
    },
    {
        id: 165,
        question:
            "Which Bootstrap styles are used to create a justified tabs navigation?",
        options: [
            ".nav, .nav-tabs",
            ".nav, .nav-pills",
            ".nav, .nav-pills, .nav-stacked",
            ".nav, .nav-tabs, .nav-justified",
        ],
        answer: ".nav, .nav-tabs, .nav-justified",
    },
    {
        id: 166,
        question: "Which class indicates a dropdown menu?",
        options: [".dropdown-list", ".select", ".dropdown"],
        answer: ".dropdown",
    },
    {
        id: 167,
        question:
            "Bootstrap’s grid system allows up to how many columns across the page?",
        options: ["6 columns", "12 columns", "16 columns", "24 columns"],
        answer: "12 columns",
    },
    {
        id: 168,
        question:
            "Which class makes an image automatically adjust to fit the size of the screen?",
        options: [
            ".img-res-image",
            ".img-responsive-image",
            ".img-responsive",
            ".img-res",
        ],
        answer: ".img-responsive",
    },
    {
        id: 169,
        question: "Which class should be used to indicate a button group?",
        options: ["btn-group-buttons", "btn-group", "btn-grp", "btn-buttons"],
        answer: "btn-group",
    },
    {
        id: 170,
        question: "Angular's square-bracket syntax ([]) signifies a ______.",
        options: [
            "property binding",
            "class binding",
            "style binding",
            "both A & B",
        ],
        answer: "property binding",
    },
    {
        id: 171,
        question:
            "What are the types of access modifiers supported by TypeScript?",
        options: ["Public", "Private", "Protected", "All of these"],
        answer: "All of these",
    },
    {
        id: 172,
        question:
            "The purpose of the @Output decorator in a nested component is to:",
        options: [
            "Expose an output channel for logging",
            "Expose an event property that a container can listen for using event binding",
            "Expose a property that a container can set using property binding",
        ],
        answer: "Expose an event property that a container can listen for using event binding",
    },
    {
        id: 173,
        question:
            "A function that adds metadata to a class, its members, or its method arguments is a:",
        options: ["Attribute", "Directive", "Annotation", "Decorator"],
        answer: "Decorator",
    },
    {
        id: 174,
        question:
            "What is the current recommended way to register a service with the root Angular injector?",
        options: [
            "Set the providedIn property of the Injectable decorator",
            "Set providedIn in Component decorator",
            "Declare the service in an Angular module",
            "Set providedIn in AppComponent",
        ],
        answer: "Set the providedIn property of the Injectable decorator",
    },
    {
        id: 175,
        question:
            "What does the Angular CLI do when you execute npm start/ng serve?",
        options: [
            "Builds the app for production",
            "Compiles the app and starts a web server",
            "Starts the default editor",
            "Installs dependencies",
        ],
        answer: "Compiles the app and starts a web server",
    },
    {
        id: 176,
        question: "What is the purpose of the *ngIf directive?",
        options: [
            "Hide/show elements using CSS",
            "Repeat a set of elements",
            "Navigate to another view",
            "Add or remove elements from the DOM based on an expression",
        ],
        answer: "Add or remove elements from the DOM based on an expression",
    },
    {
        id: 177,
        question: "Route definitions are configured in an array passed to:",
        options: [
            "AppModule method",
            "Routed component",
            "AppComponent",
            "RouterModule method",
        ],
        answer: "RouterModule method",
    },
    {
        id: 178,
        question:
            "What is the purpose of the subscribe method on an observable?",
        options: [
            "Map observable responses",
            "Transform observable stream",
            "Request logging",
            "Request notifications and data from the observable",
        ],
        answer: "Request notifications and data from the observable",
    },
    {
        id: 179,
        question: "What is the purpose of the Angular CLI?",
        options: [
            "Installing and running Angular apps",
            "Building, executing, testing, and deploying Angular apps",
            "Testing and deploying Angular apps",
            "Executing and debugging Angular apps",
        ],
        answer: "Building, executing, testing, and deploying Angular apps",
    },
    {
        id: 180,
        question: "What is the purpose of a feature module?",
        options: [
            "Define all logic in one place",
            "Separate responsibilities for a specific feature into its own module",
            "Consolidate system modules",
            "Provide services only",
        ],
        answer: "Separate responsibilities for a specific feature into its own module",
    },
    {
        id: 181,
        question:
            "Which of the following is the correct syntax for two-way binding?",
        options: [
            "([ngModel])='listFilter'",
            "[(ngModel)]='listFilter'",
            "{{listFilter}}",
            "ngModel='listFilter'",
        ],
        answer: "[(ngModel)]='listFilter'",
    },
    {
        id: 182,
        question:
            "When should you unsubscribe from a Subscription in Angular/RxJS?",
        options: ["No need to unsubscribe", "Unsubscribe in ngOnDestroy"],
        answer: "Unsubscribe in ngOnDestroy",
    },
    {
        id: 183,
        question:
            "When you apply an Angular pipe, it changes the value of the underlying component’s member variable.",
        options: ["TRUE", "FALSE"],
        answer: "FALSE",
    },
    {
        id: 184,
        question:
            "What’s the best way to inject one service into another in Angular?",
        options: [
            "Service cannot be injected into another service",
            "Through constructor of depending service",
            "Instantiate using new operator",
        ],
        answer: "Through constructor of depending service",
    },
    {
        id: 185,
        question: "In Angular, how can you set a header in every HTTP request?",
        options: [
            "Use HttpClientInterceptor",
            "Extend HttpClient class",
            "Set as request header parameter",
        ],
        answer: "Use HttpClientInterceptor",
    },
    {
        id: 186,
        question:
            "In Angular, you can pass data from parent component to child component using:",
        options: ["@Output()", "@Input()", "Input", "Output"],
        answer: "@Input()",
    },
    {
        id: 187,
        question:
            "In Angular, you can pass data from child component to parent component using:",
        options: ["@Output", "@Input", "Input", "Output"],
        answer: "@Output",
    },
    {
        id: 188,
        question:
            "In Angular, one can create a local HTML reference of an HTML tag using a variable which starts with character:",
        options: ["@", "#", "*", "&"],
        answer: "#",
    },
    {
        id: 189,
        question:
            "If you provide a service in two Angular components in the providers section of @Component decorator, how many instances of the service will be created?",
        options: ["4", "2", "3"],
        answer: "2",
    },
    {
        id: 190,
        question:
            "In Angular routing, which tag is used to show the selected route component dynamically?",
        options: [
            "<router></router>",
            "<router-output></router-output>",
            "<router-outlet></router-outlet>",
            "<router-input></router-input>",
        ],
        answer: "<router-outlet></router-outlet>",
    },
    {
        id: 191,
        question:
            "Which method of Angular RouterModule should be called for providing all routes in AppModule?",
        options: [
            "RouteModule.forChild",
            "RouteModule.forRoot",
            "RouterModule",
            "RouterModule.all",
        ],
        answer: "RouteModule.forRoot",
    },
    {
        id: 192,
        question:
            "In Angular, one can create local HTML reference or HTML tag using variable which starts with character:",
        options: ["@", "#", '"', "&"],
        answer: "#",
    },
    {
        id: 193,
        question:
            "Which of these Angular services can be injected in your component for dynamic mode navigation?",
        options: ["Routing", "RouterService", "RoutingService", "Router"],
        answer: "Router",
    },
    {
        id: 194,
        question:
            "In Angular, which of the following wildcard route paths will you use to define a 404 route?",
        options: ["**", "/", "##", "default"],
        answer: "**",
    },
    {
        id: 195,
        question:
            "To use the Angular HttpClient component, you must import the ______ module.",
        options: ["HttpClientModule", "HttpModule", "Http"],
        answer: "HttpClientModule",
    },
    {
        id: 196,
        question:
            "On the opposite side of event bindings (()) lie Angular's square-bracket syntax ([]) which signify a:",
        options: [
            "property binding",
            "class binding",
            "style binding",
            "both A & B",
        ],
        answer: "property binding",
    },
    {
        id: 197,
        question:
            "Expression Language is the part of Core Container in Spring Framework.",
        options: ["True", "False"],
        answer: "True",
    },
    {
        id: 198,
        question: "AOP is the part of Core Container in Spring Framework.",
        options: ["True", "False"],
        answer: "False",
    },
    {
        id: 199,
        question:
            "In which Spring version has Spring Expression Language been supported?",
        options: ["Spring 1.0", "Spring 2.0", "Spring 3.0", "Spring 4.0"],
        answer: "Spring 3.0",
    },
    {
        id: 200,
        question: "Which class represents the IoC container?",
        options: [
            "BeanFactory",
            "DispatcherServlet",
            "ApplicationContext",
            "ServletContext",
        ],
        answer: "ApplicationContext",
    },
    {
        id: 201,
        question: "How to get the object of DAO in Spring framework?",
        options: [
            "Using new operator",
            "Using Spring Dependency Injection",
            "Using static factory",
            "Using reflection",
        ],
        answer: "Using Spring Dependency Injection",
    },
    {
        id: 202,
        question: "Which is correct for Spring Framework?",
        options: [
            "Spring framework is a light-weight solution.",
            "Spring framework is a heavy-weight solution.",
            "Spring framework depends only on EJB.",
            "Spring framework cannot integrate with other frameworks.",
        ],
        answer: "Spring framework is a light-weight solution.",
    },
    {
        id: 203,
        question: "In which Spring version were Java 5 features introduced?",
        options: ["Spring 1.0", "Spring 2.0", "Spring 3.0", "Spring 4.0"],
        answer: "Spring 3.0",
    },
    {
        id: 204,
        question: "Can we integrate Spring with Struts?",
        options: ["Yes", "No"],
        answer: "Yes",
    },
    {
        id: 205,
        question: "How to use idref in Spring framework?",
        options: [
            "Only with setter method",
            "Only with constructor argument",
            "With setter method and constructor argument both",
        ],
        answer: "With setter method and constructor argument both",
    },
    {
        id: 206,
        question:
            "Which is the part of the Data Access layer in Spring Framework?",
        options: ["MVC", "AOP", "JMS", "Security"],
        answer: "JMS",
    },
    {
        id: 207,
        question: "Does Spring provide programmatic transaction management?",
        options: [
            "Yes using @Transactional",
            "Yes with TransactionTemplate class",
            "Yes with TransactionService class",
            "No",
        ],
        answer: "Yes with TransactionTemplate class",
    },
    {
        id: 208,
        question:
            "How could you externalize constants from a Spring configuration file into a .properties file?",
        options: [
            "Using <context:property-placeholder />",
            "Using <util:constant />",
            "Declaring ConstantPlaceholderConfigurer",
            "Using c: namespace",
        ],
        answer: "Using <context:property-placeholder />",
    },
    {
        id: 209,
        question:
            "To validate Java beans in a web application using annotations, which is used?",
        options: [
            "XML",
            "Java Based",
            "JAR-303 standard",
            "All of the mentioned",
        ],
        answer: "All of the mentioned",
    },
    {
        id: 210,
        question:
            "Annotation used to indicate a field has to have a minimum of 2 characters.",
        options: ["@NotNull", "@Size", "@MaxSize", "@size"],
        answer: "@Size",
    },
    {
        id: 211,
        question:
            "Spring MVC supports generating Excel files using which of the following libraries?",
        options: ["Apache POI", "JExcelAPI", "All of the mentioned", "None"],
        answer: "All of the mentioned",
    },
    {
        id: 212,
        question:
            "Interface for DispatcherServlet to auto detect view resolver beans.",
        options: [
            "LocaleResolver",
            "Tiles",
            "ViewResolver",
            "None of the mentioned",
        ],
        answer: "ViewResolver",
    },
    {
        id: 213,
        question:
            "By default, XmlViewResolver loads view beans from /WEB-INF/views.xml.",
        options: ["True", "False"],
        answer: "False",
    },
    {
        id: 214,
        question:
            "Views that cannot be resolved by InternalResourceViewResolver.",
        options: [
            "redirect",
            "redirect:prefix",
            "redirect:suffix",
            "all of the mentioned",
        ],
        answer: "redirect",
    },
    {
        id: 215,
        question:
            "Annotation which allows a controller’s field to be assigned using Spring Expression Language (SpEL).",
        options: ["@Value", "@After", "@Default", "@None"],
        answer: "@Value",
    },
    {
        id: 216,
        question: "SpEL statements are recognizable using which notation?",
        options: [
            "#{ SpEL statement }",
            "${ SpEL statement }",
            "@{ SpEL statement }",
            "%{ SpEL statement }",
        ],
        answer: "#{ SpEL statement }",
    },
    {
        id: 217,
        question: "To publish a REST service with Spring.",
        options: [
            "Publishing application data as REST",
            "Accessing data from third-party REST services",
            "None",
            "Both publishing and accessing REST",
        ],
        answer: "Both publishing and accessing REST",
    },
    {
        id: 218,
        question:
            "Publishing an application’s data as a REST service requires:",
        options: [
            "@RequestMapping",
            "@PathVariable",
            "All of the mentioned",
            "None",
        ],
        answer: "All of the mentioned",
    },
    {
        id: 219,
        question:
            "Annotation added as an input parameter to the handler method.",
        options: ["@PathVariable", "@Path", "@PathLocale", "None"],
        answer: "@PathVariable",
    },
    {
        id: 220,
        question:
            "Which statement is true regarding the @ResponseStatus annotation?",
        options: [
            "@ResponseStatus is detected on nested exceptions",
            "ExceptionHandlerExceptionResolver uses @ResponseStatus",
            "@ResponseStatus can go on @RequestMapping or @RestController class",
            "All of the above",
        ],
        answer: "@ResponseStatus is detected on nested exceptions",
    },
    {
        id: 221,
        question: "Default LocaleResolver used by Spring.",
        options: [
            "AcceptHeaderLocale",
            "AcceptHeader",
            "AcceptHeaderLocaleResolver",
            "AcceptLocaleResolver",
        ],
        answer: "AcceptHeaderLocaleResolver",
    },
    {
        id: 222,
        question: "Alternative way to resolve locales.",
        options: [
            "AcceptHeaderLocale",
            "AcceptHeader",
            "AcceptHeaderLocaleResolver",
            "SessionLocaleResolver",
        ],
        answer: "SessionLocaleResolver",
    },
    {
        id: 223,
        question:
            "General-purpose class that allows a response to be rendered using a marshaller.",
        options: [
            "MarshallingView",
            "Marshaling",
            "View",
            "All of the mentioned",
        ],
        answer: "MarshallingView",
    },
    {
        id: 224,
        question:
            "Annotation which allows the Jaxb2Marshaller to detect a class’s fields.",
        options: ["@XmlRootElement", "@XmlRoot", "@NotNull", "None"],
        answer: "@XmlRootElement",
    },
    {
        id: 225,
        question: "How to auto-inject into a field a Spring bean by its name?",
        options: [
            "Use @Autowired and @Qualifier",
            "Use only @Autowired and match field name",
            "Use name attribute of @Autowired",
            "Use only @Qualifier",
        ],
        answer: "Use @Autowired and @Qualifier",
    },
    {
        id: 226,
        question:
            "Considering two classes AccountServiceImpl and ClientServiceImpl, what is the result of pointcut expression combining both with &&?",
        options: [
            "No joint point is defined",
            "Matches update methods of both classes",
            "Matches any update methods",
            "Matches update methods with arguments",
        ],
        answer: "No joint point is defined",
    },
    {
        id: 227,
        question: "What is Advice?",
        options: [
            "An action taken by an aspect at a particular join point",
            "A predicate that matches join points",
            "A point during program execution",
            "An aspect and a pointcut",
        ],
        answer: "An action taken by an aspect at a particular join point",
    },
    {
        id: 228,
        question: "What is a Join point?",
        options: [
            "A point in your application where you can plug-in AOP aspect",
            "A set of join points",
            "An action to be executed",
            "A bean definition",
        ],
        answer: "A point in your application where you can plug-in AOP aspect",
    },
    {
        id: 229,
        question: "What is a Pointcut?",
        options: [
            "A predicate that matches join points",
            "An action to be taken",
            "A bean lifecycle method",
            "A dependency injection technique",
        ],
        answer: "A predicate that matches join points",
    },
    {
        id: 230,
        question: "What is the Target object in Spring AOP?",
        options: [
            "The object being advised by one or more aspects",
            "The IoC container",
            "The bean factory",
            "The proxy class",
        ],
        answer: "The object being advised by one or more aspects",
    },
    {
        id: 231,
        question: "What is Weaving?",
        options: [
            "Injecting dependencies",
            "Linking aspects with other application objects",
            "Bean initialization",
            "Bean destruction",
        ],
        answer: "Linking aspects with other application objects",
    },
    {
        id: 232,
        question: "How many types of dynamic proxies are available in Spring?",
        options: ["One", "Two", "Three", "Four"],
        answer: "Two",
    },
    {
        id: 233,
        question:
            "What are the types of transaction management Spring supports?",
        options: ["Programmatic", "Declarative", "Both", "None"],
        answer: "Both",
    },
    {
        id: 234,
        question: "By default, a bean is lazily loaded.",
        options: ["True", "False"],
        answer: "False",
    },
    {
        id: 235,
        question: "What is singleton scope?",
        options: [
            "Single instance per IoC container",
            "Single instance per HTTP request",
            "Single instance per session",
            "Multiple instances",
        ],
        answer: "Single instance per IoC container",
    },
    {
        id: 236,
        question: "What is prototype scope?",
        options: [
            "Single instance per container",
            "Multiple instances created each time",
            "Single instance per session",
            "Single instance per request",
        ],
        answer: "Multiple instances created each time",
    },
    {
        id: 237,
        question: "What is request scope?",
        options: [
            "Single instance per HTTP request",
            "Single instance per session",
            "Single instance per container",
            "Global instance",
        ],
        answer: "Single instance per HTTP request",
    },
    {
        id: 238,
        question: "What is session scope?",
        options: [
            "Single instance per HTTP session",
            "Single instance per request",
            "Single instance per container",
            "Prototype",
        ],
        answer: "Single instance per HTTP session",
    },
    {
        id: 239,
        question: "What is global-session scope?",
        options: [
            "Single instance per global session",
            "Single instance per container",
            "Prototype scope",
            "Request scope",
        ],
        answer: "Single instance per global session",
    },
    {
        id: 240,
        question: "What does @Required annotation indicate?",
        options: [
            "Property must be populated at configuration time",
            "Property must be stored in database",
            "Property is optional",
            "Property is serialized",
        ],
        answer: "Property must be populated at configuration time",
    },
    {
        id: 241,
        question: "What is true about BeanPostProcessor?",
        options: [
            "It is a concrete class",
            "It is an interface",
            "It is an abstract class",
            "None",
        ],
        answer: "It is an interface",
    },
    {
        id: 242,
        question: "What is DispatcherServlet?",
        options: [
            "Used for transaction management",
            "Used for AOP",
            "Handles all HTTP requests and responses",
            "Used for dependency injection",
        ],
        answer: "Handles all HTTP requests and responses",
    },
    {
        id: 243,
        question: "Where do you define DispatcherServlet?",
        options: [
            "Beans configuration file",
            "web.xml file",
            "META-INF/dispatcher.xml",
            "WEB-INF/dispatcher.xml",
        ],
        answer: "web.xml file",
    },
    {
        id: 244,
        question: "What is ACID in transactional management?",
        options: [
            "Accurate, Controlled, Isolation, Durability",
            "Atomicity, Consistency, Isolation, Durability",
            "Atomicity, Controlled, Independent, Done",
            "Accurate, Consistency, Isolation, Done",
        ],
        answer: "Atomicity, Consistency, Isolation, Durability",
    },
    {
        id: 245,
        question: "Which class is used to call Stored Procedures in Spring?",
        options: [
            "SPHelper",
            "JdbcTemplateCall",
            "JdbcTemplate",
            "SimpleJdbcCall",
        ],
        answer: "SimpleJdbcCall",
    },
    {
        id: 246,
        question: "Which class is used to execute SQL queries in Spring?",
        options: ["JDBCHelper", "JdbcTemplate", "DBHelper", "DBTemplate"],
        answer: "JdbcTemplate",
    },
    {
        id: 247,
        question: "Which ORM frameworks does Spring support?",
        options: ["Hibernate", "iBatis", "JPA", "All of the above"],
        answer: "All of the above",
    },
    {
        id: 248,
        question: "Which are the modules of the core container?",
        options: [
            "Beans, Core, Context, SpEL",
            "Core, Context, ORM, Web",
            "Core, Context, Aspects, Test",
            "Beans, Core, Context, Test",
        ],
        answer: "Beans, Core, Context, SpEL",
    },
    {
        id: 249,
        question: "Which are the modules of the Data Access/Integration layer?",
        options: [
            "JDBC, ORM, OXM, JMS, Transactions",
            "JDBC, ORM, OXM, JMS",
            "JDBC, ORM, Web, Beans",
            "JDBC, ORM, OXM",
        ],
        answer: "JDBC, ORM, OXM, JMS, Transactions",
    },
    {
        id: 250,
        question: "Which are the modules of the Web layer?",
        options: [
            "WebSocket, Servlet, Web, Portlet",
            "WebSocket, Servlet, Web-MVC, Web",
            "HTML, JSP, Web, Portlet",
            "Servlet, JSP, Web, Beans",
        ],
        answer: "WebSocket, Servlet, Web, Portlet",
    },
    {
        id: 251,
        question: "Which types of Dependency Injection does Spring support?",
        options: [
            "Constructor based, Setter based",
            "Constructor, Setter, Getter",
            "Setter, Getter, Properties",
            "Constructor, Setter, Properties",
        ],
        answer: "Constructor based, Setter based",
    },
    {
        id: 252,
        question: "Which are the IoC containers in Spring?",
        options: [
            "BeanFactory, ApplicationContext",
            "BeanFactory, IocContextFactory",
            "ApplicationContext, BeanContext",
            "ServletContext, ApplicationContext",
        ],
        answer: "BeanFactory, ApplicationContext",
    },
    {
        id: 253,
        question: "What is bean scope?",
        options: [
            "Forces Spring to produce a new bean instance as per scope defined",
            "Defines accessibility of bean in class",
            "Defines accessibility of bean in package",
            "Defines accessibility in web app",
        ],
        answer: "Forces Spring to produce a new bean instance as per scope defined",
    },
    {
        id: 254,
        question: "What is no mode of autowiring?",
        options: [
            "Default setting meaning no autowiring",
            "Autowiring by property name",
            "Autowiring by constructor",
            "Autowiring by type",
        ],
        answer: "Default setting meaning no autowiring",
    },
    {
        id: 255,
        question: "What is byName mode of autowiring?",
        options: [
            "Match bean property name with bean id",
            "Match bean type",
            "Match constructor argument type",
            "No autowiring",
        ],
        answer: "Match bean property name with bean id",
    },
    {
        id: 256,
        question: "What is byType mode of autowiring?",
        options: [
            "Match property type with bean type",
            "Match bean name",
            "Match constructor only",
            "Disable autowiring",
        ],
        answer: "Match property type with bean type",
    },
    {
        id: 257,
        question: "What is autodetect mode in autowiring?",
        options: [
            "Autowiring by constructor or byType automatically",
            "Autowiring by name only",
            "Disable autowiring",
            "Autowiring by annotation only",
        ],
        answer: "Autowiring by constructor or byType automatically",
    },
    {
        id: 258,
        question:
            "Which interface is used to get callback after bean initialization?",
        options: [
            "InitializingBean",
            "DisposableBean",
            "BeanFactoryAware",
            "ApplicationContextAware",
        ],
        answer: "InitializingBean",
    },
    {
        id: 259,
        question:
            "Which interface is used to get callback before bean destruction?",
        options: [
            "InitializingBean",
            "DisposableBean",
            "BeanFactoryAware",
            "LifecycleBean",
        ],
        answer: "DisposableBean",
    },
    {
        id: 260,
        question:
            "Which event is published when ApplicationContext is initialized or refreshed?",
        options: [
            "ContextStartedEvent",
            "ContextStoppedEvent",
            "ContextRefreshedEvent",
            "ContextClosedEvent",
        ],
        answer: "ContextRefreshedEvent",
    },
    {
        id: 261,
        question: "Which event is published when ApplicationContext is closed?",
        options: [
            "ContextStoppedEvent",
            "ContextClosedEvent",
            "ContextRefreshedEvent",
            "ContextStartedEvent",
        ],
        answer: "ContextClosedEvent",
    },
    {
        id: 262,
        question: "Which advice type runs before a join point?",
        options: [
            "After advice",
            "Around advice",
            "Before advice",
            "Throws advice",
        ],
        answer: "Before advice",
    },
    {
        id: 263,
        question:
            "Which advice type runs after a join point completes successfully?",
        options: [
            "After returning advice",
            "After throwing advice",
            "Around advice",
            "Before advice",
        ],
        answer: "After returning advice",
    },
    {
        id: 264,
        question:
            "Which advice type runs if a method exits by throwing an exception?",
        options: [
            "After returning advice",
            "After throwing advice",
            "Before advice",
            "Around advice",
        ],
        answer: "After throwing advice",
    },
    {
        id: 265,
        question:
            "Which advice surrounds a join point and can control method execution?",
        options: [
            "Before advice",
            "After advice",
            "Around advice",
            "Throws advice",
        ],
        answer: "Around advice",
    },
    {
        id: 266,
        question: "Which proxy types are supported by Spring AOP?",
        options: ["JDK Dynamic Proxy", "CGLIB Proxy", "Both", "None"],
        answer: "Both",
    },
    {
        id: 267,
        question: "Which annotation is used to define a Spring MVC controller?",
        options: ["@Service", "@Component", "@Controller", "@Repository"],
        answer: "@Controller",
    },
    {
        id: 268,
        question: "Which annotation indicates a class is a DAO component?",
        options: ["@Service", "@Repository", "@Controller", "@ComponentScan"],
        answer: "@Repository",
    },
    {
        id: 269,
        question: "Which annotation is used for automatic component scanning?",
        options: ["@ComponentScan", "@Scan", "@AutoScan", "@ComponentAuto"],
        answer: "@ComponentScan",
    },
    {
        id: 270,
        question: "How can you register a shutdown hook in Spring?",
        options: [
            "registerShutdownHook() method",
            "closeContext() method",
            "destroyBean() method",
            "terminate() method",
        ],
        answer: "registerShutdownHook() method",
    },
    {
        id: 271,
        question:
            "Which annotation enables AspectJ auto proxy support in Spring?",
        options: [
            "@EnableAOP",
            "@EnableAspectJAutoProxy",
            "@AspectEnable",
            "@EnableProxy",
        ],
        answer: "@EnableAspectJAutoProxy",
    },
];
