// МОДУЛЬ 11.6 - Задание 4

// УСЛОВИЕ:
// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить числа в интервале от первого до второго принятого числа. Используйте setInterval. Например, пользователь ввёл числа 5 и 15. Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15).

// РЕШЕНИЕ:
function writeNumberRange(start, end) {
    let counter = start;
    const timer = setInterval(() => {
        if (counter > end) {
            clearInterval(timer);
            return;
        }
        console.log(counter);
        counter++;
    }, 1000);
}
writeNumberRange(5, 15)