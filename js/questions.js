// creating an array and passing the number, questions, options, and answers
let questions = [
  {
    numb: 1,
    question: "کدام گزینه درست است؟",
    answer: `let x = 5 ; x = "hello"`,
    options: [
      `let x = 5 ; x = "hello"`,
      `const y = 10 ; y = 15`,
      `var z = 20 ; z = true`,
      `let a = "apple" ; a = 7`
    ]
  },
  {
    numb: 2,
    question: "چگونه می‌توانیم یک متغیر در جاوااسکریپت تعریف کنیم؟",
    answer: `var`,
    options: [
      `def`,
      `var`,
      `let`,
      `const`
    ]
  },
  {
    numb: 3,
    question: "چگونه می‌توانیم یک عملگر مقایسه‌ای در جاوااسکریپت استفاده کنیم؟",
    answer: "==",
    options: [
      "==",
      "=",
      "!=",
      "<>"
    ]
  },
  {
    numb: 4,
    question: "چگونه می‌توانیم یک آرایه جدید در جاوااسکریپت ایجاد کنیم؟",
    answer: "[]",
    options: [
      "new Array()",
      "[]",
      "array()",
      "createArray()"
    ]
  },
  {
    numb: 5,
    question: " چگونه می‌توانیم یک تابع در جاوااسکریپت تعریف کنیم؟ ",
    answer: "function myFunction() {}",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "let myFunction() {}",
      "const myFunction() {}"
    ]
  },
  {
    numb: 6,
    question: " چگونه می‌توانیم یک شرطی در جاوااسکریپت استفاده کنیم؟",
    answer: "if",
    options: [
      "if",
      "then",
      "else",
      "both a and c"
    ]
  },
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....

  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];