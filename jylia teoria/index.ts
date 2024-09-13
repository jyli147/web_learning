// function calcSum(source: number[]): number {
//     return source.reduce((acc, el) => acc + el);
// }

// function getGoodSource(): number[] {
//     return [1, 2, 3, 4, 5]
// }

// function getBadSource(): string[] {
//     return ['1', '2', '3', '4', '5']
// }

// function calcSumJS(source) {
//     return source.reduce((acc, el) => acc + el);
// }

// console.log(calcSum([1, 2, 3, 4, 5]))
// console.log(calcSumJS([1, 2, 3, 4, 5]))

// let source = getGoodSource();

// console.log(calcSum(source))

// console.log(calcSumJS(['1', '2', '3', 4, 5]))

// // let a: number = 12;
// // let b = 'asd'
// // console.log(a * b);


// Задачи:
// Сделайте функцию, которая вернет текущий день недели словом.
// function daysOfTheWeek(): string {
//     const day = [
//         'Воскресенье',
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота'
//     ]
//     const currenDay = new Date();
//     return day[currenDay.getDay()];
// }
// console.log(daysOfTheWeek());

// Сделайте функцию, которая параметром будет получать дату, а возвращать день недели словом, соответствующий этой дате.
// let day: any = new Date();
// function daysOfTheWeek(day): any {
//     const dayWeek: string[] = [
//         'Воскресенье',
//         'Понедельник',
//         'Вторник',
//         'Среда',
//         'Четверг',
//         'Пятница',
//         'Суббота'
//     ]
//     return dayWeek[day.getDay()];
// }
// console.log(daysOfTheWeek(day));

// Сделайте функцию, которая параметром будет принимать секунды, а возвращать количество суток, соответствующих этим секундам

// function day(sek: number): number {
//     const day: number = 86400;
//     return Math.floor(sek / day);
// }
// console.log(day(89400));


// Сделайте функцию, которая параметром будет принимать число и строку и обрезать эту строку до длины, заданной первым параметром.
// function trim(a: number, b: string): string {

//     return b.slice(0, a);
// }
// let d: string = 'Привет';
// let p: number = 2;
// console.log(trim(p, d));

// Сделайте функцию, которая параметром будет принимать число и возвращать сумму его цифр.
// let result: number = 0;
// function sum(number: number): number {
//     while (number > 0) {
//         result += number % 10;
//         number = Math.floor(number / 10);
//     }
//     return result
// }

// console.log(sum(98));

// Сделайте функцию, которая параметром будет принимать число и удалять из него нули.

// function result(number: number | string): any {
//     let str = +number.toString().split("").filter(i => +i != 0).join("")

//     return str;
// }
// console.log(result(120909888));


// Сделайте функцию, которая параметром будет принимать массив и удалять из него все дубли.

// function render(arr: any[]): any[] {
//     return [...new Set(arr)];
// }
// console.log(render([1, 2, 2, 3, 4, 5, 5]))

// Сделайте функцию, которая параметром будет принимать массив
// с числами и возвращать максимальное и минимальное значение из этого массива в виде следующего объекта:

// {
// 	max: 9,
// 	min: 1,
// }
// function render(arr: number[]): { max: number, min: number } {
//     let min: number = Infinity;
//     let max: number = 0;
//     for (let arrNumber of arr) {
//         min = Math.min(min, arrNumber);
//         max = Math.max(max, arrNumber);
//     }
//     return { max, min };
// }
// console.log(render([1, 2, 2, 3, 4, 5, 5]))

// Сделайте функцию, которая заполнит массив N случайными числами из заданного промежутка.

// function random(N: number, min: number, max: number): number[] {
//     let arr: number[] = [];
//     for (let i = 0; i < N; i++) {
//         arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
//     }
//     return arr;
// }
// console.log(random(4, 1, 8))

// Дан текст со знаками препинаний:

// 'aaa bbb, ccc. Xxx - eee bbb, kkk!'
// Получите массив слов из такого текста.

function getWordsFromText(text: string): string[] | null {

    return text.match(/\b\w+\b/g);
}

console.log(getWordsFromText('aaa bbb, ccc. Xxx - eee bbb, kkk!'))