/* alert(`Я JavaScript!`);
alert(`Привет!`);
let admin;
let name1 = `Джон`;
admin = name1;
alert(admin);
let PlanetEarth

let nameuser = prompt("Как тебя зовут?", `  `);
alert(`Тебя зовут ${nameuser}`);
let age;
//age = "" - 1 + 0;
age = "  -9  " - 5;
console.log(age);
console.log(typeof age);

let a = prompt1("Первое число?", 1);
let b = prompt2("Второе число?", 2);
let c = (a + b);
alert(c);
console.log(c);

let year = prompt("Какое «официальное» название JavaScript?", "");
if (year == "ECMAScript") {
    alert(`Верно!`);
} else {
    alert(`Попробуй еще раз!`);
}

console.log(year);

let age = prompt(`Введите число`, 0);
let message = (age == 0) ? `0` :
  (age > 0) ? `1` :
    `-1`;
alert(message);

console.log(message);

console.log(`35` + -`22`);

let age = prompt(`Введите число`, 0);
let message = null;
if (age < 14) { message = `Ложно`; }
else if (age > 90) { message = `Ложно`; }
else {
  message = `Истина`;
};
alert(message);

Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно.

Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.



let age = prompt(`Кто там?`, ` `);
let message = null;
if (age === `Админ`) { message = `Ложно`; }
else if (age > 90) { message = `Ложно`; }
else {
  message = `Истина`;
};
alert(message);


let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}
*/

/*
for (let i = 1; i > 1; ++i) {
  if (i % 2 === 0) {
    alert(i);
  }
}


let age = prompt(`Введите число`, 0);
let message;
if (age == 0) {
    message = 0;
} else if (age < 0) {
    message = -1;
} else {
    message = 1;
};
alert(message);






let age = prompt('Возраст?', 18);

let message
if (age < 3) {
    message = 'Здравствуй, малыш!';
} else if (age < 18) {
    message = 'Привет!';
} else if (age < 100) {
    message = 'Здравствуйте!';
} else {
    message = 'Какой необычный возраст!';
}

if (browser === 'Edge') {
     alert( "You've got the Edge!" );
} else if (browser ===  'Chrome' || 'Firefox' ) {
   alert( 'Okay we support these browsers too' );
} else {
   alert( 'We hope that this page looks ok!' )
}




let result;
result = (a + b < 4) ? 'Мало' : 'Много';

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}



let message;

(login == 'Сотрудник') ?{
  message = 'Привет';
} else if (login == 'Директор') {
  message = 'Здравствуйте';
} else if (login == '') {
  message = 'Нет логина';
} else {
  message = '';
}


let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );
*/

//результат можно выводить только типом строка ?
//Почему показывает ошибка перед скобкой
// Препроцеессоры сss
//alert( alert(1) || 2 || alert(3) ); не понимаю почему выводится 1 потом 2
//alert( alert(1) && alert(2) ); почему 1 и undef..
//if (-1 || 0) alert( 'first' ); почему это условие выполнится

