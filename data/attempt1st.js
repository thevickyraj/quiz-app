export const questionBank = [
    
  {
    "id": 1,
    "question": "Whenever you are assigning two classes to a tag, you must separate them with a",
    "options": [
      "Space",
      "Comma",
      "Dash"
    ],
    "answer": "Space"
  },
  {
    "id": 2,
    "question": "____________ contains the navigation menu, or other navigation functionality for the page",
    "options": [
      "section",
      "header",
      "nav",
      "aside"
    ],
    "answer": "nav"
  },
  {
    "id": 3,
    "question": "Which of the following properties sets the distance between an element’s right border and the rightmost edge of its content?",
    "options": [
      "auto",
      "padding-left",
      "padding-right",
      "Padding-top"
    ],
    "answer": "padding-right"
  },
  {
    "id": 4,
    "question": "What built-in function allows you to convert a string into an integer?",
    "options": [
      "toInt()",
      "parseInt()",
      "toInteger()",
      "parseString()"
    ],
    "answer": "parseInt()"
  },
  {
    "id": 5,
    "question": "What is a function in JavaScript?",
    "options": [
      "An instance of a class",
      "A statement that evaluates an expression",
      "A block of organized, reusable code that performs a single action",
      "Code that allows us to write loops"
    ],
    "answer": "A block of organized, reusable code that performs a single action"
  },
  {
    "id": 6,
    "question": "What is the output of the following?\ngreet = function(...months){ months.forEach(month => console.log('Month: ' + month));}\ngreet([ 'Jan', 'Feb']);",
    "options": [
      "Jan Feb",
      "ReferenceError",
      "Month: Jan,Feb",
      "Month: Jan E. Month: Feb"
    ],
    "answer": "Month: Jan,Feb"
  },
  {
    "id": 7,
    "question": "What is the output of the following?\nfunction display(num1, num2) { console.log(num1, num2);}\nlet nums = '12345';\ndisplay(...nums);",
    "options": [
      "1 2",
      "21",
      "12345",
      "45"
    ],
    "answer": "1 2"
  },
  {
    "id": 8,
    "question": "What is the console output of the following code block:\nfunction printName() { name = 'Mary'; name = 'John'; console.log(name); }",
    "options": [
      "Empty",
      "None",
      "John",
      "Mary"
    ],
    "answer": "John"
  },
  {
    "id": 9,
    "question": "Babel compiles the JavaScript code you write into",
    "options": [
      "ECMAScript 5",
      "ECMAScript 7",
      "ECMAScript 3",
      "ECMAScript 6"
    ],
    "answer": "ECMAScript 5"
  },
  {
    "id": 10,
    "question": "The string 'api/route' in Express is an example of a...",
    "options": [
      "Middleware",
      "Route",
      "Error Handler"
    ],
    "answer": "Route"
  },
  {
    "id": 11,
    "question": "Which library allows the use of the 'require' keyword in front-end code?",
    "options": [
      "guid",
      "Browserify",
      "React",
      "jQuery"
    ],
    "answer": "Browserify"
  },
  {
    "id": 12,
    "question": "The ______ attribute of a React form is called when the main action button inside the form is pressed.",
    "options": [
      "onSubmit",
      "onChange",
      "onComplete"
    ],
    "answer": "onSubmit"
  },
  {
    "id": 13,
    "question": "Which of the following are automation tools?",
    "options": [
      "Gulp",
      "JSX",
      "Express"
    ],
    "answer": "Gulp"
  },
  {
    "id": 14,
    "question": "What React function is used to define a new element tag?",
    "options": [
      "renderComponent",
      "createClass",
      "setInnerHTML"
    ],
    "answer": "createClass"
  },
  {
    "id": 15,
    "question": "True or false: The only thing that can change the data inside a store is the store itself.",
    "options": [
      "false",
      "true"
    ],
    "answer": "true"
  },
  {
    "id": 16,
    "question": "The Gulp task which takes a stream and outputs a file is...",
    "options": [
      "src",
      "task",
      "dest"
    ],
    "answer": "dest"
  },
  {
    "id": 17,
    "question": "The best way to detect when a user has completed a form is",
    "options": [
      "to handle the onClick event on the form's submit element",
      "to handle the onBlur event of the last form element",
      "to handle the form's onSubmit event",
      "to accumulate the onChange events for each form element"
    ],
    "answer": "to handle the form's onSubmit event"
  },
  {
    "id": 18,
    "question": "Behavior is shared between components using",
    "options": [
      "propTypes",
      "state",
      "mixins",
      "props"
    ],
    "answer": "mixins"
  },
  {
    "id": 19,
    "question": "Which of the following API is a MUST for every React Component?",
    "options": [
      "getInitialState",
      "render",
      "renderComponent"
    ],
    "answer": "renderComponent"
  },
  {
    "id": 20,
    "question": "What are the advantages of React?",
    "options": [
      "React can be used on client as well as server side.",
      "Using React increases readability and makes maintainability easier. Component and Data patterns improve readability and thus make it easier for maintaining larger props.",
      "React can be used with any other framework (Backbone.js, Angular.js) as it is just a View Layer.",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 21,
    "question": "What is React in MVC?",
    "options": [
      "Controller",
      "Middleware",
      "Model",
      "Router"
    ],
    "answer": "Controller"
  },
  {
    "id": 22,
    "question": "What is React?",
    "options": [
      "Just a server-side framework",
      "Just a user-interface framework",
      "Both a server-side framework as well as a user-interface framework"
    ],
    "answer": "Both a server-side framework as well as a user-interface framework"
  },
  {
    "id": 23,
    "question": "What are the limitations of React?",
    "options": [
      "React is only for the view layer of the app so we still need the help of other technologies to get a complete tooling set for development.",
      "React uses inline templating and JSX. This can seem awkward to some developers.",
      "The library of React is too large.",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 24,
    "question": "Event Emitter class’s simple interface, which basically encompass two methods, can therefore be used to trigger custom events and listen to events as well, both synchronously or asynchronously.",
    "options": [
      "exit()",
      "superscript()",
      "subscribe()",
      "emit()"
    ],
    "answer": "subscribe()"
  }, 
   {
    "id": 25,
    "question": "The . . . . . . . . . directive substitutes the normal href property and makes it easier to work with route links in Angular 2. Moreover if we want to navigate between routes, we use the . . . . . . . . . . . directive.",
    "options": [
      "RouterLinks",
      "RouterLinking",
      "RouterLink",
      "RouterLinq"
    ],
    "answer": "RouterLink"
  },
  {
    "id": 26,
    "question": "Route . . . . . . . . . . allow us to pass values in our url to our component so we can dynamically change our view content.",
    "options": [
      "pipes",
      "modules",
      "variables",
      "parameters"
    ],
    "answer": "parameters"
  },
  {
    "id": 27,
    "question": "Observables help you manage . . . . . . . . data.",
    "options": [
      "synchronous",
      "asynchronous",
      "Both asynchronous & synchronous",
      "None of above"
    ],
    "answer": "asynchronous"
  },
  {
    "id": 28,
    "question": "The promise becomes . . . . . . after resolving or rejecting.",
    "options": [
      "mutable",
      "ignored",
      "immutable",
      "recurring"
    ],
    "answer": "immutable"
  },
  {
    "id": 29,
    "question": "Which of the following is not built-in pipe in Angular?",
    "options": [
      "DatePipe",
      "CurrencyPipe",
      "DataPipe",
      "PercentPipe"
    ],
    "answer": "DataPipe"
  },
  {
    "id": 30,
    "question": "The . . . . . decorator allows us to define the pipe name that is globally available for use in any template across the application.",
    "options": [
      "@pipeName",
      "@pipeDeco",
      "$Pipe",
      "@Pipe"
    ],
    "answer": "@Pipe"
  },
  {
    "id": 31,
    "question": "Attribute binding is similar to property binding but is tied to the . . . . . . . . rather than the DOM property.",
    "options": [
      "Page attribute",
      "DOM attribute",
      "Root attribute",
      "HTML attribute"
    ],
    "answer": "HTML attribute"
  },
  {
    "id": 32,
    "question": "It's always possible to make use of animation input parameters by setting even more data via the . . . . .property.",
    "options": [
      "options.param",
      "option.params",
      "option.param",
      "options.params"
    ],
    "answer": "options.params"
  },
  {
    "id": 33,
    "question": "Bootstrap’s grid system allows up to",
    "options": [
      "6 columns across the page",
      "12 columns across the page",
      "columns across the page",
      "columns across the page"
    ],
    "answer": "12 columns across the page"
  },
  {
    "id": 34,
    "question": "Which of the following classes makes a round corner image automatically adjust to fit the size of the screen?",
    "options": [
      ".img-res-image",
      ".img-responsive-image * img-fluid (for full width responsible)",
      ".img-responsive",
      ".img-res"
    ],
    "answer": ".img-responsive"
  },
  {
    "id": 35,
    "question": "What are the types of access modifiers supported by TypeScript?",
    "options": [
      "Public",
      "Private",
      "Protected",
      "All of these"
    ],
    "answer": "All of these"
  },
  {
    "id": 36,
    "question": "What is the purpose of the *ngIf directive?",
    "options": [
      "To use style classes to hide or show elements based on an expression",
      "To repeat a set of elements based on an expression",
      "To optionally navigate to another view based on an expression",
      "To add or remove elements from the DOM based on an expression"
    ],
    "answer": "To add or remove elements from the DOM based on an expression"
  },
  {
    "id": 37,
    "question": "In Angular, one can create a local HTML reference of an HTML tag using a variable, which starts with character ___",
    "options": [
      "@",
      "#",
      "*",
      "&"
    ],
    "answer": "#"
  },
  {
    "id": 38,
    "question": "In Angular routing, which of these tags is used to show the selected route component dynamically?",
    "options": [
      "<router></router>",
      "<router-output></router-output>",
      "<router-outlet></router-outlet>",
      "<router-input></router-input>"
    ],
    "answer": "<router-outlet></router-outlet>"
  },
  {
    "id": 39,
    "question": "What is Spring MVC framework?",
    "options": [
      "Spring MVC framework is Model-Value-Class architecture and used to bind model data with values.",
      "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.",
      "Spring MVC framework is used for Transaction management for Web Applications.",
      "Spring MVC framework is used for AOP for Web Applications."
    ],
    "answer": "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications."
  },
  {
    "id": 40,
    "question": "Which of the following is not a valid difference between @Inject and @Autowired annotations?",
    "options": [
      "There is no difference and both can be used interchangeably.",
      "@Autowired is a legacy annotation whereas @Inject is its latest version.",
      "@Inject annotation is part of Java EE 7’s Context and Dependency Injection framework while @Autowired is the Spring Frameworks own implementation.",
      "None of these"
    ],
    "answer": "@Autowired is a legacy annotation whereas @Inject is its latest version."
  },
  {
    "id": 41,
    "question": "What are the ways to access Hibernate by using Spring?",
    "options": [
      "Inversion of Control with a Hibernate Template and Callback.",
      "Extending HibernateDAOSupport and Applying an AOP Interceptor node.",
      "Both of above.",
      "None of above."
    ],
    "answer": "Both of above."
  }, 
   {
    "id": 42,
    "question": "Which ORM Spring supports?",
    "options": [
      "Hibernate",
      "iBatis",
      "JPA",
      "All of above",
      "None of above"
    ],
    "answer": "All of above"
  },
  {
    "id": 43,
    "question": "Which of the following database is not supported using jdbcTemplate?",
    "options": [
      "MySql",
      "PostgresSql",
      "NoSql",
      "Oracle"
    ],
    "answer": "NoSql"
  },
  {
    "id": 44,
    "question": "Can we integrate Struts with Spring?",
    "options": [
      "Yes",
      "No"
    ],
    "answer": "Yes"
  },
  {
    "id": 45,
    "question": "By default a bean is lazily loaded?",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 46,
    "question": "What is the scope of stateless beans?",
    "options": [
      "global-session",
      "singleton",
      "prototype",
      "request"
    ],
    "answer": "singleton"
  },
  {
    "id": 47,
    "question": "Annotation to add security to your Spring Boot app?",
    "options": [
      "@EnableWebSecurity",
      "@EnableSecurity",
      "@EnableSpringSecurity"
    ],
    "answer": "@EnableWebSecurity"
  },
  {
    "id": 48,
    "question": "LoggerInterceptor which implements the HandlerInterceptor will override which following methods?",
    "options": [
      "preHandlerBean(), postHandlerBean(), afterCompletion()",
      "PreProcessHandler(), PostProcessHandler(), afterCompletion()",
      "PreHandler(), PostHandler(), afterCompletion()",
      "none"
    ],
    "answer": "PreHandler(), PostHandler(), afterCompletion()"
  },
  {
    "id": 49,
    "question": "In MongoDB, what is the equivalent of SQL term row?",
    "options": [
      "Primary Key",
      "Index",
      "Field",
      "Document"
    ],
    "answer": "Document"
  },
  {
    "id": 50,
    "question": "Which of the following code will give an error on the MongoDB command shell?",
    "options": [
      "use databasename",
      "show dbs",
      "USE databasename",
      "Db"
    ],
    "answer": "USE databasename"
  },
  {
    "id": 51,
    "question": "What theorem or principle does MongoDB follow?",
    "options": [
      "APAC",
      "Always-Sync",
      "ASCII",
      "CAP"
    ],
    "answer": "CAP"
  },
  {
    "id": 52,
    "question": "What method is used to remove a single item from a MongoDB collection?",
    "options": [
      "db.collection.deleteOne()",
      "db.collection.delete()",
      "db.collection.removeOne()",
      "db.collection.remove()"
    ],
    "answer": "db.collection.deleteOne()"
  },
  {
    "id": 53,
    "question": "What is continuous testing?",
    "options": [
      "Testing continuously for 24 hours",
      "Manually testing each build, end-to-end Automated testing",
      "Automated testing",
      "Automated testing on each continuous deployment"
    ],
    "answer": "Automated testing on each continuous deployment"
  },
  {
    "id": 54,
    "question": "Shift-left concept refers to moving everything to the earlier phase in the ________ cycle.",
    "options": [
      "Requirement",
      "Development",
      "Design",
      "Testing"
    ],
    "answer": "Development"
  },
  {
    "id": 55,
    "question": "In Kubernetes, a node is:",
    "options": [
      "A worker machine",
      "A tool for starting a Kubernetes cluster on a local machine",
      "A machine that coordinates the scheduling and management of application containers on the cluster",
      "A virtual machine"
    ],
    "answer": "A worker machine"
  },
  {
    "id": 56,
    "question": "GIT can be integrated with Jenkins.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 57,
    "question": "Which Annotation is used to refer to Pointcuts?",
    "options": [
      "@PointCut",
      "@PointCutExecution",
      "@PointCutBefore"
    ],
    "answer": "@PointCut"
  },
  {
    "id": 58,
    "question": "Which element is used to restrict the access to a particular URL within Spring Security?",
    "options": [
      "restrict-url",
      "intercept-url",
      "intercept-restrict"
    ],
    "answer": "intercept-url"
  },
  {
    "id": 59,
    "question": "Which annotation is used to create Primary KEY : Foreign KEY relation between two tables?",
    "options": [
      "ForeignKey",
      "JoinedKey",
      "JoinColumn"
    ],
    "answer": "JoinColumn"
  },
  {
    "id": 60,
    "question": "You can only use Hibernate in ORM in Spring Boot Applications.",
    "options": [
      "TRUE",
      "FALSE"
    ],
    "answer": "FALSE"
  },
  {
    "id": 61,
    "question": "A logger location where logging information is sent is called",
    "options": [
      "appender",
      "logger",
      "component"
    ],
    "answer": "appender"
  },
  {
    "id": 62,
    "question": "By default, a bean is lazily loaded in Spring.",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 63,
    "question": "Identify the incorrect statement on MongoDB.",
    "options": [
      "Secondary Indices are not available in MongoDB.",
      "MongoDB supports search by field, range queries and regular expression matches.",
      "MongoDB can store the business subject in the minimal number of documents."
    ],
    "answer": "Secondary Indices are not available in MongoDB."
  },
  {
    "id": 64,
    "question": "Identify the correct statement in MongoDB.",
    "options": [
      "Queries specify criteria, or conditions, which identify the documents that MongoDB returns to the clients.",
      "Write Operations, or queries, retrieve data stored in the database.",
      "The selection limits the amount of data that MongoDB returns to the client over the network."
    ],
    "answer": "Queries specify criteria, or conditions, which identify the documents that MongoDB returns to the clients."
  },
  {
    "id": 65,
    "question": "What is the command line tool introduced for the JS engine in Java 8?",
    "options": [
      "jjs",
      "jss",
      "jfs",
      "jbd"
    ],
    "answer": "jjs"
  },
  {
    "id": 66,
    "question": "Which of the following statements is true about microservices architecture?",
    "options": [
      "Microservices applications are required to be deployed on the same physical host.",
      "Microservices architecture supports high availability of individual microservices.",
      "Microservices cannot be used if a company is embracing DevOps.",
      "Microservices are designed using a bounded context that can communicate with other bounded contexts."
    ],
    "answer": "All of the above"
  },
  {
    "id": 67,
    "question": "Load Balancing improves the distribution of workloads across multiple computing resources, such as computers or a computer cluster.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 68,
    "question": "Which CSS property is used to change the font of an element?",
    "options": [
      "font",
      "font-family",
      "font-style",
      "font-weight"
    ],
    "answer": "font-family"
  },
  {
    "id": 69,
    "question": "The Bootstrap grid system is based on how many columns?",
    "options": [
      "12",
      "3",
      "6",
      "9"
    ],
    "answer": "12"
  },
  {
    "id": 70,
    "question": "Choose the correct HTML element to define important text.",
    "options": [
      "<strong>",
      "<important>",
      "<b>",
      "<pre>"
    ],
    "answer": "<strong>"
  },
  {
    "id": 71,
    "question": "Which is the correct CSS Syntax?",
    "options": [
      "body color-black",
      "{body color-black}",
      "body {color:black;}",
      "{body;color;black}"
    ],
    "answer": "body {color:black;}"
  },
  {
    "id": 72,
    "question": "How can you detect the client’s browser name in Javascript?",
    "options": [
      "class.navName",
      "navigator.appName",
      "browser.name",
      "window.browser"
    ],
    "answer": "navigator.appName"
  },
  {
    "id": 73,
    "question": "To use the Angular HttpClient component, you must import the ____ module.",
    "options": [
      "HttpClientModule",
      "HttpModule",
      "Http"
    ],
    "answer": "HttpClientModule"
  },
  {
    "id": 74,
    "question": "In Angular, one can create local HTML reference of an HTML tag using a variable which starts with character ____",
    "options": [
      "@",
      "#",
      "\"",
      "&"
    ],
    "answer": "#"
  }, 
   {
    "id": 75,
    "question": "Which of these Angular services can be injected in your component to enable dynamic mode navigation?",
    "options": [
      "Routing",
      "RouterService",
      "RoutingService",
      "Router"
    ],
    "answer": "Router"
  },
  {
    "id": 76,
    "question": "In Angular, which of the following wild card route paths will you use to define a 404 route?",
    "options": [
      "**",
      "/",
      "##",
      "default"
    ],
    "answer": "**"
  }, 
  

]