// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект
// с двумя методами: increment и decrement.
// Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1.
// Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
//
// 3) Напишем функцию, которая будет находить факториал числа с использованием рекурсии:
// // примеры вызова функции
//     console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
// console.log(factorial(0)); // выводит 1 (по определению факториала)

// Задание 1

const headerFirst = document.createElement('h2');
const paragraphFirst = document.createElement('p');
document.body.append(headerFirst);
document.body.append(paragraphFirst);

const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));
headerFirst.append('Решение задания №1\n')
paragraphFirst.append(`\nМинимальное число в массиве = ${Math.min(...arr)}`);

// Задание 2

const headerSecond = document.createElement('h2');
const paragraphSecond = document.createElement('p');
document.body.append(headerSecond);
document.body.append(paragraphSecond);
headerSecond.append('Решение задания №2\n')

const createCounter = (counter) => {
    return {
        increment() {
            counter+=1;
            return counter;
        },
        decrement() {
            counter-=1;
            return counter;
        }
    }
}
let counter = createCounter(0);

for (let i = 0; i < 3; i++) {
    paragraphSecond.append(counter.increment());
    // i < 2 ? paragraphSecond.append(' => ') : null
    paragraphSecond.append(' => ')
}

for (let i = 0; i < 3; i++) {
    paragraphSecond.append(counter.decrement());
    i < 2 ? paragraphSecond.append(' => ') : null
}

// Задание 2

const headerThird = document.createElement('h2');
const paragraphThird = document.createElement('p');
document.body.append(headerThird);
document.body.append(paragraphThird);
headerThird.append('Решение задания №3\n')

const button = document.getElementById('factorialButton');

const division = document.createElement('div');
division.classList.add('factorial-form');
const inputForm = document.createElement('input');
inputForm.type = 'number';
inputForm.id = 'factorial';
const buttonClick = document.createElement('input');
buttonClick.type = 'button';
buttonClick.value = 'Вычислить факториал'

const divisionOutput = document.createElement('div');
divisionOutput.id = 'printBlock';
division.append(inputForm);
division.append(buttonClick);
division.append(divisionOutput);
document.body.append(division);
buttonClick.addEventListener('click', (event) => {
    let inputNumber = document.getElementById('factorial');
    let printer = document.getElementById('printBlock');
    printer.innerHTML = `${inputNumber.value}! = ${factorial(inputNumber.value)}`;
})

const factorial = (num) => {
    if (num === 1 || num === 0) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

function clickButton() {
    let printer = document.getElementById('printBlock');
    printer.innerHTML = factorial(inputNumber.value);
}