// Почему алертраспологается в теле цикла выше переменной с шагом
/*

let num;
do {
  num = prompt("Введите число больше 100?", 0);
} while (num <= 100 && num);
Цикл do..while повторяется, пока верны две проверки:

Проверка num <= 100 – то есть, введённое число всё ещё меньше 100.
Проверка && num вычисляется в false, когда num имеет значение null или пустая строка ''.
В этом случае цикл while тоже нужно прекратить.
Кстати, сравнение num <= 100 при вводе null даст true, так что вторая проверка необходима.

let i = 0;
do {
  alert(i);
  i++;
} while (i < 3);

Функциональное выржение и функция разница
Последняя задача в функциях
Как посмотреть брекпоинты
Автоматическое тестирование моша, полифы


function pow(x, n) {
  let result = x;

  for (i = 1; n >= i; i++)



};

Ключевое слово this в обьектах, почему не работает код
Понимание ооп
Цикл for переменная key являетсяфактически константой использования?
this не является фиксированным?


let user = {
  namee: `John`,
  surname: `Smith`,
}
user.namee = "Pete";
delete user.namee;


let obj = {
  width: 200,
  height: 300,
  title: "My menu"
};
function multiplyNumeric(x, y, z) {
  if (x === Number, y === Number, z === Number,) {
    x *= 2;
    y *= 2;
    z *= 2;
  }

  }
multiplyNumeric(obj.width, )

let calculator = {
  sum() {
    return this.a + this.b;
  },

  mul() {
    return this.a * this.b;
  },

  read() {
    this.a = +prompt('a?', 0);
    this.b = +prompt('b?', 0);
  }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());


function pow(x, n) {
  let resylt = x;
  for (let i = 1; n > i; i++) {
    resylt *= x;
  }
  return resylt;
};
let x = prompt(`ввкдите число х`, ``);
let y = prompt(`ввкдите число y`, ``);

pow(x, y);

if (n % 1 === 0 || n >= 1) {
  alert(pow(x, n))
} else {
  alert(`Степень не поддерживается ${n}`)
}

//Функция факториала n! = n * (n - 1) * (n - 2) * ...*1

function calcFactorian(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}
let n = prompt(`ввкдите число n`, ``);

calcFactorian(n);

if (n % 1 === 0 || n >= 1) {
  console.log(calcFactorian(n))
} else {
  console.log(`не поддерживается ${n}`);
}


function calcFactorian(n) {
  let result = 1;
  let i = n;
  while (i > 0) {
    i--;
    result *= i;
  }

  return result;
}
let n = prompt(`ввкдите число n`, ``);

calcFactorian(n);

if (n % 1 === 0 || n >= 1) {
  console.log(calcFactorian(n))
} else {
  console.log(`не поддерживается ${n}`);
}

n <= 1 = n, (fibonacci(n - 1) + fibonacci(n - 2)).*/




// function fub(n) {
//   let a = 0;
//   let b = 0;

//   if (n <= 1) {
//     return n = n;
//   } else {
//     for (let i = 2; i >= n; i++) {
//       result = a + b;
//     }
//   }
// }

// let n = prompt(`ввкдите число n`, ``);


// if (n % 1 === 0 || n >= 0) {
//   console.log(fub(n))
// } else {
//   console.log(`не поддерживается ${n}`);
// }


// function calcFactorian(n) {
//   if (n % 1 !== 0 || n < 1) {
//     console.log(`не поддерживается ${n}`);
//     return;
//   }

//   let result = 1;

//   // for (let i = 1; i <= n; i++) {
//   //   result *= i;
//   // }

//   for (let i = n; i > 0; i--) {
//     result *= i;
//   }

//   return result;
// }

// let n = prompt(`ввкдите число n`, ``);
// calcFactorian(n);


// function calcFactorian(n) {
//   let result = 1;
//   let i = n;

//   while (i > 0) {
//     result *= i;
//     i -= 1;
//   }

//   return result;
// }
// let n = prompt(`ввкдите число n`, ``);

// if (n % 1 === 0 || n >= 1) {
//   console.log(calcFactorian(n))
// } else {
//   console.log(`не поддерживается ${n}`);
// }


// function fub(n) {
//   // Условие работы функции. Область значений
//   if (n < 0) {
//     alert('Не умею в отрицательные числа Фибоначчи');
//     return;
//   }

//   // Пограничное условие. Частный случай
//   if (n <= 1) {
//     return n;
//   }

//   // Два последних значения
//   let last2 = 0;
//   let last1 = 1;

//   for (let i = 2; i < n; i++) {
//     let originalLast2 = last2;

//     last2 = last1;
//     last1 = last1 + originalLast2;
//   }

//   return last2 + last1;
// }
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55
// console.log(fub(0));
// console.log(fub(1));
// console.log(fub(2));
// console.log(fub(3));
// console.log(fub(4));
// console.log(fub(5));
// console.log(fub(6));
// console.log(fub(7));
// console.log(fub(8));
// console.log(fub(9));
// console.log(fub(10));

// // let n = prompt(`ввкдите число n`, ``);
// // let result = "Я все решил!!!";

// // if (n % 1 === 0 || n >= 0) {
// //   console.log(fub(n))
// // } else {
// //   console.log(`не поддерживается ${n}`);
// // }









// function fub(n) {
//   // Условие работы функции. Область значений
//   if (n < 0) {
//     alert('Не умею в отрицательные числа Фибоначчи');
//     return;
//   }

//   // Пограничное условие. Частный случай
//   if (n <= 1) {
//     return n;
//   }

//   // Два последних значения
//   let last1 = 0;
//   let last2 = 1;

