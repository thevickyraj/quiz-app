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

]