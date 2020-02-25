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
        answer: 'D'
    },
    {
        id: 2,
        question: "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 1);\n}",
        options: [
            { optionName: 'A', option: '0 1 2 and 0 1 2'},
            { optionName: 'B', option: '0 1 2 and 3 3 3'},
            { optionName: 'C', option: '3 3 3 and 0 1 2'}
        ],
        answer: 'C'
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
        answer: 'B'
    },
    {
        id: 4,
        question: "function sayHi() {\nconsole.log(name);\nconsole.log(age);\nvar name = \"Lydia\";\nlet age = 21;\n}\nsayHi();",
        options: [
            { optionName: 'A', option: 'Lydia and undefined'},
            { optionName: 'B', option: 'Lydia and ReferenceError'},
            { optionName: 'C', option: 'ReferenceError and 21'},
            { optionName: 'D', option: 'undefined and ReferenceError'}
        ],
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
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
        answer: 'D'
    },
]