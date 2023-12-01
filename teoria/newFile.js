"use strict";
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



// function dec(a, b, c) {

//   let d = ((b * b) - (4 * a * c));
//   let x1;
//   let x2;
//   if (d < 0) {
//     return `У дискриминанта нет дейтсвительных корней`;
//   } else if (d === 0) {
//     x1 = -b / (2 * a);
//     return `У дискриминанта один корень: x1 = ${x1}`;
//   } else {
//     x1 = (-b + Math.sqrt(d)) / (2 * a);
//     x2 = (-b - Math.sqrt(d)) / (2 * a);
//     return `У дискриминанта два корня: x1 = ${x1}, x2 = ${x2}`;
//   }
//   return (d, x1, x2);
// }

// let a = +prompt(`ввeдите число a`, ``);
// let b = +prompt(`ввeдите число b`, ``);
// let c = +prompt(`ввeдите число c`, ``);

// console.log(dec(a, b, c));

// let elem = document.querySelector(`.titleh2`);

// let elemClassName = elem.className;
// console.log(elemClassName);

// elem.className = "titleh3";

// let element = document.querySelector(`.titleh2`);
// element.style.color = `green`;
// element.style.cssText = `

// function sum(x) {
//     return function (y) {
//         let z = x + y;
//         return z
//     }
// }

// console.log(sum(9)(-1));


// function sort() {

//     let inBetween = arr.filter(item => item >= 3 || item <= 6);


//     let inArray = arr.filter(item => item = arr);

// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2


// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let j = i;
//         let shooter = function () { // функция shooter
//             alert(j); // должна выводить порядковый номер
//         };
//         shooters.push(shooter); // и добавлять стрелка в массив
//         i++;
//     }

//     // ...а в конце вернуть массив из всех стрелков
//     return shooters;
// }

// let army = makeArmy();

// // все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
// army[0](); // 10 от стрелка с порядковым номером 0
// army[1](); // 10 от стрелка с порядковым номером 1
// army[2](); // 10 ...и т.д.


// Пользовательсике своейства, использование свойств функции вместо замыканий
// свойство length. Кеширование или хеширование нихуя не ясно
// Знаечение this в протите наседвания

// let user = {
//     name: "John"
//   };

//   Object.defineProperty(user, "name", {
//     writable: false,
//     configurable: false
//   });

//   // теперь невозможно изменить user.name или его флаги
//   // всё это не будет работать:
//   user.name = "Pete";
//   delete user.name;
//   Object.defineProperty(user, "name", { value: "Pete" });

// let user = {
//     name: `julia`,
//     sername: `Tixomirova`,
//     age: `30`,


//     get getUser() {
//         return `Вас зовут: ${this.name} ${this.sername}, вам ${this.age}`;
//     },

//     set getUser(value) {
//         [this.name, this.sername, this.age] = value.split(` `);
//     }
// }

// user.getUser = `Ann Cor 20`;

// alert(user.getUser);
// alert(user.name);
// alert(user.sername);




// let worker = {
//     someMethod() {
//         return 2;
//     },

//     slow(x) {
//         alert("Called with " + x);
//         return x * this.someMethod(); // (*)
//     }
// };

// function cachingDecorator(func) {
//     let cache = new Map();
//     return function (x) {
//         if (cache.has(x)) {
//             return cache.get(x);
//         }
//         let result = func.call(this, x); // теперь 'this' передаётся правильно
//         cache.set(x, result);
//         return result;
//     };
// }

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

// alert(worker.slow(2)); // работает
// alert(worker.slow(2)); // работает, не вызывая первоначальную функцию (кешируется)

// alert(worker.slow(3));
// alert(worker.slow(4));

// alert(worker.slow(2));
// alert(worker.slow(4));



// alert(`------------------`);



// function work(a, b) {
//     alert(a + b); // произвольная функция или метод
// }
// function sp(fun) {

//     function wrappe(...args) {
//         // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//         wrappe.calls.push(args);
//         return fun.apply(this, args);
//     }

//     wrappe.calls = [];

//     return wrappe;
// }
// work = sp(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//     alert('call:' + args.join()); // "call:1,2", "call:4,5"
// }


// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true,
//     __proto__: animal
// };

// for (let prop in rabbit) {
//     let isOwn = rabbit.hasOwnProperty(prop);

//     if (isOwn) {
//         alert(`Our: ${prop}`); // Our: jumps
//     } else {
//         alert(`Inherited: ${prop}`); // Inherited: eats
//     }
// }


// // Не понимаю фильтр.


// let head = {
//     glasses: 1
//     __proto__: table,
// };

// let table = {
//     pen: 3
//       __proto__: bed,
// };

// let bed = {
//     sheet: 1,
//     pillow: 2,
//     __proto__: pockets,
// };

// let pockets = {
//     money: 2000
// };

// // pockets → bed → table → head



function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("Jack");
let obj2 = new user.constructor(`Fool`);
alert(user.name); // Jack
alert(user.isAdmin); // false

alert(obj2.name);




// let dictionary = Object.create(null);

// // ваш код, который добавляет метод dictionary.toString

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"

// Object.setPrototypeOf(obj, proto) – устанавливает свойство[[Prototype]] объекта obj как proto.

//     Object.setPrototypeOf(dictionary, toString())


//     Код не понятен
//     let dictionary = Object.create(null, {
//         toString: { // определяем свойство toString
//           value() { // значение -- это функция
//             return Object.keys(this).join();
//           }
//         }
//       });


function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

}

let clock = new Clock({ template: 'h:m:s' });
clock.start();


//   В чем разница между аргумент и остаточными параметрами arg
// Название переменных свойств с _
// Прочитать код EventMixin

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};


delay(3000).then(() => alert('выполнилось через ${} 3 секунды'));


let promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        div.style.width = radius * 2 + 'px';
        div.style.height = radius * 2 + 'px';
    }, 0);

});
promise
    .then((result) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(`Привет Мир`);
            }, 2000);
        });
    });


async function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

loadJson('no-such-user.json') // (3)
    .catch(alert); // Error: 404