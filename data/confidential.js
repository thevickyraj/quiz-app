export const questionBank = [
    
  {
    "id": 1,
    "question": "Which tag is used to define a clickable image map in HTML5?",
    "options": [
      "<map>",
      "<area>",
      "<img>",
      "<figure>"
    ],
    "answer": "<map>"
  },
  {
    "id": 2,
    "question": "What is the effect of display: flex; justify-content: space-between;?",
    "options": [
      "Aligns children vertically with equal spacing",
      "Aligns children horizontally with space between them",
      "Centers children horizontally",
      "Stacks children in a column"
    ],
    "answer": "Aligns children horizontally with space between them"
  },
  {
    "id": 3,
    "question": "What is the output?\nconsole.log(5 + \"5\");",
    "options": [
      "10",
      "\"55\"",
      "25",
      "Error"
    ],
    "answer": "\"55\""
  },
  {
    "id": 4,
    "question": "Which method is used to add an event listener?",
    "options": [
      "addEvent()",
      "attachEvent()",
      "addEventListener()",
      "onEvent()"
    ],
    "answer": "addEventListener()"
  },
  {
    "id": 5,
    "question": "Which property keeps a background image fixed while scrolling?",
    "options": [
      "background-repeat: no-repeat",
      "background-attachment: fixed",
      "background-position: center",
      "background-size: cover"
    ],
    "answer": "background-attachment: fixed"
  },
  {
    "id": 6,
    "question": "What is the purpose of the useState hook?",
    "options": [
      "Fetch data from API",
      "Manage state in functional components",
      "Handle side effects",
      "Create context"
    ],
    "answer": "Manage state in functional components"
  },
  {
    "id": 7,
    "question": "What does this render?\nreturn <h1>{undefined}</h1>;",
    "options": [
      "Nothing (empty string)",
      "\"undefined\"",
      "Error",
      "null"
    ],
    "answer": "Nothing (empty string)"
  },
  {
    "id": 8,
    "question": "Which hook performs side effects?",
    "options": [
      "useEffect",
      "useReducer",
      "useContext",
      "useCallback"
    ],
    "answer": "useEffect"
  },
  {
    "id": 9,
    "question": "How do you pass data from parent to child?",
    "options": [
      "Using state",
      "Using props",
      "Using context",
      "Using hooks"
    ],
    "answer": "Using props"
  },
  {
    "id": 10,
    "question": "Correct way to update state?\nconst [user, setUser] = useState({ name:\"John\", age:30 });",
    "options": [
      "setUser({ name:\"Jane\" })",
      "setUser({ ...user, name:\"Jane\" })",
      "user.name=\"Jane\"",
      "setUser(user.name=\"Jane\")"
    ],
    "answer": "setUser({ ...user, name:\"Jane\" })"
  }, 
   {
    "id": 11,
    "question": "Purpose of key prop in a list?",
    "options": [
      "Styling",
      "Identifying unique elements for efficient rendering",
      "Handling events",
      "Managing state"
    ],
    "answer": "Identifying unique elements for efficient rendering"
  },
  {
    "id": 12,
    "question": "Lifecycle method replaced by useEffect?",
    "options": [
      "componentDidMount",
      "render",
      "constructor",
      "setState"
    ],
    "answer": "componentDidMount"
  },
  {
    "id": 13,
    "question": "What does JSX stand for?",
    "options": [
      "JavaScript XML",
      "JavaScript Extension",
      "JSON XML",
      "Java Syntax"
    ],
    "answer": "JavaScript XML"
  },
  {
    "id": 14,
    "question": "How to create a ref in functional component?",
    "options": [
      "const ref = useRef();",
      "const ref = createRef();",
      "const ref = useState();",
      "const ref = useEffect();"
    ],
    "answer": "const ref = useRef();"
  },
  {
    "id": 15,
    "question": "If count = 0, output?\nuseEffect(() => {\nsetCount(count + 1);\n}, []);",
    "options": [
      "0",
      "1",
      "2",
      "Infinite loop"
    ],
    "answer": "1"
  },
  {
    "id": 16,
    "question": "Primary key in MongoDB document?",
    "options": [
      "_id",
      "id",
      "key",
      "index"
    ],
    "answer": "_id"
  },
  {
    "id": 17,
    "question": "Find users where age > 25?",
    "options": [
      "db.users.find({ age: { $gt: 25 } })",
      "db.users.find({ age: { $gte: 25 } })",
      "db.users.find({ age: { $lt: 25 } })",
      "db.users.find({ age: 25 })"
    ],
    "answer": "db.users.find({ age: { $gt: 25 } })"
  },
  {
    "id": 18,
    "question": "What does $push do?",
    "options": [
      "Replace field",
      "Add element to an array",
      "Remove element",
      "Update field"
    ],
    "answer": "Add element to an array"
  },
  {
    "id": 19,
    "question": "Which index improves query performance?",
    "options": [
      "Compound index",
      "Text index",
      "Unique index",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 20,
    "question": "Purpose of *ngFor?",
    "options": [
      "Conditional display",
      "Iterate over a list",
      "Data binding",
      "Form submission"
    ],
    "answer": "Iterate over a list"
  },
  {
    "id": 21,
    "question": "Decorator defining component?",
    "options": [
      "@Component",
      "@Directive",
      "@NgModule",
      "@Injectable"
    ],
    "answer": "@Component"
  },
  {
    "id": 22,
    "question": "Output:\n<div *ngIf=\"false\">Hello</div>",
    "options": [
      "Hello",
      "Nothing",
      "Error",
      "false"
    ],
    "answer": "Nothing"
  },
  {
    "id": 23,
    "question": "How to inject service?",
    "options": [
      "Using @Inject",
      "In constructor",
      "Using @Service",
      "In template"
    ],
    "answer": "In constructor"
  },
  {
    "id": 24,
    "question": "What does FormBuilder simplify?",
    "options": [
      "HTTP requests",
      "Reactive forms creation",
      "Template rendering",
      "Dependency injection"
    ],
    "answer": "Reactive forms creation"
  },
  {
    "id": 25,
    "question": "Module for HTTP requests?",
    "options": [
      "HttpClientModule",
      "FormsModule",
      "RouterModule",
      "CommonModule"
    ],
    "answer": "HttpClientModule"
  },
  {
    "id": 26,
    "question": "Output?\nint x = 5;\nSystem.out.println(x++ + ++x);",
    "options": [
      "10",
      "11",
      "12",
      "13"
    ],
    "answer": "12"
  },
  {
    "id": 27,
    "question": "String s1=\"Hello\";\nString s2=new String(\"Hello\");\nSystem.out.println(s1==s2);",
    "options": [
      "true",
      "false",
      "Error",
      "null"
    ],
    "answer": "false"
  },
  {
    "id": 28,
    "question": "List<Integer> list=new ArrayList<>();\nlist.add(1);\nlist.add(2);\nlist.remove(Integer.valueOf(1));\nSystem.out.println(list);",
    "options": [
      "[1,2]",
      "[2]",
      "[]",
      "Error"
    ],
    "answer": "[2]"
  },
  {
    "id": 29,
    "question": "static int x=10;\nTest t=new Test();\nt.x=20;\nSystem.out.println(Test.x);",
    "options": [
      "10",
      "20",
      "30",
      "Error"
    ],
    "answer": "20"
  },
  {
    "id": 30,
    "question": "int[] arr={1,2};\nSystem.out.println(arr[2]); with try-catch.",
    "options": [
      "1",
      "2",
      "Error",
      "null"
    ],
    "answer": "Error"
  }, 
   {
    "id": 31,
    "question": "Java: What is the purpose of the final keyword?",
    "options": [
      "Prevents method overriding",
      "Allows dynamic binding",
      "Enables garbage collection",
      "Permits multiple inheritance"
    ],
    "answer": "Prevents method overriding"
  },
  {
    "id": 32,
    "question": "Java: Which collection is synchronized by default?",
    "options": [
      "ArrayList",
      "HashMap",
      "Vector",
      "LinkedList"
    ],
    "answer": "Vector"
  },
  {
    "id": 33,
    "question": "Java: What is the default access modifier for class members?",
    "options": [
      "public",
      "private",
      "protected",
      "package-private"
    ],
    "answer": "package-private"
  },
  {
    "id": 34,
    "question": "Java: What does the transient keyword do?",
    "options": [
      "Prevents serialization",
      "Enables multithreading",
      "Marks a variable as static",
      "Allows method overriding"
    ],
    "answer": "Prevents serialization"
  },
  {
    "id": 35,
    "question": "Java: Which interface is used for sorting objects?",
    "options": [
      "Comparable",
      "Comparator",
      "Serializable",
      "Cloneable"
    ],
    "answer": "Comparable"
  },
  {
    "id": 36,
    "question": "TypeScript: What is the purpose of interface in TypeScript?",
    "options": [
      "Define class behavior",
      "Specify object structure",
      "Create modules",
      "Handle exceptions"
    ],
    "answer": "Specify object structure"
  },
  {
    "id": 37,
    "question": "TypeScript: What is the type of let x: any;?",
    "options": [
      "number",
      "string",
      "any",
      "void"
    ],
    "answer": "any"
  },
  {
    "id": 38,
    "question": "TypeScript: What does this code do?\nfunction greet(name: string): string {\nreturn `Hello, ${name}`;\n}",
    "options": [
      "Throws a type error",
      "Returns a string",
      "Returns void",
      "Returns any"
    ],
    "answer": "Returns a string"
  },
  {
    "id": 39,
    "question": "TypeScript: Which keyword extends a class?",
    "options": [
      "implements",
      "extends",
      "super",
      "interface"
    ],
    "answer": "extends"
  },
  {
    "id": 40,
    "question": "TypeScript: How do you define an optional property?",
    "options": [
      "name: string?",
      "name?: string",
      "name: string | null",
      "name: string = null"
    ],
    "answer": "name?: string"
  },
  {
    "id": 41,
    "question": "Spring: Which annotation defines a Spring bean?",
    "options": [
      "@Bean",
      "@Component",
      "@Service",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 42,
    "question": "Spring Boot: What does @SpringBootApplication include?",
    "options": [
      "@Configuration, @EnableAutoConfiguration, @ComponentScan",
      "@RestController, @EnableWebMvc",
      "@Repository, @Transactional",
      "@Autowired, @Qualifier"
    ],
    "answer": "@Configuration, @EnableAutoConfiguration, @ComponentScan"
  },
  {
    "id": 43,
    "question": "Spring: What is the output of this code?\n@Component\npublic class MyBean {\npublic String getName() {\nreturn \"Hello\";\n}\n}\n@Autowired\nMyBean bean;\nSystem.out.println(bean.getName());",
    "options": [
      "Hello",
      "null",
      "Error",
      "MyBean"
    ],
    "answer": "Hello"
  },
  {
    "id": 44,
    "question": "Spring Boot: Which dependency enables REST APIs?",
    "options": [
      "spring-boot-starter-web",
      "spring-boot-starter-data-jpa",
      "spring-boot-starter-security",
      "spring-boot-starter-test"
    ],
    "answer": "spring-boot-starter-web"
  },
  {
    "id": 45,
    "question": "Spring: What is Dependency Injection?",
    "options": [
      "Creating objects manually",
      "Injecting dependencies into objects",
      "Managing database connections",
      "Handling HTTP requests"
    ],
    "answer": "Injecting dependencies into objects"
  },
  {
    "id": 46,
    "question": "Spring Boot: How do you externalize configuration?",
    "options": [
      "Using application.properties",
      "Using @Configuration",
      "Using @Bean",
      "Using @Autowired"
    ],
    "answer": "Using application.properties"
  },
  {
    "id": 47,
    "question": "Spring: Which annotation maps HTTP GET requests?",
    "options": [
      "@PostMapping",
      "@GetMapping",
      "@RequestMapping",
      "@PutMapping"
    ],
    "answer": "@GetMapping"
  },
  {
    "id": 48,
    "question": "Spring Boot: What is the default embedded server?",
    "options": [
      "Jetty",
      "Tomcat",
      "Undertow",
      "Netty"
    ],
    "answer": "Tomcat"
  },
  {
    "id": 49,
    "question": "Spring: What does @Transactional do?",
    "options": [
      "Manages database transactions",
      "Configures REST endpoints",
      "Injects dependencies",
      "Scans components"
    ],
    "answer": "Manages database transactions"
  },
  {
    "id": 50,
    "question": "Spring Boot: How do you connect to MongoDB?",
    "options": [
      "spring-boot-starter-data-mongodb",
      "spring-boot-starter-data-jpa",
      "spring-boot-starter-web",
      "spring-boot-starter-security"
    ],
    "answer": "spring-boot-starter-data-mongodb"
  },
  {
    "id": 51,
    "question": "DevOps: What is the purpose of Docker?",
    "options": [
      "Code compilation",
      "Containerization",
      "Version control",
      "Load balancing"
    ],
    "answer": "Containerization"
  }, 
   {
    "id": 52,
    "question": "DevOps: Which command builds a Docker image?",
    "options": [
      "docker run",
      "docker build",
      "docker push",
      "docker pull"
    ],
    "answer": "docker build"
  },
  {
    "id": 53,
    "question": "DevOps: What is CI/CD?",
    "options": [
      "Continuous Integration / Continuous Deployment",
      "Code Inspection / Code Delivery",
      "Continuous Improvement / Continuous Development",
      "Code Integration / Code Deployment"
    ],
    "answer": "Continuous Integration / Continuous Deployment"
  },
  {
    "id": 54,
    "question": "DevOps: Which tool manages container orchestration?",
    "options": [
      "Jenkins",
      "Kubernetes",
      "Git",
      "Ansible"
    ],
    "answer": "Kubernetes"
  },
  {
    "id": 55,
    "question": "DevOps: What does nginx -g \"daemon off;\" do in a Docker container?",
    "options": [
      "Runs NGINX in the background",
      "Runs NGINX in the foreground",
      "Stops NGINX",
      "Restarts NGINX"
    ],
    "answer": "Runs NGINX in the foreground"
  },
  {
    "id": 56,
    "question": "DevOps: Which file defines a Jenkins pipeline?",
    "options": [
      "Dockerfile",
      "Jenkinsfile",
      "pom.xml",
      "build.gradle"
    ],
    "answer": "Jenkinsfile"
  },
  {
    "id": 57,
    "question": "DevOps: What is Infrastructure as Code?",
    "options": [
      "Manual server setup",
      "Defining infrastructure using scripts",
      "Database management",
      "Application deployment"
    ],
    "answer": "Defining infrastructure using scripts"
  },
  {
    "id": 58,
    "question": "DevOps: Which AWS service manages containerized apps?",
    "options": [
      "EC2",
      "ECS",
      "S3",
      "RDS"
    ],
    "answer": "ECS"
  },
  {
    "id": 59,
    "question": "Microservices: What is a key benefit of microservices architecture?",
    "options": [
      "Monolithic codebase",
      "Independent scalability",
      "Tight coupling",
      "Single database"
    ],
    "answer": "Independent scalability"
  },
  {
    "id": 60,
    "question": "Microservices: Which pattern ensures loose coupling in microservices?",
    "options": [
      "Circuit Breaker",
      "Service Registry",
      "Event-Driven",
      "Monolith"
    ],
    "answer": "Event-Driven"
  }

]