//   for (let i = 2; i <= n; i++) {
//     [last1, last2] = [last2, last1 + last2];
//   }

//   return last2;
// };


// let n = prompt(`ввкдите число n`, ``);
// console.log(fub(n));



// // function dec(a, b, c) {

// //   let d = ((b * b) - (4 * a * c));
// //   let x1;
// //   let x2;
// //   if (d < 0) {
// //     return `У дискриминанта нет дейтсвительных корней`;
// //   } else if (d === 0) {
// //     x1 = -b / (2 * a);
// //     return `У дискриминанта один корень: x1 = ${x1}`;
// //   } else {
// //     x1 = (-b + Math.sqrt(d)) / (2 * a);
// //     x2 = (-b - Math.sqrt(d)) / (2 * a);
// //     return `У дискриминанта два корня: x1 = ${x1}, x2 = ${x2}`;
// //   }
// //   return (d, x1, x2);
// // }

// // let a = +prompt(`ввeдите число a`, ``);
// // let b = +prompt(`ввeдите число b`, ``);
// // let c = +prompt(`ввeдите число c`, ``);

// // console.log(dec(a, b, c));


// function num(a, b) {
//   let c = a + b;

//   return c;
// }

// let a = +prompt(`Введите число а`, ``);
// let b = +prompt(`Введите число b`, ``);

// console.log(num(a, b));
// console.log(typeof (a, b));

// camelize("list-style-image");
// camelize("-webkit-transition");

// let arr = camelize.split(`-`);
// let str = arr.join(';');


// const bodiElem = document.body;
// const divElem = bodiElem.lastElementChild;
// const ulElem = divElem.nextElementSibling;

// console.log(divElem);
// console.log(ulElem);



// class MyClass {
//   constructor({ template }) {
//     this.template = template;
//   }
//   let timer;

// function render() {
//   let date = new Date();

//   let hours = date.getHours();
//   if (hours < 10) hours = '0' + hours;

//   let mins = date.getMinutes();
//   if (mins < 10) mins = '0' + mins;

//   let secs = date.getSeconds();
//   if (secs < 10) secs = '0' + secs;

//   let output = template
//     .replace('h', hours)
//     .replace('m', mins)
//     .replace('s', secs);

//   console.log(output);
// }

// this.stop = function () {
//   clearInterval(timer);
// };

// this.start = function () {
//   render();
//   timer = setInterval(render, 1000);
// };

// }
// prop = value; // свойство
// constructor(...) { // конструктор
//   // ...
// }
// method(...) { } // метод
//   get something(...) { } // геттер
//   set something(...) { } // сеттер
// [Symbol.iterator]() { } // метод с вычисляемым именем (здесь - символом)
// // ...









class Task {
  constructor(id, title, description, isCompleted = false) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
  }

  toggleCompleted() {
    this.isCompleted = !this.isCompleted;
  };

  toString() {
    return `id=${this.id}, title=${this.title}, description=${this.description}, isCompleted=${this.isCompleted}`;
  }
};

class TaskList {
  #tasks = [];
  #lastId = 0;

  // Разные классы и разные контексты разные this. 597 598 строки, поменять местами, 588 и 589 исправить. приватные поля по настоящему.

  // addTask(title, taskDescription) {
  //   let task = new Task(this._tasks.length, title, taskDescription);
  //   this._tasks.push(task);
  //   return task;
  // }

