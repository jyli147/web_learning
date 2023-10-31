function fub(n) {
  // Условие работы функции. Область значений
  if (n < 0) {
    alert('Не умею в отрицательные числа Фибоначчи');
    return;
  }

  // Пограничное условие. Частный случай
  if (n <= 1) {
    return n;
  }

  // Два последних значения
  let last1 = 0;
  let last2 = 1;

  for (let i = 2; i <= n; i++) {
    [last1, last2] = [last2, last1 + last2];
  }

  return last2;
};


let n = prompt(`ввкдите число n`, ``);
console.log(fub(n));



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
