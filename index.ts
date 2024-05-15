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
function trim(a: number, b: string): string {

    return b.slice(0, a);
}
let d: string = 'Привет';
let p: number = 2;
console.log(trim(p, d));