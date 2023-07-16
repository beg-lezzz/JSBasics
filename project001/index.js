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