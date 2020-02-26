export const questions = [
    {
        id: 1,
        question: "function sayHi() {\n  console.log(name);\n  console.log(age);\n  var name = \"Lydia\";\n  let age = 21;\n}\n\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: 'Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven\'t defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.\nVariables with the let keyword (and const) are hoisted, but unlike var, don\'t get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.'
    },
    {
        id: 2,
        question: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
        options: [
            { optionName: 'A', option: '0 1 2 and 0 1 2'},
            { optionName: 'B', option: '0 1 2 and 3 3 3'},
            { optionName: 'C', option: '3 3 3 and 0 1 2'}
        ],
        answer: 'C',
        solution: 'Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example. In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.'
    },
    {
        id: 3,
        question: "const shape = {\n radius: 10,\n diameter() {\n   return this.radius * 2;\n },\n perimeter: () => 2 * Math.PI * this.radius\n};\n\nconsole.log(shape.diameter());\nconsole.log(shape.perimeter());",
        options: [
            { optionName: 'A', option: '20 and 62.83185307179586'},
            { optionName: 'B', option: '20 and NaN'},
            { optionName: 'C', option: '20 and 63'},
            { optionName: 'D', option: 'NaN and 63'}
        ],
        answer: 'B',
        solution: 'Note that the value of diameter is a regular function, whereas the value of perimeter is an arrow function. With arrow functions, the this keyword refers to its current surrounding scope, unlike regular functions! This means that when we call perimeter, it doesn\'t refer to the shape object, but to its surrounding scope (window for example). There is no value radius on that object, which returns undefined.'
    },
    {
        id: 4,
        question: "+true; \n!\"Lydia\";",
        options: [
            { optionName: 'A', option: '1 and false'},
            { optionName: 'B', option: 'false and NaN'},
            { optionName: 'C', option: 'false and false'}
        ],
        answer: 'A',
        solution: 'The unary plus tries to convert an operand to a number. true is 1, and false is 0. The string \'Lydia\' is a truthy value. What we\'re actually asking, is "is this truthy value falsy?". This returns false.'
    },
    {
        id: 5,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 6,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 7,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 8,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 9,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 10,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 11,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 12,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 13,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 14,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 15,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 16,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 17,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 18,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 19,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 20,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 21,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 22,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 23,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 24,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 25,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 26,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 27,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 28,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 29,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
    {
        id: 30,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D',
        solution: ''
    },
]