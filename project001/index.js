let temperatureC = 45;
let temperatureF = (9 / 5) * temperatureC + 32;
console.log("\n--- 1 задание ---")
console.log(`Температура в Цельсиях = ${temperatureC}\u2103
Температура в Фаренгейтах = ${temperatureF}\u2109 `)

console.log("\n--- 2 задание ---")
let name = 'Artem'
let admin = name;
console.log(`Значение переменной admin = ${admin}`)

document.getElementById("temperatureC").innerHTML = `Температура в Цельсиях = ${temperatureC}\u2103`;
document.getElementById("temperatureF").innerHTML = `Температура в Фаренгейтах = ${temperatureF}\u2109`;
document.getElementById("admin").innerHTML = `Значение переменной admin = ${admin}`;



function checkNumbers() {

    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);

    let num1Answer;
    let num2Answer;

    if (isNaN(num1)) {
        num1Answer = "\nНе введено первое значение\n"
    } else {
        num1Answer = `Переменная num1 = ${num1}\nУсловие, что первое число меньше или равно 1 ${num1 <= 1 ? "выполняется" : "не выполняется"}\n`
    }

    if (isNaN(num2)) {
        num2Answer = "\nНе введено второе значение\n"
    } else {
        num2Answer = `Переменная num2 = ${num2}\nУсловие, что второе число больше или равно 3 ${num2 >= 3 ? "выполняется" : "не выполняется"}\n`
    }

    alert(num1Answer + num2Answer)
}

function ternarOper() {
    let test = true;
    test ? console.log('+++') : console.log('---')
    alert("let test = true;\ntest ? console.log('+++') : console.log('---')")
}

function decadeOfMonth() {
    const numberOfDay = parseInt(document.getElementById("numberOfDay").value);

    if (!isNaN(numberOfDay) && numberOfDay > 0 && numberOfDay < 32) {
        if (numberOfDay >= 1 && numberOfDay <= 10) {
            alert('Первая декада')
        } else if (numberOfDay >= 11 && numberOfDay <= 20) {
            alert('Вторая декада')
        } else {
            alert('Третья декада')
        }
    } else {
        alert('День введен некорректно')
    }
}

function partsOfNumber() {
    const number = parseInt(document.getElementById("number").value);
    let digits = [];
    let newNumber = number;

    if (!isNaN(newNumber) && newNumber >= 100) {
        while (newNumber) {
            digits.push(newNumber%10)
            newNumber = Math.trunc(newNumber/10);
        }

        alert(`В числе ${number} количество сотен: ${digits[2]}, десятков: ${digits[1]}, единиц: ${digits[0]}`)
    } else {
        alert("Введено некорректное значение")
    }
}

function exponentCube(number) {
    return number ** 3
}

let cubeResult = exponentCube(2) + exponentCube(3);

document.getElementById("cube").innerHTML = `2^3 степени + 3 ^ 3 степени = ${cubeResult}`;


function getSalary() {
    const salary = +(document.getElementById("salary").value);
    if (!isNaN(salary) && salary > 0) {
        alert(`Размер заработной платы за вычетом налогов равен ${subTax(salary)}`)
    } else {
        alert("Введено некорректное значение")
    }
}

function subTax(number) {
    return number * 0.87
}

function getResult() {
    const firstNumber = +(document.getElementById("firstNumber").value);
    const secondNumber = +(document.getElementById("secondNumber").value);
    const thirdNumber = +(document.getElementById("thirdNumber").value);

    if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {
        if (firstNumber === secondNumber && secondNumber === thirdNumber) {
            alert(`Все числа равны между собой и равны ${firstNumber}`)
        } else {
            alert(`Максимальное из трех чисел ${firstNumber}, ${secondNumber}, ${thirdNumber} = ${getMax(firstNumber, secondNumber, thirdNumber)}`)
        }
    } else {
        alert("Введены некорректные данные")
    }
}

function getMax(firstNumber, secondNumber, thirdNumber) {
    let array = [firstNumber, secondNumber, thirdNumber];
    let max = array[0]

    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
    }

    return max
}

function getCalc(action) {
    const number1 = +(document.getElementById("number1").value);
    const number2 = +(document.getElementById("number2").value);

    switch (action) {
        case "+":
            alert(`Сумма чисел = ${sum(number1, number2)}`)
            break
        case "-":
            alert(`Разность чисел = ${sub(number1, number2)}`)
            break
        case "*":
            alert(`Произведение чисел = ${mult(number1, number2)}`)
            break
        case "/":
            alert(`Частное чисел = ${div(number1, number2)}`)
            break
    }
}

function sum(number1, number2) {
    return number1 + number2
}

function sub(number1, number2) {
    return number2 > number1 ? (number2 - number1) : (number1 - number2)
}

function mult(number1, number2) {
    return number1 * number2
}

function div(number1, number2) {
    return number1 / number2
}

function printEleven() {
    const alertArr = [];
    for (let i = 0; i < 11; i++) {
        let phrase = i % 2 === 0 ? "четное" : "нечетное"
        if (i === 0) {
            phrase = "это ноль"
        } else if (i % 2 === 0) {
            phrase = "четное число"
        } else {
            phrase = "нечетное число"
        }
        alertArr.push(`${i} - ${phrase}`)
    }

    alert(alertArr.join('\n'));

}

function arraySplice() {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    alert(`Исходный массив - ${arr.join(', ')}`)
    arr.splice(3,2)
    alert(`Измененный массив - ${arr.join(', ')}`)
}

function arrRandom() {
    const arr = [];
    let sum = 0;
    let min = 9;
    let countThree = 0;
    for (let i = 0; i < 10; i++) {
        arr.push(Math.floor(Math.random() * 10))
        sum = sum + arr[i];
        min = min > arr[i] ? min = arr[i] : min;
        arr[i] === 3 ? countThree++ : countThree;
    }

    alert(`Массив - ${arr.join(', ')}
    \nСумма - ${sum}\nМинимум - ${min}\n${countThree > 0 ? "есть 3" : "нет 3"}`)
}

function triangle() {
    let printStr = '';
    const alertArr=[];
    for (let i = 0; i < 20; i++) {
        printStr = printStr + 'x'
        console.log(`${printStr}`)
        alertArr.push(printStr);
    }
    alert(`Горка выведена в консоли и ниже:\n${alertArr.join('\n')}`)
}