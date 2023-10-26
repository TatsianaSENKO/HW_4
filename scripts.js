// ЗАДАНИЕ 1
 /* Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти элементы на экран.*/

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}


// ЗАДАНИЕ 2
/*Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут быть положительными и отрицательными. Выведите на экран только отрицательные числа, которые больше -10, но меньше -3.*/

let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4,  5, -6, 10, 7];

for (let a = 0; a < arr2.length; a++) {
    if (arr2[a] > -10 && arr2[a] < -3)
    console.log (arr2[a]);
}


// ЗАДАНИЕ 3
/*Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
массива. Запишите ее в переменную result и выведите.*/

let arr = [];
    result = 0;

for (let i = 23; i <= 57; i++) {
    arr.push(i);
    result += i;
}
console.log(arr);
console.log(result);

let a = 23;
    arr2 = [];
while (a <= 57) {
    arr2.push(a);
    a++;
}
console.log(arr2);


// ЗАДАНИЕ 4
/*Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.*/

let arr4 = ['10', '20', '30', '50', '235', '3000'];

for (let i = 0; i < arr4.length; i++) {
    let num = arr4[i];
    let element = num[0];
    if (element == 1 || element == 2 || element == 5) {
        console.log(num);
    }
}


// ЗАДАНИЕ 5
/*Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все дни недели, а выходные дни выведите жирным.*/

let arrWeek = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

for (let i = 0; i < arrWeek.length; i++) {
    if (i >= (arrWeek.length-2)) {
    document.write((arrWeek[i]).bold() + ' ');
    } else {
        document.write(arrWeek [i] + ' ');
    }
}


// ЗАДАНИЕ 6
/* Создайте массив с произвольными данными. Добавьте в конец массива любой элемент, и получите последний элемент массива, используя свойство length.*/

let numbers = ['Один', 'Два', 'Три', 'Четыре'];
console.log (numbers);

numbers.push ('Пять');
console.log (numbers);
console.log (numbers[numbers.length-1]);


// ЗАДАНИЕ 7
/* Запросите у пользователя по очереди числовые значения при помощи prompt и сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое значение. Выведите получившийся массив на экран. Выполните сортировку чисел массива, и выведите его на экран.*/

let arr = [];
let check = true;
let sum = 0;

while(check){
    let num = prompt('Введите число');
    if(num === '') {
        check = false;
    } else if(num === null){
        check = false;
    } else {
        arr.push(Number(num));
    }

}
console.log(arr);
arr.sort(function(a, b) {
    return a-b;
});
console.log(arr);


// ЗАДАНИЕ 8
/* Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке), используя цикл while и метод reverse.*/

let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let i = 0;

arr8.reverse();

while (i < arr8.length) {
    console.log (arr8[i]);
    i++;
}


// ЗАДАНИЕ 9
/* Напишите скрипт, считающий количество нулевых (пустых) элементов в заданном целочисленном массиве [5, 9, 21, , , 9, 78, , , , 6].*/

let arr9 = [5, 9, 21, , , 9, 78, , , , 6];
let num = 0;

for (let i = 0; i < arr9.length; i++) {
    if (arr9[i] == null) {
        num++;
    } else {
        continue;
    }
}
console.log(num);

// ЗАДАНИЕ 10
/* Найдите сумму элементов массива между двумя нулями (первым и последним нулями в массиве). Если двух нулей нет в массиве, то выведите ноль. В массиве может быть более 2х нулей. Пример массива: [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2] или [1,8,0,13,76,8,7,0,22,0,2,3,2].*/

let arrNums = [48,9,0,4,21,2,1,0,8,84,76,8,4,13,2];

let firstNull = arrNums.indexOf(0);
let secondNull = arrNums.lastIndexOf(0);

// console.log(firstNull, secondNull);

let sum = 0;

for (let i = firstNull; i <= secondNull; i++) {
    sum += arrNums[i];
    // console.log(arrNums[i]);
}

if (firstNull == -1 && secondNull == -1) sum = 0;

console.log(sum);


// ЗАДАНИЕ 11
/* *** Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает пользователь. Например: высота = 5, на экране*/

let h = 5;
let str = '';

for (let i = 1; i <= h; i++) {
    str = '';

    for (let k = 1; k <= (h-i); k++) {
        str += ' ';
    }

    for (let j = 1; j <= (i + (i-1)); j++) {
        str += '^';
    }

    console.log(str);
    // document.write('<pre>' + str + '<br></pre>');
}