  addTask(title, taskDescription) {
    let task = new Task(this.#lastId, title, taskDescription);
    this.#lastId++;
    this.#tasks.push(task);
    return task;
  }

  // найти и вернуть все задачи
  findAll() {
    return [...this.#tasks.map(t => new Task(t.id, t.title, t.description, t.isCompleted))];
  }

  // Найти задачу в списке по id. 
  // Если задача найдена, вернуть ее
  // Если задача не найдена, вернуть null
  findById(id) {
    // filteredTasks пустой массив или массив с одним элепентом
    let filteredTasks = this.#tasks.filter(item => item.id === id);
    if (filteredTasks.length >= 1) {
      return filteredTasks[0];
    } else {
      return null;
    }
  }

  // Удалить задачу из списка. 
  // Если задача удалена, вернуть удаленную задачу
  // Если задача не найдена в списке, выбросить ошибку TaskNotFoundError
  // removeTaskById(id) {
  //   if (id >= 0) {
  //     return this._tasks.splice(id, 1)[0];
  //   } else {
  //     throw new Error(`Ошибка`);
  //   }
  // }

  removeTaskById(id) {
    let index = this.findById(id);
    if (index !== -1) {
      this.#tasks.splice(index, 1);
    } else {
      throw new Error(`Ошибка`);
    }
  }

  // Переключить isCompleted у задачи. 
  // Если задача удалена, вернуть измененную задачу
  // Если задача не найдена в списке, выбросить ошибку TaskNotFoundError
  toggleTask(id) {
    let task = this.findById(id);
    if (task) {
      task.isCompleted = !task.isCompleted;
      return task;
    } else {
      throw new Error(`Задача не найдена в списке: ${id}`);
    }
  }
}

// let myTasksList = new TaskList();
// let task1 = myTasksList.addTask(`Сходить в магазин`, `купить яиц`);
// let task2 = myTasksList.addTask(`Сходить в магазин`, `купить хлеба`);

// // console.log(task1);
// // console.log(task2);

// // console.log();
// // console.log();
// // console.log();

// // console.log(`.findAll = ${myTasksList.findAll()}`)

// // console.log();
// // console.log(myTasksList.findById(3));
// // console.log();
// // console.log(myTasksList.findById(1));
// // console.log();
// // console.log(myTasksList.removeTaskById(1));
// // console.log();
// // console.log(`.findAll = ${myTasksList.findAll()}`)


// // тест для удаления

// // let targetId = 1;

// // let taskWithId1 = myTasksList.findById(targetId);
// // console.log(taskWithId1); // task
// // let removedTask = myTasksList.removeTaskById(targetId);
// // console.log(removedTask); // task
// // console.log(taskWithId1 === removedTask) // true
// // console.log(myTasksList.findById(targetId)); // null

// // тест для переключения isCompleted

// // let targetId = 1;

// // let taskWithId1 = myTasksList.findById(targetId);
// // console.log(taskWithId1); // task
// // let toggledTask = myTasksList.toggleTask(targetId);
// // console.log(toggledTask); // task
// // console.log(taskWithId1.isCompleted !== toggledTask.isCompleted) // true
// // console.log(myTasksList.findById(taskWithId1.id)); // task


// console.log('\nДо удаления и добавления: \n')
// console.log(myTasksList);

// myTasksList.removeTaskById(task1.id);
// myTasksList.addTask(task1.title, task1.description);

// console.log('\nПосле удаления и добавления: \n')
// console.log(myTasksList);

let myTasksList = new TaskList();

// Добавляем две задачи в список
let task1 = myTasksList.addTask(`Задача: task1`, `купить яиц`);
let task2 = myTasksList.addTask(`Задача: task2`, `купить хлеба`);

// Смотрим на список
console.log('\nДо удаления и добавления: \n')
console.log(myTasksList.findAll());

// Удаляем первую задачу из списка, она нам больше не нужна
myTasksList.removeTaskById(task1.id);

// смотрим список
console.log('\nПосле удаления task1: \n')
console.log(myTasksList.findAll());

// Добавляем новую задачу в список
let task3 = myTasksList.addTask('Задача: task3', 'купить соль')

// Смотрим в список
console.log('\nПосле добавления task3: \n')
console.log(myTasksList.findAll());

// хотим отметить task2 как выполненную
myTasksList.toggleTask(task2.id)

// Смотрим в список
console.log('\nПосле переключания task2: \n')
console.log(myTasksList.findAll());





// let currentFilter = 'all';
// let filteredTasks = [];

// function filtersTask(filter) {
//     currentFilter = filter;
//     if (filter === 'all') {
//         filteredTasks = tasks;
//     } else if (filter === 'completed') {
//         filteredTasks = tasks.filter(task => task.completed);
//     } else if (filter === 'active') {
//         filteredTasks = tasks.filter(task => !task.completed);
//     }
//     renderTasks();
// }

// // Обработчик события клика на кнопках фильтра
// document.addEventListener('click', function (e) {
//     if (e.target && e.target.classList.contains('filter')) {
//         const filter = e.target.dataset.filter;
//         filtersTask(filter);
//     }
// });


// function work(a, b) {
//   alert(a + b);
// }

// function spy(func) {

//   function wrapper(...args) {
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }


// work = spy(work);

// console.log(work(4, 2));



// for (let args of work.calls) {
//   alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }


// function f(x) {
//   alert(x);
// }

// function delay(f, ms) {

//   return function () {
//     setTimeout(() => f.apply(this, arguments), ms)
//   }

// }


// let f1000 = delay(alert, 1000);

// f1000("test");

// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
// let x = -1;
// if (x > 0) {
//   alert(true);
// } else {
//   alert(false);
// }
// Дана строка. Выведите в консоль длину этой строки.
// let x = 'привет';
// console.log(x.at(- 1));
// Дано число. Проверьте, четное оно или нет.

// let x = 'Ghbdtn';
// let y = 'Ghbdddddn';
// if (x.length[0] === y.length[0]) {
//   alert(true);
// } else {
//   alert(false);
// }
// Дана некоторая строка. Найдите позицию первого нуля в строке.


// Выведите в консоль все числа в промежутке от 1 до 1000, сумма первой и второй цифры которых равна пяти.

// for (let i = 1; i <= 1000; i++) {
//   let firstDigit = Math.floor(i / 10);
//   let secondDigit = i % 10;
//   if (firstDigit + secondDigit === 5) {
//     console.log(i);

//   }

// }

// Слово палиндром

let a = ['ada', 'dhd', 'ghgh', "довод", "tenet", "итти"]

function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

for (let i of a) {
  console.log(i + ' это палиндром ' + isPalindrome(i))
}

// Фраза палиндром
let b = ["Madam, I’m Adam", "Хил, худ, а дух лих", "А роза упала на лапу азора", "bubbushusuhhhh"];

function isPalindrom(string) {
  let x = string.replace(/[\W_]/g, '').toLowerCase();
  let y = x.split('').reverse().join('');
  return y === x;
}

function c(s) {
  return s.split('').reverse().join('');
}

for (let i of b) {
  console.log(i + ' это палиндром ' + isPalindrom(i));
  console.log("Вывод задом на перед: " + c(i));
}

// // Дано число. Выведите в консоль последнюю цифру этого числа.
// let s = 1234;
// console.log(s.toString().slice(-1));

// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
let num = 12345;
let st1 = num.toString().at(1);
console.log(st1);
let st2 = num.toString().at(-1);
console.log(st2);
let sum = Number(st1) + Number(st2);
console.log(sum);

// Дано число. Выведите количество цифр в этом числе.

console.log(num.toString().length);
// Выведите в консоль все целые числа от 1 до 100.
// for (let i = 1; i <= 1000; i++) {
//   console.log(i)
// }

// Выведите в консоль все четные числа из промежутка от 1 до 100.
// for (let i = 0; i <= 1000; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }

// }
// Найдите сумму всех целых чисел от 1 до 100.
// let summ = 0;
// for (let i = 1; i <= 1000; i++) {
//   summ += i;
// }
// console.log(summ);
// Дан массив с числами. Найдите сумму квадратов элементов этого массива.
// let arr = [1, 3, 5, 7, 8, 9, 8];
// function sum2(number) {
//   return number **= 2
// }

// for (arrNum of arr) {
//   console.log(sum2(arrNum));
// }
// Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.
// let arr = [1, 3, 5, 7, 8, 9, 8];
// function s(number) {
//   let square = Math.sqrt(number);
//   return square;
// }
// let t = 0;
// for (arrNum of arr) {
//   t += s(arrNum);


// } console.log(t);

// Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.
// let arr = [1, 3, 5, 7, 8, 9, 8, 33, 2, 56, 44];
// let t = 0;
// for (arrNum of arr) {
//   if (arrNum > 0 & arrNum < 10) {
//     t += arrNum;
//   }

// } console.log(t);

// Дана строка:

// 'abcde'
// Получите массив букв этой строки.
// let string = 'abcde';
// let arr = Array.from(string);
// console.log(arr);

// Дан некоторый массив, например, вот такой:

// [1, 2, 3, 4, 5, 6]
// Найдите сумму первой половины элементов этого массива.

// let arr = [1, 2, 3, 4, 5, 6];
// const arr2 = arr.slice(arr.length / 2);
// console.log(arr2);
// let suum = 0;
// function summ(n) {
//   return suum += n;
// }
// for (arrn of arr2) {
//   console.log(summ(arrn))
// }

// Дан массив с числами. Подсчитайте количество отрицательных чисел в этом массиве.
let arr = [1, 2, 3, 4, 5, 6, -9, -8];