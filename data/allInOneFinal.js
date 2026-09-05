export const questionBank = [
    
  {
    "id": 1,
    "question": "What is the basis for equality state in Java Identity HashMap?",
    "options": [
      "Hash Code and equals",
      "Name",
      "Reference"
    ],
    "answer": "Reference"
  },
  {
    "id": 2,
    "question": "In Java, which of the following can be marked static?",
    "options": [
      "Methods, Variables, Initialization Blocks, Outer Classes, and Nested Classes",
      "Methods, Variables, Initialization Blocks, and Nested Classes",
      "Methods, Variables, Initialization Blocks, and Outer Classes",
      "Methods, Variables, and Initialization Block"
    ],
    "answer": "Methods, Variables, Initialization Blocks, and Nested Classes"
  },
  {
    "id": 3,
    "question": "What is the output of the following Java code snippet?\n\npublic class home implements Runnable {\n    public void run() {\n        System.out.printf(\"%d\",3);\n    }\n    public static void main(String[] args) throws InterruptedException {\n        Thread thread = new Thread(new home());\n        thread.start();\n        System.out.printf(\"%d\",1);\n        thread.join();\n        System.out.printf(\"%d\",2);\n    }\n}",
    "options": [
      "132",
      "123",
      "213",
      "312"
    ],
    "answer": "132"
  },
  {
    "id": 4,
    "question": "Which of the following statements is false about Java main method?",
    "options": [
      "We can override main method.",
      "Main method should be declared public and static.",
      "Main method should have only 1 argument of type String array.",
      "We can overload main method."
    ],
    "answer": "We can override main method."
  },
  {
    "id": 5,
    "question": "HTTP2 Client API is introduced in Java 9.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 6,
    "question": "Pick the right statement about creating a custom Java annotation.",
    "options": [
      "Annotations are created by using @interface, followed by annotation name.",
      "An annotation can have elements as well. They look like methods. We should not provide implementation for these elements.",
      "All annotations extend java.lang.annotation.Annotation interface. Annotations cannot include any extends clause.",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 7,
    "question": "What is the max capacity of a Java Blocking Queue?",
    "options": [
      "Integer.INFINITY",
      "Integer.MAX_VALUE",
      "BigDecimal.MAX_VALUE"
    ],
    "answer": "Integer.MAX_VALUE"
  },
  {
    "id": 8,
    "question": "Which of the following is the immutable Java List static factory method?",
    "options": [
      "List.of",
      "List.immutable",
      "List.create"
    ],
    "answer": "List.of"
  },
  {
    "id": 9,
    "question": "What is the command line tool introduced for JS engine in Java 8?",
    "options": [
      "jjs",
      "jss",
      "jfs",
      "jbd"
    ],
    "answer": "jjs"
  },
  {
    "id": 10,
    "question": "Which of these Java code snippets is a correct way of defining generic method?",
    "options": [
      "public <T1, T2, …, Tn> methodName() { }",
      "<T1, T2, …, Tn> methodName(T1, T2, …, Tn) { }",
      "All of the above"
    ],
    "answer": "public <T1, T2, …, Tn> methodName() { }"
  },
  {
    "id": 11,
    "question": "In Java 9, private methods are allowed in Interfaces.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 12,
    "question": "Java system properties can be set or modified at runtime.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 13,
    "question": "Identify the Java class used to create a new Process.",
    "options": [
      "ProcessBuilder",
      "ProcessFactory",
      "Process",
      "Thread"
    ],
    "answer": "ProcessBuilder"
  },
  {
    "id": 14,
    "question": "Pick the correct Java method reference usages.",
    "options": [
      "object::instanceMethod",
      "Class::staticMethod",
      "Class::new",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 15,
    "question": "Which is the correct Java code snippet to be used to create a Functional Interface?",
    "options": [
      "interface MyFunctionalInterface implements Functional {",
      "@FunctionalInterface interface MyFunctionalInterface {",
      "@Functional interface MyFunctionalInterface {"
    ],
    "answer": "@FunctionalInterface interface MyFunctionalInterface {"
  },
  {
    "id": 16,
    "question": "Which one will allow traversing a Java collection in each direction?",
    "options": [
      "ListIterator",
      "Iterator",
      "MapIterator",
      "SetIterator"
    ],
    "answer": "ListIterator"
  },
  {
    "id": 17,
    "question": "In Java, which method is used to inform the observer of the change in observed object?",
    "options": [
      "Check",
      "Update",
      "Inform",
      "notify"
    ],
    "answer": "Update"
  },
  {
    "id": 18,
    "question": "In Java, it is NOT possible to override default serialization.",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 19,
    "question": "Pick the class that is NOT part of Java collection framework.",
    "options": [
      "Map",
      "List",
      "Queue",
      "Struct"
    ],
    "answer": "Struct"
  },
  {
    "id": 20,
    "question": "Identify the parts of lambda expression in Java.",
    "options": [
      "Name",
      "Parameter list",
      "Body",
      "Return Type"
    ],
    "answer": [
      "Parameter list",
      "Body"
    ]
  }, 
  {
    "id": 21,
    "question": "Java Functional Interface can be defined as _____.",
    "options": [
      "Simple Abstract Markup",
      "Simple Active Markup",
      "Single Ambivalue Method",
      "Single Abstract Method"
    ],
    "answer": "Single Abstract Method"
  },
  {
    "id": 22,
    "question": "Which is the correct API to manage reactive streams in Java?",
    "options": [
      "java.util.concurrent.Flow",
      "java.util.concurrent.Flow.Publisher",
      "java.util.concurrent.Flow.Processor",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 23,
    "question": "In Java, which of the following data structure classes CANNOT be type parameterized?",
    "options": [
      "List",
      "Set",
      "Array",
      "Map"
    ],
    "answer": "Array"
  },
  {
    "id": 24,
    "question": "Which of these OOPS concept is enabled by method overriding in Java?",
    "options": [
      "Polymorphism",
      "Abstraction",
      "Inheritance",
      "Encapsulation"
    ],
    "answer": "Polymorphism"
  },
  {
    "id": 25,
    "question": "What is the output of the following Java code snippet?\n\nclass First {\n    public First() {\n        System.out.println(\"F\");\n    }\n}\n\nclass Second extends First {\n    public Second() {\n        System.out.println(\"S\");\n    }\n}\n\nclass Third extends Second {\n    public Third() {\n        System.out.println(\"T\");\n    }\n}\n\npublic class TestClass {\n    public static void main(String[] args) {\n        Third c = new Third();\n    }\n}",
    "options": [
      "TSF",
      "T",
      "F",
      "FST"
    ],
    "answer": "FST"
  },
  {
    "id": 26,
    "question": "How does one assign system property values to variable using Java class fields?",
    "options": [
      "@Autowire(\"${aProperty}\") private String aSysProp;",
      "@Environment(\"${aProperty}\") private String aSysProp;",
      "@Property(\"${aProperty}\") private String aSysProp;",
      "@Value(\"${aProperty}\") private String aSysProp;"
    ],
    "answer": "@Value(\"${aProperty}\") private String aSysProp;"
  },
  {
    "id": 27,
    "question": "Which of the following types of Java methods CANNOT be Type parameterized?",
    "options": [
      "Final methods",
      "Overriding methods",
      "Overloaded methods"
    ],
    "answer": "Overriding methods"
  },
  {
    "id": 28,
    "question": "Pick the correct Java Stream API’s?",
    "options": [
      "Stream.allMatch",
      "Stream.noneMatch",
      "Stream.anyMatch",
      "All the above"
    ],
    "answer": "All the above"
  },
  {
    "id": 29,
    "question": "Which class is introduced in Java 8 to get the current milliseconds?",
    "options": [
      "Clock",
      "Current Time",
      "Date Time",
      "Time"
    ],
    "answer": "Clock"
  },
  {
    "id": 30,
    "question": "In Java, which of these class types supports sequential and parallel processing of data?",
    "options": [
      "Queue",
      "Lambda",
      "ExecutorService",
      "Streams"
    ],
    "answer": "Streams"
  },
  {
    "id": 31,
    "question": "Which Java Set implementation is sorted and synchronized?",
    "options": [
      "TreeSet",
      "LinkedHashSet",
      "HashSet",
      "ConcurrentSkipListSet"
    ],
    "answer": "ConcurrentSkipListSet"
  },
  {
    "id": 32,
    "question": "Which of the following statements is NOT correct for JVM?",
    "options": [
      "JVM acts as a translator that translates different Machine code (on the basis of Host Machine) for a common Byte Code.",
      "JVM is a Virtual Machine that acts as an intermediary between Java Application and Host Operating System.",
      "JVM reads Byte Code and generates Machine Code.",
      "JVM reads Source Code and generates Byte Code."
    ],
    "answer": "JVM reads Source Code and generates Byte Code."
  },
  {
    "id": 33,
    "question": "Is the following a valid Java code snippet?\n\nOptional<String> aValue = Optional.of(\"Not Empty\");\nif (aValue.ifPresent()) {\n    System.out.println(\"Got Not Empty\");\n}",
    "options": [
      "True",
      "False"
    ],
    "answer": "False"
  },
  {
    "id": 34,
    "question": "Java Stream does NOT store the elements. It simply performs the aggregate operations to get the desired stream of data.",
    "options": [
      "True",
      "False"
    ],
    "answer": "True"
  },
  {
    "id": 35,
    "question": "Which Java class is used to apply reduction or aggregate functions on streams?",
    "options": [
      "Filters",
      "Reduction",
      "Collectors"
    ],
    "answer": "Collectors"
  },
  {
    "id": 36,
    "question": "Which of the following statements are true about Java finally block?",
    "options": [
      "i. A finally block is executed, only after the catch block is executed.",
      "ii. A finally block is executed whether an exception is thrown or not.",
      "iii. A finally block is NOT mandatory.",
      "iv. A finally block is executed, only if an exception occurs."
    ],
    "answer": [
      "ii. A finally block is executed whether an exception is thrown or not.",
      "iii. A finally block is NOT mandatory."
    ]
  },
  {
    "id": 37,
    "question": "Which of these is a standard Java Interface?",
    "options": [
      "Serializable",
      "Long",
      "System",
      "Collections"
    ],
    "answer": "Serializable"
  },
  {
    "id": 38,
    "question": "What is the replacement for PermGen space in Java 8?",
    "options": [
      "FixedGen",
      "Metaspace",
      "MetaGenspace"
    ],
    "answer": "Metaspace"
  },
  {
    "id": 39,
    "question": "What is the output of the following Java code snippet?\n\nStringJoiner astring = new StringJoiner(\"-\", \"{\", \"}\");\nastring.add(\"A\");\nastring.add(\"B\");\nastring.add(\"C\");",
    "options": [
      "{A-B-C}",
      "{A}-{B}-{C}",
      "{–A–}{–B–}{–C–}"
    ],
    "answer": "{A-B-C}"
  },
  {
    "id": 40,
    "question": "What is the return type of Java Lambda expressions?",
    "options": [
      "Void",
      "Lambda",
      "Function",
      "Regex"
    ],
    "answer": "Function"
  }, 
  {
    "id": 41,
    "question": "Name the two types of streams in Java.",
    "options": [
      "Sync and async",
      "Sequential and parallel",
      "Random and ordered"
    ],
    "answer": "Sequential and parallel"
  },
  {
    "id": 42,
    "question": "What is the difference between peek() and dequeue()?",
    "options": [
      "peek() returns the next item in line but dequeue() removes and returns the next item in line",
      "peek() and dequeue() return the next item in line",
      "peek() and dequeue() remove and return the next item in line"
    ],
    "answer": "peek() returns the next item in line but dequeue() removes and returns the next item in line"
  },
  {
    "id": 43,
    "question": "Which one of the following statements on Java String is correct?",
    "options": [
      "replace() method replaces only first occurrences of a character in invoking string with the given character.",
      "replace() method replaces last occurrence of a character in invoking string with the given character.",
      "replace() method replaces all occurrences of one character in invoking string with the given character.",
      "replace() method replaces all the characters in invoking string with the given character."
    ],
    "answer": "replace() method replaces all occurrences of one character in invoking string with the given character."
  },
  {
    "id": 44,
    "question": "What is the result of the following Java code snippet?\n\nAnimal animal = new Dog();\nCat cat = (Cat) animal;\nSystem.out.println(cat.noise());\n// Exception in thread \"main\" java.lang.ClassCastException",
    "options": [
      "peep",
      "bark",
      "meow",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    "answer": "An exception is thrown at runtime"
  },
  {
    "id": 45,
    "question": "What is the output of the following Java code snippet with exception handling?\n\nA a = new SubB2();\na.foo(); // line 15",
    "options": [
      "B",
      "B, followed by an Exception.",
      "Compilation fails due to an error on line 9.",
      "Compilation fails due to an error on line 15.",
      "An Exception is thrown with no other output"
    ],
    "answer": "Compilation fails due to an error on line 15."
  },
  {
    "id": 46,
    "question": "What is the output of the following Java code snippet?\n\nThread t = Thread.currentThread();\nt.setName(\"new thread\");\nSystem.out.println(t);",
    "options": [
      "Thread[main,5,main]",
      "Thread[new thread,5,main]",
      "Thread[Thread-0,5,main]",
      "Compilation fails"
    ],
    "answer": "Thread[new thread,5,main]"
  },
  {
    "id": 47,
    "question": "Which of these will create and start the MyRunnable thread?",
    "options": [
      "new MyRunnable().start()",
      "new Thread(new MyRunnable()).run()",
      "new Thread(new MyRunnable()).start()",
      "MyRunnable.startThread()"
    ],
    "answer": "new Thread(new MyRunnable()).start()"
  },
  {
    "id": 48,
    "question": "Observe the code below. Which four statements are true? (Choose four)\n\nclass Mammal { }  \nclass Raccoon extends Mammal {  \n    Mammal m = new Mammal();  \n}  \nclass BabyRaccoon extends Mammal { }",
    "options": [
      "Raccoon is-a Mammal.",
      "Raccoon has-a Mammal.",
      "BabyRaccoon is-a Mammal.",
      "BabyRaccoon is-a Raccoon.",
      "BabyRaccoon has-a Mammal.",
      "BabyRaccoon is-a BabyRaccoon."
    ],
    "answer": [
      "Raccoon is-a Mammal.",
      "Raccoon has-a Mammal.",
      "BabyRaccoon is-a Mammal.",
      "BabyRaccoon is-a BabyRaccoon."
    ]
  },
  {
    "id": 49,
    "question": "Observe the code and predict the output:\n\nByteArrayInputStream reading example",
    "options": [
      "abc",
      "ABC",
      "Abc",
      "Compilation fails"
    ],
    "answer": "ABC"
  },
  {
    "id": 50,
    "question": "Predict the output of the code:\n\nStringBuffer s1 = new StringBuffer(\"Hello World\");\ns1.insert(6, \"Good \");\nSystem.out.println(s1);",
    "options": [
      "HelloGoodWorld",
      "HellGoodoWorld",
      "HellGood oWorld",
      "Hello Good World"
    ],
    "answer": "Hello Good World"
  },
  {
    "id": 51,
    "question": "Which of these keywords cannot be used for a class which has been declared final?",
    "options": [
      "abstract",
      "extends",
      "abstract and extends",
      "None of the mentioned"
    ],
    "answer": "abstract and extends"
  },
  {
    "id": 52,
    "question": "Predict the output:\n\nsos('1' + new Integer(2) + 3);",
    "options": [
      "6",
      "123",
      "33",
      "Compilation fails"
    ],
    "answer": "123"
  },
  {
    "id": 53,
    "question": "Observe the code and predict the output:\n\nint a[] = new int[]{1, 2, 6, 4, 5};  \nint b[] = new int[5];  \nb[2] = a[2];  \na[2] = 10;  \nSystem.out.println(b[2]);",
    "options": [
      "10",
      "6",
      "2",
      "Compilation fails"
    ],
    "answer": "6"
  },
  {
    "id": 54,
    "question": "What is the output of this program?\n\nVector obj = new Vector(4, 2);  \nobj.addElement(new Integer(3));  \nobj.addElement(new Integer(2));  \nobj.addElement(new Integer(5));  \nobj.removeAll(obj);  \nSystem.out.println(obj.isEmpty());",
    "options": [
      "0",
      "1",
      "true",
      "false"
    ],
    "answer": "true"
  },
  {
    "id": 55,
    "question": "What is the output?\n\nTreeMap example",
    "options": [
      "[A, B, C]",
      "[1, 2, 3]",
      "{A=1, B=2, C=3}",
      "[A=1, B=2, C=3]"
    ],
    "answer": "[A=1, B=2, C=3]"
  },
  {
    "id": 56,
    "question": "What is the output?\n\nBitSet example with clear(2)",
    "options": [
      "{0, 1, 3, 4}",
      "{0, 1, 2, 4}",
      "{0, 1, 2, 3, 4}",
      "{0, 0, 0, 3, 4}"
    ],
    "answer": "{0, 1, 3, 4}"
  },
  {
    "id": 57,
    "question": "What is the output?\n\nArray example with Arrays.fill",
    "options": [
      "12885",
      "12845",
      "58881",
      "54881"
    ],
    "answer": "58881"
  },
  {
    "id": 58,
    "question": "What is the output of the following program?\n\nLinkedList, shuffle example",
    "options": [
      "2 8 5 1",
      "1 5 8 2",
      "1 2 5 8",
      "Any random order"
    ],
    "answer": "Any random order"
  },
  {
    "id": 59,
    "question": "What is the output?\n\nLinkedList, sort example",
    "options": [
      "2 8 5 1",
      "1 5 8 2",
      "1 2 5 8",
      "2 1 8 5"
    ],
    "answer": "1 2 5 8"
  },
  {
    "id": 60,
    "question": "What is the output?\n\nGeneric stack example with Strings and Integers",
    "options": [
      "Error // error because gs String and gs Integer use same variable name",
      "Hello",
      "36",
      "Hello 36"
    ],
    "answer": "Hello 36"
  }, 
  {
    "id": 61,
    "question": "What is the output?\n\nclass output {  \n    public static void main(String args[]) {  \n        StringBuffer c = new StringBuffer(\"Hello\");  \n        StringBuffer c1 = new StringBuffer(\" World\");  \n        c.append(c1);  \n        System.out.println(c);  \n    }  \n}",
    "options": [
      "Hello",
      "World",
      "HelloWorld",
      "Hello World"
    ],
    "answer": "Hello World"
  },
  {
    "id": 62,
    "question": "What is the output?\n\nclass exception_handling {  \n    public static void main(String args[]) {  \n        try {  \n            System.out.print(\"Hello\" + \" \" + 1 / 0);  \n        }  \n        catch(ArithmeticException e) {  \n            System.out.print(\"World\");  \n        }  \n    }  \n}",
    "options": [
      "Hello",
      "World",
      "HelloWorld",
      "Hello World"
    ],
    "answer": "World"
  },
  {
    "id": 63,
    "question": "What is the output?\n\nclass output {  \n    public static void main(String args[]) {  \n        char c[] = {'a', '1', 'b', ' ', 'A', '0'};  \n        for (int i = 0; i < 5; ++i) {  \n            if (Character.isDigit(c[i]))  \n                System.out.println(c[i] + \" is a digit\");  \n            if (Character.isWhitespace(c[i]))  \n                System.out.println(c[i] + \" is a Whitespace char\");  \n            if (Character.isUpperCase(c[i]))  \n                System.out.println(c[i] + \" is an Upper case Letter\");  \n            if (Character.isLowerCase(c[i]))  \n                System.out.println(c[i] + \" is a lower case Letter\");  \n            i = i + 3;  \n        }  \n    }  \n}",
    "options": [
      "a is a lower case Letter, is White space character",
      "b is a lower case Letter, is White space character",
      "a is a lower case Letter, A is an Upper case Letter",
      "a is a lower case Letter, 0 is a digit"
    ],
    "answer": "a is a lower case Letter, A is an Upper case Letter"
  },
  {
    "id": 64,
    "question": "What is the output?\n\nimport java.io.*;  \nclass filesinputoutput {  \n    public static void main(String args[]) throws IOException {  \n        InputStream obj = new FileInputStream(\"inputoutput.java\");  \n        System.out.print(obj.available());  \n    }  \n}",
    "options": [
      "true",
      "false",
      "prints number of bytes in file",
      "prints number of characters in the file"
    ],
    "answer": "prints number of bytes in file"
  },
  {
    "id": 65,
    "question": "Observe the code and predict output with ByteArrayOutputStream",
    "options": [
      "abc",
      "ABC",
      "ABC abc",
      "Compilation fails"
    ],
    "answer": "ABC"
  },
  {
    "id": 66,
    "question": "Which of these methods are used to read in from file?",
    "options": [
      "get()",
      "read()",
      "scan()",
      "readFileInput()"
    ],
    "answer": "read()"
  },
  {
    "id": 67,
    "question": "What is the output of the code?\n\nStringBuffer s1 = new StringBuffer(\"Hello\");\nStringBuffer s2 = s1.reverse();\nSystem.out.println(s2);",
    "options": [
      "Hello",
      "olleH",
      "HELLO",
      "Compilation fails"
    ],
    "answer": "olleH"
  },
  {
    "id": 68,
    "question": "Which pattern is used in the following code?\n\nList iteration example using Iterator",
    "options": [
      "Observer",
      "Singleton",
      "Iterator",
      "Factory"
    ],
    "answer": "Iterator"
  },
  {
    "id": 69,
    "question": "java.util.Enumeration is an example of which pattern?",
    "options": [
      "Observer",
      "Singleton",
      "Iterator",
      "Factory"
    ],
    "answer": "Iterator"
  },
  {
    "id": 70,
    "question": "Observe the following code:\n\nclass X implements Runnable {  \n    public static void main(String args[]) {  \n        X run = new X();  \n        Thread t = new Thread(run);  \n        t.start();  \n    }  \n    public void run() {}  \n}",
    "options": [
      "X run = new X(); Thread t = new Thread(run); t.start();"
    ],
    "answer": "X run = new X(); Thread t = new Thread(run); t.start();"
  },
  {
    "id": 71,
    "question": "Predict the output of the code with exception handling:\n\nint a = 5; int b = 0; int c = a / b;",
    "options": [
      "World",
      "hello"
    ],
    "answer": "hello"
  },
  {
    "id": 72,
    "question": "What is the output?\n\nint a = 10; int b = 0; int c = a / b;",
    "options": [
      "runtime exception"
    ],
    "answer": "runtime exception"
  },
  {
    "id": 73,
    "question": "Which will contain the body of the thread?",
    "options": [
      "run()"
    ],
    "answer": "run()"
  },
  {
    "id": 74,
    "question": "Which two of the following methods are defined in class Thread?",
    "options": [
      "start()",
      "wait()",
      "notify()",
      "run()"
    ],
    "answer": [
      "start()",
      "run()"
    ]
  },
  {
    "id": 75,
    "question": "Assume the following method is properly synchronized and called from a thread A on an object B: wait(2000); When will thread A become a candidate to get another turn at the CPU?",
    "options": [
      "After thread A is notified, or after two seconds.",
      "After the lock on B is released, or after two seconds.",
      "Two seconds after thread A is notified.",
      "Two seconds after lock B is released."
    ],
    "answer": "After thread A is notified, or after two seconds."
  },
  {
    "id": 76,
    "question": "Predict the output:\n\nclass Test {  \n    public static void main(String[] args) {  \n        String str = new String(\".....\");  \n        do {  \n            str = \"Hello Stop World\";  \n            System.out.println(str);  \n        } while(str != \"Strong\");  \n    }  \n}",
    "options": [
      "Hello Stop World"
    ],
    "answer": "Hello Stop World"
  },
  {
    "id": 77,
    "question": "The code snippet below is an example of which of the following?\n\nLong myLong = 21L;",
    "options": [
      "Auto boxing",
      "Auto unboxing",
      "Auto casting",
      "Auto instancing"
    ],
    "answer": "Auto boxing"
  },
  {
    "id": 78,
    "question": "What is the result?\n\ninterface TestA { String toString(); } \nAnonymous class printing toString()",
    "options": [
      "test",
      "null",
      "An exception is thrown at runtime",
      "Compilation fails because of an error in line 1",
      "Compilation fails because of an error in line 4",
      "Compilation fails because of an error in line 5"
    ],
    "answer": "test"
  },
  {
    "id": 79,
    "question": "Output of GenericTest Program:\n\nPrints the objects in array (GenericTest@hashcode), last element null.",
    "options": [
      "Prints the objects in array (GenericTest@hashcode), last element null."
    ],
    "answer": "Prints the objects in array (GenericTest@hashcode), last element null."
  },
  {
    "id": 80,
    "question": "Output of substring program:\n\nString word = \"IDEAL\";\nSystem.out.println(word.substring(0, word.length()-1) + word);",
    "options": [
      "DEAL"
    ],
    "answer": "DEAL"
  }, 
   {
    "id": 81,
    "question": "How many threads from main class?",
    "options": [
      "Only 1 thread (main thread)"
    ],
    "answer": "Only 1 thread (main thread)"
  },
  {
    "id": 82,
    "question": "Start same thread two times:\n\nt1.start();  \nt1.start();",
    "options": [
      "Runtime Exception (IllegalThreadStateException)"
    ],
    "answer": "Runtime Exception (IllegalThreadStateException)"
  },
  {
    "id": 83,
    "question": "What is the output?\n\nclass Output {  \n    public static void main(String args[]) {  \n        Object obj = new Object();  \n        System.out.print(obj.getClass());  \n    }  \n}",
    "options": [
      "Object",
      "class Object",
      "class java.lang.Object",
      "java.lang.Object"
    ],
    "answer": "class java.lang.Object"
  },
  {
    "id": 84,
    "question": "What is the output?\n\nclass A {  \n    int i;  \n    int j;  \n    A() {  \n        i = 1;  \n        j = 2;  \n    }  \n}  \n\nclass Output {  \n    public static void main(String args[]) {  \n        A obj1 = new A();  \n        System.out.println(obj1.toString());  \n    }  \n}",
    "options": [
      "A",
      "1 2",
      "String associated with obj1, e.g., A@5e265ba4",
      "Compilation fails"
    ],
    "answer": "String associated with obj1, e.g., A@5e265ba4"
  },
  {
    "id": 85,
    "question": "Output of divide method with try-catch-finally when exception occurs",
    "options": [
      "Only Exception is printed",
      "Only finally is printed",
      "Both Exception and finally are printed if exception occurs",
      "Compilation fails"
    ],
    "answer": "Both Exception and finally are printed if exception occurs"
  },
  {
    "id": 86,
    "question": "Insert the appropriate code:\n\npublic class Sprite {  \n    public int fubar(Foo foo) {  \n        return foo.bar();  \n    }  \n    public void testFoo() {  \n        fubar(  \n            // insert code here  \n        );  \n    }  \n}",
    "options": [
      "new Foo()",
      "new Foo() { public int bar() { return 1; } }",
      "new Foo(1)",
      "Foo.bar()"
    ],
    "answer": "new Foo() { public int bar() { return 1; } }"
  },
  {
    "id": 87,
    "question": "What is the output of the following code?\n\nclass Main {  \n    String getValue(String word) {  \n        System.out.println(word);  \n        if (word.length() == 1) {  \n            return \"\";  \n        } else {  \n            return getValue(word.substring(0, word.length() - 1)) + word.charAt(word.length() - 1);  \n        }  \n    }  \n    public static void main(String[] args) {  \n        Main obj = new Main();  \n        System.out.println(obj.getValue(\"DEMOS\"));  \n    }  \n}",
    "options": [
      "D",
      "DEMOS",
      "EMOS",
      "Empty String"
    ],
    "answer": "EMOS"
  },
  {
    "id": 88,
    "question": "What sort of compilation error you will get? How to fix the compilation error?\n\nabstract class xyz {  \n    abstract abc(int a, int b) { }  \n}",
    "options": [
      "Missing return type",
      "Method cannot have a body",
      "Syntax error",
      "Give return type void. and remove empty parenthesis."
    ],
    "answer": "Give return type void. and remove empty parenthesis."
  },
  {
    "id": 89,
    "question": "Will this code compile?\n\ninterface ATOB {  \n    String s = \"yo\";  \n    public void meth();  \n}  \ninterface BTOC { }  \ninterface C extends ATOB, BTOC {  \n    public void meth();  \n    public void meth(int x);  \n}",
    "options": [
      "Yes, this code will compile without any error",
      "No, compilation fails due to multiple inheritance",
      "No, compilation fails because of variable s",
      "No, compilation fails because of method overloading"
    ],
    "answer": "Yes, this code will compile without any error"
  },
  {
    "id": 90,
    "question": "How can I inherit both the interface and abstract class?\n\ninterface Data {  \n    public void load();  \n}  \nabstract class Info {  \n    public abstract void load();  \n}",
    "options": [
      "class Xyz extends Info implements Data { void load() { } }",
      "class Xyz implements Data, Info { void load() { } }",
      "class Xyz extends Info, Data { void load() { } }",
      "Not possible in Java"
    ],
    "answer": "class Xyz extends Info implements Data { void load() { } }"
  },
  {
    "id": 91,
    "question": "Will this code compile?\n\nclass ATOB {  \n    static public String str = \"abc\";  \n}  \nclass BTOC extends ATOB {  \n    static public String str = \"bcr\";  \n}  \nclass Main {  \n    public static void main(String[] args) {  \n        BTOC obj = new BTOC();  \n        System.out.println(obj.str);  \n    }  \n}",
    "options": [
      "Yes, will compile fine and print \"abc\"",
      "Yes. will compile fine, but str is being overwritten in B class.",
      "No, compilation fails",
      "Runtime exception"
    ],
    "answer": "Yes. will compile fine, but str is being overwritten in B class."
  },
  {
    "id": 92,
    "question": "Which of these handles the exception when no catch is used?",
    "options": [
      "Default handler",
      "Finally",
      "Throw handler",
      "Java run time system"
    ],
    "answer": "Default handler"
  },
  {
    "id": 93,
    "question": "What is the output of the code?\n\nclass Main {  \n    static boolean foo(char c) {  \n        System.out.print(c);  \n        return true;  \n    }  \n    public static void main(String[] args) {  \n        int i = 0;  \n        for(foo('A'); foo('B') && (i < 2); foo('C')) {  \n            i++;  \n            foo('D');  \n        }  \n    }  \n}",
    "options": [
      "ABCD",
      "ABDCBDCB",
      "ABABAB",
      "ADBCC"
    ],
    "answer": "ABDCBDCB"
  },
  {
    "id": 94,
    "question": "What is the OUTPUT of the code with TreeSet?\n\nal.add(\"7\"); // line 5",
    "options": [
      "7 9",
      "9 7",
      "error: incompatible types: String cannot be converted to Integer (line 5)",
      "Runtime Exception"
    ],
    "answer": "error: incompatible types: String cannot be converted to Integer (line 5)"
  },
  {
    "id": 95,
    "question": "Which implementation of Set would you choose if you want the iterator of Set to give objects in the order they were inserted?",
    "options": [
      "LinkedHashSet",
      "TreeSet",
      "HashSet"
    ],
    "answer": "LinkedHashSet"
  },
  {
    "id": 96,
    "question": "What is the output of the HashMap code?",
    "options": [
      "100 John 101 Paul 102 George 103 Ringo",
      "100 John 101 Paul 102 George",
      "103 Ringo 102 George 101 Paul 100 John",
      "Compilation error"
    ],
    "answer": "100 John 101 Paul 102 George 103 Ringo"
  },
  {
    "id": 97,
    "question": "What is the output after sorting and reversing ArrayList?",
    "options": [
      "[1, 2, 3, 5]",
      "[2, 1, 3, 5]",
      "[2, 5, 3, 1]",
      "[5, 3, 2, 1]",
      "[1, 3, 5, 2]",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    "answer": "[2, 5, 3, 1]"
  },
  {
    "id": 98,
    "question": "Which Man class properly represents the relationship \"Man has a best friend who is a Dog\"?",
    "options": [
      "class Man extends Dog { }",
      "class Man implements Dog { }",
      "class Man { private BestFriend dog; }",
      "class Man { private Dog bestFriend; }",
      "class Man { private Dog<bestFriend>; }",
      "class Man { private BestFriend<dog>; }"
    ],
    "answer": "class Man { private Dog bestFriend; }"
  },
  {
    "id": 99,
    "question": "What is the output?\n\nAlpha a = new Beta(); Beta b = (Beta)a; a.foo(); b.foo();",
    "options": [
      "Afoo Afoo",
      "Afoo Bfoo",
      "Bfoo Afoo",
      "Bfoo Bfoo",
      "Compilation fails"
    ],
    "answer": "Bfoo Bfoo"
  },
  {
    "id": 100,
    "question": "Which code fragment, inserted at line 23, allows the code to compile?\n\nDateFormat df; Date date = new Date(); String s = df.format(date);",
    "options": [
      "df = new DateFormat();",
      "df = Date.getFormat();",
      "df = date.getFormat();",
      "df = DateFormat.getFormat();",
      "df = DateFormat.getInstance();"
    ],
    "answer": "df = DateFormat.getInstance();"
  }, 
   {
    "id": 101,
    "question": "Output?\n\npublic class Base {  \n    public static final String FOO = \"foo\";  \n    public static void main(String[] args) {  \n        Base b = new Base();  \n        Sub s = new Sub();  \n        System.out.print(Base.FOO);  \n        System.out.print(Sub.FOO);  \n        System.out.print(b.FOO);  \n        System.out.print(s.FOO);  \n        System.out.print(((Base)s).FOO);  \n    }  \n}  \n\nclass Sub extends Base {  \n    public static final String FOO = \"bar\";  \n}",
    "options": [
      "foofoofoofoofoo",
      "foobarfoobarbar",
      "foobarfoofoofoo",
      "foobarfoobarfoo",
      "barbarbarbarbar",
      "foofoofoobarbar",
      "foofoofoobarfoo"
    ],
    "answer": "foobarfoobarfoo"
  },
  {
    "id": 102,
    "question": "A company has a business application that provides reports. Adding support for new printers requires changes in all reports. Which two design concepts most likely explain this situation?",
    "options": [
      "Inheritance",
      "Low cohesion",
      "Tight coupling",
      "High cohesion",
      "Loose coupling",
      "Object immutability"
    ],
    "answer": ["Low cohesion", "Tight coupling"]
  },
  {
    "id": 103,
    "question": "Reducing number of methods in a utility class API without losing functionality promotes which OO principles?",
    "options": [
      "Looser coupling",
      "Tighter coupling",
      "Lower cohesion",
      "Higher cohesion",
      "Weaker encapsulation",
      "Stronger encapsulation"
    ],
    "answer": ["Looser coupling"]
  },
  {
    "id": 104,
    "question": "The current design allows other classes to access methods that should be internal. What design issue is this?",
    "options": [
      "Tight coupling",
      "Low cohesion",
      "High cohesion",
      "Loose coupling",
      "Weak encapsulation",
      "Strong encapsulation"
    ],
    "answer": "Weak encapsulation"
  },
  {
    "id": 105,
    "question": "Output?\n\npublic class TestString1 {  \n    public static void main(String[] args) {  \n        String str = \"420\";  \n        str += 42;  \n        System.out.print(str);  \n    }  \n}",
    "options": [
      "42",
      "420",
      "462",
      "42042",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    "answer": "42042"
  },
  {
    "id": 106,
    "question": "Which three are valid modifiers on this line?\n\npublic interface Status {  \n    /* insert code here */ int MY_VALUE = 10;  \n}",
    "options": [
      "final",
      "static",
      "native",
      "public",
      "private",
      "abstract",
      "protected"
    ],
    "answer": ["final", "static", "public"]
  },
  {
    "id": 107,
    "question": "Algorithm requires a List supporting efficient add(0, object) but no quick random access. Which implementation supports this?",
    "options": [
      "java.util.Queue",
      "java.util.ArrayList",
      "java.util.LinearList",
      "java.util.LinkedList"
    ],
    "answer": "java.util.LinkedList"
  },
  {
    "id": 108,
    "question": "Which three are true?\n\ninterface Jumper { public void jump(); }  \nclass Animal {}  \nclass Dog extends Animal { Tail tail; }  \nclass Beagle extends Dog implements Jumper { public void jump() {} }  \nclass Cat implements Jumper { public void jump() {} }",
    "options": [
      "Cat is-a Animal",
      "Cat is-a Jumper",
      "Dog is-a Animal",
      "Dog is-a Jumper",
      "Cat has-a Animal",
      "Beagle has-a Tail",
      "Beagle is-a Jumper"
    ],
    "answer": ["Cat is-a Jumper", "Dog is-a Animal", "Beagle has-a Tail"]
  },
  {
    "id": 109,
    "question": "Which class correctly uses Data interface and Info abstract class?\n\ninterface Data { public void load(); }  \nabstract class Info { public abstract void load(); }",
    "options": [
      "public class Employee extends Info implements Data { public void load() { /* do something */ } }",
      "public class Employee implements Info extends Data { public void load() { /* do something */ } }",
      "public class Employee extends Info implements Data { public void load() { } public void Info.load() { } }",
      "public class Employee implements Info extends Data { public void Data.load() { } public void load() { } }",
      "public class Employee implements Info extends Data { public void load() { } public void Info.load() { } }",
      "public class Employee extends Info implements Data { public void Data.load() { } public void Info.load() { } }"
    ],
    "answer": "public class Employee extends Info implements Data { public void load() { /* do something */ } }"
  },
  {
    "id": 110,
    "question": "Output?\n\nclass TestA {  public void start() { System.out.println(\"TestA\"); } }  \nclass TestB extends TestA {  public void start() { System.out.println(\"TestB\"); }  \n    public static void main(String[] args) {  ((TestA)new TestB()).start(); } }",
    "options": [
      "TestA",
      "TestB",
      "Compilation fails",
      "An exception is thrown at runtime"
    ],
    "answer": "TestB"
  },
  {
    "id": 111,
    "question": "Output?\n\nimport java.io.*;  \nclass files {  \n    public static void main(String args[]) {  \n        File obj = new File(\"/java/system\");  \n        System.out.print(obj.getName());  \n    }  \n}",
    "options": [
      "java",
      "system",
      "java/system",
      "/java/system"
    ],
    "answer": "system"
  },
  {
    "id": 112,
    "question": "Output?\n\nimport java.io.*;  \nclass files {  \n    public static void main(String args[]) {  \n        File obj = new File(\"/java/system\");  \n        System.out.print(obj.getAbsolutePath());  \n    }  \n}",
    "options": [
      "java",
      "system",
      "java/system",
      "/java/system"
    ],
    "answer": "/java/system"
  },
  {
    "id": 113,
    "question": "Output?\n\nimport java.lang.*;  \nclass exception_handling {  \n    public static void main(String args[]) {  \n        try {  \n            int a = args.length;  \n            int b = 10 / a;  \n            System.out.print(a);  \n            try {  \n                if (a == 1)  a = a / a - a;  \n                if (a == 2) { int[] c = {1}; c[8] = 9; }  \n            }  \n            catch(ArrayIndexOutOfBoundsException e) { System.out.println(\"TypeA\"); }  \n        }  \n        catch (ArithmeticException e) { System.out.println(\"TypeB\"); }  \n    }  \n}",
    "options": [
      "TypeA",
      "TypeB",
      "0TypeA"
    ],
    "answer": "TypeB"
  }
,
  {
    "id": 24,
    "section": "MONGODB",
    "question": "In MongoDB, what is the equivalent of SQL term row?",
    "options": [
      "A.Primary Key",
      "B.Index",
      "C.Field",
      "D.Document"
    ],
    "answer": "D.Document"
  },
  {
    "id": 25,
    "question": "What is the equivalent of the following SQL command in MongoDB? UPDATE user SET email = ‘NA’ WHERE age < 18",
    "options": [
      "A.db.user.updateMany({ gt: { $age= 18 } },{ $set: {email = \"NA\" } })",
      "B.db.user.updateMany({ age: { $lt: 18 } },{ $set: {email : \"NA\" } })",
      "C.db.user.updateMany({ gt: { $age: 18 } },{ $set: {email : \"NA\" } })",
      "D.db.user.updateMany({ age: { $gt: 18 } },{ $set: {email : \"NA\" } })"
    ],
    "answer": "B.db.user.updateMany({ age: { $lt: 18 } },{ $set: {email : \"NA\" } })"
  },
  {
    "id": 26,
    "question": "How would you limit the results of a find to 10 items?",
    "options": [
      "adb.collection.find({},{limit:10})",
      "db.collection.find().limit(10)",
      "db.collection.limit(query, 10)",
      "This is not possible in the node.js driver"
    ],
    "answer": "db.collection.find().limit(10)"
  },
  {
    "id": 27,
    "question": "Which of the following code will give an error on the MongoDB command shell?",
    "options": [
      "A.use databasename",
      "B.show dbs",
      "C.USE databasename",
      "D.Db"
    ],
    "answer": "C.USE databasename"
  },
  {
    "id": 28,
    "question": "What theorem or principal MongoDB follows?",
    "options": [
      "A.APAC",
      "B.Always-Sync",
      "C.ASCII",
      "D.CAP"
    ],
    "answer": "D.CAP"
  },
  {
    "id": 29,
    "question": "What is NoSQL?",
    "options": [
      "A.No Object SQL",
      "B.No SQL Server",
      "C.Not Only SQL",
      "D.No Relational Database"
    ],
    "answer": "C.Not Only SQL"
  },
  {
    "id": 30,
    "question": "When there is no match of the document in the collection what do upsert: true do?",
    "options": [
      "A.Delete",
      "B.Nothing",
      "C.Insert",
      "D.Update"
    ],
    "answer": "C.Insert"
  },
  {
    "id": 31,
    "question": "Upon running the following command, what all the fields will be returned in the output? db.collection.find( { qty: { $gt: 6 } }, { name: 1, _id: 0 } )",
    "options": [
      "A._id",
      "B.name",
      "C._id, name",
      "D.name1, _id0"
    ],
    "answer": "B.name"
  },
  {
    "id": 32,
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
    "id": 33,
    "question": "In the following command, what does the second parameter represent? db.collection.find( { qty: { $gt: 6 } }, { name: 1, wins: 1 } )",
    "options": [
      "Read Concern",
      "Projection",
      "Write Concern",
      "Query"
    ],
    "answer": "Projection"
  }
,
  {
    "id": 1,
    "section": "MongoDB & Mongoose",
    "question": "Which of the following code will give error on MongoDB command shell?",
    "options": [
      "use databasename",
      "show dbs",
      "USE databasename",
      "db"
    ],
    "answer": "USE databasename"
  },
  {
    "id": 2,
    "section": "MongoDB & Mongoose",
    "question": "In the following command, what does the second parameter represent? db.collection.find( { qty: { $gt: 6 } }, { name: 1, wins: 1 } )",
    "options": [
      "Read Concern",
      "Projection",
      "Write Concern",
      "Query"
    ],
    "answer": "Projection"
  },
  {
    "id": 3,
    "section": "MongoDB & Mongoose",
    "question": "Upon running the following command, what all the fields will be returned in the output? db.collection.find( { qty: { $gt: 6 } }, { name: 1, _id: 0 } )",
    "options": [
      "_id",
      "name",
      "_id, name",
      "name1, _id0"
    ],
    "answer": "name"
  },
  {
    "id": 4,
    "section": "MongoDB & Mongoose",
    "question": "What is NoSQL?",
    "options": [
      "No Object SQL",
      "No SQL Server",
      "Not Only SQL",
      "No Relational Database"
    ],
    "answer": "Not Only SQL"
  },
  {
    "id": 5,
    "section": "MongoDB & Mongoose",
    "question": "What theorem or principal MongoDB follows?",
    "options": [
      "APAC",
      "Always-Sync",
      "ASCII",
      "CAP"
    ],
    "answer": "CAP"
  },
  {
    "id": 6,
    "section": "MongoDB & Mongoose",
    "question": "When there is no match of the document in the collection what do upsert: true do?",
    "options": [
      "Delete",
      "Nothing",
      "Insert",
      "Update"
    ],
    "answer": "Insert"
  },
  {
    "id": 7,
    "section": "MongoDB & Mongoose",
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
    "id": 8,
    "section": "MongoDB & Mongoose",
    "question": "What is the equivalent of the following SQL command in MongoDB? UPDATE user SET email = 'NA' WHERE age < 18",
    "options": [
      "db.user.updateMany({ gt: { $age= 18 } },{ $set: {email = \"NA\" } })",
      "db.user.updateMany({ age: { $lt: 18 } },{ $set: {email : \"NA\" } })",
      "db.user.updateMany({ gt: { $age: 18 } },{ $set: {email : \"NA\" } })",
      "db.user.updateMany({ age: { $gt: 18 } },{ $set: {email : \"NA\" } })"
    ],
    "answer": "db.user.updateMany({ age: { $lt: 18 } },{ $set: {email : \"NA\" } })"
  },
  {
    "id": 9,
    "section": "MongoDB & Mongoose",
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
    "id": 10,
    "section": "MongoDB & Mongoose",
    "question": "How would you limit the results of a find to 10 items?",
    "options": [
      "db.collection.find({},{limit:10})",
      "db.collection.find().limit(10)",
      "db.collection.limit(query, 10)",
      "This is not possibe in the node.js driver"
    ],
    "answer": "db.collection.find().limit(10)"
  },
  {
    "id": 11,
    "section": "MongoDB & Mongoose",
    "question": "What are array values surrounded by?",
    "options": [
      "[ ]",
      "| |",
      "{ }",
      "( )"
    ],
    "answer": "[ ]"
  },
  {
    "id": 12,
    "section": "MongoDB & Mongoose",
    "question": "What must every document contain?",
    "options": [
      "A timestamp",
      "A secondary key",
      "An _id field",
      "A field path"
    ],
    "answer": "An _id field"
  },
  {
    "id": 13,
    "section": "MongoDB & Mongoose",
    "question": "From the Mongo shell, what is the equivalent command to list tables in a given database?",
    "options": [
      "show collections",
      "show rows",
      "show dbs",
      "show tables"
    ],
    "answer": "show collections"
  },
  {
    "id": 14,
    "section": "MongoDB & Mongoose",
    "question": "Which aggregation pipeline operator filters documents so only documents that match the specified conditions pass to the next pipeline stage?",
    "options": [
      "$matchGroup",
      "$passValue",
      "$match",
      "$group"
    ],
    "answer": "$match"
  },
  {
    "id": 15,
    "section": "MongoDB & Mongoose",
    "question": "What is the difference between db.demo.dropCollection() and db.demo.remove({}, {\"justOne\": false})?",
    "options": [
      "remove() removes documents and leaves the collection intact, but dropCollection() removes the entire collection.",
      "dropCollection() creates a new empty collection whereas remove() keeps the old collection.",
      "dropCollection() requires elevated permissions but remove() does not.",
      "dropCollection() keeps the old collection whereas remove() creates a new empty collection."
    ],
    "answer": "remove() removes documents and leaves the collection intact, but dropCollection() removes the entire collection."
  },
  {
    "id": 16,
    "section": "MongoDB & Mongoose",
    "question": "In SQL a database contains tables. What is the equivalent of tables in MongoDB?",
    "options": [
      "Collections",
      "Tables",
      "Nodes",
      "Objects"
    ],
    "answer": "Collections"
  },
  {
    "id": 17,
    "section": "MongoDB & Mongoose",
    "question": "What will happen if you try to insert a document into a collection using insertOne() but the collection does not exist?",
    "options": [
      "It will throw an error.",
      "It will add the document in temporary storage.",
      "It will create the collection.",
      "It will throw a warning for null changes."
    ],
    "answer": "It will create the collection."
  },
  {
    "id": 18,
    "section": "MongoDB & Mongoose",
    "question": "Say you have an orders collection with heterogeneous documents. What documents will be returned when running db.orders.find({ total: { $gt: 100 } });",
    "options": [
      "All completed and incomplete orders",
      "Only completed orders over 100",
      "Completed orders over 100 and all incomplete orders",
      "Only incomplete orders over 100"
    ],
    "answer": "Only completed orders over 100"
  },
  {
    "id": 19,
    "section": "MongoDB & Mongoose",
    "question": "What is true for enforcing document structure in MongoDB?",
    "options": [
      "It can be done by dropping the document from the schema.",
      "It can be done by attaching a schema validator to a collection.",
      "It can be done only from an application.",
      "It can be done by returning a value to the schema validator."
    ],
    "answer": "It can be done by attaching a schema validator to a collection."
  },
  {
    "id": 20,
    "section": "MongoDB & Mongoose",
    "question": "You have a collection named inventory and need to update quantity to 0 for the documents whose unit field is pound.",
    "options": [
      "db.inventory.updateOne({unit : \"pound\"} { $set: {quantity : \"0\"}})",
      "db.inventory.updateOne( {unit : \"0\"} { $set: {quantity : \"pound\"}})",
      "db.inventory.updateMany( {unit : \"0\"}{ $set: {quantity : \"pound\"}})",
      "db.inventory.updateMany({unit : \"pound\"}{ $set: {quantity : \"0\"}} )"
    ],
    "answer": "db.inventory.updateMany({unit : \"pound\"}{ $set: {quantity : \"0\"}} )"
  },
  {
    "id": 21,
    "section": "MongoDB & Mongoose",
    "question": "Which SQL statement is implicitly created by the insert_one operation in MongoDB?",
    "options": [
      "UPDATE trades SET filled_at = GETDATE() WHERE id = 24566",
      "DROP TABLE students",
      "TRUNCATE TABLE employee",
      "INSERT INTO orders (price, status, customer_id) VALUES (50, \"pending\", 12556)"
    ],
    "answer": "INSERT INTO orders (price, status, customer_id) VALUES (50, \"pending\", 12556)"
  },
  {
    "id": 22,
    "section": "MongoDB & Mongoose",
    "question": "What would you add to the query to perform an update and insert operation?",
    "options": [
      "upsert: true",
      "collation : true",
      "collation : false",
      "upsert: false"
    ],
    "answer": "upsert: true"
  },
  {
    "id": 23,
    "section": "MongoDB & Mongoose",
    "question": "How can you update a document?",
    "options": [
      "By writing a stored procedure.",
      "By using the Upsert command",
      "By using the insert command",
      "By specifying the upsert option in an update() command"
    ],
    "answer": "By specifying the upsert option in an update() command"
  },
  {
    "id": 24,
    "section": "MongoDB & Mongoose",
    "question": "Which function supports the upsert operation?",
    "options": [
      "InsertMany",
      "replaceNow",
      "replaceOne",
      "dropIndex"
    ],
    "answer": "replaceOne"
  },

     {
    "id": 1,
    "question": "Whenever you are assigning two classes to a tag, you must separate them with a",
    "options": ["Space", "Comma", "Dash", "Semicolon"],
    "answer": "Space"
  },
  {
    "id": 2,
    "question": "____________ contains the navigation menu, or other navigation functionality for the page",
    "options": ["section", "header", "nav", "aside"],
    "answer": "nav"
  },
  {
    "id": 3,
    "question": "The main purpose of the placeholder attribute in input controls is:",
    "options": [
      "Allow the end-user to remember the location in form",
      "There is no such attribute known as \"placeholder\"",
      "Allow the end-user to replace the data control with another",
      "Display \"watermark\" data to assist the end-user"
    ],
    "answer": "Display \"watermark\" data to assist the end-user"
  },
  {
    "id": 4,
    "question": "Which of the following values are accepted by the float property?",
    "options": ["left", "right", "none", "all of the above"],
    "answer": "all of the above"
  },
  {
    "id": 5,
    "question": "Which of the following CSS property controls how an element is positioned?",
    "options": ["position", "set", "static", "fix"],
    "answer": "position"
  },
  {
    "id": 6,
    "question": "If you are designing a column to occupy 3 of the 12 columns in your desktop design, what is the width in CSS?",
    "options": ["Width:25%", "Width:33.3333%", "Width:21%", "Width:30%"],
    "answer": "Width:25%"
  },
  {
    "id": 7,
    "question": "In what direction does float work? img { float: right; }",
    "options": ["left", "top", "bottom", "right"],
    "answer": "right"
  },
  {
    "id": 8,
    "question": "Which of the following CSS property sets the stacking order of positioned elements?",
    "options": ["x-index", "y-index", "z-index", "stack-index"],
    "answer": "z-index"
  },
  {
    "id": 9,
    "question": "You indicate a class selector with",
    "options": ["the hash (#) symbol", "the dot (.)", "the tag name", "the asterisk (*)"],
    "answer": "the dot (.)"
  },
  {
    "id": 10,
    "question": "Which of the following media queries would apply to a tablet reporting a screen width of 768px?",
    "options": [
      "@media only screen and (min-width: 1140px){}",
      "@media only screen and (min-width: 641px){}",
      "@media only screen and (max-width: 1140px){}",
      "@media only screen and (max-width: 500px){}"
    ],
    "answer": "@media only screen and (min-width: 641px){}"
  },
  {
    "id": 11,
    "question": "To get the first or nth child you use",
    "options": ["the nested selector", "a pseudo-class", "a media query", "an attribute selector"],
    "answer": "a pseudo-class"
  },
  {
    "id": 12,
    "question": "Which of the following rules allows users to import style rules from other style sheets?",
    "options": ["@media", "@important", "@import", "@style"],
    "answer": "@import"
  },
  {
    "id": 13,
    "question": "If a <p> is the child of a <div> which is the child of a <section>, does the style in the section affect the p tag?",
    "options": [
      "Yes, inheritance accumulates",
      "No, only the immediate parent's style is inherited",
      "No, styles never inherit",
      "Only inline styles are inherited"
    ],
    "answer": "Yes, inheritance accumulates"
  },
  {
    "id": 14,
    "question": "Which HTML tag allows styling from an external .css file?",
    "options": ["link", "css", "style", "script"],
    "answer": "link"
  },
  {
    "id": 15,
    "question": "Which of the following properties sets the distance between an element’s right border and the rightmost edge of its content?",
    "options": ["auto", "padding-left", "padding-right", "padding-top"],
    "answer": "padding-right"
  }, 
   {
    "id": 16,
    "question": "What built-in function allows you to convert a string into an integer?",
    "options": ["toInt()", "parseInt()", "toInteger()", "parseString()"],
    "answer": "parseInt()"
  },
  {
    "id": 17,
    "question": "What is the catch method for a promise?",
    "options": [
      "To compose two promises",
      "To listen to the result of a promise",
      "To listen only for a rejected promise",
      "There is no catch method on a promise"
    ],
    "answer": "To listen only for a rejected promise"
  },
  {
    "id": 18,
    "question": "What is the effect of using await?",
    "options": [
      "The awaited function runs in parallel",
      "A promise is returned from a function instead of a value",
      "A value is returned from a function instead of a promise",
      "The function stops executing permanently"
    ],
    "answer": "A value is returned from a function instead of a promise"
  },
  {
    "id": 19,
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
    "id": 20,
    "question": "What does an async function return?",
    "options": [
      "A promise in a promise",
      "The value returned from the function",
      "A promise",
      "Undefined"
    ],
    "answer": "A promise"
  },
  {
    "id": 21,
    "question": "What is dependency injection?",
    "options": [
      "A coding technique in which all dependencies are defined with import statements",
      "A coding technique for registering services",
      "A coding pattern in which a class receives the instances of objects it needs from an external source",
      "A method for handling exceptions"
    ],
    "answer": "A coding pattern in which a class receives the instances of objects it needs from an external source"
  },
  {
    "id": 22,
    "question": "Which is the proper syntax to make sessionTemplate available by name from a JavaScript module?",
    "options": [
      "export function sessionTemplate(sessions) {...}",
      "export default function sessionTemplate(sessions) {...}",
      "module.exports = function sessionTemplate(sessions) {...}",
      "require function sessionTemplate(sessions) {...}"
    ],
    "answer": "export function sessionTemplate(sessions) {...}"
  },
  {
    "id": 23,
    "question": "What is a callback?",
    "options": [
      "A function that is called when a parallel operation is done",
      "A boolean that is set to true when a parallel operation is done",
      "A function that can be used with the 'await' keyword",
      "A loop that runs asynchronously"
    ],
    "answer": "A function that is called when a parallel operation is done"
  },
  {
    "id": 24,
    "question": "There is no catch method on a promise.",
    "options": ["true", "false"],
    "answer": "false"
  },
  {
    "id": 25,
    "question": "What is blog.name? var blog = { name: 'Ski Utah' }; var updatedBlog = blog; updatedBlog.name = 'Rocky Mountain Skiing';",
    "options": ["Ski Utah", "undefined", "blog", "Rocky Mountain Skiing"],
    "answer": "Rocky Mountain Skiing"
  },
  {
    "id": 26,
    "question": "What is the output of the following? greet = function(...months){ months.forEach(month => console.log('Month: ' + month)); } greet(['Jan', 'Feb']);",
    "options": [
      "Jan Feb",
      "ReferenceError",
      "Month: Jan,Feb",
      "Month: Jan",
      "Month: Feb"
    ],
    "answer": "Month: Jan,Feb"
  },
  {
    "id": 27,
    "question": "What is the relationship between JavaScript and ECMAScript?",
    "options": [
      "ECMAScript is a standard that JavaScript implements.",
      "They are different terms for the same thing.",
      "JavaScript is a standard that ECMAScript implements.",
      "JavaScript is an old term for what is now called ECMAScript."
    ],
    "answer": "ECMAScript is a standard that JavaScript implements."
  },
  {
    "id": 28,
    "question": "What will show in the console when this code runs? var value = \"no value\"; console.log(!!value);",
    "options": ["false", "(an empty string)", "true", "no value"],
    "answer": "true"
  },
  {
    "id": 29,
    "question": "What is the output of the following? function display(num1, num2) { console.log(num1, num2); } let nums = \"12345\"; display(...nums);",
    "options": ["1 2", "21", "12345", "45"],
    "answer": "1 2"
  },
  {
    "id": 30,
    "question": "What is the console output of the following code block? function printName() { name = \"Mary\"; name = \"John\"; console.log(name); }",
    "options": ["Empty", "None", "John", "Mary"],
    "answer": "John"
  },
  {
    "id": 31,
    "question": "Where is the correct place to insert a JavaScript?",
    "options": [
      "The <head> section",
      "Both the <head> section and the <body> section are correct.",
      "The <body> section",
      "The <footer> section"
    ],
    "answer": "Both the <head> section and the <body> section are correct."
  },
  {
    "id": 32,
    "question": "What syntax allows for a variable number of arguments to a function where the arguments are passed as an array?",
    "options": [
      "function([]numbers) { }",
      "function(*numbers) { }",
      "function(...numbers) { }",
      "function(numbers[]) { }"
    ],
    "answer": "function(...numbers) { }"
  },
  {
    "id": 33,
    "question": "What statement will load a module from a script named employee.js?",
    "options": [
      "reference \"employee\";",
      "import \"employee\";",
      "import \"employee.js\";",
      "reference \"employee.js\";"
    ],
    "answer": "import \"employee.js\";"
  },
  {
    "id": 34,
    "question": "Which flags are required to run nodes with ES6?",
    "options": [
      "harmony and strict-mode",
      "experimental and strict-mode",
      "harmony and block-binding",
      "harmony and experimental"
    ],
    "answer": "harmony and experimental"
  },
  {
    "id": 35,
    "question": "What contextual keyword is used in a class definition to identify a function containing initialization logic for an object?",
    "options": ["ctor", "new", "constructor", "class"],
    "answer": "constructor"
  },
  {
    "id": 36,
    "question": "What syntax will create the array [1, 2, 3, 4, 5, 6]?",
    "options": [
      "[1, 2, [3, 4]..., 5, 6];",
      "[1, 2, ...[3, 4], 5, 6];",
      "[1, 2, [3, 4], 5, 6];",
      "[1, 2, {3, 4}, 5, 6];"
    ],
    "answer": "[1, 2, ...[3, 4], 5, 6];"
  },
  {
    "id": 37,
    "question": "What symbol identifies a generator function?",
    "options": ["&", "@", "$", "*"],
    "answer": "*"
  },
  {
    "id": 38,
    "question": "By default, if you load a module that's not a JavaScript file, what will SystemJS do?",
    "options": [
      "Raise an error when loading the module.",
      "Attempt to load the module as if it were a JavaScript file.",
      "Look for a plugin with the name of the file extension to load the file.",
      "Ignore the module."
    ],
    "answer": "Look for a plugin with the name of the file extension to load the file."
  },
  {
    "id": 39,
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
    "id": 40,
    "question": "Which of these phrases describes Babel?",
    "options": [
      "JavaScript compiler",
      "Requires a runtime",
      "A programming language",
      "Experimental"
    ],
    "answer": "JavaScript compiler"
  }, 
  {
id: 41,
question: "The string \"api/route\" in Express is an example of a...",
options: [
"Middleware",
"Route",
"Error Handler",
"Template"
],
answer: "Route"
},
{
id: 42,
question: "Which library allows the use of the \"require\" keyword in front-end code?",
options: [
"guid",
"Browserify",
"React",
"jQuery"
],
answer: "Browserify"
},
{
id: 43,
question: "The ______ attribute of a React form is called when the main action button inside the form is pressed.",
options: [
"onSubmit",
"onChange",
"onComplete",
"onClick"
],
answer: "onSubmit"
},
{
id: 44,
question: "Which of the following are automation tools?",
options: [
"Gulp",
"JSX",
"Express",
"React"
],
answer: "Gulp"
},
{
id: 45,
question: "Which of the following is not a method of a dispatcher?",
options: [
"register",
"vector",
"dispatch",
"unregister"
],
answer: "vector"
},
{
id: 46,
question: "What React function is used to define a new element tag?",
options: [
"renderComponent",
"createClass",
"setInnerHTML",
"createElement"
],
answer: "createClass"
},
{
id: 47,
question: "Isomorphic means to focus exclusively on an app's back-end.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 48,
question: "React's abstraction of the document object model is often called...",
options: [
"Virtual DOM",
"Meta DOM",
"Virtualized Model",
"Shadow DOM"
],
answer: "Virtual DOM"
},
{
id: 49,
question: "True or false: The only thing that can change the data inside a store is the store itself.",
options: [
"false",
"true"
],
answer: "true"
},
{
id: 50,
question: "The Gulp task which takes a stream and outputs a file is...",
options: [
"src",
"task",
"dest",
"watch"
],
answer: "dest"
},
{
id: 51,
question: "The best way to detect when a user has completed a form is",
options: [
"to handle the onClick event on the form's submit element",
"to handle the onBlur event of the last form element",
"to handle the form's onSubmit event",
"to accumulate the onChange events for each form element"
],
answer: "to handle the form's onSubmit event"
},
{
id: 52,
question: "React is",
options: [
"A library that represents asynchronous data streams with observables",
"A comprehensive client-side application framework",
"An optimizing compiler for JavaScript",
"A client-side library providing rendering and event handling"
],
answer: "A client-side library providing rendering and event handling"
},
{
id: 53,
question: "Routing can be added to a React application by",
options: [
"adding an HTML5 or hash fragment based routing library",
"rendering the application on the server using react-page",
"handling the window.onLocationChanged event",
"using the React.route function"
],
answer: "adding an HTML5 or hash fragment based routing library"
},
{
id: 54,
question: "Behavior is shared between components using",
options: [
"propTypes",
"state",
"mixins",
"props"
],
answer: "mixins"
},
{
id: 55,
question: "An advantage of React is",
options: [
"jQuery syntax",
"static type checking",
"speed",
"easy integration with other JavaScript libraries"
],
answer: "speed"
},
{
id: 56,
question: "The JSX pre-processor is packaged as a",
options: [
"dynamic link library",
"Nuget package",
"Gem",
"npm module"
],
answer: "npm module"
},
{
id: 57,
question: "The just-in-time JSX transformer is good for",
options: [
"integrating with JavaScript tools",
"simple development workflow",
"reusing behavior",
"performance"
],
answer: "simple development workflow"
},
{
id: 58,
question: "The function that creates React components is",
options: [
"React.component.extend",
"React.createComponent",
"React.renderComponent",
"React.createClass"
],
answer: "React.createClass"
},
{
id: 59,
question: "How does React Router make URL params accessible to components?",
options: [
"parseUrlParams",
"State",
"getUrlParams",
"Props"
],
answer: "Props"
},
{
id: 60,
question: "Why is the Link component useful?",
options: [
"It allows you to hyperlink to routes by name",
"It enhances page load performance",
"It removes invalid characters from the URL",
"It provides faster navigation than hyperlinks"
],
answer: "It allows you to hyperlink to routes by name"
},
{
id: 61,
question: "How do Flux stores find out about Flux actions?",
options: [
"They query the server via AJAX",
"They poll HTML5 localstorage",
"They register a callback with the dispatcher.",
"They call action creators directly"
],
answer: "They register a callback with the dispatcher."
},
{
id: 62,
question: "Where should mutable data for React components be stored?",
options: [
"props",
"reactData",
"state",
"React.cookie"
],
answer: "state"
},
{
id: 63,
question: "What mechanism is recommended for passing data down to child components in React?",
options: [
"props",
"sendChildData",
"getDefaultProps",
"state"
],
answer: "props"
},
{
id: 64,
question: "What is JSX?",
options: [
"A language that looks like JavaScript that compiles to HTML.",
"A styling language that compiles down to CSS.",
"A language for querying RESTful web services.",
"A language that looks like HTML that compiles down to JavaScript."
],
answer: "A language that looks like HTML that compiles down to JavaScript."
},
{
id: 65,
question: "What function should all your JSX be placed in?",
options: [
"render",
"compile",
"jsx",
"emit"
],
answer: "render"
},
{
id: 66,
question: "What does the \"webpack\" command do?",
options: [
"Runs React Local Development Server.",
"Transpiles all the Javascript down into one file.",
"Both A and B.",
"Starts Node server only."
],
answer: "Both A and B."
},
{
id: 67,
question: "Which of the following API is a MUST for every React Component?",
options: [
"getInitialState",
"render",
"renderComponent",
"componentDidMount"
],
answer: "renderComponent"
},
{
id: 68,
question: "What are the advantages of React?",
options: [
"React can be used on client as well as server side.",
"Using React increases readability and makes maintainability easier.",
"React can be used with any other framework as it is just a View Layer.",
"All of the above."
],
answer: "All of the above."
},
{
id: 69,
question: "How does React handle the Web Accessibility Initiative (WAI-ARIA) standard?",
options: [
"aria-* HTML attributes are fully supported in JSX and should be lowercase.",
"React processes aria-* attributes separately.",
"aria-* attributes should be converted to camelCase.",
"React is yet to support the WAI-ARIA standard."
],
answer: "React is yet to support the WAI-ARIA standard."
},
{
id: 70,
question: "What is React in MVC?",
options: [
"Controller",
"Middleware",
"Model",
"Router"
],
answer: "Controller"
},
{
id: 71,
question: "What is React?",
options: [
"Just a server-side framework",
"Just a user-interface framework",
"Both a server-side framework as well as a user-interface framework",
"A database management system"
],
answer: "Both a server-side framework as well as a user-interface framework"
},
{
id: 72,
question: "What are the limitations of React?",
options: [
"React is only for the view layer of the app.",
"React uses inline templating and JSX.",
"The library of React is too large.",
"All of the above"
],
answer: "All of the above"
},
{
id: 73,
question: "How can you access the state of a component from inside of a member function in React?",
options: [
"this.getState()",
"this.prototype.stateValue",
"this.state",
"this.values"
],
answer: "this.state"
},
{
id: 74,
question: "You can also use an ES6 class to define a component in React.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 75,
question: "Which of the following API is a MUST for every React component?",
options: [
"getInitialState",
"render",
"renderComponent",
"componentWillMount"
],
answer: "render"
},
{
id: 76,
question: "At the highest level, React components have lifecycle events that fall into _______.",
options: [
"Initialization",
"State/Property updates",
"Destruction",
"All of the above"
],
answer: "All of the above"
},
{
id: 77,
question: "What are the advantages of React?",
options: [
"React can be used on client as well as server side.",
"Using React increases readability and maintainability.",
"React can be used with any other framework as it is just a view layer.",
"All of the above"
],
answer: "All of the above"
},
{
id: 78,
question: "How does React handle the Web Accessibility Initiative (WAI-ARIA) standard?",
options: [
"aria-* HTML attributes are fully supported in JSX and should be lowercase.",
"React processes aria-* attributes separately.",
"aria-* attributes should be converted to camelCase.",
"React is yet to support the WAI-ARIA standard."
],
answer: "React is yet to support the WAI-ARIA standard."
},
{
id: 79,
question: "What does the \"webpack\" command do?",
options: [
"Transpiles all the Javascript down into one file",
"Runs react local development server",
"Both A and B",
"Only bundles CSS"
],
answer: "Both A and B"
},
{
id: 80,
question: "What is React in MVC?",
options: [
"Controller",
"Middleware",
"Model",
"Router"
],
answer: "Controller"
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
"All of the above"
],
answer: "All of the above"
},
{
id: 82,
question: "Which of the following is not a type keyword in TypeScript?",
options: [
"float",
"bool",
"all are valid types in TypeScript",
"number",
"string"
],
answer: "float"
},
{
id: 83,
question: "Interfaces defined in TypeScript are included in the JavaScript that is generated?",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 84,
question: "How do you extend an interface in TypeScript?",
options: [
"interface ITruckOptions extends IAutoOptions",
"interface ITruckOptions => IAutoOptions",
"interface ITruckOptions : IAutoOptions",
"interface ITruckOptions implements IAutoOptions"
],
answer: "interface ITruckOptions extends IAutoOptions"
},
{
id: 85,
question: "Benefits offered by TypeScript include:",
options: [
"Code encapsulation",
"All of these",
"More maintainable code",
"Strongly-typed code"
],
answer: "All of these"
},
{
id: 86,
question: "How do you automatically generate fields in a TypeScript class?",
options: [
"Add the public keyword to a constructor parameter",
"None of these",
"Use the auto keyword",
"TypeScript doesn't support automatically generated fields"
],
answer: "Add the public keyword to a constructor parameter"
},
{
id: 87,
question: "Which TypeScript function will accept 2 parameters that must be numbers and return their product?",
options: [
"var func = (x: number, y: number) => x * y;",
"var func = (x, y) => x * y;",
"None of these",
"var func = function(x, y) => x * y;",
"All of these"
],
answer: "var func = (x: number, y: number) => x * y;"
},
{
id: 88,
question: "Which statement will allow your code to reference an internal module in a file named shapes.ts using TypeScript?",
options: [
"/// <reference=\"shapes.ts\" />",
"/// <reference path=\"shapes.ts\" />",
"import \"shapes\"",
"/// shapes.ts"
],
answer: "import \"shapes\""
},
{
id: 89,
question: "Which TypeScript statement will import an external module in a file named viewmodels.ts that is in the same folder as your code?",
options: [
"import vm = module(viewmodels);",
"import vm = module('../viewmodels');",
"import module('viewmodels');",
"import vm = module('viewmodels');"
],
answer: "import vm = module('viewmodels');"
},
{
id: 90,
question: "Which TypeScript compiler parameter will emit JavaScript that is AMD compliant?",
options: [
"--AMD",
"--module AMD",
"Neither of these"
],
answer: "--module AMD"
},
{
id: 91,
question: "What keyword is used to apply all of the properties on one interface to another interface?",
options: [
"implements",
"extends",
"class",
"furthers",
"references"
],
answer: "extends"
},
{
id: 92,
question: "What value will be output at the end of the following code block? enum Color { Red = 5, Green = 10, Blue = 15 }; console.log(Color.Green);",
options: [
"2",
"Color.Green",
"1",
"Green",
"10"
],
answer: "10"
},
{
id: 93,
question: "Which of the following best defines a \"class\"?",
options: [
"Objects with no implementation details",
"Object with no properties or methods",
"JSON objects with methods",
"Collection of private, reusable functions",
"Template for creating objects"
],
answer: "Template for creating objects"
},
{
id: 94,
question: "What term describes the concept of treating an object as if it were a particular type, even if it weren't declared as that type?",
options: [
"Extension Typing",
"Duck Typing",
"Interface Typing",
"Generic Typing",
"Ruby Typing"
],
answer: "Duck Typing"
},
{
id: 95,
question: "What access modifier limits the accessibility of a class member to its own class and subclasses?",
options: [
"export",
"internal",
"protected",
"private",
"sensitive"
],
answer: "protected"
},
{
id: 96,
question: "What is the primary difference between a generic class and a non-generic class?",
options: [
"Generic classes do not accept constructor parameters.",
"Generic classes are always declared abstract.",
"Generic classes may not implement interfaces.",
"Generic classes accept a type parameter.",
"Generic classes must inherit from a base class."
],
answer: "Generic classes accept a type parameter."
},
{
id: 97,
question: "Which TypeScript compiler option lets you specify the location of the tsconfig.json file to be used for the compilation?",
options: [
"--project",
"--json",
"--outDir",
"--input",
"--source"
],
answer: "--project"
},
{
id: 98,
question: "Which of the following symbols is used to denote that a function parameter is a rest parameter?",
options: [
"<>",
">>>",
"!!",
"...",
"||"
],
answer: "..."
},
{
id: 99,
question: "Which of the following will correctly import the items exported by this export statement? export { GetUser as GetLibraryUser, GetBook as GetLibraryBook };",
options: [
"import TypeScript from './library';",
"import namespace from './library';",
"import { GetLibraryUser, GetLibraryBook } from './library';",
"import { GetUser, GetBook } from './library';",
"import all from './library';"
],
answer: "import { GetLibraryUser, GetLibraryBook } from './library';"
},
{
id: 100,
question: "Which are the different Data Types supported by TypeScript?",
options: [
"Boolean",
"Number",
"String",
"All of the above mentioned"
],
answer: "All of the above mentioned"
}, 
{
id: 101,
question: "What are the variable scopes available in TypeScript?",
options: [
"Global Scope",
"Class Scope",
"Local Scope",
"All of the above"
],
answer: "All of the above"
},
{
id: 102,
question: "Which object oriented terms are supported by TypeScript?",
options: [
"Modules",
"Classes",
"Interfaces",
"All of these"
],
answer: "All of these"
},
{
id: 103,
question: "In TypeScript, it calls JavaScript internally and then performs validations.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 104,
question: "To change the datatype from one type to another, we require",
options: [
"TypeOperator",
"TypeAssertion",
"InferredTyping",
"TypeCasting"
],
answer: "TypeAssertion"
},
{
id: 105,
question: "For a variable, without specifying any data type is",
options: [
"InferredTyping",
"TypeOperator",
"TypeAssertion",
"ExplicitTyping"
],
answer: "InferredTyping"
},
{
id: 106,
question: "Which of the following is valid command to compile TypeScript file?",
options: [
"ts abc.ts",
"t abc.ts",
"tsc abc.ts",
"tst abc.ts"
],
answer: "tsc abc.ts"
},
{
id: 107,
question: "What will be output of: var a:string = 47; console.log(\"Value of a=\" + a);",
options: [
"Value of a=47",
"Value of a=0",
"Value of a=",
"None of the above"
],
answer: "None of the above"
},
{
id: 108,
question: "Internal Modules are known as namespaces in TypeScript.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 109,
question: "Which of the following Arrow Functions are true?",
options: [
"var reflect = value => value;",
"var sum = (num1, num2) => num1 + num2;",
"var getName = () => \"Nicholas\";",
"var sum = (num1, num2) => { return num1 + num2; };",
"All"
],
answer: "All"
},
{
id: 110,
question: "function fun1(...params) { console.log(params.length); } fun1(); fun1(5); fun1(5, 6, 7); Which concept resembles the above program?",
options: [
"String Interpolation",
"Tagged Templates",
"Spread Operator/Rest Parameters",
"Object Destructuring"
],
answer: "Spread Operator/Rest Parameters"
},
{
id: 111,
question: "TypeScript is a",
options: [
"Strongly typed",
"Object oriented",
"Compiled Language",
"All the above"
],
answer: "All the above"
},
{
id: 112,
question: "TypeScript is",
options: [
"Language",
"Set of tools",
"Both",
"None"
],
answer: "Both"
},
{
id: 113,
question: "Select user defined data types in TypeScript",
options: [
"Arrays",
"String",
"Boolean",
"Void"
],
answer: "Arrays"
},
{
id: 114,
question: "Which of the following are true?",
options: [
"We can use printf in TypeScript",
"We can use console.log in TypeScript",
"Both",
"None"
],
answer: "We can use console.log in TypeScript"
},
{
id: 115,
question: "Which of the following are array methods?",
options: [
"Unshift()",
"Sort()",
"Pop()",
"All the above"
],
answer: "All the above"
},
{
id: 116,
question: "Supertype of all datatypes in TypeScript",
options: [
"number",
"Enum",
"Void",
"Any"
],
answer: "Any"
},
{
id: 117,
question: "Which of the following are true?",
options: [
"var a = new String('hii')",
"var b = new Array(1)",
"var a: String = 'hii';",
"All the above"
],
answer: "var b = new Array(1)"
},
{
id: 118,
question: "List some features of TypeScript?",
options: [
"TypeScript can be compiled to all major versions of JavaScript (ES3, ES5, ES6, ES7)",
"TypeScript can be used for cross-browser development and is an open source project",
"TypeScript is a superset of JavaScript that provides typed nature to your code",
"All of the above"
],
answer: "All of the above"
},
{
id: 119,
question: "What are the components of TypeScript?",
options: [
"TypeScript Language",
"TypeScript Compiler",
"TypeScript Language Service",
"All of these"
],
answer: "All of these"
},
{
id: 120,
question: "How to declare variables in TypeScript?",
options: [
"Var",
"Let",
"Both"
],
answer: "Both"
},
{
id: 121,
question: "TypeScript uses which data type?",
options: [
"String",
"Number",
"Boolean",
"All above option"
],
answer: "All above option"
},
{
id: 122,
question: "Default access modifier in TypeScript?",
options: [
"public",
"private",
"protected"
],
answer: "public"
},
{
id: 123,
question: "What is async/await?",
options: [
"New syntax to write JavaScript promises",
"New syntax to consume JavaScript promises",
"New syntax to consume asynchronous callbacks"
],
answer: "New syntax to consume JavaScript promises"
},
{
id: 124,
question: "Which of the following is an attribute CSS selector?",
options: [
"[selector]",
".selector",
"#selector"
],
answer: "[selector]"
},
{
id: 125,
question: "When is it recommended to pass this.setState a function instead of an object?",
options: [
"When the new state should completely replace the old state.",
"When the new state does not depend on the old state.",
"When the new state depends on the old state."
],
answer: "When the new state depends on the old state."
},
{
id: 126,
question: "A promise represents what?",
options: [
"A single value in the future",
"Multiple values in the present",
"Multiple values in the future",
"A single value in the present"
],
answer: "A single value in the future"
},
{
id: 127,
question: "Can a component be styled with a global styled sheet?",
options: [
"Only function components can be styled with a global styled sheet",
"Only if the component returns HTML elements",
"Yes",
"No"
],
answer: "Yes"
},
{
id: 128,
question: "When binding to data in templates, how do you avoid issues with binding to properties of null or undefined objects?",
options: [
"You don't need to worry about null objects, Angular will handle them gracefully.",
"Use the * operator on any object that could be null.",
"Use the ? operator on any object that could be null.",
"In the component, ensure the objects are never null."
],
answer: "Use the ? operator on any object that could be null."
},
{
id: 129,
question: "Where should you sort and filter data?",
options: [
"In a directive",
"In a pipe",
"In your component",
"In a filter"
],
answer: "In your component"
},
{
id: 130,
question: "What's the right syntax to assign the function doSomething as the handler of a click event?",
options: [
"onClick={doSomething}",
"onClick={() => doSomething}",
"onClick={doSomething()}"
],
answer: "onClick={doSomething}"
}, 
{
id: 131,
question: "Assuming you define the statement: \"var person: string;\" TypeScript will alert you that there is an error if you enter which additional code?",
options: [
"person = { name: 'Colleen', age: 25; }",
"person = 0",
"person = ['Colleen', 'John'];",
"All of the above"
],
answer: "All of the above"
},
{
id: 132,
question: "When bootstrapping an Angular app, how do you specify the main, top-level app component to be used?",
options: [
"You add the component as a package in your SystemJs config.",
"You load the component directly in your index.html file.",
"You add the component to the bootstrap array in your main app module.",
"You load the component directly from your main SystemJs package (e.g. main.ts)."
],
answer: "You add the component to the bootstrap array in your main app module."
},
{
id: 133,
question: "What is the format of the data returned by the JSON Server API?",
options: [
"YAML",
"XML",
"JSON"
],
answer: "JSON"
},
{
id: 134,
question: "What syntax do you use to render the App component into an HTML element with id \"root\"?",
options: [
"ReactDOM.render(App, document.getElementById(\"root\"));",
"React.render(App, document.getElementById(\"root\"));",
"ReactDOM.mountNode(<App />, document.getElementById(\"root\"));",
"ReactDOM.render(<App />, document.getElementById(\"root\"));"
],
answer: "ReactDOM.render(<App />, document.getElementById(\"root\"));"
},
{
id: 135,
question: "What function can be used to change the state of a React component?",
options: [
"this.state = {}",
"this.setState",
"this.changeState"
],
answer: "this.setState"
},
{
id: 136,
question: "What can we do if components A and B are siblings and they require access to the same state element?",
options: [
"Restructure the application to have A and B be related differently",
"Place the state in either A or B",
"Place the state in a third component C that is a sibling to A and B",
"Place the state in the parent component of A and B"
],
answer: "Place the state in the parent component of A and B"
},
{
id: 137,
question: "What is the name of the file that manages TypeScript projects?",
options: [
"tsproj.config",
"tsmeta.json",
"tsconfig.json",
"package.json"
],
answer: "tsproj.config"
},
{
id: 138,
question: "When dealing with asynchronous functions, what type of generic must your return type be?",
options: [
"Async",
"Promise",
"Array",
"AsyncAwait"
],
answer: "Promise"
},
{
id: 139,
question: "What tool installs type declaration files?",
options: [
"Duck",
"npm",
"Ruby",
"NuGet",
"Async"
],
answer: "npm"
},
{
id: 140,
question: "What should appear to the left of the arrow in an arrow function?",
options: [
"Function name",
"Function parameters",
"Curly braces",
"Function return value",
"Number of function parameters"
],
answer: "Function parameters"
},
{
id: 141,
question: "What character separates a variable from its type annotation in a declaration?",
options: [
"#",
"$",
"%",
":"
],
answer: ":"
},
{
id: 142,
question: "How would you define a string type variable with the value bar in TypeScript?",
options: [
"let string: foo = 'bar';",
"let foo:string = 'bar';",
"let string foo = 'bar';",
"let foo (string) = 'bar';"
],
answer: "let foo:string = 'bar';"
},
{
id: 143,
question: "What keyword requires a variable to be declared before it's used?",
options: [
"let",
"dim",
"declare",
"set"
],
answer: "let"
},
{
id: 144,
question: "What keyword declares a class member in the class rather than an instance of the class?",
options: [
"enum",
"static",
"intersection",
"function",
"async"
],
answer: "static"
},
{
id: 145,
question: "Within which function scope would a variable that you declare using the keyword var cover?",
options: [
"Within the entire function scope",
"Within an if statement scope",
"Within a for loop scope",
"Within a while loop scope"
],
answer: "Within the entire function scope"
},
{
id: 146,
question: "What keyword lets you derive a subclass from a superclass?",
options: [
"stretches",
"extends",
"sub",
"follows",
"buildsUpon"
],
answer: "extends"
}, 
{
id: 147,
question: "We need to tell AngularJS what part of our HTML page contains the AngularJS app. You do so by adding the ______ attribute to the root HTML element of the AngularJS app.",
options: [
"ng-app",
"ag-app",
"js-app",
"aj-app"
],
answer: "ng-app"
},
{
id: 148,
question: "AngularJS can show or hide HTML depending on the state of data in the model. You do so using directives such as ______.",
options: [
"ng-shown, ng-hidden",
"ng-show, ng-hide",
"nt-show, nt-hide",
"ng-shows, ng-hides"
],
answer: "ng-show, ng-hide"
},
{
id: 149,
question: "EventEmitter class’s simple interface, which basically encompasses two methods, can be used to trigger custom events and listen to events as well.",
options: [
"exit()",
"superscript()",
"subscribe()",
"emit()"
],
answer: "subscribe()"
},
{
id: 150,
question: "The ______ directive substitutes the normal href property and makes it easier to work with route links in Angular.",
options: [
"RouterLinks",
"RouterLinking",
"RouterLink",
"RouterLinq"
],
answer: "RouterLink"
},
{
  "id": 151,
  "question": "Three main components of Routing are ______.",
  "options": [
    "RouteObject",
    "RouterOutlet",
    "RouterState",
    "RouterLink"
  ],
  "answer": [
    "RouteObject",
    "RouterOutlet",
    "RouterLink"
  ]
}, 
{
id: 152,
question: "Route ______ allow us to pass values in our URL to our component so we can dynamically change our view content.",
options: [
"pipes",
"modules",
"variables",
"parameters"
],
answer: "parameters"
},
{
id: 153,
question: "To use observables, Angular uses a third-party library called ______.",
options: [
"ng2-bootstrap",
"angular-cli",
"numeral",
"Reactive Extensions (RxJS)"
],
answer: "Reactive Extensions (RxJS)"
},
{
id: 154,
question: "Observables help you manage ______ data.",
options: [
"synchronous",
"asynchronous",
"Both asynchronous & synchronous",
"None of above"
],
answer: "asynchronous"
},
{
id: 155,
question: "We subscribe to the observable ourselves using the actual ______ method.",
options: [
"subscribe()",
"subs()",
"subscribed()",
"None of above"
],
answer: "subscribe()"
},
{
id: 156,
question: "A promise represents the final result of an ______ operation.",
options: [
"asynchronous",
"synchronous"
],
answer: "asynchronous"
},
{
id: 157,
question: "The promise becomes ______ after resolving or rejecting.",
options: [
"mutable",
"ignored",
"immutable",
"recurring"
],
answer: "immutable"
},
{
id: 158,
question: "Which of the following is not a built-in pipe in Angular?",
options: [
"DatePipe",
"CurrencyPipe",
"DataPipe",
"PercentPipe"
],
answer: "DataPipe"
},
{
id: 159,
question: "If you chain multiple pipes together, they are executed ______.",
options: [
"in parallel",
"LIFO order",
"in the order in which you specify them",
"none of above"
],
answer: "in the order in which you specify them"
},
{
id: 160,
question: "The ______ filter waits for a promise and returns the most recent value received. It then updates the view.",
options: [
"sync",
"async",
"promise",
"custom"
],
answer: "async"
},
{
id: 161,
question: "The ______ decorator allows us to define the pipe name that is globally available for use in any template.",
options: [
"@pipeName",
"@pipeDeco",
"$Pipe",
"@Pipe"
],
answer: "@Pipe"
},
{
id: 162,
question: "Data bindings are applied as ______ or as special sequences of characters in strings.",
options: [
"expressions",
"attributes on HTML elements",
"elements itself",
"none of above"
],
answer: "attributes on HTML elements"
},
{
id: 163,
question: "A data binding has these four parts:",
options: [
"host element, curly brackets, target, expression",
"host element, square brackets, target, evaluation",
"host element, square brackets, target, expression",
"host element, parentheses, target, expression"
],
answer: "host element, square brackets, target, expression"
},
{
id: 164,
question: "Attribute binding is similar to property binding but is tied to the ______ rather than the DOM property.",
options: [
"Page attribute",
"DOM attribute",
"Root attribute",
"HTML attribute"
],
answer: "HTML attribute"
},
{
id: 165,
question: "To make your applications ready for animations, you must refer to the ______ module in your application.",
options: [
"ng-repeat",
"ngAnimation",
"ngAnimate",
"None of above"
],
answer: "ngAnimate"
},
{
id: 166,
question: "Using the ______ animation function, the parent animation can allow the child animation to run at the exact correct time.",
options: [
"animateChild",
"childAnimate",
"animateInner",
"innerChild"
],
answer: "animateChild"
},
{
id: 167,
question: "Animations are fired using animation property bindings which are prefixed with an ______ symbol.",
options: [
"&",
"#",
"$",
"@"
],
answer: "@"
},
{
id: 168,
question: "______ is an animation-specific function designed to be used inside Angular's animation DSL language.",
options: [
"useAnimation",
"reuseAnimation",
"in-useAnimation",
"All of above"
],
answer: "useAnimation"
},
{
id: 169,
question: "It's always possible to make use of animation input parameters by setting more data via the ______ property.",
options: [
"options.param",
"option.params",
"option.param",
"options.params"
],
answer: "options.params"
},
{
id: 170,
question: "Which bootstrap styles are used to create a vertical pills navigation?",
options: [
".nav, .nav-tabs",
".nav, .nav-pills",
".nav, .nav-pills, .nav-stacked",
".nav, .nav-tabs, .nav-justified"
],
answer: ".nav, .nav-pills, .nav-stacked"
},
{
id: 171,
question: "Which bootstrap styles are used to create a justified tabs navigation?",
options: [
".nav, .nav-tabs",
".nav, .nav-pills",
".nav, .nav-pills, .nav-stacked",
".nav, .nav-tabs, .nav-justified"
],
answer: ".nav, .nav-tabs, .nav-justified"
},
{
id: 172,
question: "Which class indicates a dropdown menu?",
options: [
".dropdown-list",
".select",
".dropdown"
],
answer: ".dropdown"
},
{
id: 173,
question: "Bootstrap’s grid system allows up to ______.",
options: [
"6 columns across the page",
"12 columns across the page",
"8 columns across the page",
"16 columns across the page"
],
answer: "12 columns across the page"
},
{
id: 174,
question: "Which class makes an image automatically adjust to fit the size of the screen?",
options: [
".img-res-image",
".img-responsive-image",
".img-responsive",
".img-res"
],
answer: ".img-responsive"
},
{
id: 175,
question: "Which class should be used to indicate a button group?",
options: [
"btn-group-buttons",
"btn-group",
"btn-grp",
"btn-buttons"
],
answer: "btn-group"
},
{
id: 176,
question: "Angular's square-bracket syntax ([]) signifies a ______.",
options: [
"property binding",
"class binding",
"style binding",
"both A & B"
],
answer: "property binding"
},
{
id: 177,
question: "What are the types of access modifiers supported by TypeScript?",
options: [
"Public",
"Private",
"Protected",
"All of these"
],
answer: "All of these"
}, 
{
id: 178,
question: "The purpose of the @Output decorator in a nested component is to:",
options: [
"Expose an output channel for logging",
"Expose an event property that a container can listen for using event binding",
"Expose a property that a container can set using property binding",
"None of the above"
],
answer: "Expose an event property that a container can listen for using event binding"
},
{
id: 179,
question: "A function that adds metadata to a class, its members, or its method arguments is a(n):",
options: [
"Attribute",
"Directive",
"Annotation",
"Decorator"
],
answer: "Decorator"
},
{
id: 180,
question: "What is the current recommended way to register a service with the root Angular injector?",
options: [
"By setting the providedIn property of the Injectable decorator for the service.",
"By setting the providedIn property of the Component decorator for the component that needs it",
"By declaring the service in an Angular module",
"By setting the providedIn property of the Component decorator for the App component."
],
answer: "By setting the providedIn property of the Injectable decorator for the service."
},
{
id: 181,
question: "What does the Angular CLI do when you execute npm start/ng serve?",
options: [
"It builds the application for production and starts the deployment process",
"It compiles the application and starts a web server to serve the application to the browser",
"It starts the default editor for the application so you can make changes",
"It installs the packages defined in the package.json file"
],
answer: "It compiles the application and starts a web server to serve the application to the browser"
},
{
id: 182,
question: "What is the purpose of the *ngIf directive?",
options: [
"To use style classes to hide or show elements based on an expression",
"To repeat a set of elements based on an expression",
"To optionally navigate to another view based on an expression",
"To add or remove elements from the DOM based on an expression"
],
answer: "To add or remove elements from the DOM based on an expression"
},
{
id: 183,
question: "Route definitions are configured in an array passed to:",
options: [
"A method of the AppModule",
"A method of the routed component",
"A method of the AppComponent",
"A method of the RouterModule"
],
answer: "A method of the RouterModule"
},
{
id: 184,
question: "What is the purpose of the subscribe method on an observable?",
options: [
"To map observable responses to alternate formats",
"To transform the Observable stream",
"To request logging of observable actions",
"To request notifications and data from the observable"
],
answer: "To request notifications and data from the observable"
},
{
id: 185,
question: "What is the purpose of the Angular CLI?",
options: [
"Installing and running Angular applications",
"Building, executing, testing, and deploying Angular applications",
"Testing and deploying Angular applications",
"Executing, testing, and debugging Angular applications"
],
answer: "Building, executing, testing, and deploying Angular applications"
},
{
id: 186,
question: "What is the purpose of a feature module?",
options: [
"To define all the logic for your application all in one place",
"To separate out the responsibilities for a specific feature set into its own Angular module",
"To consolidate Angular system modules, such as BrowserModule and FormsModule, into a logical group",
"To provide services specifically for one set of application features"
],
answer: "To separate out the responsibilities for a specific feature set into its own Angular module"
},
{
id: 187,
question: "Which of the following is the correct syntax for two-way binding?",
options: [
"([ngModel])='listFilter'",
"[(ngModel)]='listFilter'",
"{{listFilter}}",
"ngModel='listFilter'"
],
answer: "[(ngModel)]='listFilter'"
},
{
id: 188,
question: "In Angular / RxJs, when should you unsubscribe from a Subscription?",
options: [
"There is no need to unsubscribe. Angular routing handles it.",
"Unsubscribe them in ngOnDestroy.",
"Only unsubscribe in services.",
"Unsubscribe only for HTTP calls."
],
answer: "Unsubscribe them in ngOnDestroy."
},
{
id: 189,
question: "When you apply an Angular pipe, it changes the value of the underlying component’s member variable as well.",
options: [
"TRUE",
"FALSE"
],
answer: "FALSE"
},
{
id: 190,
question: "What’s the best way to inject one service into another in Angular?",
options: [
"A service cannot be injected into another service.",
"Through constructor of depending service.",
"By instantiating using a new operator.",
"Using a global variable."
],
answer: "Through constructor of depending service."
},
{
id: 191,
question: "In Angular, how can you set a header in every HTTP request?",
options: [
"Use HttpClientInterceptor.",
"Extend HttpClient class.",
"Set as a request header parameter.",
"Modify browser default settings."
],
answer: "Use HttpClientInterceptor."
},
{
id: 192,
question: "In Angular, you can pass data from parent component to child component using _______.",
options: [
"'@Output()'",
"'@Input()'",
"Input",
"Output"
],
answer: "'@Input()'"
},
{
id: 193,
question: "In Angular, you can pass data from child component to parent component using ________.",
options: [
"'@Output'",
"'@Input'",
"Input",
"Output"
],
answer: "'@Output'"
},
{
id: 194,
question: "In Angular, one can create a local HTML reference of an HTML tag using a variable which starts with character ___.",
options: [
"@",
"#",
"*",
"&"
],
answer: "#"
},
{
id: 195,
question: "If you provide a service in two Angular components, in the \"providers\" section of @Component decorator, how many instances of service shall get created?",
options: [
"4",
"2",
"3",
"1"
],
answer: "2"
},
{
id: 196,
question: "In Angular routing, which of these tags is used to show the selected route component dynamically?",
"options": [
    "`<router></router>`",
    "`<router-output></router-output>`",
    "`<router-outlet></router-outlet>`",
    "`<router-input></router-input>`"
  ],
  "answer": "`<router-outlet></router-outlet>`"
},
{
id: 197,
question: "Which method of Angular RouterModule should be called for providing all routes in AppModule?",
options: [
"RouteModule.forChild",
"RouteModule.forRoot",
"RouterModule",
"RouterModule.all"
],
answer: "RouteModule.forRoot"
}, 
{
id: 198,
question: "Expression Language is the part of Core Container in Spring Framework.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 199,
question: "AOP is the part of Core Container in Spring Framework.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 200,
question: "In which Spring version has Spring Expression Language been supported?",
options: [
"Spring 2.0",
"Spring 2.5",
"Spring 3.0",
"Spring 4.0"
],
answer: "Spring 3.0"
},
{
id: 201,
question: "Which class represents the IoC container?",
options: [
"BeanFactory",
"ApplicationContext",
"DispatcherServlet",
"FactoryBean"
],
answer: "ApplicationContext"
},
{
id: 202,
question: "How to get the object of DAO in Spring Framework?",
options: [
"Using new operator",
"Using Spring Dependency Injection",
"Using static factory method",
"Using reflection API"
],
answer: "Using Spring Dependency Injection"
},
{
id: 203,
question: "Which is correct for Spring Framework?",
options: [
"Spring framework is a heavy-weight solution.",
"Spring framework is a light-weight solution.",
"Spring framework is only for web applications.",
"Spring framework does not support dependency injection."
],
answer: "Spring framework is a light-weight solution."
},
{
id: 204,
question: "In which Spring version were Java 5 features introduced?",
options: [
"Spring 2.0",
"Spring 2.5",
"Spring 3.0",
"Spring 4.0"
],
answer: "Spring 3.0"
},
{
id: 205,
question: "Can we integrate Spring with Struts?",
options: [
"Yes",
"No"
],
answer: "Yes"
},
{
id: 206,
question: "How to use idref in Spring Framework?",
options: [
"With setter method only",
"With constructor argument only",
"With setter method and constructor argument both",
"Using annotation only"
],
answer: "With setter method and constructor argument both"
},
{
id: 207,
question: "Which is the part of the Data Access layer in Spring Framework?",
options: [
"JDBC",
"ORM",
"JMS",
"All of the above"
],
answer: "JMS"
},
{
id: 208,
question: "Does Spring provide programmatic transaction management?",
options: [
"Yes using the @Transactional bean post processor",
"Yes with the TransactionTemplate class",
"Yes with the TransactionService class",
"No"
],
answer: "Yes with the TransactionTemplate class"
},
{
id: 209,
question: "How could you externalize constants from a Spring configuration file or a Spring annotation into a .properties file?",
options: [
"By using the <context:property-placeholder /> tag",
"By using the <util:constant /> tag",
"By declaring the ConstantPlaceholderConfigurer bean post processor",
"By using the c: namespace"
],
answer: "By using the <context:property-placeholder /> tag"
},
{
id: 210,
question: "To validate Java beans in a web application using annotations.",
options: [
"XML",
"Java Based",
"JSR-303 standard",
"All of the mentioned"
],
answer: "All of the mentioned"
},
{
id: 211,
question: "Annotation used to indicate a field has to have a minimum of 2 characters.",
options: [
"@NotNull",
"@Size",
"@MaxSize",
"@Length"
],
answer: "@Size"
},
{
id: 212,
question: "Spring MVC supports generating Excel files using which of the following libraries?",
options: [
"Apache POI library",
"JExcelAPI library",
"All of the mentioned",
"None of the mentioned"
],
answer: "All of the mentioned"
},
{
id: 213,
question: "Interface for DispatcherServlet to auto detect view resolver beans.",
options: [
"LocaleResolver",
"TilesResolver",
"ViewResolver",
"HandlerResolver"
],
answer: "ViewResolver"
},
{
id: 214,
question: "By default, XmlViewResolver loads view beans from /WEB-INF/views.xml which is final.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 215,
question: "Views that cannot be resolved by InternalResourceViewResolver.",
options: [
"redirect",
"redirect:prefix",
"redirect:suffix",
"all of the mentioned"
],
answer: "redirect"
},
{
id: 216,
question: "Annotation which allows a controller’s field to be assigned using Spring Expression Language (SpEL).",
options: [
"@Value",
"@After",
"@Default",
"@Autowired"
],
answer: "@Value"
},
{
id: 217,
question: "SpEL statements are recognizable.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 218,
question: "To publish a REST service with Spring.",
options: [
"Publishing an application’s data as a REST service",
"Accessing data from third-party REST services",
"None of the mentioned",
"Both publishing and accessing REST services"
],
answer: "Both publishing and accessing REST services"
},
{
  "id": 219,
  "question": "Publishing an application’s data as a REST service requires.",
  "options": [
    "@RequestMapping",
    "@PathVariable",
    "All of the mentioned",
    "None of the mentioned"
  ],
  "answer": ["@RequestMapping", "@PathVariable"]
},
{
id: 220,
question: "Annotation added as an input parameter to the handler method.",
options: [
"@PathVariable",
"@Path",
"@PathLocale",
"@RequestParam"
],
answer: "@PathVariable"
},
{
id: 221,
question: "Which of the following statements is true regarding the @ResponseStatus annotation?",
options: [
"@ResponseStatus is detected on nested exceptions",
"The ExceptionHandlerExceptionResolver uses the @ResponseStatus annotation to map exception to HTTP status code",
"A controller handler annotated with @ResponseStatus is overridden by RedirectView status",
"The @ResponseStatus annotation can only be used on methods"
],
answer: "@ResponseStatus is detected on nested exceptions"
},
{
id: 222,
question: "Default LocaleResolver used by Spring.",
options: [
"AcceptHeaderLocale",
"AcceptHeader",
"AcceptHeaderLocaleResolver",
"AcceptLocaleResolver"
],
answer: "AcceptHeaderLocaleResolver"
}, 
{
id: 223,
question: "Alternative way to resolve locales.",
options: [
"AcceptHeaderLocale",
"AcceptHeader",
"AcceptHeaderLocaleResolver",
"SessionLocaleResolver"
],
answer: "SessionLocaleResolver"
},
{
id: 224,
question: "General-purpose class that allows a response to be rendered using a marshaller.",
options: [
"MarshallingView",
"Marshaling",
"View",
"All of the mentioned"
],
answer: "MarshallingView"
},
{
id: 225,
question: "Annotation which allows the Jaxb2Marshaller marshaller to detect a class’s (object’s) fields.",
options: [
"@XmlRootElement",
"@XmlRoot",
"@NotNull",
"None of the mentioned"
],
answer: "@XmlRootElement"
},
{
id: 226,
question: "How to auto-inject into a field a Spring bean by its name?",
options: [
"By using both the @Autowired and the @Qualifier Spring annotations",
"By using the @Autowired annotation and naming the field with the bean name",
"With the name attribute of the @Autowired annotation",
"By using the single @Qualifier annotation"
],
answer: "By using both the @Autowired and the @Qualifier Spring annotations"
},
{
id: 227,
question: "Considering two classes AccountServiceImpl and ClientServiceImpl not inheriting from each other, what is the result of the pointcut expression execution(* *..AccountServiceImpl.update(..)) && execution(* *..ClientServiceImpl.update(..))?",
options: [
"No joint point is defined",
"Matches public update methods of the two classes",
"Matches any update methods of the two classes regardless of visibility",
"Matches update methods with one or more arguments"
],
answer: "No joint point is defined"
},
{
id: 228,
question: "Select the right statement about referring a Spring configuration file inside the package com.example.myapp using ClassPathXmlApplicationContext.",
options: [
"All of the above",
"The classpath: prefix could be omitted",
"Package name using the dot character is not well formatted",
"The slash character preceding com.example could be omitted"
],
answer: "All of the above"
},
{
id: 229,
question: "Using Spring AOP framework, what is the visibility of the method matched by @Pointcut(\"execution(* *(..))\")?",
options: [
"Public methods",
"All methods regardless of visibility",
"All methods except private methods",
"Protected and public methods"
],
answer: "Public methods"
},
{
id: 230,
question: "What is the name of the bean defined in the given @Configuration class with @Bean method clientRepository()?",
options: [
"clientRepository",
"JpaClientRepository",
"jpaClientRepository",
"Two beans are defined"
],
answer: "clientRepository"
},
{
id: 231,
question: "Which of the following is true regarding the given Spring @RestController example?",
options: [
"RequestMethod.GET method is more accurate than POST",
"@ResponseBody could be removed",
"@PathVariable should be replaced with @PathParam",
"Returning HTTP 201 status code is better"
],
answer: "RequestMethod.GET method is more accurate than POST"
},
{
id: 232,
question: "What is advice in Spring AOP?",
options: [
"An action taken by an aspect at a particular join point",
"A point during the execution of a program",
"An aspect and a pointcut",
"A predicate that matches join points"
],
answer: "An action taken by an aspect at a particular join point"
},
{
id: 233,
question: "What is the easiest method signature to write a unit test for a Spring MVC controller?",
options: [
"@RequestMapping(\"/displayAccount\") String displayAccount(@RequestParam(\"accountId\") int id, Model model)",
"void displayAccount(HttpServletRequest req, HttpServletResponse resp)",
"void displayAccount(HttpServletRequest req, HttpSession session)",
"@RequestMapping(\"/displayAccount\") String displayAccount(@PathVariable(\"accountId\") int id, Model model)"
],
answer: "@RequestMapping(\"/displayAccount\") String displayAccount(@RequestParam(\"accountId\") int id, Model model)"
},
{
id: 234,
question: "Select method signatures that match the pointcut execution(* com.test.service..*.*(*))",
options: [
"void com.test.service.MyServiceImpl.transfert(Money amount)",
"void com.test.service.account.MyServiceImpl.transfert(Money amount)",
"void com.test.service.MyServiceImpl.transfert(Account account, Money amount)",
"void com.test.service.account.MyServiceImpl.transfert(Account account, Money amount)",
"None of the above"
],
answer: "void com.test.service.MyServiceImpl.transfert(Money amount)"
},
{
id: 235,
question: "Given the Spring bean configuration with p:bankName=\"NationalBank\", which statement is correct?",
options: [
"The p namespace has to be declared",
"NationalBank is a scalar value",
"Bean id is bankServiceImpl",
"The BankServiceImpl references a NationalBank bean"
],
answer: "The p namespace has to be declared"
},
{
id: 236,
question: "Given the configuration class with constructor injection and @Bean(name=\"clientRepository\"), what is correct?",
options: [
"Configuration annotation is missing",
"Default constructor is missing",
"@Bean name is ambiguous",
"@Bean scope is prototype"
],
answer: "Configuration annotation is missing"
},
{
id: 237,
question: "Using JdbcTemplate, which Spring class is used for result set parsing and merging rows into a single object?",
options: [
"ResultSetExtractor",
"RowMapper",
"RowCallbackHandler",
"ResultSetMapper"
],
answer: "RowMapper"
},
{
id: 238,
question: "Which of the following is correct about dependency injection?",
options: [
"It helps in decoupling application objects from each other.",
"It helps in deciding the dependencies of objects.",
"It stores object states in a database.",
"It stores object states in the file system."
],
answer: "It helps in decoupling application objects from each other."
},
{
id: 239,
question: "Which are the correct implementation classes of ApplicationContext?",
options: [
"FileSystemXmlApplicationContext, ClassPathXmlApplicationContext, WebXmlApplicationContext",
"FileSystemApplicationContext, ClassPathApplicationContext, WebApplicationContext",
"AdvancedApplicationContext, FileApplicationContext",
"FileSystemApplicationContext, ClassPathApplicationContext"
],
answer: "FileSystemXmlApplicationContext, ClassPathXmlApplicationContext, WebXmlApplicationContext"
},
{
id: 240,
question: "What is true about <set> collection configuration elements?",
options: [
"This helps in wiring a list of values, allowing duplicates.",
"This helps in wiring a list of values but without any duplicates.",
"This can inject name-value pairs of any type.",
"This can inject name-value pairs where both are Strings."
],
answer: "This helps in wiring a list of values but without any duplicates."
},
{
id: 241,
question: "What is the constructor mode of autowiring?",
options: [
"Autowiring by property name",
"Spring first tries constructor then byType",
"Autowiring by property type",
"Similar to byType but applies to constructor arguments"
],
answer: "Similar to byType but applies to constructor arguments"
},
{
id: 242,
question: "What is true about @Autowired annotation?",
options: [
"It can be used on setter methods",
"It provides fine-grained control over autowiring",
"It can be used on arbitrary methods with multiple arguments",
"All of the above"
],
answer: "It provides fine-grained control over autowiring"
}, 
{
id: 243,
question: "What are the different points where weaving can be applied?",
options: [
"Compile time, load time",
"Compile time, run time",
"Run time",
"Compile time, load time, run time"
],
answer: "Compile time, load time, run time"
},
{
id: 244,
question: "What is Spring MVC framework?",
options: [
"Spring MVC framework is Model-Value-Class architecture and used to bind model data with values.",
"The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.",
"Spring MVC framework is used for Transaction management for Web Applications.",
"Spring MVC framework is used for AOP for Web Applications."
],
answer: "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications."
},
{
id: 245,
question: "By default a bean is lazily loaded.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 246,
question: "What is the scope of bean in portlet context?",
options: [
"session",
"global-session",
"prototype",
"request"
],
answer: "global-session"
},
{
id: 247,
question: "Which of the following classes can be used to call Stored Procedures in Spring?",
options: [
"SPHelper",
"JdbcTemplateCall",
"JdbcTemplate",
"SimpleJdbcCall"
],
answer: "SimpleJdbcCall"
},
{
id: 248,
question: "What is a ContextRefreshedEvent event?",
options: [
"This event is published when the Servlet Context is either initialized or refreshed.",
"This event is published when the HTTP Request is received.",
"This event is published when the HTTP Response is returned.",
"This event is published when the ApplicationContext is either initialized or refreshed."
],
answer: "This event is published when the ApplicationContext is either initialized or refreshed."
},
{
id: 249,
question: "What is a ContextStartedEvent event?",
options: [
"This event is published when the Servlet Context is either initialized or refreshed.",
"This event is published when the HTTP Request is received.",
"This event is published when the ApplicationContext is started using the start method on the ConfigurableApplicationContext interface.",
"This event is published when the HTTP Response is returned."
],
answer: "This event is published when the ApplicationContext is started using the start method on the ConfigurableApplicationContext interface."
},
{
id: 250,
question: "What is ContextStoppedEvent event?",
options: [
"This event is published when the Servlet Context is either initialized or refreshed.",
"This event is published when the ApplicationContext is stopped using the stop method on the ConfigurableApplicationContext interface.",
"This event is published when the HTTP Request is received.",
"This event is published when the HTTP Response is returned."
],
answer: "This event is published when the ApplicationContext is stopped using the stop method on the ConfigurableApplicationContext interface."
},
{
id: 251,
question: "What is ContextClosedEvent event?",
options: [
"This event is published when the Servlet Context is either initialized or refreshed.",
"This event is published when the HTTP Request is received.",
"This event is published when the HTTP Response is returned.",
"This event is published when the ApplicationContext is closed using the close method on the ConfigurableApplicationContext interface."
],
answer: "This event is published when the ApplicationContext is closed using the close method on the ConfigurableApplicationContext interface."
},
{
id: 252,
question: "What is RequestHandledEvent event?",
options: [
"This event is published when the Servlet Context is either initialized or refreshed.",
"This event is published when the HTTP Request is received.",
"This event is published when the HTTP session is initialized or refreshed.",
"This event is published when the HTTP Request is serviced."
],
answer: "This event is published when the HTTP session is initialized or refreshed."
},
{
id: 253,
question: "What is Introduction in Spring AOP?",
options: [
"An introduction represents a point in your application where you can plug-in the AOP aspect.",
"This is used to inject values in objects.",
"This is not invoked during program execution by Spring AOP framework.",
"An introduction allows you to add new methods or attributes to existing classes."
],
answer: "An introduction allows you to add new methods or attributes to existing classes."
},
{
id: 254,
question: "What is @Controller annotation?",
options: [
"The @Controller annotation indicates that a particular class serves the role of a controller.",
"The @Controller annotation indicates how to control the transaction management.",
"The @Controller annotation indicates how to control the dependency injection.",
"The @Controller annotation indicates how to control the aspect programming."
],
answer: "The @Controller annotation indicates that a particular class serves the role of a controller."
},
{
id: 255,
question: "What is the prototype scope?",
options: [
"This scopes a single bean definition to have any number of object instances.",
"This scopes the bean definition to a single instance per HTTP Request.",
"This scopes the bean definition to a single instance per HTTP Session.",
"This scopes the bean definition to a single instance per HTTP Application/Global session."
],
answer: "This scopes a single bean definition to have any number of object instances."
},
{
id: 256,
question: "What is true about <props> collection configuration elements?",
options: [
"This helps in wiring a list of values, allowing duplicates.",
"This helps in wiring a list of values but without any duplicates.",
"This can be used to inject a collection of name-value pairs where name and value can be of any type.",
"This can be used to inject a collection of name-value pairs where the name and value are both Strings."
],
answer: "This can be used to inject a collection of name-value pairs where the name and value are both Strings."
},
{
id: 257,
question: "How to handle shut down of IoC containers?",
options: [
"Using shutdownHook()",
"Using shutdownHandler()",
"Using registerHook()",
"Using registerShutdownHook()"
],
answer: "Using registerShutdownHook()"
},
{
id: 258,
question: "By default a bean is eagerly loaded.",
options: [
"False",
"True"
],
answer: "True"
},
{
id: 259,
question: "What is true about BeanPostProcessor?",
options: [
"It is a concrete class.",
"It is an interface.",
"It is an abstract class.",
"None of the above."
],
answer: "It is an interface."
},
{
id: 260,
question: "How can you inject Java Collection in Spring?",
options: [
"Using list, set, map or props tag.",
"Using lit, set, map or collection tag.",
"Using list, set, props or collection tag.",
"Using list, collection, map or props tag."
],
answer: "Using list, set, map or props tag."
},
{
id: 261,
question: "Which class is used to map a database row to a Java object in Spring?",
options: [
"ResultSet",
"RowMapper",
"RowSetMapper",
"ResultSetMapper"
],
answer: "RowMapper"
},
{
id: 262,
question: "How can the bean life cycle be controlled?",
options: [
"Using init() only",
"Using InitializingBean class only",
"Using DisposableBean class only",
"All of the above"
],
answer: "All of the above"
}, 
{
id: 263,
question: "What is the scope of bean in portlet context?",
options: [
"session",
"global-session",
"prototype",
"request"
],
answer: "global-session"
},
{
id: 264,
question: "What is a ContextStoppedEvent event?",
options: [
"This event is published when the Servlet Context is either initialized or refreshed.",
"This event is published when the ApplicationContext is stopped using the stop() method on the ConfigurableApplicationContext interface.",
"This event is published when the HTTP Request is received.",
"This event is published when the HTTP Response is returned."
],
answer: "This event is published when the ApplicationContext is stopped using the stop() method on the ConfigurableApplicationContext interface."
},
{
id: 265,
question: "Which ORM Spring supports?",
options: [
"Hibernate",
"iBatis",
"JPA",
"All of the above.",
"None of the above."
],
answer: "All of the above."
},
{
id: 266,
question: "What is true about <map> collection configuration elements?",
options: [
"This helps in wiring a list of values, allowing duplicates.",
"This helps in wiring a list of values but without any duplicates.",
"This can be used to inject a collection of name-value pairs where name and value can be of any type.",
"This tag is not supported."
],
answer: "This can be used to inject a collection of name-value pairs where name and value can be of any type."
},
{
id: 267,
question: "Core container has AOP as one of its modules.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 268,
question: "Can you inject null and empty string values in Spring?",
options: [
"Yes",
"No"
],
answer: "Yes"
},
{
id: 269,
question: "What stands true for the Spring framework?",
options: [
"Spring framework is a lightweight framework.",
"Spring framework is a heavy weight framework."
],
answer: "Spring framework is a lightweight framework."
},
{
id: 270,
question: "Which class acts as IoC Container?",
options: [
"ServletContext",
"DispatcherServlet",
"ApplicationContext",
"None of the above"
],
answer: "ApplicationContext"
},
{
id: 271,
question: "What is the scope of stateless bean?",
options: [
"global-session",
"singleton",
"prototype",
"request"
],
answer: "singleton"
},
{
id: 272,
question: "Annotations work as metadata for classes and Spring uses annotations as an alternative to XML for declarative configuration. Is it true or false?",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 273,
question: "Which of the following layers is the @Controller annotation used in?",
options: [
"Service layer.",
"Presentation layer.",
"Session layer.",
"Business layer.",
"None of these."
],
answer: "Presentation layer."
},
{
id: 274,
question: "Which of the following statements is true?",
options: [
"ApplicationContext extends BeanFactory.",
"None of these.",
"ApplicationContext implements BeanFactory.",
"BeanFactory extends ApplicationContext.",
"BeanFactory implements ApplicationContext."
],
answer: "ApplicationContext extends BeanFactory."
},
{
id: 275,
question: "What is singleton scope?",
options: [
"This scopes the bean definition to a single instance per Spring IoC container.",
"This scopes the bean definition to a single instance per HTTP Request.",
"This scopes the bean definition to a single instance per HTTP Session.",
"This scopes the bean definition to a single instance per HTTP Application/ Global session."
],
answer: "This scopes the bean definition to a single instance per Spring IoC container."
},
{
id: 276,
question: "What is the prototype scope?",
options: [
"This scopes a single bean definition to have any number of object instances.",
"This scopes the bean definition to a single instance per HTTP Request.",
"This scopes the bean definition to a single instance per HTTP Session.",
"This scopes the bean definition to a single instance per HTTP Application/ Global session."
],
answer: "This scopes a single bean definition to have any number of object instances."
},
{
id: 277,
question: "What is the request scope?",
options: [
"This scopes a bean definition to an HTTP request.",
"This scopes the bean definition to Spring IoC container.",
"This scopes the bean definition to HTTP Session.",
"This scopes the bean definition HTTP Application/ Global session."
],
answer: "This scopes a bean definition to an HTTP request."
},
{
id: 278,
question: "What is session scope?",
options: [
"This scopes a bean definition to an HTTP session.",
"This scopes the bean definition to Spring IoC container.",
"This scopes the bean definition to HTTP request.",
"This scopes the bean definition to HTTP Application/ Global session."
],
answer: "This scopes a bean definition to an HTTP session."
},
{
id: 279,
question: "What is global-session scope?",
options: [
"This scopes a bean definition to an HTTP Application/ Global session.",
"This scopes the bean definition to Spring IoC container.",
"This scopes the bean definition to HTTP request.",
"This scopes the bean definition to HTTP Session."
],
answer: "This scopes a bean definition to an HTTP Application/ Global session."
},
{
id: 280,
question: "What is true about collection configuration elements?",
options: [
"This helps in wiring a list of values, allowing duplicates.",
"This helps in wiring a list of values but without any duplicates.",
"This can be used to inject a collection of name-value pairs where name and value can be of any type.",
"This can be used to inject a collection of name-value pairs where the name and value are both Strings."
],
answer: "This can be used to inject a collection of name-value pairs where name and value can be of any type."
},
{
id: 281,
question: "What is true about <props> collection configuration elements?",
options: [
"This helps in wiring a list of values, allowing duplicates.",
"This helps in wiring a list of values but without any duplicates.",
"This can be used to inject a collection of name-value pairs where name and value can be of any type.",
"This can be used to inject a collection of name-value pairs where the name and value are both Strings."
],
answer: "This can be used to inject a collection of name-value pairs where the name and value are both Strings."
},
{
id: 282,
question: "What is the Join point?",
options: [
"This represents a point in your application which joins two objects.",
"This represents a point in your object where you join values.",
"This represents a point in your object where you join injected values.",
"This represents a point in your application where you can plug-in the AOP aspect."
],
answer: "This represents a point in your application where you can plug-in the AOP aspect."
},
{
id: 283,
question: "What is Advice?",
options: [
"This is the way to instruct an object to behave in a certain manner.",
"This is used to inject values in objects.",
"This is the actual action to be taken either before or after the method execution.",
"This is not invoked during program execution by Spring AOP framework."
],
answer: "This is the actual action to be taken either before or after the method execution."
},
{
id: 284,
question: "What is Pointcut?",
options: [
"This represents a point in your application where you can plug-in the AOP aspect.",
"This is a set of one or more join points where an advice should be executed.",
"This is used to inject values in objects.",
"This is invoked during program execution by Spring AOP framework."
],
answer: "This is a set of one or more join points where an advice should be executed."
},
{
id: 285,
question: "What is the Target object?",
options: [
"Represents an object in your application where you can plug-in AOP aspect.",
"The object being advised by one or more aspects, also referred to as the advised object.",
"This is used to inject values in objects.",
"This is not invoked during program execution by Spring AOP framework."
],
answer: "The object being advised by one or more aspects, also referred to as the advised object."
},
{
id: 286,
question: "What is Weaving?",
options: [
"Weaving is the process of injecting values in objects to create an advised object.",
"Weaving is the process of linking aspects with other application types or objects to create an advised object.",
"This is used to inject values in objects.",
"Weaving is used to check object dependencies."
],
answer: "Weaving is the process of linking aspects with other application types or objects to create an advised object."
},
{
id: 287,
question: "Which of the following aspects implementation Spring supports?",
options: [
"XML Schema based aspect implementation",
"@AspectJ based aspect implementation",
"Both of the above.",
"None of the above."
],
answer: "Both of the above."
}, 
{
id: 288,
question: "What are the types of transaction management Spring supports?",
options: [
"Programmatic transaction management",
"Declarative transaction management",
"Both of the above.",
"None of the above."
],
answer: "Both of the above."
},
{
id: 289,
question: "What is Spring MVC framework?",
options: [
"Spring MVC framework is Model-Value-Class architecture and used to bind model data with values.",
"The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications.",
"Spring MVC framework is used for Transaction management for Web Applications.",
"Spring MVC framework is used for AOP for Web Applications."
],
answer: "The Spring web MVC framework provides model-view-controller architecture and ready components that can be used to develop flexible and loosely coupled web applications."
},
{
id: 290,
question: "What is a DispatcherServlet?",
options: [
"DispatcherServlet is used for transaction management.",
"DispatcherServlet is used for AOP.",
"DispatcherServlet handles all the HTTP requests and responses.",
"DispatcherServlet is used for Dependency injection."
],
answer: "DispatcherServlet handles all the HTTP requests and responses."
},
{
id: 291,
question: "What is ACID in transactional management?",
options: [
"Accurate, Controlled, Isolation, Durability",
"Atomicity, Consistency, Independent, Done",
"Atomicity, Consistency, Isolation, Durability",
"Accurate, Controlled, Independent, Done"
],
answer: "Atomicity, Consistency, Isolation, Durability"
},
{
id: 292,
question: "Where do you define DispatcherServlet?",
options: [
"In Beans configuration file.",
"Web.xml file",
"Meta-inf/dispatcher.xml",
"Web-inf/dispatcher.xml"
],
answer: "Web.xml file"
},
{
id: 293,
question: "What is true about BeanPostProcessor?",
options: [
"It is a concrete class.",
"It is an interface.",
"It is an abstract class.",
"None of the above."
],
answer: "It is an interface."
},
{
id: 294,
question: "What does BeanPostProcessor do?",
options: [
"It processes beans once a bean is initialized.",
"It defines callback methods that you can implement to provide your own instantiation logic and dependency-resolution logic.",
"It processes beans once a bean is loaded.",
"It processes beans once a bean exits."
],
answer: "It defines callback methods that you can implement to provide your own instantiation logic and dependency-resolution logic."
},
{
id: 295,
question: "Can a bean be configured to have an inner bean?",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 296,
question: "Can we inject value and ref both together in a bean?",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 297,
question: "Following class can be extended to create custom events in Spring.",
options: [
"SpringEvent",
"Event",
"ApplicationEvent",
"None of above"
],
answer: "ApplicationEvent"
},
{
id: 298,
question: "Which of the following is the correct assertion about Spring?",
options: [
"Spring enables developers to develop enterprise-class applications using POJOs.",
"Spring is organized in a modular fashion.",
"Testing an application written with Spring is simple because environment-dependent code is moved into this framework.",
"All of the above."
],
answer: "All of the above."
},
{
id: 299,
question: "What does AOP stand for?",
options: [
"Aspect Oriented Programming",
"Any Object Programming",
"Asset Oriented Programming",
"Asset Oriented Protocol"
],
answer: "Aspect Oriented Programming"
},
{
id: 300,
question: "What is true about cross-cutting concerns?",
options: [
"The functions that span multiple points of an application are called cross cutting concerns.",
"Cross-cutting concerns are conceptually separate from the application's business logic.",
"Logging is one of the examples of cross cutting concerns.",
"All of the above."
],
answer: "The functions that span multiple points of an application are called cross cutting concerns."
},
{
id: 301,
question: "Which are the modules of the core container?",
options: [
"Beans, Core, Context, SpEL",
"Core, Context, ORM, Web",
"Core, Context, Aspects, Test",
"Bean, Core, Context, Test"
],
answer: "Beans, Core, Context, SpEL"
},
{
id: 302,
question: "Which are the modules of the Data Access/Integration layer?",
options: [
"JDBC, ORM, OXM, JMS, Transactions",
"JDBC, ORM, OXM, JMS",
"JDBC, ORM, Web, Beans",
"JDBC, ORM, OXM"
],
answer: "JDBC, ORM, OXM, JMS, Transactions"
},
{
id: 303,
question: "Which are the modules of the Web layer?",
options: [
"WebSocket, Servlet, Web, Portlet",
"WebSocket, Servlet, Web-MVC, Web",
"HTML, JSP, Web, Portlet",
"HTML, Servlet, Web, Portlet"
],
answer: "WebSocket, Servlet, Web, Portlet"
},
{
id: 304,
question: "Which of the statements is correct?",
options: [
"The JDBC module provides a JDBC-abstraction layer that removes the need to do tedious JDBC related coding.",
"The ORM module provides integration layers for popular object relational mapping APIs, including JPA, JDO, Hibernate, and iBatis.",
"The Java Messaging Service (JMS) module contains features for producing and consuming messages.",
"All of the above."
],
answer: "All of the above."
},
{
id: 305,
question: "What types of Dependency Injection does Spring support?",
options: [
"Constructor based, Setter based",
"Constructor based, Setter based, Getter based",
"Setter based, Getter based, Properties based",
"Constructor based, Setter based, Properties based"
],
answer: "Constructor based, Setter based"
},
{
id: 306,
question: "Which are the IoC containers in Spring?",
options: [
"BeanFactory, ApplicationContext",
"BeanFactory, ApplicationContext, IocContextFactory",
"BeanFactory, BeanContext, IocContextFactory",
"BeanFactory, ApplicationContext, BeanContext"
],
answer: "BeanFactory, ApplicationContext"
},
{
id: 307,
question: "Which of the following stands true for Spring beans?",
options: [
"Spring beans are managed by the Spring IoC container.",
"Spring beans are instantiated, assembled, and otherwise managed by a Spring IoC container.",
"Spring beans are simple POJOs.",
"All of the above."
],
answer: "All of the above."
},
{
id: 308,
question: "Which is the way to provide configuration metadata to Spring?",
options: [
"XML based configuration file.",
"Annotation based configuration.",
"Java based configuration.",
"All of the above."
],
answer: "All of the above."
},
{
id: 309,
question: "What is bean scope?",
options: [
"Bean scope forces Spring to produce a new bean instance as per the scope defined.",
"Bean scope defines the accessibility of bean in a Java class.",
"Bean scope defines the accessibility of bean in a Java package.",
"Bean scope defines the accessibility of bean in a web application."
],
answer: "Bean scope forces Spring to produce a new bean instance as per the scope defined."
},
{
id: 310,
question: "What is no mode of autowiring?",
options: [
"Default setting which means no autowiring and you should use explicit bean reference for wiring.",
"Autowiring by property name.",
"Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType.",
"Similar to byType, but type applies to constructor arguments."
],
answer: "Default setting which means no autowiring and you should use explicit bean reference for wiring."
},
{
id: 311,
question: "What is byName mode of autowiring?",
options: [
"Default setting which means no autowiring and you should use explicit bean reference for wiring.",
"Autowiring by property name. Spring tries to match and wire its properties with the beans defined by the same names in the configuration file.",
"Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType.",
"Similar to byType, but type applies to constructor arguments."
],
answer: "Autowiring by property name. Spring tries to match and wire its properties with the beans defined by the same names in the configuration file."
},
{
id: 312,
question: "What is byType mode of autowiring?",
options: [
"Default setting which means no autowiring and you should use explicit bean reference for wiring.",
"Autowiring by property name.",
"Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType.",
"Autowiring by property type. Spring tries to match and wire a property if its type matches with exactly one of the beans in the configuration file."
],
answer: "Autowiring by property type. Spring tries to match and wire a property if its type matches with exactly one of the beans in the configuration file."
},
{
id: 313,
question: "What is the constructor mode of autowiring?",
options: [
"Autowiring by property name.",
"Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType.",
"Autowiring by property type.",
"Similar to byType, but type applies to constructor arguments. If there is not exactly one bean of the constructor argument type in the container, a fatal error is raised."
],
answer: "Similar to byType, but type applies to constructor arguments. If there is not exactly one bean of the constructor argument type in the container, a fatal error is raised."
},
{
id: 314,
question: "What is autodetect mode of autowiring?",
options: [
"Similar to byType, but type applies to constructor arguments.",
"Autowiring by property name.",
"Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType.",
"Autowiring by property type."
],
answer: "Spring first tries to wire using autowire by constructor, if it does not work, Spring tries to autowire by byType."
},
{
id: 315,
question: "Which is the correct implementation class of BeanFactory?",
options: [
"XmlBeanFactory",
"ClassPathBeanFactory",
"FileSystemBeanFactory",
"AdvancedBeanFactory"
],
answer: "XmlBeanFactory"
},
{
id: 316,
question: "What does @Required annotation mean?",
options: [
"This annotation indicates that bean property must be populated by the user.",
"This annotation indicates that bean property is required while saving the bean data to the database.",
"This annotation simply indicates that the affected bean property must be populated at configuration time, through an explicit property value in a bean definition or through autowiring.",
"This annotation indicates that bean property is required while serializing the bean."
],
answer: "This annotation simply indicates that the affected bean property must be populated at configuration time, through an explicit property value in a bean definition or through autowiring."
},
{
id: 317,
question: "What is true about @Autowired annotation?",
options: [
"The @Autowired annotation can be used to autowire bean on the setter method.",
"This annotation provides more fine-grained control over where and how autowiring should be accomplished.",
"The @Autowired annotation can be used to autowire bean on methods with arbitrary names and/or multiple arguments.",
"All of the above."
],
answer: "This annotation provides more fine-grained control over where and how autowiring should be accomplished."
}, 
{
id: 318,
question: "What is the aspect?",
options: [
"Aspect is a way to do the dependency injection.",
"A module which has a set of APIs providing cross-cutting requirements.",
"Aspect is used to log information about applications.",
"Aspect represents properties of spring based application."
],
answer: "A module which has a set of APIs providing cross-cutting requirements."
},
{
id: 319,
question: "What is the Join point?",
options: [
"This represents a point in your application which joins two objects.",
"This represents a point in your object where you join values.",
"This represents a point in your object where you join injected values.",
"This represents a point in your application where you can plug-in AOP aspect."
],
answer: "This represents a point in your application where you can plug-in AOP aspect."
},
{
id: 320,
question: "What is Pointcut?",
options: [
"This represents a point in your application where you can plug-in AOP aspect.",
"This is a set of one or more join points where an advice should be executed.",
"This is used to inject values in objects.",
"This is invoked during program execution by Spring AOP framework."
],
answer: "This is a set of one or more join points where an advice should be executed."
},
{
id: 321,
question: "Which of these operations instruct the IOC container to create a bean instance?",
options: [
"The initialization method",
"The destruction method",
"The lazy-initialization mode",
"The auto-wiring mode",
"None of the above"
],
answer: "None of the above"
},
{
id: 322,
question: "Which interface in Spring MVC ensures that implementation is detected?",
options: [
"WebApplicationInitializer",
"WebInitializer",
"XmlWebApplicationContext",
"AbstractAnnotationConfigDispatcherServletInitializer",
"None of the above"
],
answer: "AbstractAnnotationConfigDispatcherServletInitializer"
},
{
id: 323,
question: "The getModelMap() method of ModelAndView returns a(n): __________ instance.",
options: [
"Empty",
"Http",
"ModelMap",
"Map"
],
answer: "ModelMap"
},
{
id: 324,
question: "What is an after returning advice?",
options: [
"Advice executed before a join point.",
"Advice executed after a join point completes without throwing an exception.",
"Advice executed when an exception is thrown.",
"Advice executed around a join point."
],
answer: "Advice executed after a join point completes without throwing an exception."
},
{
id: 325,
question: "Select method signature that matches the pointcut: execution(* com.test.service..*.*(*))",
options: [
"void com.test.controller.MyController#process()",
"void com.test.service.MyServiceImpl#transfert(Money amount)",
"int com.test.repository.UserRepository#save(User user)",
"void com.example.Service#doWork()"
],
answer: "void com.test.service.MyServiceImpl#transfert(Money amount)"
},
{
id: 326,
question: "Using Spring AOP, what is the visibility of methods matched by @Pointcut(\"execution(* *(..))\")?",
options: [
"Private methods",
"Protected methods",
"Public methods",
"All methods regardless of visibility"
],
answer: "Public methods"
},
{
id: 327,
question: "Which statement is correct about AOP proxy?",
options: [
"AOP proxies are created manually by developers.",
"AOP proxies are created by Spring to implement aspect contracts.",
"AOP proxies can advise final methods when using CGLIB.",
"AOP proxies only work with static methods."
],
answer: "AOP proxies are created by Spring to implement aspect contracts."
},
{
id: 328,
question: "What is a pointcut?",
options: [
"An object that holds advice.",
"An expression to identify join points.",
"A proxy implementation class.",
"A dependency injection method."
],
answer: "An expression to identify join points."
},
{
id: 329,
question: "How does before advice work?",
options: [
"Run advice before a class loads.",
"Run advice before a method execution.",
"Run advice before HTTP response is returned.",
"Run advice before HTTP request is processed."
],
answer: "Run advice before a method execution."
},
{
id: 330,
question: "How does after-returning advice work?",
options: [
"Run advice after a class loads successfully.",
"Run advice after a method execution only if the method completes successfully.",
"Run advice after HTTP response is returned successfully.",
"Run advice after HTTP request is processed with no exception."
],
answer: "Run advice after a method execution only if the method completes successfully."
},
{
id: 331,
question: "How does after-throwing advice work?",
options: [
"Run advice after a method execution only if the method exits by throwing an exception.",
"Run advice after a class throws an exception during load time.",
"Run advice after HTTP response returns error status.",
"Run advice after HTTP request processing fails."
],
answer: "Run advice after a method execution only if the method exits by throwing an exception."
},
{
id: 332,
question: "How does around advice work?",
options: [
"Run advice before and after the advised method is invoked.",
"Run advice before and after a class is loaded.",
"Run advice before and after HTTP response is returned.",
"Run advice before and after HTTP request is processed."
],
answer: "Run advice before and after the advised method is invoked."
},
{
id: 333,
question: "What are the unique correct answers about Spring AOP support?",
options: [
"A pointcut can select fields only.",
"A pointcut could select methods that have a custom annotation.",
"Spring AOP supports compile-time weaving only.",
"Spring AOP advises private methods by default."
],
answer: "A pointcut could select methods that have a custom annotation."
},
{
id: 334,
question: "What is advice?",
options: [
"An action taken by an aspect at a particular join point.",
"A configuration file in Spring.",
"A proxy creation mechanism.",
"A dependency injection pattern."
],
answer: "An action taken by an aspect at a particular join point."
},
{
id: 335,
question: "What is the result of the pointcut expressions execution(* *..AccountServiceImpl.update(..)) && execution(* *..ClientServiceImpl.update(..))?",
options: [
"Both methods will be executed.",
"Only AccountServiceImpl.update(..) will execute.",
"Only ClientServiceImpl.update(..) will execute.",
"No join point is defined."
],
answer: "No join point is defined."
},
{
id: 336,
question: "Using Spring AOP, what methods are matched by execution(public * *(..))?",
options: [
"All private methods",
"All protected methods",
"The execution of all public methods",
"Only static methods"
],
answer: "The execution of all public methods"
},
{
id: 337,
question: "How many types of Dynamic proxy are available in Spring?",
options: [
"One",
"Two",
"Three",
"Four"
],
answer: "Two"
},
{
id: 338,
question: "What is the type of proxy in Spring Framework?",
options: [
"Static only",
"Dynamic only",
"Two: Static and Dynamic",
"Three: Static, Dynamic, Hybrid"
],
answer: "Two: Static and Dynamic"
},
{
id: 339,
question: "How many types of injection methods are there in Spring?",
options: [
"One",
"Two",
"Three",
"Four"
],
answer: "Two"
},
{
id: 340,
question: "Which of the following is not a valid difference between @Inject and @Autowired annotations?",
options: [
"There is no difference and both can be used interchangeably.",
"@Autowired is a legacy annotation whereas @Inject is its latest version.",
"@Inject is part of Java EE’s CDI framework while @Autowired is Spring’s own implementation.",
"None of these."
],
answer: "@Autowired is a legacy annotation whereas @Inject is its latest version."
}, 
{
id: 341,
question: "Annotations work as metadata for classes and Spring uses annotations as an alternative to XML for declarative configuration. Is it true or false?",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 342,
question: "What is the role of ApplicationContextAware in Spring?",
options: [
"To make a bean aware of the container.",
"To enable transaction management.",
"To configure Hibernate integration.",
"To define bean scope."
],
answer: "To make a bean aware of the container."
},
{
id: 343,
question: "Can the class which Spring container makes subclass be final?",
options: [
"Yes",
"No"
],
answer: "No"
},
{
id: 344,
question: "When a bean has scope limited to HTTP session, that is called:",
options: [
"Request scope",
"Prototype scope",
"Session scope",
"Singleton scope"
],
answer: "Session scope"
},
{
id: 345,
question: "What are the ways to access Hibernate by using Spring?",
options: [
"Inversion of Control with a Hibernate Template and Callback.",
"Extending HibernateDaoSupport and applying an AOP interceptor node.",
"Both of above.",
"None of above."
],
answer: "Both of above."
},
{
id: 346,
question: "Which ORM Spring supports?",
options: [
"Hibernate",
"iBatis",
"JPA",
"All of above.",
"None of above."
],
answer: "All of above."
},
{
id: 347,
question: "Which of the following database is not supported using JdbcTemplate?",
options: [
"MySQL",
"PostgreSQL",
"NoSQL",
"Oracle"
],
answer: "NoSQL"
},
{
id: 348,
question: "Expression Language (SpEL) was introduced in which version of Spring Framework?",
options: [
"1.0",
"2.0",
"3.0",
"4.0"
],
answer: "3.0"
},
{
id: 349,
question: "Can we integrate Struts with Spring?",
options: [
"Yes",
"No"
],
answer: "Yes"
},
{
id: 350,
question: "By default a bean is lazily loaded.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 351,
question: "By default a bean is eagerly loaded.",
options: [
"False",
"True"
],
answer: "True"
},
{
id: 352,
question: "If a bean can be created any number of times, the scope is:",
options: [
"session",
"global-session",
"prototype",
"request"
],
answer: "prototype"
},
{
id: 353,
question: "What is the scope of stateless beans?",
options: [
"global-session",
"singleton",
"prototype",
"request"
],
answer: "singleton"
},
{
id: 354,
question: "What is the scope of stateful beans?",
options: [
"session",
"global-session",
"prototype",
"request"
],
answer: "prototype"
},
{
id: 355,
question: "If a bean is scoped to HTTP session, the scope is:",
options: [
"global-session",
"session",
"prototype",
"request"
],
answer: "session"
},
{
id: 356,
question: "Which of the following classes can be used to execute SQL queries in Spring?",
options: [
"JdbcTemplate",
"JDBCHelper",
"DBHelper",
"DBTemplate"
],
answer: "JdbcTemplate"
},
{
id: 357,
question: "Which of the following classes can be used to call Stored Procedures in Spring?",
options: [
"SPHelper",
"JdbcTemplateCall",
"JdbcTemplate",
"SimpleJdbcCall"
],
answer: "SimpleJdbcCall"
},
{
id: 358,
question: "Following class can be extended to create custom events in Spring.",
options: [
"SpringEvent",
"Event",
"ApplicationEvent",
"None of above"
],
answer: "ApplicationEvent"
},
{
id: 359,
question: "Annotation to add security to your Spring Boot app?",
options: [
"@EnableWebSecurity",
"@EnableSecurity",
"@EnableSpringSecurity",
"@SecurityConfig"
],
answer: "@EnableWebSecurity"
},
{
id: 360,
question: "Element used to specify access attributes for bean’s methods.",
options: [
"security:protect",
"security:intercept",
"security:intercept-security",
"none of the mentioned"
],
answer: "security:protect"
},
{
id: 361,
question: "How to reload changes in Spring Boot without restarting the server?",
options: [
"org.springframework.boot:spring-boot-devtools",
"org.springframework.boot:spring-boot-test",
"org.springframework.boot:spring-boot-web",
"org.springframework.boot:spring-boot-jasper"
],
answer: "org.springframework.boot:spring-boot-devtools"
},
{
id: 362,
question: "LoggerInterceptor which implements HandlerInterceptor will override which methods?",
options: [
"preHandlerBean(), postHandlerBean(), afterCompletion()",
"PreProcessHandler(), PostProcessHandler(), afterCompletion()",
"preHandle(), postHandle(), afterCompletion()",
"none"
],
answer: "preHandle(), postHandle(), afterCompletion()"
}, 
{
id: 363,
question: "How does Spring Batch work?",
options: [
"step, ItemReader, ItemProcessor, ItemStreamWriter",
"step, ItemProcessor, ItemStreamWriter",
"step, ItemReader, ItemStreamWriter",
"step, ItemReader only"
],
answer: "step, ItemReader, ItemProcessor, ItemStreamWriter"
},
{
id: 364,
question: "Which of the following stands true for Spring beans?",
options: [
"Spring beans are managed by the Spring IoC container.",
"Spring beans are instantiated, assembled, and otherwise managed by a Spring IoC container.",
"Spring beans are simple POJOs.",
"All of the above."
],
answer: "All of the above."
}, 
{
id: 365,
question: "Which of the following codes will not throw an error?",
options: [
"JSON.parse(\"\");",
"JSON.parse(null);",
"JSON.parse();",
"JSON.parse({});"
],
answer: "JSON.parse(null);"
},
{
id: 366,
question: "What does JSONP stand for?",
options: [
"JSON Procedures",
"JSON Parsing",
"JSON with padding",
"JSON Programming"
],
answer: "JSON with padding"
},
{
id: 367,
question: "What is the value of json in the following code?\nvar obj = { fruit: 'apple', toJSON: function () { return 'orange'; } };\nvar json = JSON.stringify({x: obj});",
options: [
"{\"x\":\"orange\"}",
"{\"fruit\":\"apple\"}",
"{\"x\":\"apple\"}",
"{\"fruit\":\"orange\"}"
],
answer: "{\"x\":\"orange\"}"
},
{
id: 368,
question: "What is the MIME type of JSON?",
options: [
"application/x-json",
"text/json",
"application/json",
"application/javascript"
],
answer: "application/json"
},
{
id: 369,
question: "What function will convert a JavaScript object to a JSON string?",
options: [
"JSON.text()",
"JSON.serialize()",
"JSON.toString()",
"JSON.stringify()"
],
answer: "JSON.stringify()"
},
{
id: 370,
question: "In the notation { \"Student\": [ \"Amy\", \"Bob\", \"John\" ] }, Student is of type:",
options: [
"Not a valid JSON string",
"Array",
"Class",
"Object"
],
answer: "Array"
},
{
id: 371,
question: "JSON-RPC is a remote procedure call protocol.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 372,
question: "To use observables, Angular uses a third-party library called:",
options: [
"ng2-bootstrap",
"angular-cli",
"numeral",
"Reactive Extensions (RxJS)"
],
answer: "Reactive Extensions (RxJS)"
},
{
id: 373,
question: "We subscribe to the observable ourselves using which method?",
options: [
"subscribe()",
"subs()",
"subscribed()",
"None of above"
],
answer: "subscribe()"
},
{
id: 374,
question: "The ______ filter waits for a promise and returns the most recent value received. It then updates the view.",
options: [
"sync",
"async",
"promise",
"custom"
],
answer: "async"
},
{
id: 375,
question: "If you chain multiple pipes together, they are executed:",
options: [
"in parallel",
"LIFO order",
"in the order in which you specify them",
"none of above"
],
answer: "none of above"
},
{
id: 376,
question: "Observables help you manage ______ data.",
options: [
"synchronous",
"asynchronous",
"Both asynchronous & synchronous",
"None of above"
],
answer: "asynchronous"
},
{
id: 377,
question: "What is the output of the following code?\nconsole.log(x);\nvar x = 5;",
options: [
"5",
"undefined",
"ReferenceError",
"null"
],
answer: "undefined"
},
{
id: 378,
question: "Promises are more advanced than Observables.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 379,
question: "Which class is used to create a black navigation bar in Bootstrap?",
options: [
".navbar-default",
".navbar-black",
".navbar-dark",
".navbar-inverse"
],
answer: ".navbar-inverse"
},
{
id: 380,
question: "The .container-fluid class provides:",
options: [
"Fixed width container",
"Table format",
"To create a Form",
"Full width container"
],
answer: "Full width container"
},
{
id: 381,
question: "What keywords are reserved in JSON and cannot be used as keys?",
options: [
"Value",
"Object",
"There are none.",
"Key"
],
answer: "There are none."
},
{
id: 382,
question: "How to get information about browsers?",
options: [
"Browser",
"version",
"navigator",
"window"
],
answer: "navigator"
},
{
id: 383,
question: "Which event will trigger if a button loses its focus?",
options: [
"onblur",
"onfocus",
"onclick",
"onchange"
],
answer: "onblur"
},
{
id: 384,
question: "Which of the following are valid values of the CSS display property?",
options: [
"inline",
"inline-block",
"block",
"All of the above"
],
answer: "All of the above"
},
{
id: 385,
question: "What is the shorthand property to represent background in CSS?",
options: [
"background-style",
"bg",
"background",
"bg-style"
],
answer: "background"
},
{
id: 386,
question: "_____ is an HTML specification used to add more information to HTML tags.",
options: [
"Macrodata",
"Microdata",
"Minidata",
"Modifydata"
],
answer: "Microdata"
},
{
id: 387,
question: "What is the purpose of the mimeTypes property of a plug-in entry?",
options: [
"Contains MIME properties",
"Contains MIME sizes",
"Contains MIME types",
"Contains MIME methods"
],
answer: "Contains MIME types"
},
{
id: 388,
question: "Which of the following can be implemented using animation?",
options: [
"Fireworks",
"Fade Effect",
"Roll-in or Roll-out",
"All of the mentioned"
],
answer: "All of the mentioned"
},
{
id: 389,
question: "Which property represents the content displayed in the window?",
options: [
"document",
"content",
"window",
"frame"
],
answer: "document"
},
{
id: 390,
question: "How can we make methods available on all objects?",
options: [
"Object.add(methods)",
"Object.methods(add)",
"Object.add.methods(...)",
"Object.prototype"
],
answer: "Object.prototype"
},
{
id: 391,
question: "The four kinds of class members are:",
options: [
"Instance methods, Instance fields, Static method, Dynamic method",
"Instance fields, Instance methods, Class fields, Class methods",
"Instance fields, non-Instance fields, Dynamic methods, Global methods",
"Global methods, Local methods, Dynamic methods, Static methods"
],
answer: "Instance fields, Instance methods, Class fields, Class methods"
},
{
id: 392,
question: "Which field is required in <input>?",
options: [
"required",
"minlength",
"Both",
"None"
],
answer: "required"
},
{
id: 393,
question: "How can we add/delete in an array and return the removed item?",
options: [
"slice",
"shift",
"reverse",
"splice"
],
answer: "splice"
},
{
id: 394,
question: "How to get information about browser?",
options: [
"Browser",
"Version",
"navigator",
"document"
],
answer: "navigator"
}, 
{
id: 395,
question: "In MongoDB, what is the equivalent of SQL term row?",
options: [
"Primary Key",
"Index",
"Field",
"Document"
],
answer: "Document"
},
{
id: 396,
question: "What is the equivalent of the following SQL command in MongoDB?\nUPDATE user SET email = 'NA' WHERE age < 18",
options: [
"db.user.updateMany({ gt: { $age= 18 } },{ $set: {email = \"NA\" } })",
"db.user.updateMany({ age: { $lt: 18 } },{ $set: {email : \"NA\" } })",
"db.user.updateMany({ gt: { $age: 18 } },{ $set: {email : \"NA\" } })",
"db.user.updateMany({ age: { $gt: 18 } },{ $set: {email : \"NA\" } })"
],
answer: "db.user.updateMany({ age: { $lt: 18 } },{ $set: {email : \"NA\" } })"
},
{
id: 397,
question: "How would you limit the results of a find to 10 items?",
options: [
"db.collection.find({},{limit:10})",
"db.collection.find().limit(10)",
"db.collection.limit(query, 10)",
"This is not possible in the node.js driver"
],
answer: "db.collection.find().limit(10)"
},
{
id: 398,
question: "Which of the following code will give an error on the MongoDB command shell?",
options: [
"use databasename",
"show dbs",
"USE databasename",
"Db"
],
answer: "USE databasename"
},
{
id: 399,
question: "What theorem or principle MongoDB follows?",
options: [
"APAC",
"Always-Sync",
"ASCII",
"CAP"
],
answer: "CAP"
},
{
id: 400,
question: "What is NoSQL?",
options: [
"No Object SQL",
"No SQL Server",
"Not Only SQL",
"No Relational Database"
],
answer: "Not Only SQL"
},
{
id: 401,
question: "When there is no match of the document in the collection, what does upsert: true do?",
options: [
"Delete",
"Nothing",
"Insert",
"Update"
],
answer: "Insert"
},
{
id: 402,
question: "Upon running the following command, what fields will be returned in the output?\ndb.collection.find( { qty: { $gt: 6 } }, { name: 1, _id: 0 } )",
options: [
"_id",
"name",
"_id, name",
"name1, _id0"
],
answer: "name"
},
{
id: 403,
question: "What method is used to remove a single item from a MongoDB collection?",
options: [
"db.collection.deleteOne()",
"db.collection.delete()",
"db.collection.removeOne()",
"db.collection.remove()"
],
answer: "db.collection.deleteOne()"
},
{
id: 404,
question: "In the following command, what does the second parameter represent?\ndb.collection.find( { qty: { $gt: 6 } }, { name: 1, wins: 1 } )",
options: [
"Read Concern",
"Projection",
"Write Concern",
"Query"
],
answer: "Projection"
}, 
{
id: 405,
question: "What is the command used to create a new item when using Mongoose?",
options: [
"Book.save()",
"Book.new()",
"Book.create()",
"Book.insert()"
],
answer: "Book.save()"
},
{
id: 406,
question: "What is the HTTP verb used to update a resource in REST?",
options: [
"DELETE",
"GET",
"POST",
"PUT"
],
answer: "PUT"
},
{
id: 407,
question: "Google's V8 Engine, also used in Chrome, provides what capability to Node.js?",
options: [
"JavaScript support",
"3rd party module repository",
"Support for HTML rendering and DOM manipulation",
"Asynchronous File and Network access"
],
answer: "JavaScript support"
},
{
id: 408,
question: "What is the package you use to connect to MongoDB?",
options: [
"Mongod",
"MongoConnect",
"Schema",
"Mongoose"
],
answer: "Mongoose"
},
{
id: 409,
question: "Assigning a value to \"module.exports\" in a Node.js JavaScript file:",
options: [
"Allows that value to be imported into other JavaScript files in your project.",
"Publishes the exported value to npm, Node's package repository.",
"Persists that value to disk, allowing you to retrieve it later.",
"Deletes the module from cache."
],
answer: "Allows that value to be imported into other JavaScript files in your project."
},
{
id: 410,
question: "Running \"npm init\" will:",
options: [
"Initialize your project, creating a package.json file.",
"Initialize the npm CLI on your system.",
"Download and add the \"init\" module to your Node.js project.",
"Start the Node.js server."
],
answer: "Initialize your project, creating a package.json file."
},
{
id: 411,
question: "What is the module for Node that allows you to run a web server?",
options: [
"Sublime",
"REST",
"FS",
"HTTP"
],
answer: "HTTP"
},
{
id: 412,
question: "What is the Mongoose command used to delete an item?",
options: [
"delete()",
"trash()",
"remove()",
"drop()"
],
answer: "remove()"
},
{
id: 413,
question: "What verb do you use to do a partial update on an item?",
options: [
"POST",
"PATCH",
"PUT",
"DELETE"
],
answer: "PATCH"
},
{
id: 414,
question: "What is the object that you use to pull query string params?",
options: [
"res.query",
"res.params",
"req.query",
"req.params"
],
answer: "req.query"
}, 
{
id: 415,
question: "Given the variable List<String> strings, which of the following is valid?",
options: [
"strings.put(\"a\");",
"List.add(strings, \"a\");",
"strings[0] = \"a\";",
"strings.add(\"a\");"
],
answer: "strings.add(\"a\");"
},
{
id: 416,
question: "When is a method required to include a return statement?",
options: [
"When the method has a non-void return type",
"When the method contains more than one statement",
"Never",
"Always"
],
answer: "When the method has a non-void return type"
},
{
id: 417,
question: "What is the type of the class literal Foo.class?",
options: [
"Class<Foo>",
"Class",
"Class<?>",
"Class<Class>"
],
answer: "Class<Foo>"
},
{
id: 418,
question: "How would you declare and instantiate a variable, given the generic class Bag<T>?",
options: [
"Bag bag = new Bag();",
"Bag<T> bag = new Bag<T>();",
"Bag bag<T> = new Bag<T>();",
"Bag<T> bag = new Bag();"
],
answer: "Bag<T> bag = new Bag<T>();"
},
{
id: 419,
question: "What is the keyword used to transfer control to another part of the program?",
options: [
"catch",
"throw",
"try",
"finally"
],
answer: "throw"
},
{
id: 420,
question: "What indicates the end of a Java statement?",
options: [
"Both a semicolon and a newline",
"A newline",
"A double-slash ( // )",
"A semicolon ( ; )"
],
answer: "A semicolon ( ; )"
},
{
id: 421,
question: "Which of the following will initialize the array myVals to contain two values: 1 and 2?",
options: [
"int[] myVals = new int[2] {1, 2};",
"int[] myVals = {1, 2};",
"int[2] myVals = {1, 2};",
"int[] myVals = [1, 2];"
],
answer: "int[] myVals = {1, 2};"
},
{
id: 422,
question: "Given the following code: float f = 7.0f/2.0f; long l = 7L/2L; Which statement is true?",
options: [
"The values of f and l are equivalent",
"The attempt to assign l the result of 7L/2L will create an error",
"The value of f is less than the value of l",
"The value of f is greater than the value of l"
],
answer: "The value of f is greater than the value of l"
},
{
id: 423,
question: "Which of the following can be a valid exception constructor?",
options: [
"Exception(Object cause)",
"Exception(String message)",
"Exception(int cause)",
"Exception(String message, Object cause)"
],
answer: "Exception(String message)"
},
{
id: 424,
question: "Which of these classes is a checked exception?",
options: [
"ClassNotFoundException",
"NumberFormatException",
"ThreadDeath",
"NoClassDefFoundError"
],
answer: "ClassNotFoundException"
},
{
id: 425,
question: "Given the following code: String s1 = \"hi\"; String s2 = \"h\"; s2 += \"i\"; boolean b1 = s1 == s2; boolean b2 = s1.equals(s2); Which variable(s) is/are assured to be set to true?",
options: [
"Both b1 and b2",
"b1",
"Neither b1 nor b2",
"b2"
],
answer: "b2"
},
{
id: 426,
question: "Given a type parameter T, what would assign to T[] ts;?",
options: [
"ts = (T[]) new Object[SIZE];",
"Its impossible.",
"ts = new T[SIZE];",
"ts = new Object[SIZE];"
],
answer: "ts = (T[]) new Object[SIZE];"
},
{
id: 427,
question: "How would you declare a generic factory method that creates a new generic list with a given size?",
options: [
"public static List<T> <T> newList(int size)",
"<T> public static List<T> newList(int size)",
"public <T> static List<T> newList(int size)",
"public static <T> List<T> newList(int size)"
],
answer: "public static <T> List<T> newList(int size)"
},
{
id: 428,
question: "Which instances of this class are treated as unchecked exceptions?",
options: [
"Error",
"Throwable",
"Exception",
"IOException"
],
answer: "Error"
},
{
id: 429,
question: "In which of the following situations will the compiler generate an error?",
options: [
"Catching a checked exception that is not thrown in a try block",
"Mixing subclasses and superclasses in a throws clause",
"Not having at least one catch block after a try block",
"Downcasting an instance of Exception to an incorrect type"
],
answer: "Catching a checked exception that is not thrown in a try block"
},
{
id: 430,
question: "Select the correct statement for the given code based on Polymorphism in Java (Bike and Splendor example).",
options: [
"Compile time polymorphism",
"Encapsulation Runtime",
"Java Runtime Polymorphism",
"None of the above"
],
answer: "Compile time polymorphism"
},
{
id: 431,
question: "In the Running phase of a program, JVM executes the _______ generated by the compiler.",
options: [
"classcode",
"bytecode",
"plugin code",
"bitcode"
],
answer: "bytecode"
},
{
id: 432,
question: "What is the premise of equality for IdentityHashMap?",
options: [
"Name equality",
"Hashcode equality",
"Length equality",
"Reference equality"
],
answer: "Reference equality"
},
{
id: 433,
question: "If a class inherits from another class, it should ________.",
options: [
"Override or add the minimum to accomplish the derived class’s purpose",
"Override all the methods of its parent class",
"Make sure the result contains its base class",
"Make use of the parent class’s capabilities"
],
answer: "Override all the methods of its parent class"
},
{
id: 434,
question: "Find the output of the following program: byte x = 127; x++; x++; System.out.print(x);",
options: [
"-128",
"128",
"129",
"2"
],
answer: "-128"
},
{
id: 435,
question: "How many classes of the java.lang package are known as wrapper classes in Java?",
options: [
"6",
"5",
"8",
"3"
],
answer: "8"
},
{
id: 436,
question: "In which option can the static keyword NOT be applied?",
options: [
"variables",
"methods",
"blocks",
"nested classes",
"class"
],
answer: "class"
},
{
id: 437,
question: "What is the main use of the keyword \"this\"?",
options: [
"To invoke current class method (implicitly)",
"To return the current class instance from the method",
"To refer to the current class instance variable",
"All of the above"
],
answer: "All of the above"
},
{
id: 438,
question: "Predict the output: int i = 20; int j = 30; int k = j += i/5; System.out.println(i+\":\"+j+\":\"+k);",
options: [
"20:34:34",
"20:30:34",
"20:34:30",
"20:30:30"
],
answer: "20:34:34"
}, 
{
id: 439,
question: "What is the output of the following code snippet?\nlong choice = 2;\nswitch(choice) {\n case 1: System.out.print(\"Hello\"); break;\n case 2: System.out.print(\"Java\");\n default: System.out.print(\"Try Again\");\n}",
options: [
"JavaTry Again",
"Try Again",
"Compilation Error",
"Java"
],
answer: "JavaTry Again"
},
{
id: 440,
question: "What will be the output of the given Student/Example program where Student constructor is private?",
options: [
"111 Karan\n222 Aryan",
"111 \"Karan\"\n222 \"Aryan\"",
"111\nKaran\n222\nAryan",
"Error: constructor has private access"
],
answer: "Error: constructor has private access"
},
{
id: 441,
question: "Which option is correct about the ThreadSample example where run() is called directly?",
options: [
"12341234... infinite",
"Hello will be printed after both run() methods complete",
"It will give an error from try-catch block",
"None of the above"
],
answer: "Hello will be printed after both run() methods complete"
},
{
id: 442,
question: "Which are the two classes that have high-level streams for serializing and deserializing an object?",
options: [
"ObjectInputStream and ObjectStream",
"ObjectInputStream and ObjectOutputStream",
"InputStream and OutputStream",
"ObjectStream and OutputStream"
],
answer: "ObjectInputStream and ObjectOutputStream"
},
{
id: 443,
question: "What is the output of inserting \"Good \" at index 6 in \"Hello World\" using StringBuffer?",
options: [
"HelloGoodWorld",
"HellGoodoWorld",
"HellGood oWorld",
"Hello Good World"
],
answer: "Hello Good World"
},
{
id: 444,
question: "Which keyword cannot be used for a class declared as final?",
options: [
"abstract",
"extends",
"abstract and extends",
"None of the mentioned"
],
answer: "abstract"
},
{
id: 445,
question: "If other classes can access methods that should only be accessible within the utility class itself, what design issue is discovered?",
options: [
"Tight coupling",
"Low cohesion",
"High cohesion",
"Weak encapsulation"
],
answer: "Weak encapsulation"
},
{
id: 446,
question: "What is the output of the Vector program after calling removeAll(obj) and printing isEmpty()?",
options: [
"0",
"1",
"true",
"false"
],
answer: "true"
},
{
id: 447,
question: "What is the output of sorting the array initialized with values 5 to 1?",
options: [
"54321",
"12345",
"11111",
"15243"
],
answer: "12345"
},
{
id: 448,
question: "What is the output of printing TreeMap entrySet() with keys A, B, C and values 1, 2, 3?",
options: [
"[A, B, C]",
"[1, 2, 3]",
"{A=1, B=2, C=3}",
"[A=1, B=2, C=3]"
],
answer: "[A=1, B=2, C=3]"
},
{
id: 449,
question: "What is the output of the BitSet program after setting bits 0-4 and clearing bit 2?",
options: [
"{0, 1, 3, 4}",
"{0, 1, 2, 4}",
"{0, 1, 2, 3, 4}",
"{0, 0, 0, 3, 4}"
],
answer: "{0, 1, 3, 4}"
},
{
id: 450,
question: "What is the output after using Arrays.fill(array, 1, 4, 8) on array initialized from 5 to 1?",
options: [
"12885",
"12845",
"58881",
"54881"
],
answer: "58881"
}, 
{
id: 451,
question: "What is the output of the program after reversing and shuffling a LinkedList and iterating using the original iterator?",
options: [
"2 8 5 1",
"1 5 8 2",
"1 2 5 8",
"Any random order"
],
answer: "Any random order"
},
{
id: 452,
question: "What is the output of the program after reversing and then sorting a LinkedList?",
options: [
"2 8 5 1",
"1 5 8 2",
"1 2 5 8",
"2 1 8 5"
],
answer: "1 2 5 8"
},
{
id: 453,
question: "What is the output of appending two StringBuffer objects \"Hello\" and \"World\"?",
options: [
"Hello",
"World",
"Helloworld",
"HelloWorld"
],
answer: "HelloWorld"
},
{
id: 454,
question: "What is the output after executing s1.setCharAt(1,'x') on \"Hello\"?",
options: [
"xello",
"xxxxx",
"Hxllo",
"Hexlo"
],
answer: "Hxllo"
},
{
id: 455,
question: "What is the output of concatenating String s1 = \"one\" with \" two\"?",
options: [
"one",
"two",
"one two",
"compilation error"
],
answer: "one two"
},
{
id: 456,
question: "What is the output of the exception handling program with 1/0 inside try block?",
options: [
"Hello",
"World",
"HelloWorld",
"Hello World"
],
answer: "World"
},
{
id: 457,
question: "What is the correct sequence of steps for making a database connection?",
options: [
"1,2,3,4",
"1,3,4,2",
"2,1,3,4",
"4,1,2,3"
],
answer: "1,3,4,2"
},
{
id: 458,
question: "What does obj.available() print for a FileInputStream?",
options: [
"true",
"false",
"Number of bytes in the file",
"Number of characters in the file"
],
answer: "Number of bytes in the file"
},
{
id: 459,
question: "Which of these methods are used to read from a file?",
options: [
"get()",
"read()",
"scan()",
"readFileInput()"
],
answer: "read()"
},
{
id: 460,
question: "Which of the following allows non-repeatable read in JDBC Connection?",
options: [
"TRANSACTION_READ_UNCOMMITTED",
"TRANSACTION_READ_COMMITTED",
"TRANSACTION_SERIALIZABLE",
"TRANSACTION_REPEATABLE_READ"
],
answer: "TRANSACTION_REPEATABLE_READ"
}, 
{
id: 461,
question: "After you initialize a new Git repository and create a file named git-quiz.html, which of the following commands will NOT work if issued?",
options: [
"git add git-quiz.html",
"git status",
"git add .",
"git commit -m \"git quiz web file added\""
],
answer: "git commit -m \"git quiz web file added\""
},
{
id: 462,
question: "Which of the following are the benefits of using Gradle over Maven? Select all that apply.",
options: [
"Gradle supports more languages than Maven.",
"Gradle incorporates Maven features as well as additional functionality.",
"Gradle builds are successful more often than Maven builds.",
"A Gradle build is 1000 times faster than a Maven build."
],
answer: ["Gradle supports more languages than Maven.", "Gradle incorporates Maven features as well as additional functionality."]
},
{
id: 463,
question: "State whether the statement is true or false. Adopting Agile is necessary prior to embracing DevOps practices.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 464,
question: "What is continuous testing?",
options: [
"Testing continuously for 24 hours",
"Manually testing each build, end-to-end",
"Automated testing",
"Automated testing on each continuous deployment"
],
answer: "Automated testing on each continuous deployment"
},
{
id: 465,
question: "Adopting DevOps requires planning that spans which of the following? Select all that apply.",
options: [
"People",
"Efforts",
"Process",
"Tools/Technology"
],
answer: ["People", "Process", "Tools/Technology"]
},
{
id: 466,
question: "Which DevOps principle focuses on product and service thinking?",
options: [
"Customer-centric action",
"Continuous improvement",
"Create with the end in mind",
"Automate everything you can"
],
answer: "Create with the end in mind"
},
{
id: 467,
question: "Shift-left concept refers to moving everything to the earlier phase in the ________ cycle.",
options: [
"Requirement",
"Development",
"Design",
"Testing"
],
answer: "Development"
},
{
id: 468,
question: "In order to minimize risks to the business within DevOps, what is the main goal of version control?",
options: [
"Ensure the ability to alert when configuration changes from the desired state.",
"Ensure the ability to re-create the previous state of the test environment.",
"Ensure the ability to re-create the production environment and build processes.",
"Ensure the ability to share the source code between different developers teams."
],
answer: "Ensure the ability to re-create the previous state of the test environment."
},
{
id: 469,
question: "What is a continuous build? Select all that apply.",
options: [
"A build that runs non-stop, over and over again.",
"A build that has not failed in 10 continuous attempts.",
"A build that is executed every hour/day by a continuous integration server.",
"A build that is executed on every commit by a continuous integration server."
],
answer: [
"A build that is executed every hour/day by a continuous integration server.",
"A build that is executed on every commit by a continuous integration server."
]
},
{
id: 470,
question: "DevOps is primarily about:",
options: [
"Tools and their usage",
"Processes and adherence",
"Governance and audit processes",
"Tools, processes, and culture"
],
answer: "Tools, processes, and culture"
},
{
id: 471,
question: "Which statement best describes the relationship between DevOps and Continuous Delivery?",
options: [
"DevOps and Continuous Delivery are the same thing.",
"DevOps and Continuous Delivery share a background in Agile methods and LEAN thinking.",
"DevOps and Continuous Delivery share common processes.",
"DevOps and Continuous Delivery are not related and are mutually exclusive."
],
answer: "DevOps and Continuous Delivery share a background in Agile methods and LEAN thinking."
},
{
id: 472,
question: "How does a DevOps organization act in principle when it comes to financing its work?",
options: [
"It finances special projects to serve its clients.",
"It finances products and services to serve its clients.",
"It finances teams in matrix organizations and these teams are responsible for handling their own budgets.",
"It finances development and operations teams separately, so they take care of their own business."
],
answer: "It finances products and services to serve its clients."
},
{
id: 473,
question: "In Kubernetes, a node is:",
options: [
"A worker machine",
"A tool for starting a kubernetes cluster on a local machine",
"A machine that coordinates the scheduling and management of application containers on the cluster",
"A virtual machine"
],
answer: "A worker machine"
},
{
id: 474,
question: "GIT can be integrated with Jenkins.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 475,
question: "POM in Maven stands for ________.",
options: [
"Project Object Model",
"Process Object Model",
"Project Object Method",
"All of the above"
],
answer: "Project Object Model"
},
{
id: 476,
question: "What is a widely used reusable asset to reinforce information security of deliverables from your DevOps team?",
options: [
"Data storage systems",
"Handling the logging of sensitive client information",
"Data transfer between clients and software",
"All of the above"
],
answer: "All of the above"
},
{
id: 477,
question: "DevOps is NOT a set of ______ steps.",
options: [
"Development",
"Fixed",
"Testing",
"Design"
],
answer: "Fixed"
},
{
id: 478,
question: "What is the sequence in which Maven looks for the resources?",
options: [
"Local -> Remote -> Maven Central",
"Remote -> Maven Central -> Local",
"Remote -> Local -> Maven Central",
"Maven Central -> Local -> Remote"
],
answer: "Local -> Remote -> Maven Central"
},
{
id: 479,
question: "Why is it recommended that production and development environments should be similar?",
options: [
"It is easier to manage for the ops team.",
"It improves the accuracy of testing, eases the task of deployment of software, and reduces chances of major problems when deploying software into production.",
"People can fix defects directly in the production environment.",
"Development environments are cheaper, hence it makes sense to make the production environment similar (and cheaper) to the development environments."
],
answer: "It improves the accuracy of testing, eases the task of deployment of software, and reduces chances of major problems when deploying software into production."
},
{
id: 480,
question: "DevOps can be implemented in any _________.",
options: [
"Process",
"Environment",
"Defects",
"None of the above"
],
answer: "Environment"
},
{
id: 481,
question: "What is continuous deployment? Select all that apply.",
options: [
"Deployment on every code push/commit",
"Deployment every hour/day",
"Local deployment on the developer's laptop",
"Deployment on IBM Cloud"
],
answer: ["Deployment on every code push/commit"]
},
{
id: 482,
question: "In DevOps, one of the significant ROI areas is:",
options: [
"Zero defects",
"Faster time to value",
"Less feedback",
"Less customer experience"
],
answer: "Faster time to value"
},
{
id: 483,
question: "How do you remove local (untracked) files and directories from the current Git working tree?",
options: [
"Only i (git clean -f)",
"Only ii and iii",
"Only i and iv",
"All of the above"
],
answer: "Only i (git clean -f)"
}, 
{
id: 484,
question: "Which event occurs when the user clicks on the HTML element?",
options: [
"onmouseover",
"onchange",
"onmouseclick",
"onclick"
],
answer: "onclick"
},
{
id: 485,
question: "The correct HTML tag to left align the content inside a table cell is:",
options: [
"<td align=\"left\">",
"<td align=\"right\">",
"<td leftAlign>",
"<table align=\"left\">"
],
answer: "<td align=\"left\">"
},
{
id: 486,
question: "What is the output of the Java Code Snippet using StringJoiner with delimiter '-' and prefix '(' and suffix ')' after adding A, B, C?",
options: [
"(A-B-C)",
"(A)-(B)-(C)",
"(-A-)(-B-)(-C-)"
],
answer: "(A-B-C)"
},
{
id: 487,
question: "What are the Different Modes of Autowiring?",
options: [
"byName, byType, constructor, autodetect",
"byName, byType, constructor, autocorrect",
"byName, byContent, constructor, autodetect",
"byName, byContent, setter, autodetect"
],
answer: "byName, byType, constructor, autodetect"
},
{
id: 488,
question: "Which Annotation is used to refer to Pointcuts?",
options: [
"@PointCut",
"@PointCutExecution",
"@PointCutBefore"
],
answer: "@PointCut"
},
{
id: 489,
question: "Which of the below API Calls provides you the security information?",
options: [
"Only HttpServletRequest.isUserInRole()",
"Only HttpServletRequest.getUserPrincipal()",
"Both HttpServletRequest.isUserInRole() and HttpServletRequest.getUserPrincipal()"
],
answer: "Both HttpServletRequest.isUserInRole() and HttpServletRequest.getUserPrincipal()"
},
{
id: 490,
question: "What does it mean by publishing a REST service in Spring?",
options: [
"Publishing an application's data as JSON over a REST service",
"Publishing an application's data as XML over a REST service",
"Sharing Database within two microservices using Spring Data Access Object (DAO)",
"All of the above"
],
answer: [
"Publishing an application's data as JSON over a REST service",
"Publishing an application's data as XML over a REST service"
]
},
{
id: 491,
question: "Which element is used to restrict the access to a particular URL within Spring Security?",
options: [
"restrict-url",
"intercept-url",
"intercept-restrict"
],
answer: "intercept-url"
},
{
id: 492,
question: "What is used to dispatch requests to the WEB Application?",
options: [
"DispatcherServlet",
"ViewHandler",
"ViewResolver"
],
answer: "DispatcherServlet"
},
{
id: 493,
question: "Which annotation is used to create Primary KEY : Foreign KEY relation between two tables?",
options: [
"ForeignKey",
"JoinedKey",
"JoinColumn"
],
answer: "JoinColumn"
},
{
id: 494,
question: "You can only use Hibernate in ORM in Spring Boot Applications.",
options: [
"TRUE",
"FALSE"
],
answer: "FALSE"
},
{
id: 495,
question: "In your Data Access Object (DAO) method, you neither need to surround your code with a try/catch block nor declare throwing an exception in the method signature.",
options: [
"TRUE",
"FALSE"
],
answer: "FALSE"
},
{
id: 496,
question: "Which annotation is used as a substitute for the initialization method?",
options: [
"@PostConstruct",
"@PreDestroy",
"@PreConstruct"
],
answer: "@PostConstruct"
},
{
id: 497,
question: "A logger location where logging information is sent is called:",
options: [
"appender",
"logger",
"component"
],
answer: "appender"
},
{
id: 498,
question: "By default, a bean is lazily loaded in Spring.",
options: [
"True",
"False"
],
answer: "False"
},
{
id: 499,
question: "Sharding a MongoDB database across many server instances can be achieved with:",
options: [
"LAN",
"SAN",
"MAN"
],
answer: "LAN"
},
{
id: 500,
question: "In MongoDB, which operation often uses an index and has better performance than those that do not use an index?",
options: [
"SELECT",
"UPDATE",
"DELETE",
"SORT"
],
answer: "SORT"
},
{
id: 501,
question: "Which one is NOT a Spring Data MongoDB annotation?",
options: [
"@Document",
"@Field",
"@Entity",
"@Query"
],
answer: "@Entity"
},
{
id: 502,
question: "What type of management does 'Capped Collections' provide for inserted documents in MongoDB?",
options: [
"FIFO",
"LIFO",
"LRU",
"MRU"
],
answer: "FIFO"
},
{
id: 503,
question: "Identify the incorrect statement on MongoDB.",
options: [
"Secondary Indices are not available in MongoDB.",
"MongoDB supports search by field, range queries and regular expression matches.",
"MongoDB can store the business subject in the minimal number of documents."
],
answer: "Secondary Indices are not available in MongoDB."
},
{
id: 504,
question: "In MongoDB, which of the following methods return one document?",
options: [
"findOne()",
"findOne1()",
"selectOne()"
],
answer: "findOne()"
},
{
id: 505,
question: "Redux is an exclusive feature of the React store?",
options: [
"TRUE",
"FALSE"
],
answer: "FALSE"
},
{
id: 506,
question: "Identify the correct ES6 statement.",
options: [
"Only i and ii",
"Only iv",
"Only i, ii and iv",
"Only ii and iv"
],
answer: "Only ii and iv"
},
{
id: 507,
question: "You can also use an ES6 class to define a component in React.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 508,
question: "Which of the below methods are NOT a part of React Component’s lifecycle?",
options: [
"Initial Rendering",
"Render / Re-Render",
"unMounting",
"Remote URL calls"
],
answer: "Remote URL calls"
},
{
id: 509,
question: "Identify the correct statement in MongoDB.",
options: [
"Queries specify criteria, or conditions, which identify the documents that MongoDB returns to the clients.",
"Write Operations, or queries, retrieve data stored in the database.",
"The selection limits the amount of data that MongoDB returns to the client over the network."
],
answer: "Queries specify criteria, or conditions, which identify the documents that MongoDB returns to the clients."
}, 
{
id: 510,
question: "Identify the incorrect statement on MongoDB.",
options: [
"Secondary indices are not available in MongoDB.",
"MongoDB supports search by field, range queries, and regular expression searches.",
"MongoDB can store the business subject in the minimal number of documents."
],
answer: "Secondary indices are not available in MongoDB."
},
{
id: 511,
question: "Which of the following is not a callback method of React?",
options: [
"render()",
"componentDidMount()",
"componentFailedToMount()",
"componentWillUnmount()"
],
answer: "componentFailedToMount()"
},
{
id: 512,
question: "How can we render JSX in the browser?",
options: [
"Only Using Babel and Using Typescript",
"Only Using Redux",
"Using Babel, Typescript and Redux",
"Only Using Flux and Redux"
],
answer: "Only Using Babel and Using Typescript"
},
{
id: 513,
question: "What is the command line tool introduced for the JS engine in Java 8?",
options: [
"jjs",
"jss",
"jfs",
"jbd"
],
answer: "jjs"
},
{
id: 514,
question: "Which of the following is the immutable Java List static factory method?",
options: [
"List.of",
"List.immutable",
"List.create"
],
answer: "List.of"
},
{
id: 515,
question: "Which of the following statements are true about Java?",
options: [
"Only i",
"Only iv",
"i and iv",
"ii and iii"
],
answer: "ii and iii"
},
{
id: 516,
question: "Which Java Class has natural sorting implemented?",
options: [
"LinkedHashSet",
"TreeSet",
"HashSet"
],
answer: "TreeSet"
},
{
id: 517,
question: "Is the following a valid Java code snippet using Optional.of and isPresent()?",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 518,
question: "Service discovery tools help by reducing the problem of how processes and services in a cluster can find and talk to one another.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 519,
question: "In Java Optional.ofNullable() method, it returns a non-empty Optional if the given object has a value, otherwise it returns an empty Optional.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 520,
question: "Which of the following types of Java methods cannot be type parameterized?",
options: [
"FINAL methods",
"Overriding methods",
"Overloading methods"
],
answer: "Overriding methods"
},
{
id: 521,
question: "Which of the following statements is true about microservices architecture?",
options: [
"Only i",
"Only ii",
"Only ii and iv",
"All of the above"
],
answer: "All of the above"
},
{
id: 522,
question: "Load Balancing improves the distribution of workloads across multiple computing resources.",
options: [
"True",
"False"
],
answer: "True"
},
{
id: 523,
question: "What are the core operations of DevOps with applications development and infrastructure?",
options: [
"Provisioning, Configuration and Orchestration",
"Code Building, Coverage and Unit Testing",
"Packaging and Deployment",
"All of the above"
],
answer: "All of the above"
},
{
id: 524,
question: "Which CSS property is used to change the font of an element?",
options: [
"font",
"font-family",
"font-style",
"font-weight"
],
answer: "font-family"
},
{
id: 525,
question: "The Bootstrap grid system is based on how many columns?",
options: [
"12",
"3",
"6",
"9"
],
answer: "12"
},
{
id: 526,
question: "After you initialize a new GIT repository and create a file named git-quiz.html, which of the following commands will NOT work if issued?",
options: [
"git add git-quiz.html",
"git status",
"git add",
"git commit -m \"git quiz web file added\""
],
answer: "git commit -m \"git quiz web file added\""
},
{
id: 527,
question: "Choose the correct HTML element to define important text.",
options: [
"<strong>",
"<important>",
"<b>",
"<pre>"
],
answer: "<strong>"
},
{
id: 528,
question: "Which is the correct CSS Syntax?",
options: [
"body color-black",
"{body color-black}",
"body {color:black;}",
"{body;color;black}"
],
answer: "body {color:black;}"
},
{
id: 529,
question: "Which Bootstrap class adds zebra-stripes to a table?",
options: [
"table-bordered",
"table-zebra",
"table-striped",
"even and odd"
],
answer: "table-striped"
},
{
id: 530,
question: "Which JavaScript method is like the mathematical 'for all' quantifier?",
options: [
"every()",
"some()",
"all()",
"forall()"
],
answer: "every()"
},
{
id: 531,
question: "How can you detect the client’s browser name in JavaScript?",
options: [
"class.navName",
"navigator.appName",
"browser.name",
"window.browser"
],
answer: "navigator.appName"
},
{
id: 532,
question: "Which of the following methods CANNOT be used to add array elements in JavaScript?",
options: [
"push()",
"splice()",
"shift()",
"All can be used."
],
answer: "All can be used."
},
{
id: 533,
question: "In JavaScript, which is a comma separated list of colon separated name value pairs enclosed within curly braces?",
options: [
"An object prototype",
"A map object",
"A class",
"An object literal"
],
answer: "An object literal"
},
{
id: 534,
question: "In JavaScript, what is observed in the statement if (!a[i]) continue?",
options: [
"i and ii only",
"ii and iii only",
"i and iii only",
"i, ii and iii"
],
answer: "i, ii and iii"
},
{
id: 535,
question: "Which method is the ultimate element selection method in client-side JavaScript?",
options: [
"querySelectAll()",
"querySelector()",
"querySelect()",
"querySelectorAll()"
],
answer: "querySelectorAll()"
},
{
id: 536,
question: "To use the Angular HttpClient component, you must import which module?",
options: [
"HttpClientModule",
"HttpModule",
"Http"
],
answer: "HttpClientModule"
},
{
id: 537,
question: "In Angular, one can create local HTML reference using a variable which starts with which character?",
options: [
"@",
"#",
"\"",
"&"
],
answer: "#"
},
{
id: 538,
question: "Which Angular service can be injected in your component for dynamic navigation?",
options: [
"Routing",
"RouterService",
"RoutingService",
"Router"
],
answer: "Router"
},
{
id: 539,
question: "In Angular, which wild card route path is used to define a 404 route?",
options: [
"**",
"/",
"##",
"default"
],
answer: "**"
},
  {
    "id": 1,
    "question": "Let has block scope?",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 2,
    "question": "what does <aside> tag in html do?",
    "options": [
      "aside the content of the page",
      "Defines tangential content like sidebars",
      "Wraps the main article content",
      "Provides footer metadata"
    ],
    "answer": "aside the content of the page"
  },
  {
    "id": 3,
    "question": "Which class in Bootstrap is used to provide a responsive fixed width container?",
    "options": [
      ".Container",
      ".container",
      ".container-fixed",
      ".container-fluid"
    ],
    "answer": ".Container"
  },
  {
    "id": 4,
    "question": "Which is the correct syntax of creating a standard navigation tab?",
    "options": [
      "<ul class=\"nav nav-tabs\">",
      "<ul class=\"navbar tabs\">",
      "<nav class=\"nav-tabs\">",
      "<tabs class=\"nav\">"
    ],
    "answer": "<ul class=\"nav nav-tabs\">"
  },
  {
    "id": 5,
    "question": "In Bootstrap, the class .img-circle is used to turn an image into a circle.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 6,
    "question": "In Java, which class type supports sequential and parallel processing of data?",
    "options": [
      "Streams",
      "Collections",
      "Arrays",
      "Threads"
    ],
    "answer": "Streams"
  },
  {
    "id": 7,
    "question": "What is the replacement for PermGen space in Java 8?",
    "options": [
      "Metaspace",
      "OldGen",
      "CodeCache",
      "DirectBuffer"
    ],
    "answer": "Metaspace"
  },
  {
    "id": 8,
    "question": "Java Functional Interface can be defined as _____.",
    "options": [
      "Single Abstract Method",
      "Multiple Abstract Methods",
      "No Methods",
      "Interface with default class"
    ],
    "answer": "Single Abstract Method"
  },
  {
    "id": 9,
    "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
    "options": [
      "Head section",
      "Body section",
      "Before </html>",
      "In a <script> tag"
    ],
    "answer": "Head section"
  },
  {
    "id": 10,
    "question": "Which represents the correct way to implement a functional interface in Java?",
    "options": [
      "interface MyFunctionalInterface { }",
      "class MyFunctionalInterface { }",
      "new MyFunctionalInterface();",
      "interface MyFunctionalInterface();"
    ],
    "answer": "interface MyFunctionalInterface { }"
  },
  {
    "id": 11,
    "question": "In javascript const declares block scoped?",
    "options": [
      "true",
      "false",
      "only in strict mode",
      "only in modules"
    ],
    "answer": "true"
  },
  {
    "id": 12,
    "question": "What is React in MVC?",
    "options": [
      "Controller",
      "Model",
      "View",
      "Router"
    ],
    "answer": "Controller"
  },
  {
    "id": 13,
    "question": "How can you access the state of a component from inside a member function in React?",
    "options": [
      "this.getState()",
      "this.state()",
      "state.get()",
      "this.readState()"
    ],
    "answer": "this.getState()"
  },
  {
    "id": 14,
    "question": "Which API is a MUST for every React component?",
    "options": [
      "renderComponent",
      "renderToString",
      "componentDidMount",
      "getInitialState"
    ],
    "answer": "renderComponent"
  },
  {
    "id": 15,
    "question": "MongoDB database can be accessed using Spring Data.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 16,
    "question": "Which stands true for Spring beans?",
    "options": [
      "All of the Above",
      "Only Singleton scope is allowed",
      "Beans cannot be injected",
      "Beans must be final"
    ],
    "answer": "All of the Above"
  },
  {
    "id": 17,
    "question": "What is true about list collection configuration elements?",
    "options": [
      "wiring list of values and allowing duplicates.",
      "No duplicates allowed",
      "Only primitive values allowed",
      "Order is not preserved"
    ],
    "answer": "wiring list of values and allowing duplicates."
  },
  {
    "id": 18,
    "question": "What is default scope of bean in Spring framework?",
    "options": ["Singleton", "Prototype", "Request", "Session"],
    "answer": "Singleton"
  },
  {
    "id": 19,
    "question": "REST service endpoint comprises of which address?",
    "options": [
      "Starts with http:// and may end with ?",
      "Always starts with ftp://",
      "Must end with /api",
      "Only https:// is valid"
    ],
    "answer": "Starts with http:// and may end with ?"
  },
  {
    "id": 20,
    "question": "What tag is used to get a bulleted list?",
    "options": ["<ul>", "<ol>", "<li>", "<list>"],
    "answer": "<ul>"
  },
  {
    "id": 21,
    "question": "What tag is used to get an ordered list?",
    "options": ["<ol>", "<ul>", "<li>", "<order>"],
    "answer": "<ol>"
  },
  {
    "id": 22,
    "question": "React is service side rendering.",
    "options": ["True", "False", "not sure"],
    "answer": "not sure"
  },
  {
    "id": 23,
    "question": "What are the different types of autowire?",
    "options": ["bytype", "byname", "constructor", "autodetect"],
    "answer": "bytype"
  },
  {
    "id": 24,
    "question": "Which command will NOT work after initializing git repository?",
    "options": [
      "git add git-quiz.html",
      "git status",
      "git add .",
      "git commit -m \"git quiz web file added\""
    ],
    "answer": "git commit -m \"git quiz web file added\""
  },
  {
    "id": 25,
    "question": "Which event occurs when the user clicks on the HTML element?",
    "options": ["onmouseover", "onchange", "onmouseclick", "onclick"],
    "answer": "onclick"
  },
  {
    "id": 26,
    "question": "Which API calls provide security information?",
    "options": ["Only 1", "Only 2", "Both i and ii"],
    "answer": "Both i and ii"
  },
  {
    "id": 27,
    "question": "What is used to dispatch requests to the WEB Application?",
    "options": ["DispatchherServlet", "ViewHandler", "ViewResolver"],
    "answer": "DispatchherServlet"
  },
  {
    "id": 28,
    "question": "By default, a bean is lazily loaded in Spring.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "id": 29,
    "question": "Which one is NOT a spring data MongoDB annotation?",
    "options": ["@Document", "@Field", "@Entity", "@Query"],
    "answer": "@Entity"
  },
  {
    "id": 30,
    "question": "Service discovery tools help processes communicate in cluster.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 31,
    "question": "Angular local HTML reference variable starts with?",
    "options": ["@", "#", "“", "&"],
    "answer": "#"
  },
  {
    "id": 32,
    "question": "How to add search bar using bootstrap?",
    "options": [
      "<class= \"gly.. Gly..\">",
      "<input class=\"form-control\" type=\"search\">",
      "<div class=\"input-group\">",
      "<form class=\"d-flex\">"
    ],
    "answer": "<class= \"gly.. Gly..\">"
  },
  {
    "id": 33,
    "question": "React is two-way binding?",
    "options": ["True", "False", "Longest option"],
    "answer": "Longest option"
  },
  {
    "id": 34,
    "question": "Line can be break using?",
    "options": [
      "<br>",
      "<lb>",
      "<break>",
      "<newline>"
    ],
    "answer": "<br>"
  },
  {
    "id": 35,
    "question": "Overriding can be done in?",
    "options": ["polymorphism", "Abstraction", "Inheritence", "Encapsulation"],
    "answer": "polymorphism"
  },
  {
    "id": 36,
    "question": "What theorem or principal MongoDB follows?",
    "options": [
      "capped-->opn D",
      "ACID strictly",
      "PACELC",
      "BASE only"
    ],
    "answer": "capped-->opn D"
  },
  {
    "id": 37,
    "question": "Method to remove single item from MongoDB collection?",
    "options": [
      "deleteOne()",
      "removeOne()",
      "delete()",
      "dropOne()"
    ],
    "answer": "deleteOne()"
  },
  {
    "id": 38,
    "question": "Angular service for dynamic mode navigation?",
    "options": ["Routing", "RouterService", "RoutingService", "Router"],
    "answer": "Router"
  },
  {
    "id": 39,
    "question": "Method used to add/remove items in JavaScript?",
    "options": [
      "splice()",
      "slice()",
      "pushpop()",
      "modify()"
    ],
    "answer": "splice()"
  },
  {
    "id": 40,
    "question": "JavaScript method like mathematical 'for all' quantifier?",
    "options": ["every()", "some()", "all()", "forall()"],
    "answer": "every()"
  },
  {
    "id": 41,
    "question": "Command line tool introduced for JS engine in Java 8?",
    "options": ["jjs", "jss", "jfs", "jbd"],
    "answer": "jjs"
  },
  {
    "id": 42,
    "question": "MongoDB method that returns one document?",
    "options": ["findOne()", "findOne1()", "selectOne()"],
    "answer": "findOne()"
  },
  {
    "id": 43,
    "question": "Output of Java StringJoiner snippet?",
    "options": ["(A-B-C)", "(A)-(B)-(C)", "(-A-)(-B-)(-C-)"],
    "answer": "(A-B-C)"
  },
  {
    "id": 44,
    "question": "Media query applicable for 768px?",
    "options": [
      "@media only screen and (min-width: 1140px){}",
      "@media only screen and (min-width: 641px){}",
      "@media only screen and (max-width: 1140px){}"
    ],
    "answer": "@media only screen and (min-width: 641px){}"
  },
  {
    "id": 45,
    "question": "Which rule allows users to import style rules from other style sheets?",
    "options": ["@media", "@important", "@import", "@style"],
    "answer": "@import"
  },
  {
    "id": 46,
    "question": "Which class indicates a dropdown menu?",
    "options": [".dropdown-list", ".select", ".dropdown"],
    "answer": ".dropdown"
  },
  {
    "id": 47,
    "question": "Relationship between JavaScript and ECMAScript?",
    "options": [
      "ECMAScript is a standard that JavaScript implements.",
      "They are different terms for the same thing.",
      "JavaScript is a standard that ECMAScript implements.",
      "JavaScript is an old term for what is now called ECMAScript."
    ],
    "answer": "ECMAScript is a standard that JavaScript implements."
  },
  {
    "id": 48,
    "question": "Syntax for variable number of arguments in JavaScript?",
    "options": [
      "function([]numbers) { }",
      "function(*numbers) { }",
      "function(...numbers) { }",
      "function(numbers[]) { }"
    ],
    "answer": "function(...numbers) { }"
  },
  {
    "id": 49,
    "question": "React form main action attribute?",
    "options": ["onSubmit", "onChange", "onComplete"],
    "answer": "onSubmit"
  },
  {
    "id": 50,
    "question": "Behavior shared between components using?",
    "options": ["propTypes", "state", "mixins", "props"],
    "answer": "mixins"
  },
  {
    "id": 51,
    "question": "Function that creates React components?",
    "options": [
      "React.component.extend",
      "React.createComponent",
      "React.renderComponent",
      "React.createClass"
    ],
    "answer": "React.createClass"
  },
  {
    "id": 52,
    "question": "Correct annotation among transaction variants?",
    "options": ["transaction", "transactions", "transactional"],
    "answer": "transaction"
  },
  {
    "id": 53,
    "question": "Annotation to indicate minimum 2 characters?",
    "options": ["@NotNull", "@Size", "@MaxSize", "@size"],
    "answer": "@Size"
  },
  {
    "id": 54,
    "question": "Views not resolved by InternalResourceViewResolver?",
    "options": ["redirect", "redirect:prefix", "redirect:suffix", "all of the mentioned"],
    "answer": "redirect"
  },
  {
    "id": 55,
    "question": "Alternative way to resolve locales?",
    "options": [
      "AcceptHeaderLocale",
      "AcceptHeader",
      "AcceptHeaderLocaleResolver",
      "SessionLocaleResolver"
    ],
    "answer": "SessionLocaleResolver"
  },
  {
    "id": 56,
    "question": "General-purpose class to render response using marshaller?",
    "options": ["MarshallingView", "Marshaling", "View", "All of the mentioned"],
    "answer": "MarshallingView"
  },
  {
    "id": 57,
    "question": "Spring class for result set parsing and merging rows?",
    "options": ["ResultSetExtractor", "RowMapper", "RowCallbackHandler", "ResultSetMapper"],
    "answer": "RowMapper"
  },
  {
    "id": 58,
    "question": "Class used to call Stored Procedures in Spring?",
    "options": ["SPHelper", "JdbcTemplateCall", "JdbcTemplate", "SimpleJdbcCall"],
    "answer": "SimpleJdbcCall"
  },
  {
    "id": 59,
    "question": "By default a bean is eagerly loaded.",
    "options": ["False", "True"],
    "answer": "True"
  },
  {
    "id": 60,
    "question": "By default a bean is lazily loaded.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "id": 61,
    "question": "How to handle shutdown of IoC containers?",
    "options": ["Using shutdownHook()", "Using shutdownHandler()", "Using registerHook()", "Using registerShutdownHook()"],
    "answer": "Using registerShutdownHook()"
  },
  {
    "id": 62,
    "question": "DEVOPS IS SUITABLE FOR STARTUP COMPANIES, SMALL COMPANIES.",
    "options": [
      "True",
      "False",
      "Only for large enterprises",
      "Only for on-prem systems"
    ],
    "answer": "True"
  },
  {
    "id": 63,
    "question": "Option A mentioned in learning Angular/React?",
    "options": [
      "/Actuator",
      "/Health",
      "/Metrics",
      "/Info"
    ],
    "answer": "/Actuator"
  },
  {
    "id": 64,
    "question": "Option A mentioned in learning Angular/React?",
    "options": [
      "http:/",
      "https:/",
      "file:/",
      "ws:/"
    ],
    "answer": "http:/"
  },
  {
    "id": 65,
    "question": "Slideshow in html?",
    "options": [".carousel (bootstrap)", ".mySlides(css)"],
    "answer": ".carousel (bootstrap)"
  },










  {
    "id": 1,
    "question": "We need to tell AngularJS what part of our HTML page contains the AngularJS app. This is done by adding which attribute to the root HTML element?",
    "options": ["ng-app", "g-app", "js-app", "ng-ary"],
    "answer": "ng-app"
  },
  {
    "id": 2,
    "question": "AngularJS can show or hide HTML depending on the state of data in the model using which directives?",
    "options": ["ng-show, ng-hidden", "ng-show, ng-hide", "ng-hide, ng-visible", "ng-shows, ng-hides"],
    "answer": "ng-show, ng-hide"
  },
  {
    "id": 3,
    "question": "EventEmitter class interface basically encompasses two methods that can be used to trigger custom events and listen to events.",
    "options": ["emit()", "subscribe()", "emit() and subscribe()", "listen()"],
    "answer": "emit() and subscribe()"
  },
  {
    "id": 4,
    "question": "Which directive substitutes the normal href property and makes it easier to work with route links in Angular?",
    "options": ["RouterLinks", "RouterLinking", "RouterLink", "RouterLing"],
    "answer": "RouterLink"
  },
  {
    "id": 5,
    "question": "The main components of Routing are ______.",
    "options": ["RouterObject", "RouterOutlet", "RouterState", "RouterLink"],
    "answer": ["RouterOutlet","RouterObject","RouterLink"], multi:"true"
  },
  {
    "id": 6,
    "question": "Route ______ allows us to pass values in our URL to our component so we can dynamically change our view content.",
    "options": ["pipes", "modules", "variables", "parameters"],
    "answer": "parameters"
  },
  {
    "id": 7,
    "question": "To use observables, Angular uses a third-party library called ______.",
    "options": ["ng2-bootstrap", "angular-cli", "numeral", "Reactive Extensions (RxJS)"],
    "answer": "Reactive Extensions (RxJS)"
  },
  {
    "id": 8,
    "question": "Observables help you manage ______ data.",
    "options": ["synchronous", "asynchronous", "both synchronous and asynchronous", "none of the above"],
    "answer": "asynchronous"
  },
  {
    "id": 9,
    "question": "We subscribe to the observable using which method?",
    "options": ["subscribe()", "watch()", "listen()", "observe()"],
    "answer": "subscribe()"
  },
  {
    "id": 10,
    "question": "A promise represents the final result of an ______ operation.",
    "options": ["asynchronous", "synchronous"],
    "answer": "asynchronous"
  },
  {
    "id": 11,
    "question": "The promise becomes ______ after resolving or rejecting.",
    "options": ["mutable", "ignored", "immutable", "recurring"],
    "answer": "immutable"
  },
  {
    "id": 12,
    "question": "Which of the following is not a built-in pipe in Angular?",
    "options": ["DatePipe", "CurrencyPipe", "DataPipe", "PercentPipe"],
    "answer": "DataPipe"
  },
  {
    "id": 13,
    "question": "If you chain multiple pipes together, they are executed ______.",
    "options": ["in parallel", "LIFO order", "in the order specified", "none of the above"],
    "answer": "in the order specified"
  },
  {
    "id": 14,
    "question": "The ______ filter waits for a promise and returns the most recent value received.",
    "options": ["sync", "async", "promise", "subscribe"],
    "answer": "async"
  },
  {
    "id": 15,
    "question": "The ______ decorator allows us to define the pipe name globally for templates.",
    "options": ["@PipeName", "@pipeDeco", "@Pipe", "@isPipe"],
    "answer": "@Pipe"
  },
  {
    "id": 16,
    "question": "Data bindings are applied as ______ or as special sequences of characters in strings.",
    "options": ["expressions", "attributes of HTML elements", "elements itself", "none"],
    "answer": "attributes of HTML elements"
  },
  {
    "id": 17,
    "question": "A data binding has these four parts:",
    "options": [
      "host element, curly brackets, target, expression",
      "host element, square brackets, target, evaluation",
      "host element, square brackets, target, expression",
      "host element, parentheses, target, expression"
    ],
    "answer": "host element, square brackets, target, expression"
  },
  {
    "id": 18,
    "question": "Attribute binding is similar to property binding but it is tied to the ______ rather than the DOM property.",
    "options": ["Page attribute", "DOM attribute", "Root attribute", "HTML attribute"],
    "answer": "DOM attribute"
  },
  {
    "id": 19,
    "question": "To make your application ready for animations you must include the AngularJS Animate library and then refer it to ______ module.",
    "options": ["ng-repeat", "ngAnimate", "ngAnimation", "None"],
    "answer": "ngAnimate"
  },
  {
    "id": 20,
    "question": "Using the ______ animation function, the parent animation can allow the child animation to run.",
    "options": ["animateChild", "childAnimate", "animateInner", "innerChild"],
    "answer": "animateChild"
  },
  {
    "id": 21,
    "question": "Animations are fired using animation property bindings which are prefixed with ______ symbol.",
    "options": ["&", "#", "@", "%"],
    "answer": "@"
  },
  {
    "id": 22,
    "question": "______ is an animation-specific function used inside Angular animation DSL.",
    "options": ["useAnimation", "reuseAnimation", "childAnimate", "all of the above"],
    "answer": "useAnimation"
  },
  {
    "id": 23,
    "question": "It is always possible to make use of animation input parameters by setting even more data via the ______ property.",
    "options": ["options.param", "option_params", "option.param", "options.params"],
    "answer": "options.params"
  },
  {
    "id": 24,
    "question": "Which Bootstrap style is used to create vertical pills navigation?",
    "options": [
      "nav, nav-tabs",
      "nav, nav-pills",
      "nav, nav-pills, nav-stacked",
      "nav, nav-tabs, nav-justified"
    ],
    "answer": "nav, nav-pills, nav-stacked"
  },
  {
    "id": 25,
    "question": "Which class indicates a dropdown menu?",
    "options": ["dropdown-menu", "select", "dropdown", "dropdown-list"],
    "answer": "dropdown"
  },
  {
    "id": 26,
    "question": "Bootstrap grid system allows up to ______ columns across the page.",
    "options": ["6", "12", "8", "16"],
    "answer": "12"
  },
  {
    "id": 27,
    "question": "Which class makes round corner images automatically adjust to screen size?",
    "options": ["img-responsive", "img-fluid", "img-responsive-image", "img-round"],
    "answer": "img-responsive"
  },
  {
    "id": 28,
    "question": "Which class should be used to indicate a button group?",
    "options": ["btn-group-buttons", "btn-group", "btn-set", "btn-buttons"],
    "answer": "btn-group"
  },
  {
    "id": 29,
    "question": "In Angular, the opposite side of event binding (()) square bracket syntax signifies ______.",
    "options": ["two-way binding", "event binding", "property binding", "string interpolation"],
    "answer": "two-way binding"
  },
  {
    "id": 30,
    "question": "Which syntax is used for Angular two-way data binding?",
    "options": ["{{ }}", "[]", "()", "[()]"],
    "answer": "[()]"
  },
  {
  "id": 29,
  "question": "On the opposite side of event bindings () lie Angular’s square-bracket syntax [] which signify ______.",
  "options": [
    "property binding",
    "class binding",
    "style binding",
    "both A & B"
  ],
  "answer": "property binding"
},
{
  "id": 30,
  "question": "Which object oriented terms are supported by TypeScript?",
  "options": [
    "Modules",
    "Classes",
    "Interfaces",
    "All of these"
  ],
  "answer": "All of these"
},
  {
    "id": 31,
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
    "id": 32,
    "question": "Which of the following code will not throw an error?",
    "options": [
      "JSON.parse('')",
      "JSON.parse(null)",
      "JSON.parse()",
      "JSON.parse('{}')"
    ],
    "answer": "JSON.parse(null)"
  },
  {
    "id": 33,
    "question": "What does JSONP stand for?",
    "options": [
      "JSON Procedures",
      "JSON Parsing",
      "JSON with padding",
      "JSON Programming"
    ],
    "answer": "JSON with padding"
  },
  {
    "id": 34,
    "question": "What is the value of json in the following code?\nvar obj = { fruit: 'apple', toJSON: function(){ return 'orange'; } }; var json = JSON.stringify({x: obj});",
    "options": [
      "{\"x\":\"orange\"}",
      "{\"fruit\":\"apple\"}",
      "{\"x\":\"apple\"}",
      "{\"fruit\":\"orange\"}"
    ],
    "answer": "{\"x\":\"orange\"}"
  },
  {
    "id": 35,
    "question": "What is the MIME type of JSON?",
    "options": [
      "application/x-json",
      "text/json",
      "application/json",
      "application/javascript"
    ],
    "answer": "application/json"
  },
  {
    "id": 35,
    "question": "What function will convert a JavaScript object to a JSON string?",
    "options": ["JSON.text()", "JSON.serialize()", "JSON.toString()", "JSON.stringify()"],
    "answer": "JSON.stringify()"
  },
  {
    "id": 36,
    "question": "In the notation Student = { \"Student\": [\"Amy\", \"Bob\", \"John\"] }, Student is of type?",
    "options": ["Not a valid JSON string", "Array", "Class", "Object"],
    "answer": "Array"
  },
  {
    "id": 37,
    "question": "JSON-RPC is a remote procedure call protocol.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 38,
    "question": "To use observables, Angular uses a third-party library called ______.",
    "options": ["ng2-bootstrap", "angular-cli", "numeral", "Reactive Extensions (RxJS)"],
    "answer": "Reactive Extensions (RxJS)"
  },
  {
    "id": 39,
    "question": "We subscribe to the observable ourselves using the actual ______ method.",
    "options": ["subscribe()", "subs()", "subscribed()", "None of the above"],
    "answer": "subscribe()"
  },
  {
    "id": 40,
    "question": "Which of the following is not built-in pipe in Angular?",
    "options": ["DatePipe", "CurrencyPipe", "DataPipe", "PercentPipe"],
    "answer": "DataPipe"
  },
  {
    "id": 41,
    "question": "The ______ filter waits for a promise and returns the most recent value received.",
    "options": ["sync", "async", "promise"],
    "answer": "async"
  },
  {
    "id": 42,
    "question": "If you chain multiple pipes together, they are executed ______.",
    "options": ["in parallel", "LIFO order", "in the order in which you specify them", "none of the above"],
    "answer": "none of the above"
  },
  {
    "id": 43,
    "question": "Observables help you manage ______ data.",
    "options": ["synchronous", "asynchronous", "both asynchronous & synchronous", "none of the above"],
    "answer": "asynchronous"
  },
  {
    "id": 44,
    "question": "The ______ decorator allows us to define the pipe name that is globally available in templates.",
    "options": ["pipeName", "pipeDeco", "Pipe", "None"],
    "answer": "Pipe"
  },
  {
    "id": 45,
    "question": "console.log(x); var x = 5; What will be the output?",
    "options": ["undefined", "5", "error", "null"],
    "answer": "5"
  },
  {
    "id": 46,
    "question": "RPC stands for?",
    "options": ["Remote Procedure Call", "Remote Program Call", "Remote Processing Call", "None"],
    "answer": "Remote Procedure Call"
  },
  {
    "id": 47,
    "question": "Three main components of Routing are ______.",
    "options": ["RouteObject", "RouterOutlet", "RouterState", "RouterLink"],
    "answer": "RouterOutlet"
  },
  {
    "id": 48,
    "question": "Route ______ allow us to pass values in our URL to our component.",
    "options": ["pipes", "modules", "variables", "parameters"],
    "answer": "parameters"
  },
  {
    "id": 49,
    "question": "Promises are more advanced than Observables.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "id": 50,
    "question": "Which class is used to create a black navigation bar?",
    "options": [".navbar-default", ".navbar-black", ".navbar-dark", ".navbar-inverse"],
    "answer": ".navbar-inverse"
  },
  {
    "id": 51,
    "question": "The .container-fluid class provides ______.",
    "options": ["Fixed width container", "Table format", "To create a form", "Full width container"],
    "answer": "Full width container"
  },
  {
    "id": 52,
    "question": "1 + 2 + \"3\" = ?",
    "options": ["33", "123", "6", "Error"],
    "answer": "33"
  },
  {
    "id": 53,
    "question": "CSS validator example?",
    "options": ["eslint", "csslint", "stylelint", "None"],
    "answer": "csslint"
  },
  {
    "id": 54,
    "question": "Create responsive images by adding which class to the <img> tag?",
    "options": [".img-responsive", ".img-fluid", ".img-round", ".img-scale"],
    "answer": ".img-responsive"
  },
  {
    "id": 55,
    "question": ".img-responsive was used in Bootstrap 3, in Bootstrap 4 it became ______.",
    "options": [".img-fluid", ".img-scale", ".img-responsive-fluid", ".img-flex"],
    "answer": ".img-fluid"
  },
  {
    "id": 56,
    "question": "Bootstrap provides which class to scale images across devices?",
    "options": [".img-fluid", ".img-responsive", ".img-auto", ".img-scale"],
    "answer": ".img-fluid"
  },
  {
    "id": 57,
    "question": "Which HTML tag is used to include a JavaScript file?",
    "options": ["<script src=\"myscripts.js\"></script>", "<js src=\"myscripts.js\">", "<javascript>", "<include js>"],
    "answer": "<script src=\"myscripts.js\"></script>"
  },
  {
    "id": 58,
    "question": "TypeScript uses which datatype?",
    "options": ["boolean", "string", "number", "void", "All the above"],
    "answer": "All the above"
  },
  {
    "id": 59,
    "question": "TypeScript supports function overloading.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 60,
    "question": "CSS preprocessors include ______.",
    "options": ["LESS", "SASS", "Both LESS and SASS", "None"],
    "answer": "Both LESS and SASS"
  },

  {
    "id": 61,
    "question": "Which prefix is used to add animation in Angular?",
    "options": ["@", "#", "$", "&"],
    "answer": "@"
  },
  {
    "id": 62,
    "question": "Default access modifier of TypeScript?",
    "options": ["public", "private", "protected", "none"],
    "answer": "public"
  },
  {
    "id": 63,
    "question": "What does POP() do in JavaScript?",
    "options": [
      "Remove last element",
      "Remove first element",
      "Add element at end",
      "Add element at beginning"
    ],
    "answer": "Remove last element"
  },
  {
    "id": 64,
    "question": "How to implement inheritance in TypeScript?",
    "options": ["extends", "implements", "inherit", "super"],
    "answer": "extends"
  },
  {
    "id": 65,
    "question": "What keywords are reserved in JSON and cannot be used as keys?",
    "options": ["value", "object", "key", "none"],
    "answer": "none"
  },
  {
    "id": 66,
    "question": "How to get information about browser?",
    "options": ["browser", "version", "navigator", "window"],
    "answer": "navigator"
  },
  {
    "id": 67,
    "question": "Which event will trigger if a button loses focus?",
    "options": ["onblur", "onclick", "onfocus", "onchange"],
    "answer": "onblur"
  },
  {
    "id": 68,
    "question": "Display property values include?",
    "options": ["none", "inline", "inline-block", "all of these"],
    "answer": "all of these"
  },
  {
    "id": 69,
    "question": "Shorthand method to represent background properties in CSS?",
    "options": ["background", "bg-style", "bg-color", "bg"],
    "answer": "background"
  },
  {
    "id": 70,
    "question": "______ is an HTML specification used to add more information to HTML tags.",
    "options": ["Macrodata", "Microdata", "Minidata", "Modifydata"],
    "answer": "Microdata"
  },
  {
    "id": 71,
    "question": "What is the purpose of the mimeTypes property of a plug-in entry?",
    "options": [
      "Contains MIME properties",
      "Contains MIME sizes",
      "Contains MIME types",
      "Contains MIME methods"
    ],
    "answer": "Contains MIME types"
  },
  {
    "id": 72,
    "question": "Which of the following can be implemented using animation?",
    "options": [
      "Fireworks",
      "Fade effect",
      "Roll-in or Roll-out",
      "All of the mentioned"
    ],
    "answer": "All of the mentioned"
  },
  {
    "id": 73,
    "question": "Which property represents the content displayed in the window?",
    "options": ["document", "content", "window", "frame"],
    "answer": "document"
  },
  {
    "id": 74,
    "question": "How can we make methods available on all objects?",
    "options": [
      "Object.add(methods)",
      "Object.methods(add)",
      "Object.add.methods()",
      "Object.prototype"
    ],
    "answer": "Object.prototype"
  },
  {
    "id": 75,
    "question": "The four kinds of class members are?",
    "options": [
      "Instance methods, Instance fields, Static method, Dynamic method",
      "Instance fields, Instance methods, Class fields, Class methods",
      "Instance fields, non-Instance fields, Dynamic methods, Global methods",
      "Global methods, Local methods, Dynamic methods, Static methods"
    ],
    "answer": "Instance fields, Instance methods, Class fields, Class methods"
  },
  {
    "id": 76,
    "question": "Which HTML tag is used for video?",
    "options": ["<video>", "<media>", "<movie>", "<play>"],
    "answer": "<video>"
  },
  {
    "id": 77,
    "question": "Full form of Angular CLI?",
    "options": [
      "Command Line Interface",
      "Component Logic Interface",
      "Command Layout Interface",
      "Control Line Interface"
    ],
    "answer": "Command Line Interface"
  },
  {
    "id": 78,
    "question": "Types of Angular data binding include?",
    "options": [
      "Property Binding []",
      "Interpolation {{}}",
      "Event Binding ()",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 79,
    "question": "JavaScript is used for ______.",
    "options": [
      "Styling web pages",
      "Database storage",
      "Interactivity",
      "Server configuration"
    ],
    "answer": "Interactivity"
  },
  {
    "id": 80,
    "question": "How to declare variables in TypeScript?",
    "options": ["var", "let", "both var and let", "const only"],
    "answer": "both var and let"
  },
  {
    "id": 81,
    "question": "TypeScript uses which datatype?",
    "options": ["string", "number", "boolean", "all of the above"],
    "answer": "all of the above"
  },
  {
    "id": 82,
    "question": "Default access modifier in TypeScript?",
    "options": ["public", "private", "protected", "internal"],
    "answer": "public"
  },
  {
    "id": 83,
    "question": "Super() in TypeScript refers to?",
    "options": [
      "Super constructor",
      "Parent variable",
      "Child class",
      "Interface method"
    ],
    "answer": "Super constructor"
  },
  {
    "id": 84,
    "question": "Which field is required in <input>?",
    "options": ["required", "minlength", "both", "none"],
    "answer": "required"
  },
  {
    "id": 85,
    "question": "Which keyword cannot be used in JSON?",
    "options": ["object", "key", "value", "none"],
    "answer": "none"
  },
  {
    "id": 86,
    "question": "How can we add/delete elements in an array and return the removed item?",
    "options": ["slice", "shift", "reverse", "splice"],
    "answer": "splice"
  },
  {
    "id": 87,
    "question": "How to get information about browser?",
    "options": ["browser", "version", "navigator", "window"],
    "answer": "navigator"
  },
  {
    "id": 88,
    "question": "Display property values include?",
    "options": ["all", "inline", "inline-block", "block"],
    "answer": "all"
  },
  
  {
    "id": 89,
    "question": "Which event will trigger if a button loses its focus?",
    "options": [
      "onclick",
      "onblur",
      "onfocus",
      "onchange"
    ],
    "answer": "onblur"
  },
  {
    "id": 90,
    "question": "Which property is used to access the prototype of an object in JavaScript?",
    "options": [
      "prototype",
      "__proto__",
      "constructor",
      "inherit"
    ],
    "answer": "prototype"
  },
  {
    "id": 91,
    "question": "What is a drawback of TypeScript?",
    "options": [
      "Compilation required",
      "More complex setup",
      "Additional build step",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 92,
    "question": "Which Bootstrap class creates two equal columns in a row?",
    "options": [
      "row-2col",
      "row-cols-2",
      "col-6",
      "grid-2"
    ],
    "answer": "row-2col"
  },
  {
    "id": 93,
    "question": "Which Bootstrap component is used to create a slideshow?",
    "options": [
      "carousel",
      "slider",
      "gallery",
      "scroll"
    ],
    "answer": "carousel"
  },
  {
    "id": 94,
    "question": "TypeScript supports which feature?",
    "options": [
      "Overloading",
      "Partial classes",
      "None",
      "Interfaces only"
    ],
    "answer": "Overloading"
  },
  {
    "id": 95,
    "question": "Which type of attribute provides additional information about HTML elements?",
    "options": [
      "HTML Attribute",
      "CSS Attribute",
      "DOM Attribute",
      "Meta Attribute"
    ],
    "answer": "HTML Attribute"
  },
  {
    "id": 96,
    "question": "Which CSS pseudo-class selects the nth child of an element?",
    "options": [
      ":first-child",
      ":nth-child(n)",
      ":nth-of-type",
      ":child"
    ],
    "answer": ":nth-child(n)"
  },
  {
    "id": 97,
    "question": "Which option represents user roles?",
    "options": [
      "Owner",
      "Admin",
      "Both Owner and Admin",
      "Guest"
    ],
    "answer": "Both Owner and Admin"
  },
  {
"id":61,
"question":"In Java, which of these class types supports sequential and parallel processing of data?",
"options":[
"Queue",
"Lambda",
"ExecutorService",
"Streams"
],
"answer":"Streams"
},
{
"id":62,
"question":"What is the replacement for PermGen space in Java?",
"options":[
"FixedGen",
"Metaspace",
"MetaGenspace"
],
"answer":"Metaspace"
},
{
"id":63,
"question":"What is the difference between peek() and dequeue()?",
"options":[
"Peek() returns the next item in line but dequeue() removes and returns the next item in line",
"peek() and dequeue() return the next item in line",
"peek() and dequeue remove and return the next item in line"
],
"answer":"Peek() returns the next item in line but dequeue() removes and returns the next item in line"
},
{
"id":64,
"question":"MongoDB database can be accessed using Spring Data.",
"options":[
"True",
"False"
],
"answer":"True"
},
{
"id":65,
"question":"How to handle shutdown of IoC container?",
"options":[
"Using shutdownHook()",
"Using shutdownHandler()",
"Using registerHook()",
"Using registerShutdownHook()"
],
"answer":"Using registerShutdownHook()"
},
{
"id":66,
"question":"What is default scope of bean in Spring framework?",
"options":[
"singleton",
"prototype",
"request",
"session"
],
"answer":"singleton"
},
{
"id":67,
"question":"Which endpoints are provided by Spring Boot to monitor metrics of individual microservices?",
"options":[
"/actuator",
"/rest",
"/logger",
"/health"
],
"answer":"/actuator"
},
{
"id":68,
"question":"REST service endpoint comprises of which address?",
"options":[
"No certain URL is specified",
"Depends upon the platform used"
],
"answer":"No certain URL is specified"
},
{
"id":69,
"question":"Microservices is most closely related to which other established acronym?",
"options":[
"API",
"AWS",
"GCP",
"PAAS"
],
"answer":"API"
},
{
"id":70,
"question":"What are the core operations of DevOps with application development and with infrastructure?",
"options":[
"Provisioning, Configuration, and Orchestration",
"Code building, coverage, and Unit testing",
"Packaging and Deployment",
"All of the above"
],
"answer":"All of the above"
},
{
"id":71,
"question":"What is the return type of Java lambda expressions?",
"options":[
"void",
"Lambda",
"Function",
"Regex"
],
"answer":"Function"
},
{
"id":72,
"question":"In Java, which of these class types supports sequential and parallel processing of data?",
"options":[
"Queue",
"Lambda",
"ExecutorService",
"Streams"
],
"answer":"Streams"
},
{
"id":73,
"question":"What is the replacement for PermGen space in Java 8?",
"options":[
"FixedGen",
"Metaspace",
"MetaGenspace"
],
"answer":"Metaspace"
},
{
"id":74,
"question":"Where in an HTML document is the correct place to refer to an external style sheet?",
"options":[
"In the <body> section",
"In the <head> section",
"At the end of the document",
"At the start of the document"
],
"answer":"In the <head> section"
},
{
"id":75,
"question":"Where is the correct place to insert a JavaScript?",
"options":[
"The <head> section",
"Both the <head> section and the <body> section are correct",
"The <body> section",
"The <footer> section"
],
"answer":"Both the <head> section and the <body> section are correct"
},
{
"id":76,
"question":"How can you detect the client’s browser name in JavaScript?",
"options":[
"client.navName",
"navigator.appName",
"browser.name",
"window.browser"
],
"answer":"navigator.appName"
},
{
"id":77,
"question":"In JavaScript, var declares a block-scoped variable?",
"options":[
"True",
"False"
],
"answer":"False"
},
{
"id":78,
"question":"What is React?",
"options":[
"Just a server-side framework",
"Just a user-interface framework",
"Both a server-side framework as well as a user-interface framework"
],
"answer":"Just a user-interface framework"
},
{
"id":79,
"question":"What are the limitations of React?",
"options":[
"React is only for view layer of the app so we still need other technologies",
"React uses inline templating and JSX",
"The library of React is too large",
"All of the above"
],
"answer":"All of the above"
},
{
"id":80,
"question":"How can you access the state of a component from inside of a member function in React?",
"options":[
"this.getState()",
"this.prototype.stateValue",
"this.state",
"this.values"
],
"answer":"this.state"
},
{
"id":81,
"question":"Which of the following API is a MUST for every React component?",
"options":[
"getInitialState",
"render",
"renderComponent"
],
"answer":"render"
},
{
"id":82,
"question":"What does the \"webpack\" command do?",
"options":[
"Transpiles all the Javascript down into one file",
"Runs react local development server"
],
"answer":"Transpiles all the Javascript down into one file"
}];














[
{
"id":1,
"question":"What annotation does Spring Boot provide to conditionally wire a bean based on an environment variable?",
"options":[
"@ConditionalOnValue",
"@ConditionalOnProperty",
"@ConditionalOnSystemProperty",
"@ConditionalOnEnvironmentVariable"
],
"answer":"@ConditionalOnProperty"
},
{
"id":2,
"question":"You have a number of external properties that you want to use in your application. How can you configure your Spring Boot application to source them from a file?",
"options":[
"Place the .properties file in the src/main/resources directory. In the code, load it with java.util.Properties.",
"Place the properties in my.properties and add the annotation @PropertySource(\"my.properties\") to the Spring Boot application main class.",
"Create a properties file named application.properties in the src/main/resources of your project."
],
"answer":"Create a properties file named application.properties in the src/main/resources of your project."
},
{
"id":3,
"question":"The following method only queries or retrieves data from the data source. It does not perform any write operations. What optimizations can you make so the provider can process the query more efficiently?",
"options":[
"Add the readOnly option to the @Transactional annotation. This provides a hint to the provider to optimize the transaction for read-only operations.",
"Add the timeout option to the @Transactional annotation. This limits the time the transaction can run.",
"Add the readOnly option to the @Transactional annotation. This prevents any write operations in the transaction.",
"Set the appropriate transactionManager option in the @Transactional annotation. This allows you to customize the underlying provider."
],
"answer":"Add the readOnly option to the @Transactional annotation. This provides a hint to the provider to optimize the transaction for read-only operations."
},
{
"id":4,
"question":"How do you configure a Spring Boot application to run as a command-line application?",
"options":[
"Implement CommandLineRunner and publish it to the application context.",
"Call SpringApplication#setHeadless(true).",
"Annotate a configuration class with @CommandLineApplication.",
"Use SpringConsoleApplication.run instead of SpringApplication.run"
],
"answer":"Implement CommandLineRunner and publish it to the application context."
},
{
"id":5,
"question":"The controller is not dealing with the errors. How can you make it work?",
"options":[
"Add the following to the web.xml: <error-page><location>/errors</location></error-page>",
"Store the error page in the folder errors where Spring will look for it. If that is not an option, configure explicitly where the application can find the view.",
"Add the following bean: InternalResourceViewResolver configuration for /WEB-INF/errors/",
"Annotate the controller with @ExceptionHandler(\"errorPage\")."
],
"answer":"Add the following to the web.xml: <error-page><location>/errors</location></error-page>"
},
{
"id":6,
"question":"How would you configure the default configuration and dependencies that a Spring Boot application requires in Maven?",
"options":[
"In the Project Object Model (POM) file, add the parent configuration spring-boot-starter-parent.",
"In the Project Object Model (POM) file, add the parent configuration spring-boot-dependencies with relativePath.",
"In the Project Object Model (POM) file, add the dependency spring-boot-starter-parent.",
"In the Project Object Model (POM) file, add the dependency spring-boot-starter."
],
"answer":"In the Project Object Model (POM) file, add the parent configuration spring-boot-starter-parent."
},
{
"id":7,
"question":"You write the following code, but the test is not working. What is the most likely solution?",
"options":[
"The ContextConfiguration is too minimalistic. Extend it for integration testing.",
"You must annotate the creation method with @EventListener(EmployeeCreationEvent.class).",
"You must add @RecordApplicationEvents to the top of the class.",
"You must make sure that the application is registering a bean of type ApplicationEvents."
],
"answer":"You must add @RecordApplicationEvents to the top of the class."
},
{
"id":8,
"question":"Which Spring class can you configure to function as a special environment with custom set properties for testing purposes?",
"options":[
"ConfigurableEnvironment",
"PropertySource",
"TestEnv",
"MockEnvironment"
],
"answer":"MockEnvironment"
},
{
"id":9,
"question":"You write a test class. The test class should only run when the operating system is Apple macOS. Which built-in annotation could you add on top of the class to achieve this?",
"options":[
"@SpringJUnitWebConfig(system = \"mac\")",
"@EnabledOnMac",
"@EnabledIf(\"#{systemProperties['os.name'].toLowerCase().contains('mac')}\")",
"@DetectOS(category = \"mac\")"
],
"answer":"@EnabledIf(\"#{systemProperties['os.name'].toLowerCase().contains('mac')}\")"
},
{
"id":10,
"question":"You want to package your application into a native image. You correctly configure Maven and Docker. What command do you need to build the image?",
"options":[
"mvn compile",
"mvn -Pnative spring-boot:build-image",
"mvn spring-boot:build-native-image",
"mvn package"
],
"answer":"mvn -Pnative spring-boot:build-image"
},
{
"id":11,
"question":"How would you change the following code snippets so the list of names in the model contains four items?",
"options":[
"Change the signature of getNames to public List<String> getNames(Model model)",
"Change the signature of getNames to public List<String> getNames(Model model, @ModelAttribute(\"names\") List<String> names)",
"Change the signature of allNames to public String allNames(Model model, @ModelAttribute(\"names\") List<String> names)",
"Change the signature of allNames to public String allNames(@ModelAttribute(\"names\") List<String> names, Model model)"
],
"answer":"Change the signature of allNames to public String allNames(@ModelAttribute(\"names\") List<String> names, Model model)"
},
{
"id":12,
"question":"The ExceptionHandler that should pick up ArithmeticException is not working. What is the explanation?",
"options":[
"The method must have the name of the specific exception.",
"Spring cannot find the view associated with this method.",
"The return type is incorrect.",
"The annotation should be @ExceptionHandler(exceptions={ArithmeticException.class})."
],
"answer":"The annotation should be @ExceptionHandler(exceptions={ArithmeticException.class})."
},
{
"id":13,
"question":"Which statement about the TestTransaction class is true?",
"options":[
"The static methods on the TestTransaction class interact with the current transaction of the test method.",
"TestTransaction only works on classes that you annotate with @EnableTestTransaction.",
"You must implement the abstract TestTransaction class.",
"You must autowire TestTransaction."
],
"answer":"The static methods on the TestTransaction class interact with the current transaction of the test method."
},
{
"id":14,
"question":"What configuration step is missing for custom auto configuration?",
"options":[
"Reference the auto configuration class in @SpringBootConfiguration.",
"Add the @Configuration annotation.",
"List the auto configuration class in META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports",
"List the auto configuration class in application.properties under spring.autoconfigure.imports."
],
"answer":"List the auto configuration class in META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports"
},
{
"id":15,
"question":"Which is an example of XML mapping a NullPointerException to a page called npe?",
"options":[
"<prop key=\"java.lang.NullPointerException\">npe</prop>",
"<exceptionHandler mapping>",
"<prop view=\"npe\">java.lang.NullPointerException</prop>",
"<exceptionHandler view mapping>"
],
"answer":"<prop key=\"java.lang.NullPointerException\">npe</prop>"
},
{
"id":16,
"question":"How would you create the jar from the command line?",
"options":[
"mvn install followed by jar cvf build/classes",
"mvn spring-boot:jar",
"mvn package",
"mvn compile"
],
"answer":"mvn package"
},
{
"id":17,
"question":"Why should a developer remove the @ExtendWith annotation in this JUnit 5 test?",
"options":[
"@SpringBootTest implies @ExtendWith(SpringExtension.class).",
"Only JUnit 4 recognizes @ExtendWith.",
"@SpringBootTest contradicts @ExtendWith.",
"@ExtendWith overrides @SpringBootTest."
],
"answer":"@SpringBootTest implies @ExtendWith(SpringExtension.class)."
},
{
"id":18,
"question":"What is the default behavior of Spring TestContext for handling database persistence?",
"options":[
"The framework creates a transaction for every test and does an automatic rollback.",
"TestContext configures a new database for every test.",
"The framework stores the changes in the database.",
"You can mark tests with @Transactional to rollback."
],
"answer":"The framework creates a transaction for every test and does an automatic rollback."
},
{
"id":19,
"question":"Which class meets the conditions for having methods with the @ModelAttribute annotation?",
"options":[
"@Repository public class DataController {}",
"@Controller public class DataController {}",
"@Model public class DataController {}",
"@Attributed public class DataController {}"
],
"answer":"@Controller public class DataController {}"
},
{
"id":20,
"question":"How can you disable an auto configuration class in Spring Boot?",
"options":[
"Use @ContextConfiguration",
"Use @Conditional",
"Use @EnableAutoConfiguration exclude property",
"Add the auto config class to the exclude property in @SpringBootApplication"
],
"answer":"Add the auto config class to the exclude property in @SpringBootApplication"
},








{
"id":1,
"question":"HTML: Which tag is used to define a clickable image map in HTML5?",
"options":[
"<map>",
"<area>",
"<img>",
"<figure>"
],
"answer":"<map>"
},
{
"id":2,
"question":"CSS: What is the effect of display: flex; justify-content: space-between; on a container’s children?",
"options":[
"Aligns children vertically with equal spacing",
"Aligns children horizontally with space between them",
"Centers children horizontally",
"Stacks children in a column"
],
"answer":"Aligns children horizontally with space between them"
},
{
"id":3,
"question":"JavaScript: What is the output of the following code?",
"options":[
"10",
"\"55\"",
"25",
"Error"
],
"answer":"\"55\""
},
{
"id":4,
"question":"JavaScript: Which method is used to add an event listener to an element?",
"options":[
"addEvent()",
"attachEvent()",
"addEventListener()",
"onEvent()"
],
"answer":"addEventListener()"
},
{
"id":5,
"question":"CSS: Which property ensures a background image stays fixed while scrolling?",
"options":[
"background-repeat: no-repeat;",
"background-attachment: fixed;",
"background-position: center;",
"background-size: cover;"
],
"answer":"background-attachment: fixed;"
},
{
"id":6,
"question":"React: What is the purpose of the useState hook?",
"options":[
"Fetch data from an API",
"Manage state in functional components",
"Handle side effects",
"Create context"
],
"answer":"Manage state in functional components"
},
{
"id":7,
"question":"React: What does the following code render?",
"options":[
"Nothing (empty string)",
"\"undefined\"",
"Error",
"null"
],
"answer":"Nothing (empty string)"
},
{
"id":8,
"question":"React: Which hook is used to perform side effects in a functional component?",
"options":[
"useEffect",
"useReducer",
"useContext",
"useCallback"
],
"answer":"useEffect"
},
{
"id":9,
"question":"React: How do you pass data from a parent to a child component?",
"options":[
"Using state",
"Using props",
"Using context",
"Using hooks"
],
"answer":"Using props"
},
{
"id":10,
"question":"React: What is the correct way to update a state object?",
"options":[
"setUser({ name: \"Jane\" });",
"setUser({ ...user, name: \"Jane\" });",
"user.name = \"Jane\";",
"setUser(user.name = \"Jane\");"
],
"answer":"setUser({ ...user, name: \"Jane\" });"
},
{
"id":11,
"question":"React: What is a key prop used for in a list?",
"options":[
"Styling elements",
"Identifying unique elements for efficient rendering",
"Handling events",
"Managing state"
],
"answer":"Identifying unique elements for efficient rendering"
},
{
"id":12,
"question":"React: Which component lifecycle method is replaced by useEffect in functional components?",
"options":[
"componentDidMount",
"render",
"constructor",
"setState"
],
"answer":"componentDidMount"
},
{
"id":13,
"question":"React: What does JSX stand for?",
"options":[
"JavaScript XML",
"JavaScript Extension",
"JSON XML",
"Java Syntax"
],
"answer":"JavaScript XML"
},
{
"id":14,
"question":"React: How do you create a ref in a functional component?",
"options":[
"const ref = useRef();",
"const ref = createRef();",
"const ref = useState();",
"const ref = useEffect();"
],
"answer":"const ref = useRef();"
},
{
"id":15,
"question":"React: What is the output of this code if count is 0?",
"options":[
"0",
"1",
"2",
"Infinite loop"
],
"answer":"1"
},
{
"id":16,
"question":"MongoDB: What is the primary key in a MongoDB document?",
"options":[
"_id",
"id",
"key",
"index"
],
"answer":"_id"
},
{
"id":17,
"question":"MongoDB: Which command finds all documents where age > 25 in the users collection?",
"options":[
"db.users.find({ age: { $gt: 25 } })",
"db.users.find({ age: { $gte: 25 } })",
"db.users.find({ age: { $lt: 25 } })",
"db.users.find({ age: 25 })"
],
"answer":"db.users.find({ age: { $gt: 25 } })"
},
{
"id":18,
"question":"MongoDB: What does the $push operator do in an update operation?",
"options":[
"Replaces a field",
"Adds an element to an array",
"Removes an element from an array",
"Updates a single field"
],
"answer":"Adds an element to an array"
},
{
"id":19,
"question":"MongoDB: Which index improves query performance on frequently searched fields?",
"options":[
"Compound index",
"Text index",
"Unique index",
"All of the above"
],
"answer":"All of the above"
},
{
"id":20,
"question":"Angular: What is the purpose of *ngFor directive?",
"options":[
"Conditionally display elements",
"Iterate over a list to render elements",
"Bind data to an element",
"Handle form submissions"
],
"answer":"Iterate over a list to render elements"
},
{
"id":21,
"question":"Angular: Which decorator defines a component in Angular?",
"options":[
"@Component",
"@Directive",
"@NgModule",
"@Injectable"
],
"answer":"@Component"
},
{
"id":22,
"question":"Angular: What is the output of this code? <div *ngIf=\"false\">Hello</div>",
"options":[
"Hello",
"Nothing",
"Error",
"false"
],
"answer":"Nothing"
},
{
"id":23,
"question":"Angular: How do you inject a service into a component?",
"options":[
"Using @Inject",
"In the constructor",
"Using @Service",
"In the template"
],
"answer":"In the constructor"
},
{
"id":24,
"question":"Angular: What does FormBuilder simplify?",
"options":[
"HTTP requests",
"Reactive form creation",
"Template rendering",
"Dependency injection"
],
"answer":"Reactive form creation"
},
{
"id":25,
"question":"Angular: Which module is required for HTTP requests?",
"options":[
"HttpClientModule",
"FormsModule",
"RouterModule",
"CommonModule"
],
"answer":"HttpClientModule"
},
{
"id":26,
"question":"Java: What is the output of this code?",
"options":[
"10",
"11",
"12",
"13"
],
"answer":"12"
},
{
"id":27,
"question":"Java: What does this code print?",
"options":[
"true",
"false",
"Error",
"null"
],
"answer":"false"
},
{
"id":28,
"question":"Java: What is the result of this code?",
"options":[
"[1, 2]",
"[2]",
"[]",
"Error"
],
"answer":"[2]"
},
{
"id":29,
"question":"Java: What does this code output?",
"options":[
"10",
"20",
"30",
"Error"
],
"answer":"20"
},
{
"id":30,
"question":"Java: What is the output?",
"options":[
"1",
"2",
"Error",
"null"
],
"answer":"Error"
},
{
"id":31,
"question":"Java: What is the purpose of the final keyword?",
"options":[
"Prevents method overriding",
"Allows dynamic binding",
"Enables garbage collection",
"Permits multiple inheritance"
],
"answer":"Prevents method overriding"
},
{
"id":32,
"question":"Java: Which collection is synchronized by default?",
"options":[
"ArrayList",
"HashMap",
"Vector",
"LinkedList"
],
"answer":"Vector"
},
{
"id":33,
"question":"Java: What is the default access modifier for class members?",
"options":[
"public",
"private",
"protected",
"package-private"
],
"answer":"package-private"
},
{
"id":34,
"question":"Java: What does the transient keyword do?",
"options":[
"Prevents serialization",
"Enables multithreading",
"Marks a variable as static",
"Allows method overriding"
],
"answer":"Prevents serialization"
},
{
"id":35,
"question":"Java: Which interface is used for sorting objects?",
"options":[
"Comparable",
"Comparator",
"Serializable",
"Cloneable"
],
"answer":"Comparable"
},
{
"id":36,
"question":"TypeScript: What is the purpose of interface in TypeScript?",
"options":[
"Define class behavior",
"Specify object structure",
"Create modules",
"Handle exceptions"
],
"answer":"Specify object structure"
},
{
"id":37,
"question":"TypeScript: What is the type of let x: any;",
"options":[
"number",
"string",
"any",
"void"
],
"answer":"any"
},
{
"id":38,
"question":"TypeScript: What does this code do?",
"options":[
"Throws a type error",
"Returns a string",
"Returns void",
"Returns any"
],
"answer":"Returns a string"
},
{
"id":39,
"question":"TypeScript: Which keyword extends a class?",
"options":[
"implements",
"extends",
"super",
"interface"
],
"answer":"extends"
},
{
"id":40,
"question":"TypeScript: How do you define an optional property?",
"options":[
"name: string?",
"name?: string",
"name: string | null",
"name: string = null"
],
"answer":"name?: string"
},
{
"id":41,
"question":"Spring: Which annotation defines a Spring bean?",
"options":[
"@Bean",
"@Component",
"@Service",
"All of the above"
],
"answer":"All of the above"
},
{
"id":42,
"question":"Spring Boot: What does @SpringBootApplication include?",
"options":[
"@Configuration, @EnableAutoConfiguration, @ComponentScan",
"@RestController, @EnableWebMvc",
"@Repository, @Transactional",
"@Autowired, @Qualifier"
],
"answer":"@Configuration, @EnableAutoConfiguration, @ComponentScan"
},
{
"id":43,
"question":"Spring: What is the output of this code?",
"options":[
"Hello",
"null",
"Error",
"MyBean"
],
"answer":"Hello"
},
{
"id":44,
"question":"Spring Boot: Which dependency enables REST APIs?",
"options":[
"spring-boot-starter-web",
"spring-boot-starter-data-jpa",
"spring-boot-starter-security",
"spring-boot-starter-test"
],
"answer":"spring-boot-starter-web"
},
{
"id":45,
"question":"Spring: What is Dependency Injection?",
"options":[
"Creating objects manually",
"Injecting dependencies into objects",
"Managing database connections",
"Handling HTTP requests"
],
"answer":"Injecting dependencies into objects"
},
{
"id":46,
"question":"Spring Boot: How do you externalize configuration?",
"options":[
"Using application.properties",
"Using @Configuration",
"Using @Bean",
"Using @Autowired"
],
"answer":"Using application.properties"
},
{
"id":47,
"question":"Spring: Which annotation maps HTTP GET requests?",
"options":[
"@PostMapping",
"@GetMapping",
"@RequestMapping",
"@PutMapping"
],
"answer":"@GetMapping"
},
{
"id":48,
"question":"Spring Boot: What is the default embedded server?",
"options":[
"Jetty",
"Tomcat",
"Undertow",
"Netty"
],
"answer":"Tomcat"
},
{
"id":49,
"question":"Spring: What does @Transactional do?",
"options":[
"Manages database transactions",
"Configures REST endpoints",
"Injects dependencies",
"Scans components"
],
"answer":"Manages database transactions"
},
{
"id":50,
"question":"Spring Boot: How do you connect to MongoDB?",
"options":[
"spring-boot-starter-data-mongodb",
"spring-boot-starter-data-jpa",
"spring-boot-starter-web",
"spring-boot-starter-security"
],
"answer":"spring-boot-starter-data-mongodb"
},
{
"id":51,
"question":"DevOps: What is the purpose of Docker?",
"options":[
"Code compilation",
"Containerization",
"Version control",
"Load balancing"
],
"answer":"Containerization"
},
{
"id":52,
"question":"DevOps: Which command builds a Docker image?",
"options":[
"docker run",
"docker build",
"docker push",
"docker pull"
],
"answer":"docker build"
},
{
"id":53,
"question":"DevOps: What is CI/CD?",
"options":[
"Continuous Integration/Continuous Deployment",
"Code Inspection/Code Delivery",
"Continuous Improvement/Continuous Development",
"Code Integration/Code Deployment"
],
"answer":"Continuous Integration/Continuous Deployment"
},
{
"id":54,
"question":"DevOps: Which tool manages container orchestration?",
"options":[
"Jenkins",
"Kubernetes",
"Git",
"Ansible"
],
"answer":"Kubernetes"
},
{
"id":55,
"question":"DevOps: What does nginx -g \"daemon off;\" do in a Docker container?",
"options":[
"Runs NGINX in the background",
"Runs NGINX in the foreground",
"Stops NGINX",
"Restarts NGINX"
],
"answer":"Runs NGINX in the foreground"
},
{
"id":56,
"question":"DevOps: Which file defines a Jenkins pipeline?",
"options":[
"Dockerfile",
"Jenkinsfile",
"pom.xml",
"build.gradle"
],
"answer":"Jenkinsfile"
},
{
"id":57,
"question":"DevOps: What is Infrastructure as Code?",
"options":[
"Manual server setup",
"Defining infrastructure using scripts",
"Database management",
"Application deployment"
],
"answer":"Defining infrastructure using scripts"
},
{
"id":58,
"question":"DevOps: Which AWS service manages containerized apps?",
"options":[
"EC2",
"ECS",
"S3",
"RDS"
],
"answer":"ECS"
},
{
"id":59,
"question":"Microservices: What is a key benefit of microservices architecture?",
"options":[
"Monolithic codebase",
"Independent scalability",
"Tight coupling",
"Single database"
],
"answer":"Independent scalability"
},
{
"id":60,
"question":"Microservices: Which pattern ensures loose coupling in microservices?",
"options":[
"Circuit Breaker",
"Service Registry",
"Event-Driven",
"Monolith"
],
"answer":"Event-Driven"
},

{
"id":1,
"question":"Whenever you are assigning two classes to a tag , you must separate them with a",
"options":[
"Space",
"Comma",
"Dash"
],
"answer":"Space"
},
{
"id":2,
"question":"____________ contains the navigation menu, or other navigation functionality for the page",
"options":[
"section",
"header",
"nav",
"aside"
],
"answer":"nav"
},
{
"id":3,
"question":"Which of the following properties sets the distance between an element’s right border and the rightmost edge of its content?",
"options":[
"auto",
"padding-left",
"padding-right",
"Padding-top"
],
"answer":"padding-right"
},
{
"id":4,
"question":"What built-in functions allows you to convert a string into an integer?",
"options":[
"toInt()",
"parseInt()",
"toInteger()",
"parseString()"
],
"answer":"parseInt()"
},
{
"id":5,
"question":"What is a function in JavaScript?",
"options":[
"An instance of a class",
"A statement that evaluates an expression",
"A block of organized, reusable code that performs a single action",
"Code that allows us to write loops"
],
"answer":"A block of organized, reusable code that performs a single action"
},
{
"id":6,
"question":"What is the output of greet = function(...months){ months.forEach(month => console.log('Month: ' + month));}greet([ 'Jan', 'Feb']);",
"options":[
"Jan Feb",
"ReferenceError",
"Month: Jan,Feb",
"Month: Jan",
"Month: Feb"
],
"answer":"Month: Jan,Feb"
},
{
"id":7,
"question":"What is the output of function display(num1, num2) { console.log(num1, num2);}let nums = \"12345\";display(...nums);",
"options":[
"1 2",
"21",
"12345",
"45"
],
"answer":"1 2"
},
{
"id":8,
"question":"What is the console output of function printName() { name = \"Mary\"; name = \"John\"; console.log(name);}?",
"options":[
"Empty",
"None",
"John",
"Mary"
],
"answer":"John"
},
{
"id":9,
"question":"Babel compiles the JavaScript code you write into",
"options":[
"ECMAScript 5",
"ECMAScript 7",
"ECMAScript 3",
"ECMAScript 6"
],
"answer":"ECMAScript 5"
},
{
"id":10,
"question":"The string \"api/route\" in Express is an example of a...",
"options":[
"Middleware",
"Route",
"Error Handler"
],
"answer":"Route"
},
{
"id":11,
"question":"Which library allows the use of the \"require\" keyword in front-end code?",
"options":[
"guid",
"Browserify",
"React",
"jQuery"
],
"answer":"Browserify"
},
{
"id":12,
"question":"The ______ attribute of a React form is called when the main action button inside the form is pressed.",
"options":[
"onSubmit",
"onChange",
"onComplete"
],
"answer":"onSubmit"
},
{
"id":13,
"question":"Which of the following are automation tools?",
"options":[
"Gulp",
"JSX",
"Express"
],
"answer":"Gulp"
},
{
"id":14,
"question":"What React function is used to define a new element tag?",
"options":[
"renderComponent",
"createClass",
"setInnerHTML"
],
"answer":"createClass"
},
{
"id":15,
"question":"True or false : The only thing that can change the data inside a store is the store itself.",
"options":[
"false",
"true"
],
"answer":"true"
},
{
"id":16,
"question":"The Gulp task which takes a stream and outputs a file is...",
"options":[
"src",
"task",
"dest"
],
"answer":"dest"
},
{
"id":17,
"question":"The best way to detect when a user has completed a form is",
"options":[
"to handle the onClick event on the form's submit element",
"to handle the onBlur event of the last form element",
"to handle the form's onSubmit event",
"to accumulate the onChange events for each form element"
],
"answer":"to handle the form's onSubmit event"
},
{
"id":18,
"question":"Behavior is shared between components using",
"options":[
"propTypes",
"state",
"mixins",
"props"
],
"answer":"mixins"
},
{
"id":19,
"question":"Which of the following API is a MUST for every React Component ?",
"options":[
"getInitialState",
"render",
"renderComponent"
],
"answer":"renderComponent"
},
{
"id":20,
"question":"What are the advantages of React ?",
"options":[
"React can be used on client as well as server side.",
"Using React increases readability and makes maintainability easier.",
"React can be used with any other framework as it is just a View Layer.",
"All of the above."
],
"answer":"All of the above."
},

{
"id":1,
"question":"What is the output of the following Java code snippet?",
"options":[
"132",
"123",
"213",
"312"
],
"answer":"132"
},
{
"id":2,
"question":"Which of the following is the immutable Java List static factory method?",
"options":[
"List.of",
"List.immutable",
"List.create"
],
"answer":"List.of"
},
{
"id":3,
"question":"What is the command line tool introduced for JS engine in Java?",
"options":[
"jjs",
"jss",
"jfs",
"jbd"
],
"answer":"jjs"
},
{
"id":4,
"question":"Identify the Java class used to create a new Process.",
"options":[
"ProcessBuilder",
"ProcessFactory",
"Process",
"Thread"
],
"answer":"ProcessBuilder"
},
{
"id":5,
"question":"Pick the correct Java method reference usages.",
"options":[
"object::instanceMethod",
"Class::staticMethod",
"Class::new",
"All of the above"
],
"answer":"All of the above"
},
{
"id":6,
"question":"Which one will allow traversing a Java collection in each direction?",
"options":[
"ListIterator",
"Iterator",
"MapIterator",
"SetIterator"
],
"answer":"ListIterator"
},
{
"id":7,
"question":"Pick the class that is NOT part of Java collection framework.",
"options":[
"Map",
"List",
"Queue",
"Struct"
],
"answer":"Struct"
},
{
"id":8,
"question":"Java Functional Interface can be defined as____.",
"options":[
"Simple Abstract Markup",
"Simple Active Markup",
"Single Ambivalue Method",
"Single Abstract Method"
],
"answer":"Single Abstract Method"
},
{
"id":9,
"question":"Which is the correct API to manage reactive streams in Java?",
"options":[
"java.util.concurrent.Flow",
"java.util.concurrent.Flow.Publisher",
"java.util.concurrent.Flow.Processor",
"All of the above"
],
"answer":"All of the above"
},
{
"id":10,
"question":"In Java, which of the following data structure classes CANNOT be type parameterized?",
"options":[
"List",
"Set",
"Array",
"Map"
],
"answer":"Array"
},
{
"id":11,
"question":"What is the output of the following inheritance code snippet?",
"options":[
"TSF",
"T",
"F",
"FST"
],
"answer":"FST"
},
{
"id":12,
"question":"Which class is introduced in Java 8 to get the current milliseconds?",
"options":[
"Clock",
"Current Time",
"Date Time",
"Time"
],
"answer":"Clock"
},

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
"question": "Declaring bean form object properties can be done using:",
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
"answer": [
"implement PropertyEditor interface",
"extend PropertyEditorSupport Class"
],
"multi": true
},


{
"id": 6,
"question": "Spring Web MVC follows the Open for extension, closed for modification principle.",
"options": [
"true",
"false"
],
"answer": "true"
},

{
"id": 7,
"question": "Which of the following is not a special bean in WebApplicationContext?",
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
"question": "How does the Spring DispatcherServlet support returning the last-modification-date?",
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
"question": "@RequestMapping annotation is used to map a HTTP request method (GET or POST) to a specific controller method.",
"options": [
"false",
"true"
],
"answer": "true"
},

{
"id": 10,
"question": "Which exception class is related to all the exceptions thrown in spring applications?",
"options": [
"DataAccessException",
"ArrayIndexOutofBound",
"NullPointerException",
"SpringException",
"None of these"
],
"answer": "DataAccessException"
},

{
"id": 11,
"question": "To publish a REST service with Spring.",
"options": [
"publishing an application's data as a REST service",
"accessing data from third-party REST services",
"none of the mentioned",
"all of the mentioned"
],
"answer": [
"publishing an application's data as a REST service",
"accessing data from third-party REST services"
],
"multi": true
},

{
"id": 12,
"question": "Publishing an application's data as a REST service requires.",
"options": [
"@RequestMapping",
"@PathVariable",
"All of the mentioned",
"None of the mentioned"
],
"answer": [
"@RequestMapping",
"@PathVariable"
],
"multi": true
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
"question": "Which layer uses the @Controller annotation?",
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
"question": "Which of the following is NOT a valid difference between @Inject and @Autowired?",
"options": [
"@Inject is part of Java EE while @Autowired belongs to Spring",
"@Autowired is a legacy annotation whereas @Inject is its latest version",
"There is no difference",
"None of these"
],
"answer": "@Autowired is a legacy annotation whereas @Inject is its latest version"
},

{
"id": 16,
"question": "Which correctly mentions the Autowire types?",
"options": [
"None of these",
"byName , byMethod, constructor and autodetect",
"byName , byType, destructor and autodetect",
"byName , byType, constructor and autodetect",
"byName , byType, constructor and autocorrect"
],
"answer": "byName , byType, constructor and autodetect"
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
"question": "How to auto-inject into a field a Spring bean by its name?",
"options": [
"Using @Autowired and @Qualifier",
"Using @Autowired and naming the field with the bean name",
"With the name attribute of @Autowired",
"Using only @Qualifier"
],
"answer": [
"Using @Autowired and @Qualifier",
"Using @Autowired and naming the field with the bean name"
],
"multi": true
},


{
"id": 20,
"question": "Special compiler used during weaving",
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
"question": "Method used to process bean before initialization callback",
"options": [
"scope",
"postProcessAfterInitialization()",
"postProcessBeforeInitialization()",
"its own constructor"
],
"answer": "postProcessAfterInitialization()"
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
"question": "Which tag is allowed by static field?",
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
"question": "Class used to have full access to the Spring context’s life cycle machinery and dependency injection.",
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
"question": "Element used to specify access attributes for bean’s methods.",
"options": [
"security:protect",
"security:intercept",
"security:intercept-security",
"none of the mentioned"
],
"answer": "security:intercept"
},

{
"id": 28,
"question": "State related to Spring Web flows",
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
"None"
],
"answer": "Yes with the TransactionTemplate class"
},

{
"id": 31,
"question": "How could you externalize constants from a Spring configuration file into a properties file?",
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
"JAR-303 standard",
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
"question": "Interface for Dispatcher Servlet to auto detect view resolver beans.",
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
"question": "By default, XmlViewResolver loads view beans from /WEB-INF/views.xml which is final.",
"options": [
"True",
"False"
],
"answer": "False"
},

{
"id": 37,
"question": "Views that can't be resolved by InternalResourceViewResolver.",
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
"answer": [
"publishing an application's data as a REST service",
"accessing data from third-party REST services"
],
"multi": true
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
"answer": [
"@RequestMapping",
"@PathVariable"
],
"multi": true
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
"A controller handler annotated with @ResponseStatus is overridden by RedirectView",
"The annotation can go on controller method or exception class"
],
"answer": "@ResponseStatus is detected on nested exceptions"
},

{
"id": 44,
"question": "Default localeResolver used by Spring.",
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
"question": "Annotation which allows the Jaxb2Marshaller marshaller to detect a class’s fields.",
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
"Using @Autowired and @Qualifier",
"Using @Autowired and naming the field with the bean name",
"Using name attribute of @Autowired",
"Using only @Qualifier"
],
"answer": [
"Using @Autowired and @Qualifier",
"Using @Autowired and naming the field with the bean name"
],
"multi": true
},

{
"id": 49,
"question": "Considering AccountServiceImpl and ClientServiceImpl, what is the result of the following pointcut expression?",
"options": [
"No joint point is defined",
"Matches public update methods of both classes",
"Matches any update methods of both classes",
"Matches update methods with arguments"
],
"answer": "No joint point is defined"
},

{
"id": 50,
"question": "ApplicationContext context = new ClassPathXmlApplicationContext(\"classpath:/com.example.myapp.config.xml\"); Which statement is correct?",
"options": [
"all of the above",
"classpath prefix could be omitted",
"Package name using dot is incorrect",
"Leading slash could be omitted"
],
"answer": "all of the above"
},

{
"id": 51,
"question": "Using Spring AOP framework, what is the visibility of the method matched by execution(* *(..))?",
"options": [
"Public methods",
"All methods",
"All except private",
"Protected and public"
],
"answer": "Public methods"
},

{
"id": 52,
"question": "Name of the bean defined in configuration class with @Bean ClientRepository clientRepository()",
"options": [
"clientRepository",
"JpaClientRepository",
"jpaClientRepository",
"Two beans are defined"
],
"answer": "clientRepository"
},

{
"id": 53,
"question": "Which of the following is true regarding the Spring controller with @RestController?",
"options": [
"RequestMethod.GET method is more accurate than POST",
"@ResponseBody could be removed",
"@PathVariable should be replaced",
"Returning 201 HTTP status code is better"
],
"answer": "RequestMethod.GET method is more accurate than POST"
},

{
"id": 54,
"question": "What is an advice in Spring AOP?",
"options": [
"An action taken by an aspect at a join point",
"A point during execution",
"An aspect and pointcut",
"A predicate that matches join points"
],
"answer": "An action taken by an aspect at a join point"
},

{
"id": 55,
"question": "What is the easiest method to write a unit test?",
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
"question": "Select method signature matching pointcut execution(* com.test.service..*.*(*))",
"options": [
"void com.test.service.MyServiceImpl.transfert(Money amount)",
"void com.test.service.account.MyServiceImpl.transfert(Money amount)",
"void com.test.service.MyServiceImpl.transfert(Account account, Money amount)",
"void com.test.service.account.MyServiceImpl.transfert(Account account, Money amount)"
],
"answer": "void com.test.service.MyServiceImpl.transfert(Money amount)"
},

{
"id": 57,
"question": "Given configuration <bean class=\"com.spring.service.BankServiceImpl\" p:bankName=\"NationalBank\"> which statement is correct?",
"options": [
"p namespace must be declared",
"NationalBank is scalar value",
"Bean id is bankServiceImpl",
"BankServiceImpl references NationalBank bean"
],
"answer": "p namespace must be declared"
},

{
"id": 58,
"question": "Given configuration class without @Configuration annotation, which is correct?",
"options": [
"Configuration annotation is missing",
"Default constructor missing",
"Bean name ambiguous",
"Bean scope prototype"
],
"answer": "Configuration annotation is missing"
},

{
"id": 59,
"question": "Using JdbcTemplate which class is used for result set parsing and merging rows into single object?",
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
"question": "To load root application context at startup.",
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
"question": "ActionSupport class provides a method to access spring’s application context.",
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
"question": "XML element to specify the property values for scripting bean",
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
"question": "Annotation used to declare an introduction",
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
"question": "DAO methods require access to the session factory, which can be injected:",
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
"question": "Which of the following Java Collection types can you inject in a Spring application?",
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
"question": "What are the various editors used in spring work?",
"options": [
"PropertyEditor ,URLEditor",
"ClassEditor, CustomDateEditor, StringTrimmerEditor",
"FileEditor, LocaleEditor, StringArrayPropertyEditor",
"All of the above"
],
"answer": "All of the above"
},

{
"id": 69,
"question": "How to use <ref> in spring framework?",
"options": [
"<ref> is used with bean id.",
"<ref> is used with string values."
],
"answer": "<ref> is used with bean id."
},

{
"id": 70,
"question": "How to define Inner bean in spring?",
"options": [
"Use <property/> only",
"Use <property/> or <constructor-arg/>."
],
"answer": "Use <property/> or <constructor-arg/>."
},

{
"id": 71,
"question": "Which property is replaced by c-namespace in spring?",
"options": [
"<property/>",
"<constructor-arg>"
],
"answer": "<constructor-arg>"
},

{
"id": 72,
"question": "By default a bean is eagerly initialized in spring?",
"options": [
"True",
"False"
],
"answer": "True"
},

{
"id": 73,
"question": "By default a bean is not autowired?",
"options": [
"True",
"False"
],
"answer": "False"
},

{
"id": 74,
"question": "Can the class which spring container makes subclass be final?",
"options": [
"No",
"Yes"
],
"answer": "No"
},

{
"id": 75,
"question": "What is the scope of stateful bean in spring?",
"options": [
"Singleton scope",
"Prototype scope"
],
"answer": "Prototype scope"
},

{
"id": 76,
"question": "In which spring scope is a single bean instance created per IoC container?",
"options": [
"Singleton scope",
"Request scope"
],
"answer": "Singleton scope"
},

{
"id": 77,
"question": "In which spring scope can any number of instances of bean be created?",
"options": [
"Request scope",
"Prototype scope"
],
"answer": "Prototype scope"
},

{
"id": 78,
"question": "When a bean has scope limited to only HTTP request, that is called",
"options": [
"Request scope",
"Session scope"
],
"answer": "Request scope"
},

{
"id": 79,
"question": "When a bean has scope limited to HTTP session, that is called",
"options": [
"Request scope",
"Session scope"
],
"answer": "Session scope"
},

{
"id": 80,
"question": "Thread scope bean has been introduced in spring from the version",
"options": [
"Spring 2.5",
"Spring 3.0"
],
"answer": "Spring 3.0"
},

{
"id": 81,
"question": "InitializingBean and DisposableBean is used to customize the nature of bean in spring.",
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
"It helps in decoupling application objects from each other.",
"It helps in deciding dependencies of objects.",
"It stores object states in database.",
"It stores object states in file system."
],
"answer": "It helps in decoupling application objects from each other."
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
"Model-Value-Class architecture",
"Provides model-view-controller architecture for web applications",
"Used for transaction management",
"Used for AOP web applications"
],
"answer": "Provides model-view-controller architecture for web applications"
},

{
"id": 86,
"question": "How to reload changes on Spring Boot without restarting server?",
"options": [
"spring-boot-devtools",
"spring-boot-test",
"spring-boot-web",
"spring-boot-jasper"
],
"answer": "spring-boot-devtools"
},

{
"id": 87,
"question": "Annotation to add security to your spring boot app?",
"options": [
"@EnableWebSecurity",
"@EnableSecurity",
"@EnableSpringSecurity"
],
"answer": "@EnableWebSecurity"
},

{
"id": 51,
"question": "What are the different implementations of Spring AOP?",
"options": [
"AspectJ",
"Spring AOP",
"JBoss AOP",
"All"
],
"answer": [
"AspectJ",
"Spring AOP",
"JBoss AOP"
],
"multi": true
},

{
"id": 89,
"question": "How Spring Batch works?",
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
},

{
"id": 91,
"question": "ArithmeticException and IOException are of which type?",
"options": [
"Runtime error",
"Compile time error",
"Logical error",
"None of the above"
],
"answer": "Runtime error"
},

{
"id": 92,
"question": "What is the sequence of Java servlet deployment descriptor?",
"options": [
"coding, compiling, deploying",
"compiling, coding, deploying",
"deploying, coding, compiling",
"coding, deploying, compiling"
],
"answer": "coding, compiling, deploying"
},

{
"id": 93,
"question": "Which is used to submit query?",
"options": [
"ResultSet",
"Statement",
"Connection",
"PreparedStatement"
],
"answer": "Statement"
},

{
"id": 94,
"question": "Abstract method doesn't follow which statement?",
"options": [
"It instantiates its object",
"Abstract class should have at least one abstract method",
"None of the above"
],
"answer": "It instantiates its object"
},

{
"id": 95,
"question": "What are the implicit objects in JSP?",
"options": [
"page",
"this",
"page and this",
"none"
],
"answer": "page and this"
},

{
"id": 96,
"question": "Valid HTTP status codes are:",
"options": [
"100-199",
"200-299",
"300-399",
"400-499"
],
"answer": "200-299"
},

{
"id": 97,
"question": "Super class of all classes in Java?",
"options": [
"Object",
"Class",
"Thread",
"System"
],
"answer": "Object"
},

{
"id": 98,
"question": "Which thread method defined all threads?",
"options": [
"daemon",
"run",
"start",
"sleep"
],
"answer": "daemon"
},

{
"id": 99,
"question": "JDBC belongs to which package?",
"options": [
"java.io",
"java.sql",
"java.net",
"java.jdbc"
],
"answer": "java.sql"
},

{
"id": 100,
"question": "Which is not a primitive datatype?",
"options": [
"int",
"double",
"string",
"char"
],
"answer": "string"
},
{
"id": 101,
"question": "println belongs to which class?",
"options": [
"PrintWriter",
"PrintStream",
"System",
"OutputStream"
],
"answer": "PrintStream"
},

{
"id": 102,
"question": "Void method does not return:",
"options": [
"value",
"object",
"class",
"reference"
],
"answer": "value"
},

{
"id": 103,
"question": "Which method reverses the string?",
"options": [
"reverse()",
"flip()",
"back()",
"invert()"
],
"answer": "reverse()"
},

{
"id": 104,
"question": "Session belongs to which class?",
"options": [
"HttpServletRequest",
"HttpSession",
"ServletContext",
"ServletRequest"
],
"answer": "HttpServletRequest"
},

{
"id": 105,
"question": "Frame has default border type and panel has default layout type?",
"options": [
"BorderLayout and FlowLayout",
"GridLayout and BorderLayout",
"FlowLayout and GridLayout",
"CardLayout and BorderLayout"
],
"answer": "BorderLayout and FlowLayout"
},

{
"id": 106,
"question": "Which interface is used to connect database to application?",
"options": [
"JDBC",
"ODBC",
"Servlet",
"JSP"
],
"answer": "JDBC"
},

{
"id": 107,
"question": "List of file returns what?",
"options": [
"Array of string",
"Array of integer",
"String",
"Object"
],
"answer": "Array of string"
},

{
"id": 108,
"question": "Which is a valid declaration?",
"options": [
"public void int A()",
"public int test2(int o)",
"public void test int(int i,intj)",
"none"
],
"answer": "public int test2(int o)"
},

{
"id": 109,
"question": "Output of the code: static int x; System.out.println(x);",
"options": [
"0",
"null",
"error",
"1"
],
"answer": "0"
},

{
"id": 110,
"question": "Which is not a directive in JSP?",
"options": [
"page",
"include",
"taglib",
"scriptlet"
],
"answer": "scriptlet"
},

{
"id": 111,
"question": "JSP syntax types include:",
"options": [
"scriptlet, expression, directive",
"script, function, directive",
"method, expression, script",
"tag, class, script"
],
"answer": "scriptlet, expression, directive"
},

{
"id": 112,
"question": "Output of <jsp:useBean id=\"name\" class=\"java.lang.String\"><%=name%>",
"options": [
"prints 0",
"prints null",
"compile time error",
"none"
],
"answer": "prints null"
},

{
"id": 113,
"question": "Which invoke method prints base class constructor?",
"options": [
"this()",
"super()",
"super(10)",
"base()"
],
"answer": "super(10)"
},

{
"id": 114,
"question": "How session object can be destroyed?",
"options": [
"invalidate()",
"destroy()",
"remove()",
"delete()"
],
"answer": "invalidate()"
},

{
"id": 115,
"question": "JSP output: <%!int i=8%> <%int i=10%> <%=i%>",
"options": [
"prints 8",
"prints 10",
"prints both",
"error"
],
"answer": "prints 10"
},

{
"id": 116,
"question": "Class.forName() throws which exception?",
"options": [
"IOException",
"ClassNotFoundException",
"SQLException",
"RuntimeException"
],
"answer": "ClassNotFoundException"
},

{
"id": 117,
"question": "seek method is used in RandomAccessFile to:",
"options": [
"read file",
"write file",
"specify new file position",
"close file"
],
"answer": "specify new file position"
},

{
"id": 118,
"question": "Output of static int i = 012; System.out.println(i);",
"options": [
"10",
"12",
"8",
"error"
],
"answer": "10"
},

{
"id": 119,
"question": "How will you create copy of same object?",
"options": [
"clone()",
"copy()",
"duplicate()",
"replicate()"
],
"answer": "clone()"
},

{
"id": 120,
"question": "How does applet communicate with browser?",
"options": [
"init and destroy",
"init and document",
"init and database document",
"init and start"
],
"answer": "init and database document"
},

{
"id": 141,
"question": "Which method is used to separate parameters in URL when using GET method?",
"options": [
"&",
"?",
"/",
"#"
],
"answer": "&"
},

{
"id": 142,
"question": "Which symbol separates path and parameters in URL for GET method?",
"options": [
"&",
"?",
"/",
"#"
],
"answer": "?"
},

{
"id": 143,
"question": "What is the output when thread name is changed using setName?",
"options": [
"thread[new thread,5,main]",
"thread[main,5,new thread]",
"thread[new thread]",
"runtime error"
],
"answer": "thread[new thread,5,main]"
},

{
"id": 144,
"question": "Which code correctly creates and starts a Runnable thread?",
"options": [
"new Thread(new MyRunnable()).start()",
"new MyRunnable().start()",
"Thread.start(new MyRunnable())",
"Runnable.start()"
],
"answer": "new Thread(new MyRunnable()).start()"
},

{
"id": 145,
"question": "Consider the following classes:\n\nclass Mammal {}\nclass Raccoon extends Mammal {\n Mammal m = new Mammal();\n}\nclass BabyRaccoon extends Mammal {}\n\nWhich four statements are true?",
"options": [
"A. Raccoon is-a Mammal",
"B. Raccoon has-a Mammal",
"C. BabyRaccoon is-a Mammal",
"D. BabyRaccoon is-a Raccoon",
"E. BabyRaccoon has-a Mammal",
"F. BabyRaccoon is-a BabyRaccoon"
],
"answer": [
"A. Raccoon is-a Mammal",
"B. Raccoon has-a Mammal",
"C. BabyRaccoon is-a Mammal",
"F. BabyRaccoon is-a BabyRaccoon"
],
"multi": true
},

{
"id": 146,
"question": "Output of ByteArrayInputStream uppercase example with 'abc'?",
"options": [
"ABC",
"abc",
"Abc",
"error"
],
"answer": "ABC"
},

{
"id": 147,
"question": "Output of StringBuffer insert example inserting 'Good ' at index 6 in 'Hello World'?",
"options": [
"HelloGoodWorld",
"HellGoodoWorld",
"HellGood oWorld",
"Hello Good World"
],
"answer": "Hello Good World"
},

{
"id": 148,
"question": "Which keyword cannot be used with a final class?",
"options": [
"abstract",
"extends",
"abstract and extends",
"None"
],
"answer": "abstract"
},

{
"id": 149,
"question": "Output of sos('1'+new Integer(2)+3);",
"options": [
"123",
"6",
"error",
"12"
],
"answer": "123"
},

{
"id": 150,
"question": "Output when array value copied and original array modified?",
"options": [
"6",
"10",
"0",
"error"
],
"answer": "6"
},

{
"id": 151,
"question": "HTTPServlet sendError method corresponds to which status code?",
"options": [
"SC_OK",
"SC_MOVED_TEMPORARILY",
"SC_NOT_FOUND",
"SC_INTERNAL_SERVER_ERROR"
],
"answer": "SC_NOT_FOUND"
},

{
"id": 152,
"question": "sendRedirect method corresponds to which HTTP status?",
"options": [
"SC_OK",
"SC_MOVED_TEMPORARILY",
"SC_NOT_FOUND",
"SC_INTERNAL_SERVER_ERROR"
],
"answer": "SC_MOVED_TEMPORARILY"
},

{
"id": 153,
"question": "Which design issue occurs when internal methods are accessible outside utility class?",
"options": [
"Tight coupling",
"Low cohesion",
"Weak encapsulation",
"Strong encapsulation"
],
"answer": "Weak encapsulation"
},

{
"id": 154,
"question": "Which collection operation is used in stack?",
"options": [
"push and pop",
"insert delete",
"enqueue dequeue",
"add remove"
],
"answer": "push and pop"
},

{
"id": 155,
"question": "Cloud Foundry deployment command?",
"options": [
"cf push",
"cf deploy",
"cf run",
"cf start"
],
"answer": "cf push"
},

{
"id": 156,
"question": "Which listener tracks number of users in session?",
"options": [
"HttpSessionListener",
"ServletContextListener",
"ServletRequestListener",
"HttpSessionAttributeListener"
],
"answer": "HttpSessionListener"
},

{
"id": 157,
"question": "Output of try block dividing by zero with ArithmeticException catch printing World?",
"options": [
"Hello",
"World",
"HelloWorld",
"Hello World"
],
"answer": "World"
},

{
"id": 158,
"question": "Correct JDBC connection sequence?",
"options": [
"1,2,3,4",
"1,3,4,2",
"2,1,3,4",
"4,1,2,3"
],
"answer": "1,3,4,2"
},

{
"id": 159,
"question": "FileInputStream available() returns:",
"options": [
"true",
"false",
"number of bytes in file",
"number of characters"
],
"answer": "number of bytes in file"
},

{
"id": 160,
"question": "Which method reads from file?",
"options": [
"get()",
"read()",
"scan()",
"readFileInput()"
],
"answer": "read()"
},

{
"id": 161,
"question": "Which HTTP method is not valid?",
"options": [
"CONNECT",
"COMPARE",
"OPTIONS",
"TRACE"
],
"answer": "COMPARE"
},

{
"id": 162,
"question": "Location of compiled classes inside WAR file?",
"options": [
"/META-INF/classes",
"/classes",
"/WEB-INF/classes",
"/root/classes"
],
"answer": "/WEB-INF/classes"
},
{
"id": 163,
"question": "After executing 'docker swarm leave', which command confirms the node has left the cluster?",
"options": [
"docker system info",
"docker node ls",
"docker swarm status",
"docker cluster info"
],
"answer": "docker system info"
},

{
"id": 164,
"question": "Which command checks disk usage of Docker images, containers, and volumes?",
"options": [
"docker system df",
"docker disk usage",
"docker image ls",
"docker stats"
],
"answer": "docker system df"
},

{
"id": 165,
"question": "Which Dockerfile instruction initializes a new build stage and sets the base image?",
"options": [
"RUN",
"FROM",
"COPY",
"CMD"
],
"answer": "FROM"
},

{
"id": 166,
"question": "Which command automatically creates a volume when starting a container?",
"options": [
"docker container run --volume",
"docker volume create",
"docker container volume add",
"docker run --storage"
],
"answer": "docker container run --volume"
},

{
"id": 167,
"question": "Docker command to add or update a published port in a service?",
"options": [
"docker service publish",
"docker service update --publish-add",
"docker port add",
"docker expose"
],
"answer": "docker service update --publish-add"
},

{
"id": 168,
"question": "Which service mode deploys a single task of a service to each node?",
"options": [
"Replicated",
"Global",
"Single",
"Node"
],
"answer": "Global"
},

{
"id": 169,
"question": "Which description best fits a DaemonSet?",
"options": [
"A pod running on a single node",
"A copy of a pod running on all or some nodes",
"A pod cluster manager",
"A Kubernetes service"
],
"answer": "A copy of a pod running on all or some nodes"
},

{
"id": 170,
"question": "Docker command to connect a running container to an existing network?",
"options": [
"docker network attach",
"docker network connect",
"docker connect network",
"docker container network"
],
"answer": "docker network connect"
},

{
"id": 171,
"question": "Docker command to inspect network details?",
"options": [
"docker network inspect",
"docker network show",
"docker inspect network",
"docker network view"
],
"answer": "docker network inspect"
},

{
"id": 172,
"question": "In Kubernetes, a node is:",
"options": [
"A worker machine",
"A container",
"A service",
"A cluster controller"
],
"answer": "A worker machine"
},

{
"id": 173,
"question": "Default output format of docker inspect?",
"options": [
"XML",
"JSON",
"YAML",
"TEXT"
],
"answer": "JSON"
},

{
"id": 174,
"question": "What is a label in Kubernetes?",
"options": [
"A service",
"A configuration file",
"A key/value pair used to group objects",
"A container image"
],
"answer": "A key/value pair used to group objects"
},

{
"id": 175,
"question": "Docker command to find logging driver of a running container?",
"options": [
"docker inspect",
"docker logs",
"docker info",
"docker stats"
],
"answer": "docker inspect"
},

{
"id": 176,
"question": "Docker command to view current storage driver?",
"options": [
"docker storage",
"docker driver",
"docker info",
"docker inspect"
],
"answer": "docker info"
},

{
"id": 177,
"question": "What does docker image prune do?",
"options": [
"Removes stopped containers",
"Removes unused images",
"Removes volumes",
"Removes networks"
],
"answer": "Removes unused images"
},

{
"id": 178,
"question": "Which Kubernetes component assigns nodes to pods based on resources?",
"options": [
"Controller",
"Scheduler",
"Proxy",
"Kubelet"
],
"answer": "Scheduler"
},

{
"id": 179,
"question": "What can be deployed on Kubernetes?",
"options": [
"Virtual machines",
"Containers",
"Databases",
"Drivers"
],
"answer": "Containers"
},

{
"id": 180,
"question": "Which command creates a Kubernetes service?",
"options": [
"kubectl run",
"kubectl expose",
"kubectl create pod",
"kubectl start service"
],
"answer": "kubectl expose"
},

{
"id": 181,
"question": "What is the function of a node in Kubernetes?",
"options": [
"Manage cluster policies",
"Run pods assigned by master components",
"Store cluster state",
"Control scheduling"
],
"answer": "Run pods assigned by master components"
},

{
"id": 182,
"question": "OpenShift is based on which orchestration platform?",
"options": [
"Docker Swarm",
"Mesos",
"Kubernetes",
"Nomad"
],
"answer": "Kubernetes"
},

{
"id": 183,
"question": "What is a Pod in Kubernetes?",
"options": [
"A container image",
"A group of containers sharing storage and network",
"A Kubernetes node",
"A network driver"
],
"answer": "A group of containers sharing storage and network"
},

{
"id": 184,
"question": "Which object ensures every node runs a copy of a pod?",
"options": [
"ReplicaSet",
"DaemonSet",
"StatefulSet",
"Deployment"
],
"answer": "DaemonSet"
},

{
"id": 185,
"question": "What is a Kubernetes volume?",
"options": [
"A container image",
"A persistent storage driver",
"A directory accessible to containers in a pod",
"A cluster storage service"
],
"answer": "A directory accessible to containers in a pod"
},

{
"id": 186,
"question": "Command to remove cluster-admin role from a user in OpenShift?",
"options": [
"oc remove admin",
"oc adm policy remove-cluster-role-from-user",
"oc policy remove-user",
"oc delete role"
],
"answer": "oc adm policy remove-cluster-role-from-user"
},

{
"id": 187,
"question": "What is kubelet?",
"options": [
"A container runtime",
"A node agent managing pods",
"A Kubernetes API",
"A scheduler"
],
"answer": "A node agent managing pods"
},

{
"id": 188,
"question": "What is the purpose of etcd in Kubernetes?",
"options": [
"Run containers",
"Store cluster data and state",
"Schedule pods",
"Manage networking"
],
"answer": "Store cluster data and state"
},

{
"id": 189,
"question": "Docker command to increase number of replicas?",
"options": [
"docker service scale",
"docker scale",
"docker replica add",
"docker update replicas"
],
"answer": "docker service scale"
},

{
"id": 190,
"question": "Docker command to show image layer history?",
"options": [
"docker layers",
"docker image history",
"docker history",
"docker inspect layers"
],
"answer": "docker history"
},

{
"id": 191,
"question": "What is the result of running 'kubectl exec -ti my-pod-name bash'?",
"options": [
"Deletes the pod",
"Opens a console on the first container inside the pod",
"Creates a new container",
"Restarts the pod"
],
"answer": "Opens a console on the first container inside the pod"
},

{
"id": 192,
"question": "Which Docker commands can be used to find all port mappings?",
"options": [
"docker inspect",
"docker ps",
"docker port",
"All of the above"
],
"answer": [
"docker inspect",
"docker ps",
"docker port"
],
"multi": true
},

{
"id": 193,
"question": "What does Dockerfile LABEL instruction do?",
"options": [
"Creates container",
"Adds metadata to an image",
"Starts container",
"Deletes image"
],
"answer": "Adds metadata to an image"
},

{
"id": 194,
"question": "At its core Kubernetes is a platform for:",
"options": [
"Running container applications on a cluster",
"Running databases",
"Managing networks",
"Running virtual machines"
],
"answer": "Running container applications on a cluster"
},

{
"id": 195,
"question": "Which command shows volumes used by a container?",
"options": [
"docker inspect",
"docker volume list",
"docker container volume",
"docker volume inspect"
],
"answer": "docker inspect"
},

{
"id": 196,
"question": "Docker command used to update an existing service?",
"options": [
"docker service change",
"docker service update",
"docker update service",
"docker service modify"
],
"answer": "docker service update"
},

{
"id": 197,
"question": "What runs on each node to ensure containers are running in a pod?",
"options": [
"kubelet",
"kube-proxy",
"Scheduler",
"Controller"
],
"answer": "kubelet"
},

{
"id": 198,
"question": "What does Dockerfile EXPOSE instruction do?",
"options": [
"Runs container",
"Informs Docker that container listens on a port",
"Starts network",
"Creates port mapping automatically"
],
"answer": "Informs Docker that container listens on a port"
},

{
"id": 199,
"question": "What happens when using -P option with docker run?",
"options": [
"Binds container ports to random host ports",
"Binds container ports to fixed ports",
"Closes ports",
"Exposes only internal ports"
],
"answer": "Binds container ports to random host ports"
},

{
"id": 200,
"question": "What is the difference between ADD and COPY in Dockerfile?",
"options": [
"ADD supports remote URL while COPY does not",
"COPY supports URL while ADD does not",
"Both are identical",
"Neither copies files"
],
"answer": "ADD supports remote URL while COPY does not"
},

{
"id": 201,
"question": "What is a cluster in container orchestration?",
"options": [
"A single server",
"A system made up of several machines working together",
"A container",
"A storage driver"
],
"answer": "A system made up of several machines working together"
},

{
"id": 202,
"question": "Which command displays Docker configuration on host?",
"options": [
"docker inspect",
"docker info",
"docker config",
"docker host"
],
"answer": "docker info"
},

{
"id": 203,
"question": "Which command provides edit access to developers group in OpenShift?",
"options": [
"oc add role developers",
"oc adm policy add-role-to-group edit developers -n develop",
"oc group edit developers",
"oc role add developers"
],
"answer": "oc adm policy add-role-to-group edit developers -n develop"
},

{
"id": 204,
"question": "Default port used to access WebSphere Application Server console?",
"options": [
"8080",
"9043",
"9080",
"7001"
],
"answer": "9080"
},

{
"id": 205,
"question": "What is proxy service used for?",
"options": [
"Store data",
"Act as intermediary between endpoint servers",
"Run containers",
"Manage cluster"
],
"answer": "Act as intermediary between endpoint servers"
},

{
"id": 206,
"question": "Which servers run Kubernetes control components in OpenShift?",
"options": [
"Workers",
"Nodes",
"Masters",
"Containers"
],
"answer": "Masters"
},

{
"id": 207,
"question": "Which resource sets default resource request and limits for containers?",
"options": [
"LimitRange",
"Quota",
"ReplicaSet",
"Service"
],
"answer": "LimitRange"
},

{
"id": 208,
"question": "Docker command to create a bridge network?",
"options": [
"docker network add",
"docker network create",
"docker network bridge",
"docker bridge create"
],
"answer": "docker network create"
},

{
"id": 209,
"question": "Purpose of ReplicaSet in Kubernetes?",
"options": [
"Manage nodes",
"Duplicate pods and maintain replicas",
"Manage networking",
"Store logs"
],
"answer": "Duplicate pods and maintain replicas"
},

{
"id": 210,
"question": "Which is not a valid way to tag a Docker image?",
"options": [
"Tag by image name",
"Tag by repository",
"Tag by image ID",
"Tag by version"
],
"answer": "Tag by image ID"
},

{
"id": 211,
"question": "Mission of Kubernetes control plane?",
"options": [
"Run containers",
"Regulate communication between cluster components",
"Store application logs",
"Manage Docker images"
],
"answer": "Regulate communication between cluster components"
},

{
"id": 212,
"question": "Service mode used to deploy a single task to each node?",
"options": [
"Replicated",
"Global",
"Single",
"Distributed"
],
"answer": "Global"
},
  {
    "id": 1,
    "question": "Let has block scope?",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 2,
    "question": "what does <aside> tag in html do?",
    "options": [
      "aside the content of the page",
      "Defines tangential content like sidebars",
      "Wraps the main article content",
      "Provides footer metadata"
    ],
    "answer": "aside the content of the page"
  },
  {
    "id": 3,
    "question": "Which class in Bootstrap is used to provide a responsive fixed width container?",
    "options": [
      ".Container",
      ".container",
      ".container-fixed",
      ".container-fluid"
    ],
    "answer": ".Container"
  },
  {
    "id": 4,
    "question": "Which is the correct syntax of creating a standard navigation tab?",
    "options": [
      "<ul class=\"nav nav-tabs\">",
      "<ul class=\"navbar tabs\">",
      "<nav class=\"nav-tabs\">",
      "<tabs class=\"nav\">"
    ],
    "answer": "<ul class=\"nav nav-tabs\">"
  },
  {
    "id": 5,
    "question": "In Bootstrap, the class .img-circle is used to turn an image into a circle.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 6,
    "question": "In Java, which class type supports sequential and parallel processing of data?",
    "options": [
      "Streams",
      "Collections",
      "Arrays",
      "Threads"
    ],
    "answer": "Streams"
  },
  {
    "id": 7,
    "question": "What is the replacement for PermGen space in Java 8?",
    "options": [
      "Metaspace",
      "OldGen",
      "CodeCache",
      "DirectBuffer"
    ],
    "answer": "Metaspace"
  },
  {
    "id": 8,
    "question": "Java Functional Interface can be defined as _____.",
    "options": [
      "Single Abstract Method",
      "Multiple Abstract Methods",
      "No Methods",
      "Interface with default class"
    ],
    "answer": "Single Abstract Method"
  },
  {
    "id": 9,
    "question": "Where in an HTML document is the correct place to refer to an external style sheet?",
    "options": [
      "Head section",
      "Body section",
      "Before </html>",
      "In a <script> tag"
    ],
    "answer": "Head section"
  },
  {
    "id": 10,
    "question": "Which represents the correct way to implement a functional interface in Java?",
    "options": [
      "interface MyFunctionalInterface { }",
      "class MyFunctionalInterface { }",
      "new MyFunctionalInterface();",
      "interface MyFunctionalInterface();"
    ],
    "answer": "interface MyFunctionalInterface { }"
  },
  {
    "id": 11,
    "question": "In javascript const declares block scoped?",
    "options": [
      "true",
      "false",
      "only in strict mode",
      "only in modules"
    ],
    "answer": "true"
  },
  {
    "id": 12,
    "question": "What is React in MVC?",
    "options": [
      "Controller",
      "Model",
      "View",
      "Router"
    ],
    "answer": "Controller"
  },
  {
    "id": 13,
    "question": "How can you access the state of a component from inside a member function in React?",
    "options": [
      "this.getState()",
      "this.state()",
      "state.get()",
      "this.readState()"
    ],
    "answer": "this.getState()"
  },
  {
    "id": 14,
    "question": "Which API is a MUST for every React component?",
    "options": [
      "renderComponent",
      "renderToString",
      "componentDidMount",
      "getInitialState"
    ],
    "answer": "renderComponent"
  },
  {
    "id": 15,
    "question": "MongoDB database can be accessed using Spring Data.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 16,
    "question": "Which stands true for Spring beans?",
    "options": [
      "All of the Above",
      "Only Singleton scope is allowed",
      "Beans cannot be injected",
      "Beans must be final"
    ],
    "answer": "All of the Above"
  },
  {
    "id": 17,
    "question": "What is true about list collection configuration elements?",
    "options": [
      "wiring list of values and allowing duplicates.",
      "No duplicates allowed",
      "Only primitive values allowed",
      "Order is not preserved"
    ],
    "answer": "wiring list of values and allowing duplicates."
  },
  {
    "id": 18,
    "question": "What is default scope of bean in Spring framework?",
    "options": ["Singleton", "Prototype", "Request", "Session"],
    "answer": "Singleton"
  },
  {
    "id": 19,
    "question": "REST service endpoint comprises of which address?",
    "options": [
      "Starts with http:// and may end with ?",
      "Always starts with ftp://",
      "Must end with /api",
      "Only https:// is valid"
    ],
    "answer": "Starts with http:// and may end with ?"
  },
  {
    "id": 20,
    "question": "What tag is used to get a bulleted list?",
    "options": ["<ul>", "<ol>", "<li>", "<list>"],
    "answer": "<ul>"
  },
  {
    "id": 21,
    "question": "What tag is used to get an ordered list?",
    "options": ["<ol>", "<ul>", "<li>", "<order>"],
    "answer": "<ol>"
  },
  {
    "id": 22,
    "question": "React is service side rendering.",
    "options": ["True", "False", "not sure"],
    "answer": "not sure"
  },
  {
    "id": 23,
    "question": "What are the different types of autowire?",
    "options": ["bytype", "byname", "constructor", "autodetect"],
    "answer": "bytype"
  },
  {
    "id": 24,
    "question": "Which command will NOT work after initializing git repository?",
    "options": [
      "git add git-quiz.html",
      "git status",
      "git add .",
      "git commit -m \"git quiz web file added\""
    ],
    "answer": "git commit -m \"git quiz web file added\""
  },
  {
    "id": 25,
    "question": "Which event occurs when the user clicks on the HTML element?",
    "options": ["onmouseover", "onchange", "onmouseclick", "onclick"],
    "answer": "onclick"
  },
  {
    "id": 26,
    "question": "Which API calls provide security information?",
    "options": ["Only 1", "Only 2", "Both i and ii"],
    "answer": "Both i and ii"
  },
  {
    "id": 27,
    "question": "What is used to dispatch requests to the WEB Application?",
    "options": ["DispatchherServlet", "ViewHandler", "ViewResolver"],
    "answer": "DispatchherServlet"
  },
  {
    "id": 28,
    "question": "By default, a bean is lazily loaded in Spring.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "id": 29,
    "question": "Which one is NOT a spring data MongoDB annotation?",
    "options": ["@Document", "@Field", "@Entity", "@Query"],
    "answer": "@Entity"
  },
  {
    "id": 30,
    "question": "Service discovery tools help processes communicate in cluster.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 31,
    "question": "Angular local HTML reference variable starts with?",
    "options": ["@", "#", "“", "&"],
    "answer": "#"
  },
  {
    "id": 32,
    "question": "How to add search bar using bootstrap?",
    "options": [
      "<class= \"gly.. Gly..\">",
      "<input class=\"form-control\" type=\"search\">",
      "<div class=\"input-group\">",
      "<form class=\"d-flex\">"
    ],
    "answer": "<class= \"gly.. Gly..\">"
  },
  {
    "id": 33,
    "question": "React is two-way binding?",
    "options": ["True", "False", "Longest option"],
    "answer": "Longest option"
  },
  {
    "id": 34,
    "question": "Line can be break using?",
    "options": [
      "<br>",
      "<lb>",
      "<break>",
      "<newline>"
    ],
    "answer": "<br>"
  },
  {
    "id": 35,
    "question": "Overriding can be done in?",
    "options": ["polymorphism", "Abstraction", "Inheritence", "Encapsulation"],
    "answer": "polymorphism"
  },
  {
    "id": 36,
    "question": "What theorem or principal MongoDB follows?",
    "options": [
      "capped-->opn D",
      "ACID strictly",
      "PACELC",
      "BASE only"
    ],
    "answer": "capped-->opn D"
  },
  {
    "id": 37,
    "question": "Method to remove single item from MongoDB collection?",
    "options": [
      "deleteOne()",
      "removeOne()",
      "delete()",
      "dropOne()"
    ],
    "answer": "deleteOne()"
  },
  {
    "id": 38,
    "question": "Angular service for dynamic mode navigation?",
    "options": ["Routing", "RouterService", "RoutingService", "Router"],
    "answer": "Router"
  },
  {
    "id": 39,
    "question": "Method used to add/remove items in JavaScript?",
    "options": [
      "splice()",
      "slice()",
      "pushpop()",
      "modify()"
    ],
    "answer": "splice()"
  },
  {
    "id": 40,
    "question": "JavaScript method like mathematical 'for all' quantifier?",
    "options": ["every()", "some()", "all()", "forall()"],
    "answer": "every()"
  },
  {
    "id": 41,
    "question": "Command line tool introduced for JS engine in Java 8?",
    "options": ["jjs", "jss", "jfs", "jbd"],
    "answer": "jjs"
  },
  {
    "id": 42,
    "question": "MongoDB method that returns one document?",
    "options": ["findOne()", "findOne1()", "selectOne()"],
    "answer": "findOne()"
  },
  {
    "id": 43,
    "question": "Output of Java StringJoiner snippet?",
    "options": ["(A-B-C)", "(A)-(B)-(C)", "(-A-)(-B-)(-C-)"],
    "answer": "(A-B-C)"
  },
  {
    "id": 44,
    "question": "Media query applicable for 768px?",
    "options": [
      "@media only screen and (min-width: 1140px){}",
      "@media only screen and (min-width: 641px){}",
      "@media only screen and (max-width: 1140px){}"
    ],
    "answer": "@media only screen and (min-width: 641px){}"
  },
  {
    "id": 45,
    "question": "Which rule allows users to import style rules from other style sheets?",
    "options": ["@media", "@important", "@import", "@style"],
    "answer": "@import"
  },
  {
    "id": 46,
    "question": "Which class indicates a dropdown menu?",
    "options": [".dropdown-list", ".select", ".dropdown"],
    "answer": ".dropdown"
  },
  {
    "id": 47,
    "question": "Relationship between JavaScript and ECMAScript?",
    "options": [
      "ECMAScript is a standard that JavaScript implements.",
      "They are different terms for the same thing.",
      "JavaScript is a standard that ECMAScript implements.",
      "JavaScript is an old term for what is now called ECMAScript."
    ],
    "answer": "ECMAScript is a standard that JavaScript implements."
  },
  {
    "id": 48,
    "question": "Syntax for variable number of arguments in JavaScript?",
    "options": [
      "function([]numbers) { }",
      "function(*numbers) { }",
      "function(...numbers) { }",
      "function(numbers[]) { }"
    ],
    "answer": "function(...numbers) { }"
  },
  {
    "id": 49,
    "question": "React form main action attribute?",
    "options": ["onSubmit", "onChange", "onComplete"],
    "answer": "onSubmit"
  },
  {
    "id": 50,
    "question": "Behavior shared between components using?",
    "options": ["propTypes", "state", "mixins", "props"],
    "answer": "mixins"
  },
  {
    "id": 51,
    "question": "Function that creates React components?",
    "options": [
      "React.component.extend",
      "React.createComponent",
      "React.renderComponent",
      "React.createClass"
    ],
    "answer": "React.createClass"
  },
  {
    "id": 52,
    "question": "Correct annotation among transaction variants?",
    "options": ["transaction", "transactions", "transactional"],
    "answer": "transaction"
  },
  {
    "id": 53,
    "question": "Annotation to indicate minimum 2 characters?",
    "options": ["@NotNull", "@Size", "@MaxSize", "@size"],
    "answer": "@Size"
  },
  {
    "id": 54,
    "question": "Views not resolved by InternalResourceViewResolver?",
    "options": ["redirect", "redirect:prefix", "redirect:suffix", "all of the mentioned"],
    "answer": "redirect"
  },
  {
    "id": 55,
    "question": "Alternative way to resolve locales?",
    "options": [
      "AcceptHeaderLocale",
      "AcceptHeader",
      "AcceptHeaderLocaleResolver",
      "SessionLocaleResolver"
    ],
    "answer": "SessionLocaleResolver"
  },
  {
    "id": 56,
    "question": "General-purpose class to render response using marshaller?",
    "options": ["MarshallingView", "Marshaling", "View", "All of the mentioned"],
    "answer": "MarshallingView"
  },
  {
    "id": 57,
    "question": "Spring class for result set parsing and merging rows?",
    "options": ["ResultSetExtractor", "RowMapper", "RowCallbackHandler", "ResultSetMapper"],
    "answer": "RowMapper"
  },
  {
    "id": 58,
    "question": "Class used to call Stored Procedures in Spring?",
    "options": ["SPHelper", "JdbcTemplateCall", "JdbcTemplate", "SimpleJdbcCall"],
    "answer": "SimpleJdbcCall"
  },
  {
    "id": 59,
    "question": "By default a bean is eagerly loaded.",
    "options": ["False", "True"],
    "answer": "True"
  },
  {
    "id": 60,
    "question": "By default a bean is lazily loaded.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "id": 61,
    "question": "How to handle shutdown of IoC containers?",
    "options": ["Using shutdownHook()", "Using shutdownHandler()", "Using registerHook()", "Using registerShutdownHook()"],
    "answer": "Using registerShutdownHook()"
  },
  {
    "id": 62,
    "question": "DEVOPS IS SUITABLE FOR STARTUP COMPANIES, SMALL COMPANIES.",
    "options": [
      "True",
      "False",
      "Only for large enterprises",
      "Only for on-prem systems"
    ],
    "answer": "True"
  },
  {
    "id": 63,
    "question": "Option A mentioned in learning Angular/React?",
    "options": [
      "/Actuator",
      "/Health",
      "/Metrics",
      "/Info"
    ],
    "answer": "/Actuator"
  },
  {
    "id": 64,
    "question": "Option A mentioned in learning Angular/React?",
    "options": [
      "http:/",
      "https:/",
      "file:/",
      "ws:/"
    ],
    "answer": "http:/"
  },
  {
    "id": 65,
    "question": "Slideshow in html?",
    "options": [".carousel (bootstrap)", ".mySlides(css)"],
    "answer": ".carousel (bootstrap)"
  },










  {
    "id": 1,
    "question": "We need to tell AngularJS what part of our HTML page contains the AngularJS app. This is done by adding which attribute to the root HTML element?",
    "options": ["ng-app", "g-app", "js-app", "ng-ary"],
    "answer": "ng-app"
  },
  {
    "id": 2,
    "question": "AngularJS can show or hide HTML depending on the state of data in the model using which directives?",
    "options": ["ng-show, ng-hidden", "ng-show, ng-hide", "ng-hide, ng-visible", "ng-shows, ng-hides"],
    "answer": "ng-show, ng-hide"
  },
  {
    "id": 3,
    "question": "EventEmitter class interface basically encompasses two methods that can be used to trigger custom events and listen to events.",
    "options": ["emit()", "subscribe()", "emit() and subscribe()", "listen()"],
    "answer": "emit() and subscribe()"
  },
  {
    "id": 4,
    "question": "Which directive substitutes the normal href property and makes it easier to work with route links in Angular?",
    "options": ["RouterLinks", "RouterLinking", "RouterLink", "RouterLing"],
    "answer": "RouterLink"
  },
  {
    "id": 5,
    "question": "The main components of Routing are ______.",
    "options": ["RouterObject", "RouterOutlet", "RouterState", "RouterLink"],
    "answer": "RouterOutlet"
  },
  {
    "id": 6,
    "question": "Route ______ allows us to pass values in our URL to our component so we can dynamically change our view content.",
    "options": ["pipes", "modules", "variables", "parameters"],
    "answer": "parameters"
  },
  {
    "id": 7,
    "question": "To use observables, Angular uses a third-party library called ______.",
    "options": ["ng2-bootstrap", "angular-cli", "numeral", "Reactive Extensions (RxJS)"],
    "answer": "Reactive Extensions (RxJS)"
  },
  {
    "id": 8,
    "question": "Observables help you manage ______ data.",
    "options": ["synchronous", "asynchronous", "both synchronous and asynchronous", "none of the above"],
    "answer": "asynchronous"
  },
  {
    "id": 9,
    "question": "We subscribe to the observable using which method?",
    "options": ["subscribe()", "watch()", "listen()", "observe()"],
    "answer": "subscribe()"
  },
  {
    "id": 10,
    "question": "A promise represents the final result of an ______ operation.",
    "options": ["asynchronous", "synchronous"],
    "answer": "asynchronous"
  },
  {
    "id": 11,
    "question": "The promise becomes ______ after resolving or rejecting.",
    "options": ["mutable", "ignored", "immutable", "recurring"],
    "answer": "immutable"
  },
  {
    "id": 12,
    "question": "Which of the following is not a built-in pipe in Angular?",
    "options": ["DatePipe", "CurrencyPipe", "DataPipe", "PercentPipe"],
    "answer": "DataPipe"
  },
  {
    "id": 13,
    "question": "If you chain multiple pipes together, they are executed ______.",
    "options": ["in parallel", "LIFO order", "in the order specified", "none of the above"],
    "answer": "in the order specified"
  },
  {
    "id": 14,
    "question": "The ______ filter waits for a promise and returns the most recent value received.",
    "options": ["sync", "async", "promise", "subscribe"],
    "answer": "async"
  },
  {
    "id": 15,
    "question": "The ______ decorator allows us to define the pipe name globally for templates.",
    "options": ["@PipeName", "@pipeDeco", "@Pipe", "@isPipe"],
    "answer": "@Pipe"
  },
  {
    "id": 16,
    "question": "Data bindings are applied as ______ or as special sequences of characters in strings.",
    "options": ["expressions", "attributes of HTML elements", "elements itself", "none"],
    "answer": "attributes of HTML elements"
  },
  {
    "id": 17,
    "question": "A data binding has these four parts:",
    "options": [
      "host element, curly brackets, target, expression",
      "host element, square brackets, target, evaluation",
      "host element, square brackets, target, expression",
      "host element, parentheses, target, expression"
    ],
    "answer": "host element, square brackets, target, expression"
  },
  {
    "id": 18,
    "question": "Attribute binding is similar to property binding but it is tied to the ______ rather than the DOM property.",
    "options": ["Page attribute", "DOM attribute", "Root attribute", "HTML attribute"],
    "answer": "DOM attribute"
  },
  {
    "id": 19,
    "question": "To make your application ready for animations you must include the AngularJS Animate library and then refer it to ______ module.",
    "options": ["ng-repeat", "ngAnimate", "ngAnimation", "None"],
    "answer": "ngAnimate"
  },
  {
    "id": 20,
    "question": "Using the ______ animation function, the parent animation can allow the child animation to run.",
    "options": ["animateChild", "childAnimate", "animateInner", "innerChild"],
    "answer": "animateChild"
  },
  {
    "id": 21,
    "question": "Animations are fired using animation property bindings which are prefixed with ______ symbol.",
    "options": ["&", "#", "@", "%"],
    "answer": "@"
  },
  {
    "id": 22,
    "question": "______ is an animation-specific function used inside Angular animation DSL.",
    "options": ["useAnimation", "reuseAnimation", "childAnimate", "all of the above"],
    "answer": "useAnimation"
  },
  {
    "id": 23,
    "question": "It is always possible to make use of animation input parameters by setting even more data via the ______ property.",
    "options": ["options.param", "option_params", "option.param", "options.params"],
    "answer": "options.params"
  },
  {
    "id": 24,
    "question": "Which Bootstrap style is used to create vertical pills navigation?",
    "options": [
      "nav, nav-tabs",
      "nav, nav-pills",
      "nav, nav-pills, nav-stacked",
      "nav, nav-tabs, nav-justified"
    ],
    "answer": "nav, nav-pills, nav-stacked"
  },
  {
    "id": 25,
    "question": "Which class indicates a dropdown menu?",
    "options": ["dropdown-menu", "select", "dropdown", "dropdown-list"],
    "answer": "dropdown"
  },
  {
    "id": 26,
    "question": "Bootstrap grid system allows up to ______ columns across the page.",
    "options": ["6", "12", "8", "16"],
    "answer": "12"
  },
  {
    "id": 27,
    "question": "Which class makes round corner images automatically adjust to screen size?",
    "options": ["img-responsive", "img-fluid", "img-responsive-image", "img-round"],
    "answer": "img-responsive"
  },
  {
    "id": 28,
    "question": "Which class should be used to indicate a button group?",
    "options": ["btn-group-buttons", "btn-group", "btn-set", "btn-buttons"],
    "answer": "btn-group"
  },
  {
    "id": 29,
    "question": "In Angular, the opposite side of event binding (()) square bracket syntax signifies ______.",
    "options": ["two-way binding", "event binding", "property binding", "string interpolation"],
    "answer": "two-way binding"
  },
  {
    "id": 30,
    "question": "Which syntax is used for Angular two-way data binding?",
    "options": ["{{ }}", "[]", "()", "[()]"],
    "answer": "[()]"
  },
  {
  "id": 29,
  "question": "On the opposite side of event bindings () lie Angular’s square-bracket syntax [] which signify ______.",
  "options": [
    "property binding",
    "class binding",
    "style binding",
    "both A & B"
  ],
  "answer": "property binding"
},
{
  "id": 30,
  "question": "Which object oriented terms are supported by TypeScript?",
  "options": [
    "Modules",
    "Classes",
    "Interfaces",
    "All of these"
  ],
  "answer": "All of these"
},
  {
    "id": 31,
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
    "id": 32,
    "question": "Which of the following code will not throw an error?",
    "options": [
      "JSON.parse('')",
      "JSON.parse(null)",
      "JSON.parse()",
      "JSON.parse('{}')"
    ],
    "answer": "JSON.parse(null)"
  },
  {
    "id": 33,
    "question": "What does JSONP stand for?",
    "options": [
      "JSON Procedures",
      "JSON Parsing",
      "JSON with padding",
      "JSON Programming"
    ],
    "answer": "JSON with padding"
  },
  {
    "id": 34,
    "question": "What is the value of json in the following code?\nvar obj = { fruit: 'apple', toJSON: function(){ return 'orange'; } }; var json = JSON.stringify({x: obj});",
    "options": [
      "{\"x\":\"orange\"}",
      "{\"fruit\":\"apple\"}",
      "{\"x\":\"apple\"}",
      "{\"fruit\":\"orange\"}"
    ],
    "answer": "{\"x\":\"orange\"}"
  },
  {
    "id": 35,
    "question": "What is the MIME type of JSON?",
    "options": [
      "application/x-json",
      "text/json",
      "application/json",
      "application/javascript"
    ],
    "answer": "application/json"
  },
  {
    "id": 35,
    "question": "What function will convert a JavaScript object to a JSON string?",
    "options": ["JSON.text()", "JSON.serialize()", "JSON.toString()", "JSON.stringify()"],
    "answer": "JSON.stringify()"
  },
  {
    "id": 36,
    "question": "In the notation Student = { \"Student\": [\"Amy\", \"Bob\", \"John\"] }, Student is of type?",
    "options": ["Not a valid JSON string", "Array", "Class", "Object"],
    "answer": "Array"
  },
  {
    "id": 37,
    "question": "JSON-RPC is a remote procedure call protocol.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 38,
    "question": "To use observables, Angular uses a third-party library called ______.",
    "options": ["ng2-bootstrap", "angular-cli", "numeral", "Reactive Extensions (RxJS)"],
    "answer": "Reactive Extensions (RxJS)"
  },
  {
    "id": 39,
    "question": "We subscribe to the observable ourselves using the actual ______ method.",
    "options": ["subscribe()", "subs()", "subscribed()", "None of the above"],
    "answer": "subscribe()"
  },
  {
    "id": 40,
    "question": "Which of the following is not built-in pipe in Angular?",
    "options": ["DatePipe", "CurrencyPipe", "DataPipe", "PercentPipe"],
    "answer": "DataPipe"
  },
  {
    "id": 41,
    "question": "The ______ filter waits for a promise and returns the most recent value received.",
    "options": ["sync", "async", "promise"],
    "answer": "async"
  },
  {
    "id": 42,
    "question": "If you chain multiple pipes together, they are executed ______.",
    "options": ["in parallel", "LIFO order", "in the order in which you specify them", "none of the above"],
    "answer": "none of the above"
  },
  {
    "id": 43,
    "question": "Observables help you manage ______ data.",
    "options": ["synchronous", "asynchronous", "both asynchronous & synchronous", "none of the above"],
    "answer": "asynchronous"
  },
  {
    "id": 44,
    "question": "The ______ decorator allows us to define the pipe name that is globally available in templates.",
    "options": ["pipeName", "pipeDeco", "Pipe", "None"],
    "answer": "Pipe"
  },
  {
    "id": 45,
    "question": "console.log(x); var x = 5; What will be the output?",
    "options": ["undefined", "5", "error", "null"],
    "answer": "5"
  },
  {
    "id": 46,
    "question": "RPC stands for?",
    "options": ["Remote Procedure Call", "Remote Program Call", "Remote Processing Call", "None"],
    "answer": "Remote Procedure Call"
  },
  {
    "id": 47,
    "question": "Three main components of Routing are ______.",
    "options": ["RouteObject", "RouterOutlet", "RouterState", "RouterLink"],
    "answer": "RouterOutlet"
  },
  {
    "id": 48,
    "question": "Route ______ allow us to pass values in our URL to our component.",
    "options": ["pipes", "modules", "variables", "parameters"],
    "answer": "parameters"
  },
  {
    "id": 49,
    "question": "Promises are more advanced than Observables.",
    "options": ["True", "False"],
    "answer": "False"
  },
  {
    "id": 50,
    "question": "Which class is used to create a black navigation bar?",
    "options": [".navbar-default", ".navbar-black", ".navbar-dark", ".navbar-inverse"],
    "answer": ".navbar-inverse"
  },
  {
    "id": 51,
    "question": "The .container-fluid class provides ______.",
    "options": ["Fixed width container", "Table format", "To create a form", "Full width container"],
    "answer": "Full width container"
  },
  {
    "id": 52,
    "question": "1 + 2 + \"3\" = ?",
    "options": ["33", "123", "6", "Error"],
    "answer": "33"
  },
  {
    "id": 53,
    "question": "CSS validator example?",
    "options": ["eslint", "csslint", "stylelint", "None"],
    "answer": "csslint"
  },
  {
    "id": 54,
    "question": "Create responsive images by adding which class to the <img> tag?",
    "options": [".img-responsive", ".img-fluid", ".img-round", ".img-scale"],
    "answer": ".img-responsive"
  },
  {
    "id": 55,
    "question": ".img-responsive was used in Bootstrap 3, in Bootstrap 4 it became ______.",
    "options": [".img-fluid", ".img-scale", ".img-responsive-fluid", ".img-flex"],
    "answer": ".img-fluid"
  },
  {
    "id": 56,
    "question": "Bootstrap provides which class to scale images across devices?",
    "options": [".img-fluid", ".img-responsive", ".img-auto", ".img-scale"],
    "answer": ".img-fluid"
  },
  {
    "id": 57,
    "question": "Which HTML tag is used to include a JavaScript file?",
    "options": ["<script src=\"myscripts.js\"></script>", "<js src=\"myscripts.js\">", "<javascript>", "<include js>"],
    "answer": "<script src=\"myscripts.js\"></script>"
  },
  {
    "id": 58,
    "question": "TypeScript uses which datatype?",
    "options": ["boolean", "string", "number", "void", "All the above"],
    "answer": "All the above"
  },
  {
    "id": 59,
    "question": "TypeScript supports function overloading.",
    "options": ["True", "False"],
    "answer": "True"
  },
  {
    "id": 60,
    "question": "CSS preprocessors include ______.",
    "options": ["LESS", "SASS", "Both LESS and SASS", "None"],
    "answer": "Both LESS and SASS"
  },

  {
    "id": 61,
    "question": "Which prefix is used to add animation in Angular?",
    "options": ["@", "#", "$", "&"],
    "answer": "@"
  },
  {
    "id": 62,
    "question": "Default access modifier of TypeScript?",
    "options": ["public", "private", "protected", "none"],
    "answer": "public"
  },
  {
    "id": 63,
    "question": "What does POP() do in JavaScript?",
    "options": [
      "Remove last element",
      "Remove first element",
      "Add element at end",
      "Add element at beginning"
    ],
    "answer": "Remove last element"
  },
  {
    "id": 64,
    "question": "How to implement inheritance in TypeScript?",
    "options": ["extends", "implements", "inherit", "super"],
    "answer": "extends"
  },
  {
    "id": 65,
    "question": "What keywords are reserved in JSON and cannot be used as keys?",
    "options": ["value", "object", "key", "none"],
    "answer": "none"
  },
  {
    "id": 66,
    "question": "How to get information about browser?",
    "options": ["browser", "version", "navigator", "window"],
    "answer": "navigator"
  },
  {
    "id": 67,
    "question": "Which event will trigger if a button loses focus?",
    "options": ["onblur", "onclick", "onfocus", "onchange"],
    "answer": "onblur"
  },
  {
    "id": 68,
    "question": "Display property values include?",
    "options": ["none", "inline", "inline-block", "all of these"],
    "answer": "all of these"
  },
  {
    "id": 69,
    "question": "Shorthand method to represent background properties in CSS?",
    "options": ["background", "bg-style", "bg-color", "bg"],
    "answer": "background"
  },
  {
    "id": 70,
    "question": "______ is an HTML specification used to add more information to HTML tags.",
    "options": ["Macrodata", "Microdata", "Minidata", "Modifydata"],
    "answer": "Microdata"
  },
  {
    "id": 71,
    "question": "What is the purpose of the mimeTypes property of a plug-in entry?",
    "options": [
      "Contains MIME properties",
      "Contains MIME sizes",
      "Contains MIME types",
      "Contains MIME methods"
    ],
    "answer": "Contains MIME types"
  },
  {
    "id": 72,
    "question": "Which of the following can be implemented using animation?",
    "options": [
      "Fireworks",
      "Fade effect",
      "Roll-in or Roll-out",
      "All of the mentioned"
    ],
    "answer": "All of the mentioned"
  },
  {
    "id": 73,
    "question": "Which property represents the content displayed in the window?",
    "options": ["document", "content", "window", "frame"],
    "answer": "document"
  },
  {
    "id": 74,
    "question": "How can we make methods available on all objects?",
    "options": [
      "Object.add(methods)",
      "Object.methods(add)",
      "Object.add.methods()",
      "Object.prototype"
    ],
    "answer": "Object.prototype"
  },
  {
    "id": 75,
    "question": "The four kinds of class members are?",
    "options": [
      "Instance methods, Instance fields, Static method, Dynamic method",
      "Instance fields, Instance methods, Class fields, Class methods",
      "Instance fields, non-Instance fields, Dynamic methods, Global methods",
      "Global methods, Local methods, Dynamic methods, Static methods"
    ],
    "answer": "Instance fields, Instance methods, Class fields, Class methods"
  },
  {
    "id": 76,
    "question": "Which HTML tag is used for video?",
    "options": ["<video>", "<media>", "<movie>", "<play>"],
    "answer": "<video>"
  },
  {
    "id": 77,
    "question": "Full form of Angular CLI?",
    "options": [
      "Command Line Interface",
      "Component Logic Interface",
      "Command Layout Interface",
      "Control Line Interface"
    ],
    "answer": "Command Line Interface"
  },
  {
    "id": 78,
    "question": "Types of Angular data binding include?",
    "options": [
      "Property Binding []",
      "Interpolation {{}}",
      "Event Binding ()",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 79,
    "question": "JavaScript is used for ______.",
    "options": [
      "Styling web pages",
      "Database storage",
      "Interactivity",
      "Server configuration"
    ],
    "answer": "Interactivity"
  },
  {
    "id": 80,
    "question": "How to declare variables in TypeScript?",
    "options": ["var", "let", "both var and let", "const only"],
    "answer": "both var and let"
  },
  {
    "id": 81,
    "question": "TypeScript uses which datatype?",
    "options": ["string", "number", "boolean", "all of the above"],
    "answer": "all of the above"
  },
  {
    "id": 82,
    "question": "Default access modifier in TypeScript?",
    "options": ["public", "private", "protected", "internal"],
    "answer": "public"
  },
  {
    "id": 83,
    "question": "Super() in TypeScript refers to?",
    "options": [
      "Super constructor",
      "Parent variable",
      "Child class",
      "Interface method"
    ],
    "answer": "Super constructor"
  },
  {
    "id": 84,
    "question": "Which field is required in <input>?",
    "options": ["required", "minlength", "both", "none"],
    "answer": "required"
  },
  {
    "id": 85,
    "question": "Which keyword cannot be used in JSON?",
    "options": ["object", "key", "value", "none"],
    "answer": "none"
  },
  {
    "id": 86,
    "question": "How can we add/delete elements in an array and return the removed item?",
    "options": ["slice", "shift", "reverse", "splice"],
    "answer": "splice"
  },
  {
    "id": 87,
    "question": "How to get information about browser?",
    "options": ["browser", "version", "navigator", "window"],
    "answer": "navigator"
  },
  {
    "id": 88,
    "question": "Display property values include?",
    "options": ["all", "inline", "inline-block", "block"],
    "answer": "all"
  },
  
  {
    "id": 89,
    "question": "Which event will trigger if a button loses its focus?",
    "options": [
      "onclick",
      "onblur",
      "onfocus",
      "onchange"
    ],
    "answer": "onblur"
  },
  {
    "id": 90,
    "question": "Which property is used to access the prototype of an object in JavaScript?",
    "options": [
      "prototype",
      "__proto__",
      "constructor",
      "inherit"
    ],
    "answer": "prototype"
  },
  {
    "id": 91,
    "question": "What is a drawback of TypeScript?",
    "options": [
      "Compilation required",
      "More complex setup",
      "Additional build step",
      "All of the above"
    ],
    "answer": "All of the above"
  },
  {
    "id": 92,
    "question": "Which Bootstrap class creates two equal columns in a row?",
    "options": [
      "row-2col",
      "row-cols-2",
      "col-6",
      "grid-2"
    ],
    "answer": "row-2col"
  },
  {
    "id": 93,
    "question": "Which Bootstrap component is used to create a slideshow?",
    "options": [
      "carousel",
      "slider",
      "gallery",
      "scroll"
    ],
    "answer": "carousel"
  },
  {
    "id": 94,
    "question": "TypeScript supports which feature?",
    "options": [
      "Overloading",
      "Partial classes",
      "None",
      "Interfaces only"
    ],
    "answer": "Overloading"
  },
  {
    "id": 95,
    "question": "Which type of attribute provides additional information about HTML elements?",
    "options": [
      "HTML Attribute",
      "CSS Attribute",
      "DOM Attribute",
      "Meta Attribute"
    ],
    "answer": "HTML Attribute"
  },
  {
    "id": 96,
    "question": "Which CSS pseudo-class selects the nth child of an element?",
    "options": [
      ":first-child",
      ":nth-child(n)",
      ":nth-of-type",
      ":child"
    ],
    "answer": ":nth-child(n)"
  },
  {
    "id": 97,
    "question": "Which option represents user roles?",
    "options": [
      "Owner",
      "Admin",
      "Both Owner and Admin",
      "Guest"
    ],
    "answer": "Both Owner and Admin"
  },
  {
"id":61,
"question":"In Java, which of these class types supports sequential and parallel processing of data?",
"options":[
"Queue",
"Lambda",
"ExecutorService",
"Streams"
],
"answer":"Streams"
},
{
"id":62,
"question":"What is the replacement for PermGen space in Java?",
"options":[
"FixedGen",
"Metaspace",
"MetaGenspace"
],
"answer":"Metaspace"
},
{
"id":63,
"question":"What is the difference between peek() and dequeue()?",
"options":[
"Peek() returns the next item in line but dequeue() removes and returns the next item in line",
"peek() and dequeue() return the next item in line",
"peek() and dequeue remove and return the next item in line"
],
"answer":"Peek() returns the next item in line but dequeue() removes and returns the next item in line"
},
{
"id":64,
"question":"MongoDB database can be accessed using Spring Data.",
"options":[
"True",
"False"
],
"answer":"True"
},
{
"id":65,
"question":"How to handle shutdown of IoC container?",
"options":[
"Using shutdownHook()",
"Using shutdownHandler()",
"Using registerHook()",
"Using registerShutdownHook()"
],
"answer":"Using registerShutdownHook()"
},
{
"id":66,
"question":"What is default scope of bean in Spring framework?",
"options":[
"singleton",
"prototype",
"request",
"session"
],
"answer":"singleton"
},
{
"id":67,
"question":"Which endpoints are provided by Spring Boot to monitor metrics of individual microservices?",
"options":[
"/actuator",
"/rest",
"/logger",
"/health"
],
"answer":"/actuator"
},
{
"id":68,
"question":"REST service endpoint comprises of which address?",
"options":[
"No certain URL is specified",
"Depends upon the platform used"
],
"answer":"No certain URL is specified"
},
{
"id":69,
"question":"Microservices is most closely related to which other established acronym?",
"options":[
"API",
"AWS",
"GCP",
"PAAS"
],
"answer":"API"
},
{
"id":70,
"question":"What are the core operations of DevOps with application development and with infrastructure?",
"options":[
"Provisioning, Configuration, and Orchestration",
"Code building, coverage, and Unit testing",
"Packaging and Deployment",
"All of the above"
],
"answer":"All of the above"
},
{
"id":71,
"question":"What is the return type of Java lambda expressions?",
"options":[
"void",
"Lambda",
"Function",
"Regex"
],
"answer":"Function"
},
{
"id":72,
"question":"In Java, which of these class types supports sequential and parallel processing of data?",
"options":[
"Queue",
"Lambda",
"ExecutorService",
"Streams"
],
"answer":"Streams"
},
{
"id":73,
"question":"What is the replacement for PermGen space in Java 8?",
"options":[
"FixedGen",
"Metaspace",
"MetaGenspace"
],
"answer":"Metaspace"
},
{
"id":74,
"question":"Where in an HTML document is the correct place to refer to an external style sheet?",
"options":[
"In the <body> section",
"In the <head> section",
"At the end of the document",
"At the start of the document"
],
"answer":"In the <head> section"
},
{
"id":75,
"question":"Where is the correct place to insert a JavaScript?",
"options":[
"The <head> section",
"Both the <head> section and the <body> section are correct",
"The <body> section",
"The <footer> section"
],
"answer":"Both the <head> section and the <body> section are correct"
},
{
"id":76,
"question":"How can you detect the client’s browser name in JavaScript?",
"options":[
"client.navName",
"navigator.appName",
"browser.name",
"window.browser"
],
"answer":"navigator.appName"
},
{
"id":77,
"question":"In JavaScript, var declares a block-scoped variable?",
"options":[
"True",
"False"
],
"answer":"False"
},
{
"id":78,
"question":"What is React?",
"options":[
"Just a server-side framework",
"Just a user-interface framework",
"Both a server-side framework as well as a user-interface framework"
],
"answer":"Just a user-interface framework"
},
{
"id":79,
"question":"What are the limitations of React?",
"options":[
"React is only for view layer of the app so we still need other technologies",
"React uses inline templating and JSX",
"The library of React is too large",
"All of the above"
],
"answer":"All of the above"
},
{
"id":80,
"question":"How can you access the state of a component from inside of a member function in React?",
"options":[
"this.getState()",
"this.prototype.stateValue",
"this.state",
"this.values"
],
"answer":"this.state"
},
{
"id":81,
"question":"Which of the following API is a MUST for every React component?",
"options":[
"getInitialState",
"render",
"renderComponent"
],
"answer":"render"
},
{
"id":82,
"question":"What does the \"webpack\" command do?",
"options":[
"Transpiles all the Javascript down into one file",
"Runs react local development server"
],
"answer":"Transpiles all the Javascript down into one file"
}];














[
{
"id":1,
"question":"What annotation does Spring Boot provide to conditionally wire a bean based on an environment variable?",
"options":[
"@ConditionalOnValue",
"@ConditionalOnProperty",
"@ConditionalOnSystemProperty",
"@ConditionalOnEnvironmentVariable"
],
"answer":"@ConditionalOnProperty"
},
{
"id":2,
"question":"You have a number of external properties that you want to use in your application. How can you configure your Spring Boot application to source them from a file?",
"options":[
"Place the .properties file in the src/main/resources directory. In the code, load it with java.util.Properties.",
"Place the properties in my.properties and add the annotation @PropertySource(\"my.properties\") to the Spring Boot application main class.",
"Create a properties file named application.properties in the src/main/resources of your project."
],
"answer":"Create a properties file named application.properties in the src/main/resources of your project."
},
{
"id":3,
"question":"The following method only queries or retrieves data from the data source. It does not perform any write operations. What optimizations can you make so the provider can process the query more efficiently?",
"options":[
"Add the readOnly option to the @Transactional annotation. This provides a hint to the provider to optimize the transaction for read-only operations.",
"Add the timeout option to the @Transactional annotation. This limits the time the transaction can run.",
"Add the readOnly option to the @Transactional annotation. This prevents any write operations in the transaction.",
"Set the appropriate transactionManager option in the @Transactional annotation. This allows you to customize the underlying provider."
],
"answer":"Add the readOnly option to the @Transactional annotation. This provides a hint to the provider to optimize the transaction for read-only operations."
},
{
"id":4,
"question":"How do you configure a Spring Boot application to run as a command-line application?",
"options":[
"Implement CommandLineRunner and publish it to the application context.",
"Call SpringApplication#setHeadless(true).",
"Annotate a configuration class with @CommandLineApplication.",
"Use SpringConsoleApplication.run instead of SpringApplication.run"
],
"answer":"Implement CommandLineRunner and publish it to the application context."
},
{
"id":5,
"question":"The controller is not dealing with the errors. How can you make it work?",
"options":[
"Add the following to the web.xml: <error-page><location>/errors</location></error-page>",
"Store the error page in the folder errors where Spring will look for it. If that is not an option, configure explicitly where the application can find the view.",
"Add the following bean: InternalResourceViewResolver configuration for /WEB-INF/errors/",
"Annotate the controller with @ExceptionHandler(\"errorPage\")."
],
"answer":"Add the following to the web.xml: <error-page><location>/errors</location></error-page>"
},
{
"id":6,
"question":"How would you configure the default configuration and dependencies that a Spring Boot application requires in Maven?",
"options":[
"In the Project Object Model (POM) file, add the parent configuration spring-boot-starter-parent.",
"In the Project Object Model (POM) file, add the parent configuration spring-boot-dependencies with relativePath.",
"In the Project Object Model (POM) file, add the dependency spring-boot-starter-parent.",
"In the Project Object Model (POM) file, add the dependency spring-boot-starter."
],
"answer":"In the Project Object Model (POM) file, add the parent configuration spring-boot-starter-parent."
},
{
"id":7,
"question":"You write the following code, but the test is not working. What is the most likely solution?",
"options":[
"The ContextConfiguration is too minimalistic. Extend it for integration testing.",
"You must annotate the creation method with @EventListener(EmployeeCreationEvent.class).",
"You must add @RecordApplicationEvents to the top of the class.",
"You must make sure that the application is registering a bean of type ApplicationEvents."
],
"answer":"You must add @RecordApplicationEvents to the top of the class."
},
{
"id":8,
"question":"Which Spring class can you configure to function as a special environment with custom set properties for testing purposes?",
"options":[
"ConfigurableEnvironment",
"PropertySource",
"TestEnv",
"MockEnvironment"
],
"answer":"MockEnvironment"
},
{
"id":9,
"question":"You write a test class. The test class should only run when the operating system is Apple macOS. Which built-in annotation could you add on top of the class to achieve this?",
"options":[
"@SpringJUnitWebConfig(system = \"mac\")",
"@EnabledOnMac",
"@EnabledIf(\"#{systemProperties['os.name'].toLowerCase().contains('mac')}\")",
"@DetectOS(category = \"mac\")"
],
"answer":"@EnabledIf(\"#{systemProperties['os.name'].toLowerCase().contains('mac')}\")"
},
{
"id":10,
"question":"You want to package your application into a native image. You correctly configure Maven and Docker. What command do you need to build the image?",
"options":[
"mvn compile",
"mvn -Pnative spring-boot:build-image",
"mvn spring-boot:build-native-image",
"mvn package"
],
"answer":"mvn -Pnative spring-boot:build-image"
},
{
"id":11,
"question":"How would you change the following code snippets so the list of names in the model contains four items?",
"options":[
"Change the signature of getNames to public List<String> getNames(Model model)",
"Change the signature of getNames to public List<String> getNames(Model model, @ModelAttribute(\"names\") List<String> names)",
"Change the signature of allNames to public String allNames(Model model, @ModelAttribute(\"names\") List<String> names)",
"Change the signature of allNames to public String allNames(@ModelAttribute(\"names\") List<String> names, Model model)"
],
"answer":"Change the signature of allNames to public String allNames(@ModelAttribute(\"names\") List<String> names, Model model)"
},
{
"id":12,
"question":"The ExceptionHandler that should pick up ArithmeticException is not working. What is the explanation?",
"options":[
"The method must have the name of the specific exception.",
"Spring cannot find the view associated with this method.",
"The return type is incorrect.",
"The annotation should be @ExceptionHandler(exceptions={ArithmeticException.class})."
],
"answer":"The annotation should be @ExceptionHandler(exceptions={ArithmeticException.class})."
},
{
"id":13,
"question":"Which statement about the TestTransaction class is true?",
"options":[
"The static methods on the TestTransaction class interact with the current transaction of the test method.",
"TestTransaction only works on classes that you annotate with @EnableTestTransaction.",
"You must implement the abstract TestTransaction class.",
"You must autowire TestTransaction."
],
"answer":"The static methods on the TestTransaction class interact with the current transaction of the test method."
},
{
"id":14,
"question":"What configuration step is missing for custom auto configuration?",
"options":[
"Reference the auto configuration class in @SpringBootConfiguration.",
"Add the @Configuration annotation.",
"List the auto configuration class in META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports",
"List the auto configuration class in application.properties under spring.autoconfigure.imports."
],
"answer":"List the auto configuration class in META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports"
},
{
"id":15,
"question":"Which is an example of XML mapping a NullPointerException to a page called npe?",
"options":[
"<prop key=\"java.lang.NullPointerException\">npe</prop>",
"<exceptionHandler mapping>",
"<prop view=\"npe\">java.lang.NullPointerException</prop>",
"<exceptionHandler view mapping>"
],
"answer":"<prop key=\"java.lang.NullPointerException\">npe</prop>"
},
{
"id":16,
"question":"How would you create the jar from the command line?",
"options":[
"mvn install followed by jar cvf build/classes",
"mvn spring-boot:jar",
"mvn package",
"mvn compile"
],
"answer":"mvn package"
},
{
"id":17,
"question":"Why should a developer remove the @ExtendWith annotation in this JUnit 5 test?",
"options":[
"@SpringBootTest implies @ExtendWith(SpringExtension.class).",
"Only JUnit 4 recognizes @ExtendWith.",
"@SpringBootTest contradicts @ExtendWith.",
"@ExtendWith overrides @SpringBootTest."
],
"answer":"@SpringBootTest implies @ExtendWith(SpringExtension.class)."
},
{
"id":18,
"question":"What is the default behavior of Spring TestContext for handling database persistence?",
"options":[
"The framework creates a transaction for every test and does an automatic rollback.",
"TestContext configures a new database for every test.",
"The framework stores the changes in the database.",
"You can mark tests with @Transactional to rollback."
],
"answer":"The framework creates a transaction for every test and does an automatic rollback."
},
{
"id":19,
"question":"Which class meets the conditions for having methods with the @ModelAttribute annotation?",
"options":[
"@Repository public class DataController {}",
"@Controller public class DataController {}",
"@Model public class DataController {}",
"@Attributed public class DataController {}"
],
"answer":"@Controller public class DataController {}"
},
{
"id":20,
"question":"How can you disable an auto configuration class in Spring Boot?",
"options":[
"Use @ContextConfiguration",
"Use @Conditional",
"Use @EnableAutoConfiguration exclude property",
"Add the auto config class to the exclude property in @SpringBootApplication"
],
"answer":"Add the auto config class to the exclude property in @SpringBootApplication"
},








{
"id":1,
"question":"HTML: Which tag is used to define a clickable image map in HTML5?",
"options":[
"<map>",
"<area>",
"<img>",
"<figure>"
],
"answer":"<map>"
},
{
"id":2,
"question":"CSS: What is the effect of display: flex; justify-content: space-between; on a container’s children?",
"options":[
"Aligns children vertically with equal spacing",
"Aligns children horizontally with space between them",
"Centers children horizontally",
"Stacks children in a column"
],
"answer":"Aligns children horizontally with space between them"
},
{
"id":3,
"question":"JavaScript: What is the output of the following code?",
"options":[
"10",
"\"55\"",
"25",
"Error"
],
"answer":"\"55\""
},
{
"id":4,
"question":"JavaScript: Which method is used to add an event listener to an element?",
"options":[
"addEvent()",
"attachEvent()",
"addEventListener()",
"onEvent()"
],
"answer":"addEventListener()"
},
{
"id":5,
"question":"CSS: Which property ensures a background image stays fixed while scrolling?",
"options":[
"background-repeat: no-repeat;",
"background-attachment: fixed;",
"background-position: center;",
"background-size: cover;"
],
"answer":"background-attachment: fixed;"
},
{
"id":6,
"question":"React: What is the purpose of the useState hook?",
"options":[
"Fetch data from an API",
"Manage state in functional components",
"Handle side effects",
"Create context"
],
"answer":"Manage state in functional components"
},
{
"id":7,
"question":"React: What does the following code render?",
"options":[
"Nothing (empty string)",
"\"undefined\"",
"Error",
"null"
],
"answer":"Nothing (empty string)"
},
{
"id":8,
"question":"React: Which hook is used to perform side effects in a functional component?",
"options":[
"useEffect",
"useReducer",
"useContext",
"useCallback"
],
"answer":"useEffect"
},
{
"id":9,
"question":"React: How do you pass data from a parent to a child component?",
"options":[
"Using state",
"Using props",
"Using context",
"Using hooks"
],
"answer":"Using props"
},
{
"id":10,
"question":"React: What is the correct way to update a state object?",
"options":[
"setUser({ name: \"Jane\" });",
"setUser({ ...user, name: \"Jane\" });",
"user.name = \"Jane\";",
"setUser(user.name = \"Jane\");"
],
"answer":"setUser({ ...user, name: \"Jane\" });"
},
{
"id":11,
"question":"React: What is a key prop used for in a list?",
"options":[
"Styling elements",
"Identifying unique elements for efficient rendering",
"Handling events",
"Managing state"
],
"answer":"Identifying unique elements for efficient rendering"
},
{
"id":12,
"question":"React: Which component lifecycle method is replaced by useEffect in functional components?",
"options":[
"componentDidMount",
"render",
"constructor",
"setState"
],
"answer":"componentDidMount"
},
{
"id":13,
"question":"React: What does JSX stand for?",
"options":[
"JavaScript XML",
"JavaScript Extension",
"JSON XML",
"Java Syntax"
],
"answer":"JavaScript XML"
},
{
"id":14,
"question":"React: How do you create a ref in a functional component?",
"options":[
"const ref = useRef();",
"const ref = createRef();",
"const ref = useState();",
"const ref = useEffect();"
],
"answer":"const ref = useRef();"
},
{
"id":15,
"question":"React: What is the output of this code if count is 0?",
"options":[
"0",
"1",
"2",
"Infinite loop"
],
"answer":"1"
},
{
"id":16,
"question":"MongoDB: What is the primary key in a MongoDB document?",
"options":[
"_id",
"id",
"key",
"index"
],
"answer":"_id"
},
{
"id":17,
"question":"MongoDB: Which command finds all documents where age > 25 in the users collection?",
"options":[
"db.users.find({ age: { $gt: 25 } })",
"db.users.find({ age: { $gte: 25 } })",
"db.users.find({ age: { $lt: 25 } })",
"db.users.find({ age: 25 })"
],
"answer":"db.users.find({ age: { $gt: 25 } })"
},
{
"id":18,
"question":"MongoDB: What does the $push operator do in an update operation?",
"options":[
"Replaces a field",
"Adds an element to an array",
"Removes an element from an array",
"Updates a single field"
],
"answer":"Adds an element to an array"
},
{
"id":19,
"question":"MongoDB: Which index improves query performance on frequently searched fields?",
"options":[
"Compound index",
"Text index",
"Unique index",
"All of the above"
],
"answer":"All of the above"
},
{
"id":20,
"question":"Angular: What is the purpose of *ngFor directive?",
"options":[
"Conditionally display elements",
"Iterate over a list to render elements",
"Bind data to an element",
"Handle form submissions"
],
"answer":"Iterate over a list to render elements"
},
{
"id":21,
"question":"Angular: Which decorator defines a component in Angular?",
"options":[
"@Component",
"@Directive",
"@NgModule",
"@Injectable"
],
"answer":"@Component"
},
{
"id":22,
"question":"Angular: What is the output of this code? <div *ngIf=\"false\">Hello</div>",
"options":[
"Hello",
"Nothing",
"Error",
"false"
],
"answer":"Nothing"
},
{
"id":23,
"question":"Angular: How do you inject a service into a component?",
"options":[
"Using @Inject",
"In the constructor",
"Using @Service",
"In the template"
],
"answer":"In the constructor"
},
{
"id":24,
"question":"Angular: What does FormBuilder simplify?",
"options":[
"HTTP requests",
"Reactive form creation",
"Template rendering",
"Dependency injection"
],
"answer":"Reactive form creation"
},
{
"id":25,
"question":"Angular: Which module is required for HTTP requests?",
"options":[
"HttpClientModule",
"FormsModule",
"RouterModule",
"CommonModule"
],
"answer":"HttpClientModule"
},
{
"id":26,
"question":"Java: What is the output of this code?",
"options":[
"10",
"11",
"12",
"13"
],
"answer":"12"
},
{
"id":27,
"question":"Java: What does this code print?",
"options":[
"true",
"false",
"Error",
"null"
],
"answer":"false"
},
{
"id":28,
"question":"Java: What is the result of this code?",
"options":[
"[1, 2]",
"[2]",
"[]",
"Error"
],
"answer":"[2]"
},
{
"id":29,
"question":"Java: What does this code output?",
"options":[
"10",
"20",
"30",
"Error"
],
"answer":"20"
},
{
"id":30,
"question":"Java: What is the output?",
"options":[
"1",
"2",
"Error",
"null"
],
"answer":"Error"
},
{
"id":31,
"question":"Java: What is the purpose of the final keyword?",
"options":[
"Prevents method overriding",
"Allows dynamic binding",
"Enables garbage collection",
"Permits multiple inheritance"
],
"answer":"Prevents method overriding"
},
{
"id":32,
"question":"Java: Which collection is synchronized by default?",
"options":[
"ArrayList",
"HashMap",
"Vector",
"LinkedList"
],
"answer":"Vector"
},
{
"id":33,
"question":"Java: What is the default access modifier for class members?",
"options":[
"public",
"private",
"protected",
"package-private"
],
"answer":"package-private"
},
{
"id":34,
"question":"Java: What does the transient keyword do?",
"options":[
"Prevents serialization",
"Enables multithreading",
"Marks a variable as static",
"Allows method overriding"
],
"answer":"Prevents serialization"
},
{
"id":35,
"question":"Java: Which interface is used for sorting objects?",
"options":[
"Comparable",
"Comparator",
"Serializable",
"Cloneable"
],
"answer":"Comparable"
},
{
"id":36,
"question":"TypeScript: What is the purpose of interface in TypeScript?",
"options":[
"Define class behavior",
"Specify object structure",
"Create modules",
"Handle exceptions"
],
"answer":"Specify object structure"
},
{
"id":37,
"question":"TypeScript: What is the type of let x: any;",
"options":[
"number",
"string",
"any",
"void"
],
"answer":"any"
},
{
"id":38,
"question":"TypeScript: What does this code do?",
"options":[
"Throws a type error",
"Returns a string",
"Returns void",
"Returns any"
],
"answer":"Returns a string"
},
{
"id":39,
"question":"TypeScript: Which keyword extends a class?",
"options":[
"implements",
"extends",
"super",
"interface"
],
"answer":"extends"
},
{
"id":40,
"question":"TypeScript: How do you define an optional property?",
"options":[
"name: string?",
"name?: string",
"name: string | null",
"name: string = null"
],
"answer":"name?: string"
},
{
"id":41,
"question":"Spring: Which annotation defines a Spring bean?",
"options":[
"@Bean",
"@Component",
"@Service",
"All of the above"
],
"answer":"All of the above"
},
{
"id":42,
"question":"Spring Boot: What does @SpringBootApplication include?",
"options":[
"@Configuration, @EnableAutoConfiguration, @ComponentScan",
"@RestController, @EnableWebMvc",
"@Repository, @Transactional",
"@Autowired, @Qualifier"
],
"answer":"@Configuration, @EnableAutoConfiguration, @ComponentScan"
},
{
"id":43,
"question":"Spring: What is the output of this code?",
"options":[
"Hello",
"null",
"Error",
"MyBean"
],
"answer":"Hello"
},
{
"id":44,
"question":"Spring Boot: Which dependency enables REST APIs?",
"options":[
"spring-boot-starter-web",
"spring-boot-starter-data-jpa",
"spring-boot-starter-security",
"spring-boot-starter-test"
],
"answer":"spring-boot-starter-web"
},
{
"id":45,
"question":"Spring: What is Dependency Injection?",
"options":[
"Creating objects manually",
"Injecting dependencies into objects",
"Managing database connections",
"Handling HTTP requests"
],
"answer":"Injecting dependencies into objects"
},
{
"id":46,
"question":"Spring Boot: How do you externalize configuration?",
"options":[
"Using application.properties",
"Using @Configuration",
"Using @Bean",
"Using @Autowired"
],
"answer":"Using application.properties"
},
{
"id":47,
"question":"Spring: Which annotation maps HTTP GET requests?",
"options":[
"@PostMapping",
"@GetMapping",
"@RequestMapping",
"@PutMapping"
],
"answer":"@GetMapping"
},
{
"id":48,
"question":"Spring Boot: What is the default embedded server?",
"options":[
"Jetty",
"Tomcat",
"Undertow",
"Netty"
],
"answer":"Tomcat"
},
{
"id":49,
"question":"Spring: What does @Transactional do?",
"options":[
"Manages database transactions",
"Configures REST endpoints",
"Injects dependencies",
"Scans components"
],
"answer":"Manages database transactions"
},
{
"id":50,
"question":"Spring Boot: How do you connect to MongoDB?",
"options":[
"spring-boot-starter-data-mongodb",
"spring-boot-starter-data-jpa",
"spring-boot-starter-web",
"spring-boot-starter-security"
],
"answer":"spring-boot-starter-data-mongodb"
},
{
"id":51,
"question":"DevOps: What is the purpose of Docker?",
"options":[
"Code compilation",
"Containerization",
"Version control",
"Load balancing"
],
"answer":"Containerization"
},
{
"id":52,
"question":"DevOps: Which command builds a Docker image?",
"options":[
"docker run",
"docker build",
"docker push",
"docker pull"
],
"answer":"docker build"
},
{
"id":53,
"question":"DevOps: What is CI/CD?",
"options":[
"Continuous Integration/Continuous Deployment",
"Code Inspection/Code Delivery",
"Continuous Improvement/Continuous Development",
"Code Integration/Code Deployment"
],
"answer":"Continuous Integration/Continuous Deployment"
},
{
"id":54,
"question":"DevOps: Which tool manages container orchestration?",
"options":[
"Jenkins",
"Kubernetes",
"Git",
"Ansible"
],
"answer":"Kubernetes"
},
{
"id":55,
"question":"DevOps: What does nginx -g \"daemon off;\" do in a Docker container?",
"options":[
"Runs NGINX in the background",
"Runs NGINX in the foreground",
"Stops NGINX",
"Restarts NGINX"
],
"answer":"Runs NGINX in the foreground"
},
{
"id":56,
"question":"DevOps: Which file defines a Jenkins pipeline?",
"options":[
"Dockerfile",
"Jenkinsfile",
"pom.xml",
"build.gradle"
],
"answer":"Jenkinsfile"
},
{
"id":57,
"question":"DevOps: What is Infrastructure as Code?",
"options":[
"Manual server setup",
"Defining infrastructure using scripts",
"Database management",
"Application deployment"
],
"answer":"Defining infrastructure using scripts"
},
{
"id":58,
"question":"DevOps: Which AWS service manages containerized apps?",
"options":[
"EC2",
"ECS",
"S3",
"RDS"
],
"answer":"ECS"
},
{
"id":59,
"question":"Microservices: What is a key benefit of microservices architecture?",
"options":[
"Monolithic codebase",
"Independent scalability",
"Tight coupling",
"Single database"
],
"answer":"Independent scalability"
},
{
"id":60,
"question":"Microservices: Which pattern ensures loose coupling in microservices?",
"options":[
"Circuit Breaker",
"Service Registry",
"Event-Driven",
"Monolith"
],
"answer":"Event-Driven"
},

{
"id":1,
"question":"Whenever you are assigning two classes to a tag , you must separate them with a",
"options":[
"Space",
"Comma",
"Dash"
],
"answer":"Space"
},
{
"id":2,
"question":"____________ contains the navigation menu, or other navigation functionality for the page",
"options":[
"section",
"header",
"nav",
"aside"
],
"answer":"nav"
},
{
"id":3,
"question":"Which of the following properties sets the distance between an element’s right border and the rightmost edge of its content?",
"options":[
"auto",
"padding-left",
"padding-right",
"Padding-top"
],
"answer":"padding-right"
},
{
"id":4,
"question":"What built-in functions allows you to convert a string into an integer?",
"options":[
"toInt()",
"parseInt()",
"toInteger()",
"parseString()"
],
"answer":"parseInt()"
},
{
"id":5,
"question":"What is a function in JavaScript?",
"options":[
"An instance of a class",
"A statement that evaluates an expression",
"A block of organized, reusable code that performs a single action",
"Code that allows us to write loops"
],
"answer":"A block of organized, reusable code that performs a single action"
},
{
"id":6,
"question":"What is the output of greet = function(...months){ months.forEach(month => console.log('Month: ' + month));}greet([ 'Jan', 'Feb']);",
"options":[
"Jan Feb",
"ReferenceError",
"Month: Jan,Feb",
"Month: Jan",
"Month: Feb"
],
"answer":"Month: Jan,Feb"
},
{
"id":7,
"question":"What is the output of function display(num1, num2) { console.log(num1, num2);}let nums = \"12345\";display(...nums);",
"options":[
"1 2",
"21",
"12345",
"45"
],
"answer":"1 2"
},
{
"id":8,
"question":"What is the console output of function printName() { name = \"Mary\"; name = \"John\"; console.log(name);}?",
"options":[
"Empty",
"None",
"John",
"Mary"
],
"answer":"John"
},
{
"id":9,
"question":"Babel compiles the JavaScript code you write into",
"options":[
"ECMAScript 5",
"ECMAScript 7",
"ECMAScript 3",
"ECMAScript 6"
],
"answer":"ECMAScript 5"
},
{
"id":10,
"question":"The string \"api/route\" in Express is an example of a...",
"options":[
"Middleware",
"Route",
"Error Handler"
],
"answer":"Route"
},
{
"id":11,
"question":"Which library allows the use of the \"require\" keyword in front-end code?",
"options":[
"guid",
"Browserify",
"React",
"jQuery"
],
"answer":"Browserify"
},
{
"id":12,
"question":"The ______ attribute of a React form is called when the main action button inside the form is pressed.",
"options":[
"onSubmit",
"onChange",
"onComplete"
],
"answer":"onSubmit"
},
{
"id":13,
"question":"Which of the following are automation tools?",
"options":[
"Gulp",
"JSX",
"Express"
],
"answer":"Gulp"
},
{
"id":14,
"question":"What React function is used to define a new element tag?",
"options":[
"renderComponent",
"createClass",
"setInnerHTML"
],
"answer":"createClass"
},
{
"id":15,
"question":"True or false : The only thing that can change the data inside a store is the store itself.",
"options":[
"false",
"true"
],
"answer":"true"
},
{
"id":16,
"question":"The Gulp task which takes a stream and outputs a file is...",
"options":[
"src",
"task",
"dest"
],
"answer":"dest"
},
{
"id":17,
"question":"The best way to detect when a user has completed a form is",
"options":[
"to handle the onClick event on the form's submit element",
"to handle the onBlur event of the last form element",
"to handle the form's onSubmit event",
"to accumulate the onChange events for each form element"
],
"answer":"to handle the form's onSubmit event"
},
{
"id":18,
"question":"Behavior is shared between components using",
"options":[
"propTypes",
"state",
"mixins",
"props"
],
"answer":"mixins"
},
{
"id":19,
"question":"Which of the following API is a MUST for every React Component ?",
"options":[
"getInitialState",
"render",
"renderComponent"
],
"answer":"renderComponent"
},
{
"id":20,
"question":"What are the advantages of React ?",
"options":[
"React can be used on client as well as server side.",
"Using React increases readability and makes maintainability easier.",
"React can be used with any other framework as it is just a View Layer.",
"All of the above."
],
"answer":"All of the above."
},

{
"id":1,
"question":"What is the output of the following Java code snippet?",
"options":[
"132",
"123",
"213",
"312"
],
"answer":"132"
},
{
"id":2,
"question":"Which of the following is the immutable Java List static factory method?",
"options":[
"List.of",
"List.immutable",
"List.create"
],
"answer":"List.of"
},
{
"id":3,
"question":"What is the command line tool introduced for JS engine in Java?",
"options":[
"jjs",
"jss",
"jfs",
"jbd"
],
"answer":"jjs"
},
{
"id":4,
"question":"Identify the Java class used to create a new Process.",
"options":[
"ProcessBuilder",
"ProcessFactory",
"Process",
"Thread"
],
"answer":"ProcessBuilder"
},
{
"id":5,
"question":"Pick the correct Java method reference usages.",
"options":[
"object::instanceMethod",
"Class::staticMethod",
"Class::new",
"All of the above"
],
"answer":"All of the above"
},
{
"id":6,
"question":"Which one will allow traversing a Java collection in each direction?",
"options":[
"ListIterator",
"Iterator",
"MapIterator",
"SetIterator"
],
"answer":"ListIterator"
},
{
"id":7,
"question":"Pick the class that is NOT part of Java collection framework.",
"options":[
"Map",
"List",
"Queue",
"Struct"
],
"answer":"Struct"
},
{
"id":8,
"question":"Java Functional Interface can be defined as____.",
"options":[
"Simple Abstract Markup",
"Simple Active Markup",
"Single Ambivalue Method",
"Single Abstract Method"
],
"answer":"Single Abstract Method"
},
{
"id":9,
"question":"Which is the correct API to manage reactive streams in Java?",
"options":[
"java.util.concurrent.Flow",
"java.util.concurrent.Flow.Publisher",
"java.util.concurrent.Flow.Processor",
"All of the above"
],
"answer":"All of the above"
},
{
"id":10,
"question":"In Java, which of the following data structure classes CANNOT be type parameterized?",
"options":[
"List",
"Set",
"Array",
"Map"
],
"answer":"Array"
},
{
"id":11,
"question":"What is the output of the following inheritance code snippet?",
"options":[
"TSF",
"T",
"F",
"FST"
],
"answer":"FST"
},
{
"id":12,
"question":"Which class is introduced in Java 8 to get the current milliseconds?",
"options":[
"Clock",
"Current Time",
"Date Time",
"Time"
],
"answer":"Clock"
},

    
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




];
