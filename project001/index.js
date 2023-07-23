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