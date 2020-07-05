/* Завдання 1:*/

// Задание 1:
// Дан массив с элементами 'a', 'b', 'c', 'd', 'e'. С помощью цикла for выведите все эти элементы на экран.

const letters = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i < letters.length; i++) {

    document.write(letters[i] + ' ');
}

/* Завдання 1:*/
/* Завдання 2:*/

// Задание 2:
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for и оператора if выведите в консоль нечетные элементы массива.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
	if (arr[i] % 2 - 1 == 0) {
		console.log(arr[i]);
	}
}

/* Завдання 2:*/
/* Завдання 3:*/

// Задание 3:
// Дан массив с элементами 1, 2, 3, 4, 5. С помощью цикла for найдите произведение элементов этого массива.

let mult = 1;

for (let i = 1; i <= 5; i++){
    mult = mult * i;
}

console.log(mult);

/* Завдання 3:*/
/* Завдання 4:*/

// Задание 4:
// Дан массив с элементами 2, 5, 9, 15, 1, 4. С помощью цикла for и оператора if выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

let arr = [2, 5, 9, 15, 0, 4];

for (let i = 0; i < arr.length; i++) {

if (arr[i] > 3 && arr[i] < 10) document.write(arr[i]+'<br>');
}

/* Завдання 4:*/
/* Завдання 5:*/

// Задание 5:
// Дан массив arr (заполните любыми значениями). Найдите среднее арифметическое его элементов (сумма делить на количество). 

let arr = [3, 6, 13, 21, 53, 46, 77, 82, 95];

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

let result = sum / arr.length;
document.write (sum);
document.write ('<br>');
document.write (result);

/* Завдання 5:*/
/* Завдання 6:*/

// Задание 6:
// Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

const numbers = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < numbers.length; i++) {
    const number2string = String(numbers[i]);
    const firstLetter = number2string[0];

    switch (firstLetter) {
        case '1':
        case '2':
        case '5':
            console.log(numbers[i]);
    }

}

/* Завдання 6:*/
/* Завдання 7:*/

// Задание 7:
// Составьте массив дней недели. С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.

let day = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"]
for (i = 0; i < day.length; i++) {
    if (i >= 5) {
        document.write(`<b> ${day[i]}<b> <br>`);
    } else {
        document.write(`${day[i]} <br>`);
    }
}

/* Завдання 7:*/
/* Завдання 8:*/

// Задание 8:
// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

const duplicates = ['A', 'a', 'A', 'B', 'b', 'b', 2, 5, 1, 1, 1, 1];

function removeDuplicates (arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const s = String(arr[i]).toUpperCase();

        if (!result.includes(s)) {
            result.push(s);
        }
    }

    return result;
}

console.log(removeDuplicates(duplicates));
console.log(removeDuplicates([1, 2, 2, 2, 2, 2, 3, 4, 4, 4]));

// // const duplicates = ['A', 'a', 'A', 'B', 'b', 'b', 2, 5, 1, 1, 1, 1];

// // function removeDuplicates (arr) {
// //     const result = [];
// //     let z = 0;

// //     for (let i = 0; i < arr.length; i++) {
// //         const s = String(arr[i]).toUpperCase();

// //         if (result.length === 0) {
// //             result.push(arr[i]);
// //         }

// //         for (let j = z; j < result.length; j++) {
// //             const sr = String(result[j]).toUpperCase;

// //             if (sr !== s) {
// //                 result.push(arr[i]);
// //                 z++;
// //                 break;
// //             }
// //         }
// //     }

// //     return result;
// // }

// // console.log(removeDuplicates(duplicates));
// // console.log(removeDuplicates([1, 2, 2, 2, 2, 2, 3, 4, 4, 4]));

/* Завдання 8:*/
/* Завдання 9:*/

// Задание 9:
// Напишите функцию countIdentic(arr), которая возвращает количество повторяющихся элементов в массиве.

function recMin(arr, min) {
    if (min === undefined) {
        min = arr.pop();
    }

    if (arr.length > 0) {
        let current = arr.pop();

        min = Math.min(current, min);

        return recMin(arr, min);
    }

    return min;
}

console.log( recMin([1000, -5, 43, 15, 73, -30, 100]) );

/* Завдання 9:*/
/* Завдання 10:*/

// Задание 10:
// Найдите минимальный и максимальный элемент в массиве.

const arrMinmax = [1, 2, 3, 4, 7, 100];

console.log(arrMinmax);

console.log(Math.min(...arrMinmax) );
console.log(Math.max(...arrMinmax) );

console.log(Math.min.apply(null, arrMinmax) );
console.log(Math.max.apply(null, arrMinmax) );
/* Завдання 10:*/