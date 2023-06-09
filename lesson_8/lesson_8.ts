// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).
export function sum(...nums: Array<number>): number {
  return nums.reduce((acc, curr) => acc + curr, 0);
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
export function getTriangleType(a: number, b: number, c: number): string {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return "00"; // Not a valid triangle
  } else if (a === b && b === c) {
    return "10"; // Equilateral triangle
  } else if (a === b || b === c || a === c) {
    return "01"; // Isosceles triangle
  } else {
    return "11"; // Scalene triangle
  }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа
export function getSum(number: number): number {
  const digits = number.toString().split("").map(Number);
  const sum = digits.reduce((acc, curr) => acc + curr, 0);
  return sum;
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenSum += arr[i];
    } else {
      oddSum += arr[i];
    }
  }
  return evenSum > oddSum;
};

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.
export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
  const result = array
    .filter((num) => num > 0 && Number.isInteger(num))
    .map((num) => num ** 2);
  return result;
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.
export function sumFirstNumbers(N: number): number {
  let sum = 0;
  for (let i = 0; i <= N; i++) {
    sum += i;
  }
  return sum;
}

// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено
export function getBanknoteList(amountOfMoney: number): Array<number> {
  const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
  const result = [];
  for (const denomination of banknotes) {
    const count = Math.floor(amountOfMoney / denomination);
    for (let i = 0; i < count; i++) {
      result.push(denomination);
    }
    amountOfMoney -= count * denomination;
  }
  return result;
}