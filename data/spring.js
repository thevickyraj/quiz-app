export const questionBank = [
    
  {
    "id": 1,
    "question": "What is advice?",
    "options": [
      "A concern that cuts across multiple classes",
      "The process of linking aspects with other application types",
      "Action taken by an aspect at a particular join point",
      "A method to implement transaction management"
    ],
    "answer": "Action taken by an aspect at a particular join point"
  },
  {
    "id": 2,
    "question": "Which annotation represents an advice to be executed after the method execution only if method exits by throwing an exception?",
    "options": [
      "@Before",
      "@After",
      "@Around",
      "@AfterThrowing"
    ],
    "answer": "@AfterThrowing"
  },
  {
    "id": 3,
    "question": "Which of the following terminologies are typically used with regards to AOP?",
    "options": [
      "Concerns",
      "Advice",
      "Float",
      "Pointcut"
    ],
    "answer": [
      "Concerns",
      "Advice",
      "Pointcut"
    ]
  },
  {
    "id": 4,
    "question": "What attribute is added in the bean.xml to reduce or eliminate the need of <property> and <constructor-arg>?",
    "options": [
      "Autodiscovery",
      "Autowire",
      "Scope",
      "Auto-detect"
    ],
    "answer": "Autowire"
  },
  {
    "id": 5,
    "question": "Which of the following examples summarizes Program to an interface rather than an implementation?",
    "options": [
      "Map m = new HashMap();",
      "ArrayList list = new ArrayList();",
      "ArrayList<Integer> = new ArrayList<Integer>();",
      "String s = \"HelloWorld\";"
    ],
    "answer": "ArrayList<Integer> = new ArrayList<Integer>();"
  },
  {
    "id": 6,
    "question": "If any of the beans implements the BeanPostProcessor interface, Spring will call which of these methods?",
    "options": [
      "processBeforeInitialization()",
      "BeanPostProcessor()",
      "postProcessInterface()",
      "postProcessBeforeInitialization()"
    ],
    "answer": "postProcessBeforeInitialization()"
  },
  {
    "id": 7,
    "question": "Which Collections elements does Spring support?",
    "options": [
      "List, hashmap, arraylist, and set",
      "List, props, hashmaps, and arraylist",
      "List, set, map, and props",
      "Hashmaps, arraylist, list, and treemap"
    ],
    "answer": "List, set, map, and props"
  },
  {
    "id": 8,
    "question": "What will be the result if you use Web-aware Spring Application Context scopes in a regular Spring IoC container?",
    "options": [
      "It will return nothing.",
      "It will return a NullPointer Exception",
      "It will return a IllegalStateException",
      "It will work correctly."
    ],
    "answer": "It will return nothing."
  },
  {
    "id": 9,
    "question": "Which Bean scopes are valid only in the context of a web-aware Spring Application Context?",
    "options": [
      "Singleton and Prototype",
      "Session, Global Session, and Request",
      "Singleton, Prototype, Request, and Session",
      "Session, Singleton, and Global Session"
    ],
    "answer": "Session, Global Session, and Request"
  },
  {
    "id": 10,
    "question": "To use java.util.List, what is the Spring Collections element that you need?",
    "options": [
      "<list>",
      "<List>",
      "<lists>",
      "util:list"
    ],
    "answer": "<list>"
  },
  {
    "id": 11,
    "question": "Which of the below are benefits of using DI?",
    "options": [
      "Tight coupling",
      "Loose coupling",
      "Easy testing",
      "Removing run time error"
    ],
    "answer": [
      "Loose coupling",
      "Easy testing"
    ]
  },
  {
    "id": 12,
    "question": "What is the difference between ClassPathXMLApplicationContext and FilePathXMLApplicationContext?",
    "options": [
      "First one reads from application class path and second one reads from absolute file path.",
      "First one reads from application class path and second one reads from relative file path.",
      "First one reads from relative application class path and second one reads from absolute file path.",
      "None of the above."
    ],
    "answer": "First one reads from relative application class path and second one reads from absolute file path."
  },
  {
    "id": 13,
    "question": "The Dependency Look up is a methodology where we get the resource after demand. Types of Dependency Look up include:",
    "options": [
      "Factory Method",
      "JNDI Method",
      "Key Word Method",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 14,
    "question": "Which of the following declarations of inner Beans are correct?",
    "options": [
      "A and B",
      "B and C",
      "B and D",
      "A and D"
    ],
    "answer": "A and D"
  }, 
  
  {
    "id": 15,
    "question": "When do you use Dependency Injection?",
    "options": [
      "DI is very useful for decoupling your system.",
      "DI is most useful when you are aiming for code reuse.",
      "DI helps in designing tightly coupled code.",
      "DI does NOT help in unit testing the code."
    ],
    "answer": [
      "DI is very useful for decoupling your system.",
      "DI is most useful when you are aiming for code reuse."
    ]
  },
  {
    "id": 16,
    "question": "For Java-based configuration, which is the class that sets the Spring Context?",
    "options": [
      "Annotationconfig",
      "ComponentScan",
      "AnnotationConfigApplicationContext",
      "AnnotationConfigApplication"
    ],
    "answer": "AnnotationConfigApplicationContext"
  },
  {
    "id": 17,
    "question": "Which of the following is an example of java-based configuration?",
    "options": [
      "<context:annotation-config/>",
      "@Configuration public class HelloWorldConfig{..}",
      "@Autowired",
      "ApplicationContext context=new ClassPathXmlApplicationContext(\"Beans.xml\");"
    ],
    "answer": "@Configuration public class HelloWorldConfig{..}"
  },
  {
    "id": 18,
    "question": "Which is the main component in Spring Web MVC?",
    "options": [
      "Faces Servlet",
      "Action Servlet",
      "View Renderer Servlet",
      "Dispatcher Servlet"
    ],
    "answer": "Dispatcher Servlet"
  },
  {
    "id": 19,
    "question": "Which element has to be used in order to configure Spring MVC?",
    "options": [
      "<mvc:annotation-driven/>",
      "<aop:aspect/>",
      "<tx:advice/>",
      "<oxm:jaxb2-marshaller/>"
    ],
    "answer": "<mvc:annotation-driven/>"
  },
  {
    "id": 20,
    "question": "What annotation wiring element is added to scan packages to find and register beans within the Application Context?",
    "options": [
      "<context:annotation-config/>",
      "<context:annotation-scan/>",
      "<context:component-config/>",
      "<context:component-scan>"
    ],
    "answer": "<context:component-scan>"
  },
  {
    "id": 21,
    "question": "In the following example, what type of autowire will be used?\n\n@Autowired(required=false)\npublic Employee AutowiredByConstructorService(@Qualifier(\"emp\") Employee emp) {\n    this.employee = emp;\n}",
    "options": [
      "ByName",
      "ById",
      "@Autowired",
      "Constructor"
    ],
    "answer": "Constructor"
  },
  {
    "id": 22,
    "question": "What are different valid types of Spring bean autowiring?",
    "options": [
      "byName, byId, and constructor",
      "byName, byType, constructor, @Autowired, and @Qualifier annotations",
      "by Scope, by Constructor, and @Autowired",
      "ById, byNameScope, constructor, and @Autowire"
    ],
    "answer": "byName, byType, constructor, @Autowired, and @Qualifier annotations"
  },
  {
    "id": 23,
    "question": "Spring handles object creation in order to be non-invasive. Can you identify which definition creates a spring-managed object?",
    "options": [
      "String myObj;",
      "@Autowired private String myObj;",
      "private String myObj = new String(\"spring\");",
      "@Spring String myObj=null;"
    ],
    "answer": "private String myObj = new String(\"spring\");"
  },
  {
    "id": 24,
    "question": "How many types of autowiring modes are supported in Spring?",
    "options": [
      "Three",
      "Five",
      "Six",
      "Four"
    ],
    "answer": "Five"
  },
  {
    "id": 25,
    "question": "The use of Autodiscovery and Autowire will reduce the amount of _________.",
    "options": [
      "Java code generated",
      "Methods generated",
      "XML Spring configurations",
      "<bean> elements"
    ],
    "answer": "<bean> elements"
  },
  {
    "id": 26,
    "question": "Dependency Injection (DI) or Inversion of Control (IOC) is based on which Hollywood principle?",
    "options": [
      "Do not call us. We will call you.",
      "Understand the problem first.",
      "The customer is always right.",
      "What you see is what you get."
    ],
    "answer": "Do not call us. We will call you."
  },
  {
    "id": 27,
    "question": "From where does the Spring container get its instructions?",
    "options": [
      "Properties File",
      "Spring JARS",
      "XML File",
      "Annotations"
    ],
    "answer": [
      "XML File",
      "Annotations"
    ]
  },
  {
    "id": 28,
    "question": "The use of the prototype scope is recommended for ______ type of beans.",
    "options": [
      "Stateless",
      "Stateful",
      "Restless",
      "Restful"
    ],
    "answer": "Stateful"
  },
  {
    "id": 29,
    "question": "Which is the alternative to create, load, and manage beans in a Spring Application?",
    "options": [
      "Application Factory",
      "Context Factory",
      "Bean Factory",
      "Spring Bean Factory"
    ],
    "answer": "Bean Factory"
  },
  {
    "id": 30,
    "question": "Java-based configuration allows bean definition and Spring configuration to move out of ________.",
    "options": [
      "XML files",
      "Java code",
      "Property files",
      "All of the above"
    ],
    "answer": "XML files"
  }, 
   {
    "id": 31,
    "question": "Which one of these statements about XML declaration of transaction manager bean is NOT true?",
    "options": [
      "The tx namespace provides JTA transaction manager declaration shortcut syntax.",
      "The Id of the bean has to be transactionManager.",
      "Depending on the application persistence technology, the HibernateTransactionManager or the DataSourceTransactionManager could be used as bean class.",
      "A default transaction timeout could be given."
    ],
    "answer": "The Id of the bean has to be transactionManager."
  },
  {
    "id": 32,
    "question": "Which one of the following is one of the challenges of Traditional Transaction Management?",
    "options": [
      "Transaction Management at Database Connection Level",
      "Programmatic Management of Transactions",
      "Error-Prone Connection Management",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 33,
    "question": "What does the JDBC Template use to connect to the database?",
    "options": [
      "A simple java bean with connection properties",
      "A data source bean configuration",
      "An XML with DB connection parameters",
      "A JDBC connection object"
    ],
    "answer": "A data source bean configuration"
  },
  {
    "id": 34,
    "question": "What is the use of Autodiscovery?",
    "options": [
      "Eliminate the use of the <property> element",
      "Reduce the use of the <constructor-arg> element",
      "Eliminate the use of the <props> element",
      "Reduce the use of the <bean> element"
    ],
    "answer": "Reduce the use of the <bean> element"
  },
  {
    "id": 35,
    "question": "The ______ packages are the basis of Spring Framework's IOC container.",
    "options": [
      "org.springframework.beans and org.springframework.Application",
      "org.springframework.properties and org.springframework.context",
      "org.springframework.beans and org.springframework.properties",
      "org.springframework.beans and org.springframework.context"
    ],
    "answer": "org.springframework.beans and org.springframework.context"
  },
  {
    "id": 36,
    "question": "Which of the following attributes are valid in a Spring bean definition?",
    "options": [
      "ID",
      "Map",
      "Set",
      "Class"
    ],
    "answer": [
      "ID",
      "Class"
    ]
  },
  {
    "id": 37,
    "question": "What Spring Collection can be used to inject a collection of name-value pairs, where name and value can be of any type?",
    "options": [
      "<set>",
      "<list>",
      "<map>",
      "<props>"
    ],
    "answer": "<map>"
  },
  {
    "id": 38,
    "question": "Which attributes are applicable for an inner bean?",
    "options": [
      "Context, Parent",
      "Id, Class",
      "Class, Inner",
      "Interface, Id"
    ],
    "answer": "Class, Inner"
  },
  {
    "id": 39,
    "question": "To use bean definition template, you should add what attribute in the bean?",
    "options": [
      "abstract=\"true\"",
      "interface=\"true\"",
      "class=\"com.example.helloworld\"",
      "public=\"true\""
    ],
    "answer": "abstract=\"true\""
  },
  {
    "id": 40,
    "question": "A collection value of the type java.util.Properties is defined by what element?",
    "options": [
      "<props>",
      "<prop>",
      "<properties>",
      "<property>"
    ],
    "answer": "<props>"
  },
  {
    "id": 41,
    "question": "Which of the following is an annotation for Spring Java-based configuration?",
    "options": [
      "@Component",
      "@SpringConfiguration",
      "@SpringXml",
      "@Configuration"
    ],
    "answer": "@Configuration"
  },
  {
    "id": 42,
    "question": "What does the JDBC Template use to connect to the database?",
    "options": [
      "A simple java bean with connection properties",
      "A data source bean configuration",
      "An XML with DB connection parameters",
      "A JDBC connection object"
    ],
    "answer": "A data source bean configuration"
  },
  {
    "id": 43,
    "question": "Which of the following tasks are performed by a JDBCTemplate?",
    "options": [
      "Execute SQL query",
      "Execute Update statements",
      "Execute a Java program",
      "Execute stored procedure calls"
    ],
    "answer": [
      "Execute SQL query",
      "Execute Update statements",
      "Execute stored procedure calls"
    ]
  },
  {
    "id": 44,
    "question": "Does Spring provide programmatic transaction management?",
    "options": [
      "Yes, with the TransactionTemplate class",
      "Yes, with the TransactionService class",
      "Yes, using the @Transactional bean post processor",
      "No, Spring does not provide transactional management"
    ],
    "answer": "Yes, with the TransactionTemplate class"
  },
  {
    "id": 45,
    "question": "Which of the following are MVC-specific annotations?",
    "options": [
      "@Controller",
      "@RequestMapping",
      "@PathVariable",
      "@Autowired"
    ],
    "answer": [
      "@Controller",
      "@RequestMapping",
      "@PathVariable"
    ]
  },
  {
    "id": 46,
    "question": "To annotate all your Data Access Object (DAO) classes, use the ______.",
    "options": [
      "@Service",
      "@Classes",
      "@Repository",
      "@Component"
    ],
    "answer": "@Repository"
  },
  {
    "id": 47,
    "question": "Which of the following statement is false?",
    "options": [
      "The Core package is the most fundamental part of the framework and provides the IoC and Dependency Injection feature.",
      "The DAO package provides a JDBC-abstraction layer that removes the need to do tedious JDBC coding and parsing of database-vendor specific error code.",
      "The ORM package provides integration layers for popular object-relational mapping APIs, including JPA, JDO, Hibernate, iBatis.",
      "AOP takes out the direct dependency of crosscutting tasks from classes.",
      "Spring's Web package provides basic web-oriented integration features such as multipart file upload functionality.",
      "Spring's MVC package provides a Model-View-Controller implementation for web applications.",
      "None of these"
    ],
    "answer": "None of these"
  }, 
   {
    "id": 48,
    "question": "Which of the following is false?",
    "options": [
      "A BeanFactory pretty much just instantiates and configures beans.",
      "An ApplicationContext also instantiates beans and provides supporting infrastructure such as transactions, AOP, message resource handling, and event propagation.",
      "Application-layer specific contexts such as the WebApplicationContext are used in web applications.",
      "None of the above"
    ],
    "answer": "None of the above"
  },
  {
    "id": 49,
    "question": "Which of the following is actual representation of the Spring IoC container?",
    "options": [
      "Application Context",
      "Xml Bean Factory",
      "Bean Factory",
      "Web Application Context"
    ],
    "answer": "Bean Factory"
  },
  {
    "id": 50,
    "question": "A bean is simply an object that is instantiated, assembled and otherwise managed by a Spring IoC container.",
    "options": [
      "true",
      "false"
    ],
    "answer": "true"
  },
  {
    "id": 51,
    "question": "How does the container load configuration metadata from external resources such as the local file system or Java CLASSPATH?",
    "options": [
      "Application Context constructor",
      "Init()",
      "Context Constructor",
      "XmlClassPath Constructor"
    ],
    "answer": "Application Context constructor"
  },
  {
    "id": 52,
    "question": "Which of the following is the correct way to load bean definitions from another file?",
    "options": [
      "<bean id=\"bean1\" class=\"...\" import=\"something.xml\"/>",
      "<resources name=\"something.xml\" import=\"true\"/>",
      "<import resource=\"something.xml\"/>",
      "All of the above"
    ],
    "answer": "<import resource=\"something.xml\"/>"
  },
  {
    "id": 53,
    "question": "What is the correct way to write constructor injection for the given TestBean class?",
    "options": [
      "Using constructor-arg with type attributes",
      "Using constructor-arg with index attributes",
      "Using constructor-arg with reversed index values",
      "Using constructor-arg with type attributes in different order",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 54,
    "question": "Which of the following are correct statements?",
    "options": [
      "Form Controllers handle form interaction",
      "Multipart resolver handles file uploads",
      "Dynamic binding of data to domain model",
      "Interaction with Velocity, JSP, Thymeleaf, PDF, Excel",
      "Sending email and remote accessing via SOAP or Burlap"
    ],
    "answer": [
      "Form Controllers handle form interaction",
      "Multipart resolver handles file uploads",
      "Dynamic binding of data to domain model",
      "Interaction with Velocity, JSP, Thymeleaf, PDF, Excel",
      "Sending email and remote accessing via SOAP or Burlap"
    ]
  },
  {
    "id": 55,
    "question": "What do you mean by 'bean'?",
    "options": [
      "component",
      "object",
      "class",
      "container",
      "xml file"
    ],
    "answer": [
      "component",
      "object"
    ]
  },
  {
    "id": 56,
    "question": "What responsibilities are included for BeanFactory?",
    "options": [
      "Instantiating or sourcing application objects",
      "Configuring such objects",
      "Assembling the dependencies between these objects",
      "Manage lifecycle of Spring"
    ],
    "answer": [
      "Instantiating or sourcing application objects",
      "Configuring such objects",
      "Assembling the dependencies between these objects"
    ]
  },
  {
    "id": 57,
    "question": "What are the responsibilities included for XmlBeanFactory?",
    "options": [
      "Allows you to express the objects that compose your application",
      "Resolves inter-dependencies between such objects using XML",
      "Uses XML configuration metadata to create a fully configured system",
      "None of the above"
    ],
    "answer": [
      "Allows you to express the objects that compose your application",
      "Resolves inter-dependencies between such objects using XML",
      "Uses XML configuration metadata to create a fully configured system"
    ]
  },
  {
    "id": 58,
    "question": "Which of the following are correct ways to instantiate a Spring IoC container?",
    "options": [
      "ApplicationContext context = new ClassPathXmlApplicationContext(\"beans-definitions.xml\");",
      "XmlBeanFactory beanFactory = new XmlBeanFactory(new ClassPathResource(\"beans-definitions.xml\"));",
      "BeanFactory fac = new ClassPathXmlApplicationContext(\"beans-definitions.xml\");",
      "Resource res = new ClassPathResource(\"beans-definitions.xml\");"
    ],
    "answer": [
      "ApplicationContext context = new ClassPathXmlApplicationContext(\"beans-definitions.xml\");",
      "XmlBeanFactory beanFactory = new XmlBeanFactory(new ClassPathResource(\"beans-definitions.xml\"));",
      "BeanFactory fac = new ClassPathXmlApplicationContext(\"beans-definitions.xml\");",
      "Resource res = new ClassPathResource(\"beans-definitions.xml\");"
    ]
  },
  {
    "id": 59,
    "question": "What are the correct ways to instantiate a bean?",
    "options": [
      "Using default (empty) constructor",
      "Instantiation using a static factory method",
      "Instantiation using an instance factory method",
      "Using the container",
      "All these above are true"
    ],
    "answer": "All these above are true"
  }, 
  {
    "id": 60,
    "question": "What is Bean Factory?",
    "options": [
      "A BeanFactory essentially maintains a registry of different beans and their dependencies.",
      "A BeanFactory enables you to read bean definitions and access them using the bean factory.",
      "Using just the BeanFactory we can create and read bean definitions in XML format using Resource and XmlBeanFactory.",
      "We can get ApplicationContext and WebApplicationContext object using BeanFactory"
    ],
    "answer": [
      "A BeanFactory essentially maintains a registry of different beans and their dependencies.",
      "A BeanFactory enables you to read bean definitions and access them using the bean factory.",
      "Using just the BeanFactory we can create and read bean definitions in XML format using Resource and XmlBeanFactory."
    ]
  },
  {
    "id": 61,
    "question": "Which statements are true about DI (Dependency Injection)?",
    "options": [
      "DI says that no need create your objects but describe how they should be created.",
      "We should not directly connect your components and services together in code but describe which services are needed by which components in a configuration file.",
      "Inversion of control relies on dependency injection.",
      "We should not directly connect your components and services together in code but describe which services are needed by which components in a configuration file."
    ],
    "answer": [
      "DI says that no need create your objects but describe how they should be created.",
      "Inversion of control relies on dependency injection.",
      "We should not directly connect your components and services together in code but describe which services are needed by which components in a configuration file."
    ]
  },
  {
    "id": 62,
    "question": "Which statements are true about IOC (Inversion of Control)?",
    "options": [
      "Decoupling of the execution of a certain task from implementation.",
      "Each module can focus on what it is designed for.",
      "Replacing modules should not affect other modules.",
      "Modules should observe about what other systems do",
      "All the above"
    ],
    "answer": [
      "Decoupling of the execution of a certain task from implementation.",
      "Each module can focus on what it is designed for.",
      "Replacing modules should not affect other modules."
    ]
  },
  {
    "id": 63,
    "question": "What do you mean by inner bean?",
    "options": [
      "A <bean/> element inside the <bean/> elements is used to define an inner bean.",
      "A <bean/> element inside the <property/> elements is used to define an inner bean.",
      "A <bean/> element inside the <constructor-arg/> elements is used to define an inner bean.",
      "A <bean/> element inside the property or <constructor-arg/> elements is used to define an inner bean."
    ],
    "answer": "A <bean/> element inside the property or <constructor-arg/> elements is used to define an inner bean."
  },
  {
    "id": 64,
    "question": "Which of the following are basic techniques to implement inversion of control?",
    "options": [
      "Using a factory pattern",
      "Using a service locator pattern",
      "Constructor injection",
      "Setter injection",
      "Interface injection",
      "All the above"
    ],
    "answer": "All the above"
  },
  {
    "id": 65,
    "question": "Which of the following statements are false about Constructor-based DI?",
    "options": [
      "Constructor-based DI is effected by invoking a constructor with a number of arguments, each representing a dependency.",
      "We can also use @Autowired annotation on constructor for constructor based autowiring.",
      "Constructor-based DI is accomplished when the container invokes a class constructor with a number of arguments.",
      "Constructor-based DI is effected by invoking Setter Injection each representing a dependency."
    ],
    "answer": "Constructor-based DI is effected by invoking Setter Injection each representing a dependency."
  },
  {
    "id": 66,
    "question": "What are the correct ways to define constructor injection?",
    "options": [
      "Using <constructor-arg> with <value> element",
      "Using <constructor-arg> with value attribute",
      "Using self-closing <constructor-arg value=\"...\"/>",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 67,
    "question": "Spring Web MVC (and in Spring in general) follows the \"Open for extension, closed for modification\" principle.",
    "options": [
      "true",
      "false"
    ],
    "answer": "true"
  },
  {
    "id": 68,
    "question": "Which of the following is not a special bean in WebApplicationContext?",
    "options": [
      "Locale resolver",
      "Theme resolver",
      "Multipart file",
      "Resolver",
      "Handler exception resolver",
      "Handler mappings",
      "None of the above"
    ],
    "answer": "Resolver"
  },
  {
    "id": 69,
    "question": "How does the Spring DispatcherServlet support returning the last modification-date as specified by the Servlet API?",
    "options": [
      "By implementing the LastModified interface",
      "By implementing the LastSessionModified interface",
      "By implementing the LastDateModified interface",
      "By implementing the LastModifiedDate interface"
    ],
    "answer": "By implementing the LastModified interface"
  },
  {
    "id": 70,
    "question": "WebApplicationContext has more scopes like request, session, globalSession compared to standard ApplicationContext.",
    "options": [
      "true",
      "false"
    ],
    "answer": "true"
  },
  {
    "id": 71,
    "question": "All Spring's various controllers inherit from AbstractController.",
    "options": [
      "true",
      "false"
    ],
    "answer": "true"
  },
  {
    "id": 72,
    "question": "You can write your own controller by using handleRequestInternal(HttpServletRequest, HttpServletResponse) method from AbstractController and returning a ModelAndView object.",
    "options": [
      "true",
      "false"
    ],
    "answer": "true"
  }, 
   {
    "id": 73,
    "question": "Which of the following controller inspects the URL and retrieves the filename of the file request and uses that as a view name? For example, the filename of http://www.springframework.org/welcome.html request is welcome.",
    "options": [
      "UrlFilenameViewController",
      "MultiActionController",
      "CommandController",
      "AbstractController"
    ],
    "answer": "UrlFilenameViewController"
  },
  {
    "id": 74,
    "question": "Which statements are true about DispatcherServlet?",
    "options": [
      "DispatcherServlet is an expression of the \"Front Controller\" design pattern.",
      "The DispatcherServlet is the actual Servlet.",
      "DispatcherServlet is declared in the web.xml of your web application.",
      "The Spring DispatcherServlet has special beans to process requests and render appropriate views configured in WebApplicationContext.",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 75,
    "question": "Which statements are true about WebApplicationContext?",
    "options": [
      "The WebApplicationContext is an extension of the plain ApplicationContext.",
      "The WebApplicationContext is bound in the ServletContext and can be accessed using RequestContextUtils.",
      "WebApplicationContext differs from a normal ApplicationContext in that it is capable of resolving themes.",
      "We can get WebApplicationContext reference by using ApplicationContext.",
      "All the above"
    ],
    "answer": [
      "The WebApplicationContext is an extension of the plain ApplicationContext.",
      "WebApplicationContext differs from a normal ApplicationContext in that it is capable of resolving themes.",
      "We can get WebApplicationContext reference by using ApplicationContext."
    ]
  },
  {
    "id": 76,
    "question": "Which of the following controller combines multiple request-handling methods into one controller?",
    "options": [
      "UrlFilenameViewController",
      "MultiActionController",
      "CommandController",
      "MultiRequestController"
    ],
    "answer": "MultiActionController"
  },
  {
    "id": 77,
    "question": "https://localhost:8080/testing.view will result in the method testing(HttpServletRequest, HttpServletResponse) being invoked. Which is the correct view resolver for this?",
    "options": [
      "ParameterMethodName Resolver",
      "Properties MethodName Resolver",
      "InternalViewResolver",
      "InternalPathMethodName Resolver"
    ],
    "answer": "InternalPathMethodName Resolver"
  },
  {
    "id": 78,
    "question": "'/index/welcome.html=dolt' and a request to /index/welcome.html comes in, the dolt(HttpServletRequest, HttpServletResponse) method will be invoked. Which is the correct view resolver for this?",
    "options": [
      "InternalPathMethodName Resolver",
      "ParameterMethodName Resolver",
      "Properties MethodName Resolver"
    ],
    "answer": "ParameterMethodName Resolver"
  },
  {
    "id": 79,
    "question": "Which of the following controller provides a way to interact with data objects and dynamically bind parameters from the HttpServletRequest to the data object specified?",
    "options": [
      "MultiActionController",
      "AbstractController",
      "FormActionController",
      "CommandController"
    ],
    "answer": "CommandController"
  },
  {
    "id": 80,
    "question": "Which of the following is not a view resolver?",
    "options": [
      "BeanNameViewResolver",
      "VelocityViewResolver",
      "JasperReportsViewResolver",
      "UrlBasedViewResolver",
      "ResourceBundleViewResolver",
      "None of the above"
    ],
    "answer": "JasperReportsViewResolver"
  }


]