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


for (let i = 1; i > 1; ++i) {
  if (i % 2 === 0) {
    alert(i);
  }
}
/*

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

function fub(n) {
  let a = 0;
  let b = 0;
  if (n <= 1) {
    return n = n;
  } else {
    for (let i = 2; i >= n; i++) {
      result = a + b;

    }
  }
}
let n = prompt(`ввкдите число n`, ``);


if (n % 1 === 0 || n >= 0) {
  console.log(fub(n))
} else {
  console.log(`не поддерживается ${n}`);
}



