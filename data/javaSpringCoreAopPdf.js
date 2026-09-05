export const questionBank = [
    
{
"id": 1,
"question": "Spring-WS provides various abstract endpoint classes for you to process the request.",
"options": [
"org.springframework.ws.server.endpoint",
"org.springframework.ws.server",
"org.springframework.*",
"none of the mentioned"
],
"answer": "org.springframework.ws.server.endpoint"
},
{
"id": 2,
"question": "Which method is used to gracefully shutdown all the bean processes after closing the spring container?",
"options": [
"shutdownHook",
"destroy method",
"none of the mentioned",
"all of the mentioned"
],
"answer": "shutdownHook"
},
{
"id": 3,
"question": "Which one is the default scope of the beans?",
"options": [
"Prototype",
"Session",
"Request",
"Singleton"
],
"answer": "Singleton"
},
{
"id": 4,
"question": "Declaring bean from object properties can be done using:",
"options": [
"PropertyPathFactoryBean",
"util:constant",
"None of the mentioned",
"All of the mentioned"
],
"answer": "PropertyPathFactoryBean"
},
{
"id": 5,
"question": "What are the ways to create custom Property Editors?",
"options": [
"implement PropertyEditor interface",
"extend PropertyEditorSupport Class",
"none of the mentioned",
"all of the mentioned"
],
"answer": "all of the mentioned"
},
{
"id": 6,
"question": "Spring Web MVC follows the 'Open for extension, closed for modification' principle. Many methods in core classes are marked final.",
"options": [
"true",
"false"
],
"answer": "true"
},
{
"id": 7,
"question": "Which of the among is not a special bean in WebApplicationContext?",
"options": [
"Locale resolver",
"Theme resolver",
"multipart file",
"resolver",
"Handler exception resolver",
"Handler mappings",
"None of the above"
],
"answer": "None of the above"
},
{
"id": 8,
"question": "How does the Spring DispatcherServlet support returning the last modification date as specified by the Servlet API?",
"options": [
"By implementing the LastModified interface",
"By implementing the LastSessionModified interface",
"By implementing the LastDateModified interface",
"By implementing the LastModifiedDate interface"
],
"answer": "By implementing the LastModified interface"
},
{
"id": 9,
"question": "@RequestMapping annotation is used to map an HTTP request method (GET or POST) to a specific controller class or method.",
"options": [
"false",
"true"
],
"answer": "true"
},
{
"id": 10,
"question": "Which exception class is related to all exceptions thrown in Spring applications?",
"options": [
"DataAccessException",
"ArrayIndexOutOfBound",
"NullPointerException",
"SpringException",
"None of these"
],
"answer": "DataAccessException"
},
{
"id": 11,
"question": "Which of the following is true for Controllers in Spring?",
"options": [
"An abstract class",
"An interface",
"Concrete class",
"Final class",
"None of these"
],
"answer": "An interface"
},
{
"id": 12,
"question": "Annotations work as metadata for classes and Spring uses annotations as an alternative to XML for declarative configuration.",
"options": [
"false",
"true"
],
"answer": "true"
},
{
"id": 13,
"question": "Which of the following specify the points where weaving can be applied?",
"options": [
"Compile Time , Classload Time , load time",
"Compile Time , Classload Time , Runtime",
"Compile Time and Runtime",
"Compile Time and Classload Time",
"None of these"
],
"answer": "Compile Time , Classload Time , Runtime"
},
{
"id": 14,
"question": "In which layer is the @Controller annotation used?",
"options": [
"Business layer",
"Service layer",
"Presentation layer",
"Session layer",
"None of these"
],
"answer": "Presentation layer"
},
{
"id": 15,
"question": "Which of the following is NOT a valid difference between @Inject and @Autowired annotations?",
"options": [
"@Inject is part of Java EE CDI while @Autowired is from Spring",
"@Autowired is a legacy annotation whereas @Inject is its latest version",
"There is no difference and both can be used interchangeably",
"None of these"
],
"answer": "@Autowired is a legacy annotation whereas @Inject is its latest version"
},
{
"id": 16,
"question": "Which of the following correctly mentions the Autowire types?",
"options": [
"None of these",
"byName , byMethod , constructor and autodetect",
"byName , byType , destructor and autodetect",
"byName , byType , constructor and autodetect",
"byName , byType , constructor and autocorrect"
],
"answer": "byName , byType , constructor and autodetect"
},
{
"id": 17,
"question": "Which of the following statements is true?",
"options": [
"BeanFactory extends ApplicationContext",
"ApplicationContext extends BeanFactory",
"ApplicationContext implements BeanFactory",
"BeanFactory implements ApplicationContext",
"None of these"
],
"answer": "ApplicationContext extends BeanFactory"
},
{
"id": 18,
"question": "Which of the following advice is supported by Aspect Annotation?",
"options": [
"@Before",
"@After",
"@AfterReturning",
"All of the mentioned"
],
"answer": "All of the mentioned"
},
{
"id": 19,
"question": "Which advice is executed only when joint point returns or throws an exception?",
"options": [
"@Before",
"@After",
"@AfterReturning",
"@AfterThrowing"
],
"answer": "@AfterReturning"
},
{
"id": 20,
"question": "Special compiler used during weaving.",
"options": [
"jvm",
"gcc",
"ajc",
"none of the mentioned"
],
"answer": "ajc"
},
{
"id": 21,
"question": "How to inject Spring bean into domain objects?",
"options": [
"AOP",
"XML",
"AspectJ",
"Java Based"
],
"answer": "Java Based"
},
{
"id": 22,
"question": "Method used to process bean before initialization callback.",
"options": [
"scope",
"postProcessAfterInitialization()",
"postProcessBeforeInitialization()",
"its own constructor"
],
"answer": "postProcessBeforeInitialization()"
},
{
"id": 23,
"question": "Which attribute is used to set the scope of the bean?",
"options": [
"setScope",
"scope",
"getScope",
"none of the mentioned"
],
"answer": "scope"
},
{
"id": 24,
"question": "Which attribute is used to specify classname of the bean?",
"options": [
"name",
"id",
"class",
"constructor-args"
],
"answer": "class"
},
{
"id": 25,
"question": "Which tag is allowed for static field?",
"options": [
"util:constant",
"list",
"set",
"constructor-args"
],
"answer": "util:constant"
},
{
"id": 26,
"question": "Class used to have full access to the Spring context's life cycle machinery and dependency injection.",
"options": [
"DelegatingFilterProxy",
"WebApplicationContextUtils.getRequiredWeb()",
"WebApplicationUtils.getRequiredWebApplicationContext()",
"None of the mentioned"
],
"answer": "DelegatingFilterProxy"
},
{
"id": 27,
"question": "Element used to specify access attributes for bean methods.",
"options": [
"security:protect",
"security:intercept",
"security:intercept-security",
"none of the mentioned"
],
"answer": "security:protect"
},
{
"id": 28,
"question": "States related to Spring Web flows.",
"options": [
"view",
"action",
"decision",
"all of the mentioned"
],
"answer": "all of the mentioned"
},
{
"id": 29,
"question": "To enable Spring security for web flows.",
"options": [
"SecurityFlowExecutionListener",
"SecurityFlowExecution",
"FlowSecurity",
"SecurityFlowListener"
],
"answer": "SecurityFlowExecutionListener"
},
{
"id": 30,
"question": "Does Spring provide programmatic transaction management?",
"options": [
"Yes using the @Transactional bean post processor",
"Yes with the TransactionTemplate class",
"Yes with the TransactionService class",
"Yes using the @Transactional bean post processor"
],
"answer": "Yes with the TransactionTemplate class"
},
{
"id": 31,
"question": "How could you externalize constants from a Spring configuration file or annotation into a .properties file?",
"options": [
"By using the <context:property-placeholder /> tag",
"By using the <util:constant /> tag",
"By declaring the ConstantPlaceholderConfigurer bean post processor",
"By using the c: namespace"
],
"answer": "By using the <context:property-placeholder /> tag"
}, 
{
"id": 32,
"question": "To validate Java beans in a web application using annotations.",
"options": [
"XML",
"Java Based",
"JSR-303 standard",
"All of the mentioned"
],
"answer": "All of the mentioned"
},
{
"id": 33,
"question": "Annotation used to indicate a field has to have a minimum of 2 characters.",
"options": [
"@NotNull",
"@Size",
"@MaxSize",
"@size"
],
"answer": "@Size"
},
{
"id": 34,
"question": "Spring MVC supports generating Excel files using which of the following libraries.",
"options": [
"Apache POI library",
"JExcelAPI library",
"All of the mentioned",
"None of the mentioned"
],
"answer": "All of the mentioned"
},
{
"id": 35,
"question": "Interface for DispatcherServlet to auto detect view resolver beans.",
"options": [
"localeResolver",
"tiles",
"ViewResolver",
"none of the mentioned"
],
"answer": "ViewResolver"
},
{
"id": 36,
"question": "By default, XmlViewResolver loads view beans from /WEB-INF/views.xml.",
"options": [
"True",
"False"
],
"answer": "False"
},
{
"id": 37,
"question": "Views that can’t be resolved by InternalResourceViewResolver.",
"options": [
"redirect",
"redirect:prefix",
"redirect:suffix",
"all of the mentioned"
],
"answer": "redirect"
},
{
"id": 38,
"question": "Annotation which allows a controller’s field to be assigned using Spring Expression Language (SpEL).",
"options": [
"@Value",
"@After",
"@Default",
"@None"
],
"answer": "@Value"
},
{
"id": 39,
"question": "SpEL statements are recognizable.",
"options": [
"True",
"False"
],
"answer": "True"
},
{
"id": 40,
"question": "To publish a REST service with Spring.",
"options": [
"publishing an application's data as a REST service",
"accessing data from third-party REST services",
"none of the mentioned",
"all of the mentioned"
],
"answer": "publishing an application's data as a REST service, accessing data from third-party REST services"
},
{
"id": 41,
"question": "Publishing an application's data as a REST service requires.",
"options": [
"@RequestMapping",
"@PathVariable",
"All of the mentioned",
"None of the mentioned"
],
"answer": "@RequestMapping, @PathVariable"
},
{
"id": 42,
"question": "Annotation added as an input parameter to the handler method.",
"options": [
"@PathVariable",
"@Path",
"@PathLocale",
"None of the mentioned"
],
"answer": "@PathVariable"
},
{
"id": 43,
"question": "Which statement is true regarding the @ResponseStatus annotation?",
"options": [
"@ResponseStatus is detected on nested exceptions",
"The ExceptionHandlerExceptionResolver uses @ResponseStatus to map exception to HTTP status code",
"Response status set by RedirectView takes precedence over annotation value",
"The annotation can go on a @RequestMapping method, @RestController class or exception class"
],
"answer": "@ResponseStatus is detected on nested exceptions"
},
{
"id": 44,
"question": "Default LocaleResolver used by Spring.",
"options": [
"AcceptHeaderLocale",
"AcceptHeader",
"AcceptHeaderLocaleResolver",
"AcceptLocaleResolver"
],
"answer": "AcceptHeaderLocaleResolver"
},
{
"id": 45,
"question": "Alternative way to resolve locales.",
"options": [
"AcceptHeaderLocale",
"AcceptHeader",
"AcceptHeaderLocaleResolver",
"SessionLocaleResolver"
],
"answer": "SessionLocaleResolver"
},
{
"id": 46,
"question": "General-purpose class that allows a response to be rendered using a marshaller.",
"options": [
"MarshallingView",
"Marshalling",
"View",
"All of the mentioned"
],
"answer": "MarshallingView"
},
{
"id": 47,
"question": "Annotation which allows the Jaxb2Marshaller to detect a class’s fields.",
"options": [
"@XmlRootElement",
"@XmlRoot",
"@NotNull",
"None of the mentioned"
],
"answer": "@XmlRootElement"
},
{
"id": 48,
"question": "How to auto-inject into a field a Spring bean by its name?",
"options": [
"Using both @Autowired and @Qualifier",
"Using @Autowired and naming the field with the bean name",
"Using name attribute of @Autowired",
"Using only @Qualifier"
],
"answer": "Using both @Autowired and @Qualifier"
},
{
"id": 49,
"question": "Considering classes AccountServiceImpl and ClientServiceImpl. What is the result of the pointcut expression execution(* *..AccountServiceImpl.update(..)) && execution(* *..ClientServiceImpl.update(..))?",
"options": [
"No joint point is defined",
"Matches public update methods of both classes",
"Matches any update methods of both classes",
"Matches update methods with one or more arguments"
],
"answer": "No joint point is defined"
},
{
"id": 50,
"question": "Select the right statement about referring a Spring configuration file in the package com.example.myapp.",
"options": [
"all of the above",
"The classpath prefix could be omitted",
"Package name using dot is not well formatted",
"The slash before package name could be omitted"
],
"answer": "all of the above"
}, 
{
"id": 51,
"question": "Using the Spring AOP framework, what is the visibility of the method matched by the following join point? @Pointcut(\"execution(* *(..))\") private void anyOperation() {}",
"options": [
"Public methods",
"All methods, whatever their visibility",
"All methods except private",
"Protected and public methods"
],
"answer": "Public methods"
},
{
"id": 52,
"question": "What is the name of the bean defined in the following configuration class?",
"options": [
"clientRepository",
"JpaClientRepository",
"jpaClientRepository",
"Two beans are defined: a data source and a repository"
],
"answer": "clientRepository"
},
{
"id": 53,
"question": "Which of the following is true regarding the given Spring controller using @RestController and @RequestMapping POST /owner/{ownerId}?",
"options": [
"RequestMethod.GET method is more accurate than POST",
"@ResponseBody could be removed",
"@PathVariable should be replaced with @PathParam",
"Returning the 201 HTTP status code is better"
],
"answer": "RequestMethod.GET method is more accurate than POST"
},
{
"id": 54,
"question": "What is an advice in Spring AOP?",
"options": [
"An action taken by an aspect at a particular join point",
"A point during execution of a program",
"An aspect and a pointcut",
"A predicate that matches join points"
],
"answer": "An action taken by an aspect at a particular join point"
},
{
"id": 55,
"question": "What is the easiest method to write a unit test for a Spring controller?",
"options": [
"@RequestMapping(\"/displayAccount\") String displayAccount(@RequestParam(\"accountId\") int id, Model model)",
"void displayAccount(HttpServletRequest req, HttpServletResponse resp)",
"void displayAccount(HttpServletRequest req, HttpSession session)",
"@RequestMapping(\"/displayAccount\") String displayAccount(@PathVariable(\"accountId\") int id, Model model)"
],
"answer": "@RequestMapping(\"/displayAccount\") String displayAccount(@RequestParam(\"accountId\") int id, Model model)"
},
{
"id": 56,
"question": "Select method signatures that match with the pointcut execution(* com.test.service..*.*(*))",
"options": [
"void com.test.service.MyServiceImpl#transfert(Money amount)",
"void com.test.service.account.MyServiceImpl#transfert(Money amount)",
"void com.test.service.MyServiceImpl#transfert(Account account, Money amount)",
"void com.test.service.account.MyServiceImpl#transfert(Account account, Money amount)",
"None of the above"
],
"answer": "void com.test.service.MyServiceImpl#transfert(Money amount)"
},
{
"id": 57,
"question": "Given the Spring configuration <bean class=\"com.spring.service.BankServiceImpl\" p:bankName=\"NationalBank\">, which statement is correct?",
"options": [
"The p namespace has to be declared",
"NationalBank is a scalar value",
"Bean id is bankServiceImpl",
"The BankServiceImpl references a NationalBank bean"
],
"answer": "The p namespace has to be declared"
},
{
"id": 58,
"question": "Given the following configuration class using @Bean(name=\"clientRepository\"), what is correct?",
"options": [
"Configuration annotation is missing",
"Default constructor is missing",
"@Bean name is ambiguous",
"@Bean scope is prototype"
],
"answer": "Configuration annotation is missing"
},
{
"id": 59,
"question": "Using JdbcTemplate, which Spring class is used for result set parsing and merging rows into a single object?",
"options": [
"ResultSetExtractor",
"RowMapper",
"RowCallbackHandler",
"ResultSetMapper"
],
"answer": "ResultSetExtractor"
},
{
"id": 60,
"question": "To load root application context at the startup.",
"options": [
"ContextListener",
"ContextLoader",
"ContextLoaderListener",
"ContextEventListener"
],
"answer": "ContextLoaderListener"
},
{
"id": 61,
"question": "ActionSupport class provides a method to access Spring’s application context.",
"options": [
"getWebApplicationContext()",
"getWebApplication()",
"getApplicationContext()",
"contextEventListener()"
],
"answer": "getWebApplicationContext()"
},
{
"id": 62,
"question": "XML element to specify property values for scripting bean.",
"options": [
"lang:property",
"bean:property",
"script:property",
"None of the mentioned"
],
"answer": "lang:property"
},
{
"id": 63,
"question": "Annotation used to declare an introduction in Spring AOP.",
"options": [
"Before",
"After",
"@DeclareParents",
"None of the mentioned"
],
"answer": "@DeclareParents"
},
{
"id": 64,
"question": "Is the following pointcut expression correct? execution(* ArithmeticCalculator.*(..))",
"options": [
"Yes",
"No",
"If every target class is in same package",
"Depends where target class is located"
],
"answer": "If every target class is in same package"
},
{
"id": 65,
"question": "DAO methods require access to the session factory, which can be injected by:",
"options": [
"a setter method",
"constructor argument",
"none of the mentioned",
"all of the mentioned"
],
"answer": "all of the mentioned"
},
{
"id": 66,
"question": "Which Java Collection types can be injected in a Spring application?",
"options": [
"None of these",
"Using list, set, map or collection tag",
"Using list, set, props or collection tag",
"Using list, set, map or props tag",
"Using list, collection, map or props tag"
],
"answer": "Using list, set, map or props tag"
},
{
"id": 67,
"question": "What are the different types of AutoProxying?",
"options": [
"BeanNameAutoProxyCreator",
"DefaultAdvisorAutoProxyCreator",
"Metadata autoproxying",
"All of the above",
"none of the above"
],
"answer": "All of the above"
},
{
"id": 68,
"question": "What are the various editors used in Spring?",
"options": [
"PropertyEditor , URLEditor",
"ClassEditor, CustomDateEditor, StringTrimmerEditor",
"FileEditor, LocaleEditor, StringArrayPropertyEditor",
"All of the above"
],
"answer": "All of the above"
},
{
"id": 69,
"question": "How to use <ref> in Spring framework?",
"options": [
"<ref> is used with bean id",
"<ref> is used with string values"
],
"answer": "<ref> is used with bean id"
},
{
"id": 70,
"question": "How to define Inner bean in Spring?",
"options": [
"Use <property/> only",
"Use <property/> or <constructor-arg/>"
],
"answer": "Use <property/> or <constructor-arg/>"
},
{
"id": 71,
"question": "Which property is replaced by c-namespace in Spring?",
"options": [
"<property/>",
"<constructor-arg>"
],
"answer": "<constructor-arg>"
},
{
"id": 72,
"question": "By default a bean is eagerly initialized in Spring.",
"options": [
"True",
"False"
],
"answer": "True"
},
{
"id": 73,
"question": "By default a bean is not autowired.",
"options": [
"True",
"False"
],
"answer": "False"
},
{
"id": 74,
"question": "Can the class which Spring container makes subclass be final?",
"options": [
"No",
"Yes"
],
"answer": "No"
},
{
"id": 75,
"question": "What is the scope of a stateful bean in Spring?",
"options": [
"Singleton scope",
"Prototype scope"
],
"answer": "Prototype scope"
}, 
{
"id": 76,
"question": "In which Spring scope is a single bean instance created per IoC container?",
"options": [
"Singleton scope",
"Request scope"
],
"answer": "Singleton scope"
},
{
"id": 77,
"question": "In which Spring scope can any number of instances of bean be created?",
"options": [
"Request scope",
"Prototype scope"
],
"answer": "Prototype scope"
},
{
"id": 78,
"question": "When a bean has scope limited to only HTTP request, that is called:",
"options": [
"Request scope",
"Session scope"
],
"answer": "Request scope"
},
{
"id": 79,
"question": "When a bean has scope limited to HTTP session, that is called:",
"options": [
"Request scope",
"Session scope"
],
"answer": "Session scope"
},
{
"id": 80,
"question": "Thread scope bean has been introduced in Spring from the version:",
"options": [
"Spring 2.5",
"Spring 3.0"
],
"answer": "Spring 3.0"
},
{
"id": 81,
"question": "InitializingBean and DisposableBean are used to customize the nature of bean in Spring.",
"options": [
"Yes",
"No"
],
"answer": "Yes"
},
{
"id": 82,
"question": "How to shutdown the Spring IoC container gracefully in non-web applications?",
"options": [
"Using shutdownNow()",
"registerShutdownHook()"
],
"answer": "registerShutdownHook()"
},
{
"id": 83,
"question": "Which of the following is correct about dependency injection?",
"options": [
"It helps in decoupling application objects from each other",
"It helps in deciding the dependencies of objects",
"It stores object states in database",
"It stores object states in file system"
],
"answer": "It helps in decoupling application objects from each other"
},
{
"id": 84,
"question": "Which are the correct implementation classes of ApplicationContext?",
"options": [
"FileSystemXmlApplicationContext, ClassPathXmlApplicationContext, WebXmlApplicationContext",
"FileSystemApplicationContext, ClassPathApplicationContext, WebApplicationContext",
"AdvancedApplicationContext, FileApplicationContext",
"FileSystemApplicationContext, ClassPathApplicationContext"
],
"answer": "FileSystemXmlApplicationContext, ClassPathXmlApplicationContext, WebXmlApplicationContext"
},
{
"id": 85,
"question": "What is Spring MVC framework?",
"options": [
"Spring MVC framework is Model-Value-Class architecture and used to bind model data with values",
"The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications",
"Spring MVC framework is used for Transaction management for Web Applications",
"Spring MVC framework is used for AOP for Web Applications"
],
"answer": "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications"
},
{
"id": 86,
"question": "How to reload changes on Spring Boot without restarting the server?",
"options": [
"spring-boot-devtools dependency",
"spring-boot-test dependency",
"spring-boot-web dependency",
"spring-boot-jasper dependency"
],
"answer": "spring-boot-devtools dependency"
},
{
"id": 87,
"question": "Annotation to add security to your Spring Boot app?",
"options": [
"@EnableWebSecurity",
"@EnableSecurity",
"@EnableSpringSecurity"
],
"answer": "@EnableWebSecurity"
},
{
"id": 88,
"question": "What are the different implementations of Spring AOP?",
"options": [
"AspectJ",
"Spring AOP",
"JBoss AOP",
"All",
"None"
],
"answer": "All"
},
{
"id": 89,
"question": "How does Spring Batch work?",
"options": [
"step, ItemReader, ItemProcessor, ItemStreamWriter",
"step, ItemProcessor, ItemStreamWriter",
"step, ItemReader, ItemStreamWriter"
],
"answer": "step, ItemReader, ItemProcessor, ItemStreamWriter"
},
{
"id": 90,
"question": "LoggerInterceptor implementing HandlerInterceptor overrides which methods?",
"options": [
"preHandlerBean(), postHandlerBean(), afterCompletion()",
"PreProcessHandler(), PostProcessHandler(), afterCompletion()",
"PreHandler(), PostHandler(), afterCompletion()",
"none"
],
"answer": "PreHandler(), PostHandler(), afterCompletion()"
}
]