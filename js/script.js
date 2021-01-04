//Начало игры при загрузке. VAL решил добавить логики в процесс игры.

// Swal.fire({
//     // title: '<h2>' + add_alb_title  + '</h2>',
//     title: "Привет. Давай поиграем. Введи любые целые числа от 0 до 100. Только не вводи ничего, что не входит в этот диапазон.!",
//     html:
//         'Минимальное значение: <div class="swal_title"></div><input name="minValue" type="text" value="" class="album_title" name="album_title" maxlength="30" /><br>' +
//         'Максимальное значение: <div class="swal_title"></div><input name="maxValue" type="text" value="" class="album_title" name="album_title" maxlength="30" /><br>' ,
//         // '<textarea name="album_description" rows="4" cols="50"></textarea>',
//     // html:
//     //   '<div class="swal_title">' + album_title + '</div><input type="text" value="" class="album_title" name="album_title" maxlength="30" /><br />' +
//     //   '<div class="swal_title">' + album_description + '</div><textarea name="album_description" class="album_description" rows="4" cols="50" maxlength="125" ></textarea><br />' +
//     //   '',
//     preConfirm: function () {
//         var minValue = swal.getContent().querySelector('[name=minValue]').value
//         var maxValue = swal.getContent().querySelector('[name=maxValue]').value

//         if ((minValue < 0) || (isNaN(minValue))){
//             Swal.fire('Я же просил, не вводи ничего, что не входит в этот диапазон. Ставлю 0!' );
//             // alert( 'Я же просил, не вводи ничего, что не входит в этот диапазон. Ставлю 0!' );
//             minValue = 0;
//         }

//         if ((maxValue > 100) || (isNaN(maxValue))) {
//             Swal.fire('Я же просил, не вводи ничего, что не входит в этот диапазон. Ставлю 100!' );
//             // alert( 'Я же просил, не вводи ничего, что не входит в этот диапазон. Ставлю 100!' );
//             maxValue = 100;
//         }

//         // var 123  = Math.floor((minValue + maxValue) / 2);
//         console.log(minValue, maxValue)


//         let answerNumber  = Math.floor((minValue + maxValue) / 2);
//         let orderNumber = 1;
//         let gameRun = true;
//         const answerField = document.querySelector('#answerField');
//         answerField.innerText = `Вы загадали число ${answerNumber }?`;

//         // тут делаешь AJAX запрос

//     },
//     showLoaderOnConfirm: true
// })

function sweetAlert() {
    (async () => {

        const { value: formValues } = await Swal.fire({
            title: 'Привет. Давай поиграем. Введи любые целые числа от 0 до 100. Только не вводи ничего, что не входит в этот диапазон.!',
            html:
                'Минимальное значение: <input id="minValue" class="swal2-input">' +
                'Максимальное значение: <input id="maxValue" class="swal2-input">',
            focusConfirm: false,
            preConfirm: () => {
                return [
                    document.getElementById('minValue').value,
                    document.getElementById('maxValue').value                    
                ]
                
            }
        })
        
        console.log(document.getElementById('minValue').value, document.getElementById('maxValue').value)
        // VAL Как отдать дальше на страницу полученные значения я пока не разобрался
        
        // if (formValues) {
        //     Swal.fire(JSON.stringify(formValues))
        // }

    })()
}

// var answerNumber  = Math.floor((minValue + maxValue) / 2);

// Пример поля для вода:
// Swal.fire('Привет. Давай поиграем. Введи любые целые числа от 0 до 100. Только не вводи ничего, что не входит в этот диапазон.!');

// document.querySelector('#sweetalert2').addEventListener('click', function () {
    // let minValue =  
// Swal.mixin({
//     input: 'text',
//     confirmButtonText: 'Следующее &rarr;',
//     showCancelButton: true,
//     cancelButtonText: 'Отмена',
//     progressSteps: ['1', '2']
// }).queue([
//     {
//         title: 'Минимальное значение',
//         text: 'Введи минимальное знание числа для игры'
//     },
//     {
//         title: 'Максимальное значение',
//         text: 'Введи максимальное знание числа для игры'
//     },
//     // 'Question 2',
//     // 'Question 3'
// ])
// preConfirm: function () {
//     var album_title = swal.getContent().querySelector('[name=album_title]').value
//     var album_description = swal.getContent().querySelector('[name=album_description]').value
//     console.log(album_title, album_description)
    
//     // тут делаешь AJAX запрос
//   },

// .then((result) => {
//     if (result.value) {
//         const answers = JSON.stringify(result.value)
//         Swal.fire({
//             title: 'All done!',
//             html: `
//           Your answers:
//           <pre><code>${answers}</code></pre>
//         `,
//             confirmButtonText: 'Загадал. Попробуй угадай'
//         })
//     }
// })
// })
// swal("Привет. Давай поиграем. Введи любые целые числа от 0 до 100. Только не вводи ничего, что не входит в этот диапазон.!");
//   .then((value) => {
//     swal(`You typed: ${value}`);
//   });

// Разбираемся, почему ругается на then
// Example 1 Не правильно
//   const getTaxAmount = (price, taxRate) => {
//     Math.floor((price * taxRate) / 100);
//   };
  
//   getTaxAmount(100, 12).then((taxAmount) => console.log(taxAmount));
// // Example 1 Правильно
//   const getTaxAmount = (price, taxRate) => {
//     return Promise.resolve(Math.floor((price * taxRate) / 100));
//   };
  
//   getTaxAmount(100, 12).then((taxAmount) => console.log(taxAmount));

// let minValue
// swal("Введи минимальное знание числа для игры", {
//     content: "input",
//     })
//   .then((minValue) => {
//     swal(`You typed: ${minValue}`);
// });



alert(`Привет. Давай поиграем. Введи любые целые числа от 0 до 100. Только не вводи ничего, что не входит в этот диапазон.`);

//всплывашки для ввода минимального значения
let minValue = parseInt(prompt('Введи минимальное знание числа для игры','0'));

// ЗАДАЧА 2 на 10 баллов: При вводе текста, который не может быть интерпретирован как число (NaN) присваивать значения по умолчанию, используя короткий цикл операций дизъюнкции.
// НЕМНОГО ТЕОРИИ чисто для себя: ИЛИ || – логическое сложение (дизъюнкция) – OR; ИЛИ «||» находит первое истинное значение. Если результат true, останавливается и возвращает исходное значение этого операнда.
// || запинается на «правде», && запинается на «лжи».

// VAL. если ввели число меньше чем 0 или текст вместо чисел.
if ((minValue < 0) || (isNaN(minValue))){
    alert( 'Я же просил, не вводи ничего, что не входит в этот диапазон. Ставлю 0!' );
    minValue = 0;
}



//всплывашки для ввода максимального значения
let maxValue = parseInt(prompt('Введи максимальное знание числа для игры','100'));

// VAL. если ввели число больше чем 100 или текст вместо чисел.
if ((maxValue > 100) || (isNaN(minValue))) {
    alert( 'Я же просил, не вводи ничего, что не входит в этот диапазон. Ставлю 100!' );
    maxValue = 100;
}

//всплывашка с введёнными числам и просьбой загадать число
alert(`А теперь загадай любое целое число в диапазоне от ${minValue} до ${maxValue}, а я его угадаю. Только не жульничай.`);

//вывод первого предположительного числа. делиться сумма загаданных чисел на 2 и выводиться в ответ на странице.
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

// // Работает при нажатии кнопки Больше
let output = document.querySelector('#answerFieldNumbers');
// let btnConvert = document.querySelector('#btnOver');
// btnConvert.addEventListener('click', () => {
// output.innerText = intToWords(answerNumber)
// });

const orderNumberField = document.querySelector('#orderNumberField');
const answerField = document.querySelector('#answerField');
// const answerField = document.querySelector('#answerFieldNumbers');

//ЗАДАЧА НА 15 Баллов
// Число выводится в текстовой форме, если на его запись в текстовой форме требуется меньше 20 символов, включая пробелы. 
// Например, вопрос выглядит не «Вы загадали число 12?», а «Вы загадали число двенадцать?»
//НЕМНОГО ТЕОРИИ Чтобы получить случайное число от 0 до 2 можно использовать выражение: Math.round(Math.random() * 2);

// VAL Цифры буквами

//кнопка работает
// btnConvert.addEventListener('click', () => {
//     output.innerText = intToWords(input.value)
//     // или output.innerText = numberToWords.toWords(input.value) - другой вариант английский
// });

//номер ответа сверху на странице
orderNumberField.innerText = orderNumber;
// было answerField.innerText = `Вы загадали число ${answerNumber }?`;

//( VAL NEW Рандомный вывод разных сообщений при угадывании при загрузке. Выводит только 2 первых, что не так?
const phraseRandom = Math.round( Math.random() * 3);
const answerPhrase = (phraseRandom === 1) ?
    `Да это легко ${answerNumber }?\n\u{1F916}` :
    `Ты загадал ${answerNumber }?\n\u{1F981}`;
    `Наверное это число ${answerNumber }?\n\u{1F9C0}`;
answerField.innerText = answerPhrase;
//)

//кнопка Больше. Было. Происходит изменение нижней границы поискового диапазона.
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            //нижняя граница minValue + 1
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            // было answerField.innerText = `Вы загадали число ${answerNumber }?`;
            //( VAL NEW Рандомный вывод разных сообщений при угадывании на кнопке Больше
            const phraseRandom = Math.round( Math.random()* 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Да это легко ${answerNumber }?\n\u{1F916}` :
                `Ты загадал ${answerNumber }?\n\u{1F981}`;
                `Наверное, это число ${answerNumber }?\n\u{1F9C0}`;
            answerField.innerText = answerPhrase;
            output.innerText = intToWords(answerNumber)
            //)
        }
    }
})

//VAL кнопка меньше. Происходит изменение верхней границы поискового диапазона.
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            //(Рандомный вывод разных сообщений при не угадывании
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            //)
            gameRun = false;
        } else {
            //верхняя граница maxValue - 1
            maxValue = answerNumber  - 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            // было answerField.innerText = `Вы загадали число ${answerNumber }?`;
            //( VAL NEW Рандомный вывод разных сообщений при угадывании на кнопке Меньше
            const phraseRandom = Math.round( Math.random()* 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Да это легко ${answerNumber }?\n\u{1F916}` :
                `Ты загадал ${answerNumber }?\n\u{1F981}`;
                `Наверное, это число ${answerNumber }?\n\u{1F9C0}`;
            answerField.innerText = answerPhrase;
            output.innerText = intToWords(answerNumber)
            //)
        }
    }
})

//кнопка Верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        // было answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
        //( VAL NEW Рандомный вывод разных сообщений при угадывании в конце
        const phraseRandom = Math.round( Math.random()* 3);
        const answerPhrase = (phraseRandom === 1) ?
            `Я всегда угадываю числа \n\u{1F60E}` :
            `Я супер умный \n\u{1F984}`;
            `А ты думал я не угадаю? \n\u{1F983}`;
        answerField.innerText = answerPhrase;
        //)
        gameRun = false;
        output.innerText = '';
    }
})

//VAL кнопка ЗАНОВО
document.querySelector('#btnRetry').addEventListener('click', function () {
    alert(`Привет. Давай поиграем. Введи любые целые числа от 0 до 100. Только не вводи меньше -999 и больше 999`);
    minValue = 0;
    maxValue = 100;
    orderNumber = 0;
    // VAL до этого было. далее я пишу:
    // gamestart; //  VAL - хотел сократить код и вызвать то, что уже было написано выше. Чёт не получилось.
    // range;   // VAL - хотел сократить код и вызвать то, что уже было написано выше. Чёт не получилось.
    
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю.`);

    // ЗАДАЧА 3 на 10 баллов: При вводе максимума или минимума больше 999 или меньше -999 изменять число на ближайшую границу (например, 1000 на 999, а -1000 на -999), 
    // используя тернарный оператор.
    // НЕМНОГО ТЕОРИИ чисто для себя: условие ? выражение1 : выражение2
    // Первый аргумент — это условие. Если оно истинно (равно true), оператор вернёт второй аргумент — выражение1. В ином случае он вернёт третий аргумент — выражение2.
    // Пример: let result; if (a > 0) {  result = 'Число положительное'; } else {  result = 'Число не положительное'; }; 
    // Можно записать как: let result = (a > 0) ? 'Число положительное' : 'Число не положительное';

    // Было minValue = parseInt(prompt('Минимальное знание числа для игры','0'));

    //всплывашки для ввода минимального значения
    // VAL. Если ввели число меньше -999, т.е. -1000 и менее, запишется -999
    minValue = parseInt(prompt('Минимальное знание числа для игры','-999'));
    minValue = (minValue < -999) ? '-999' : minValue;
    //  {
    // if (minValue < -999 || minValue > -1) {
        //  alert( 'Я же просил, не вводи меньше -999. Ставлю -999!' );
    //     minValue = 0;
    // }

    //всплывашки для ввода максимального значения
    // было maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    // VAL. Если ввели число больше 999, т.е. 1000 и более, запишется 1000
    maxValue = parseInt(prompt('Максимальное знание числа для игры','999'));
    maxValue = (maxValue >= 1000) ? '999' : maxValue;
    // if (maxValue < 0 || maxValue > 100) {
    //      alert( 'Я же просил, не вводи больше 999. Ставлю 999!' );
    // //     maxValue = 100;
    // }

    //VAL всплывашка с введёнными числам и просьбой загадать число
    alert(`А теперь загадай любое целое число в диапазоне от ${minValue} до ${maxValue}, а я его угадаю. Только не жульничай.`);

    answerNumber  = parseInt(Math.floor((minValue + maxValue) / 2));
    orderNumber = 1;
    // gameRun = true;
    // orderNumberField = document.querySelector('#orderNumberField');
    // answerField = document.querySelector('#answerField');
    orderNumberField.innerText = orderNumber;
    // было answerField.innerText = `Вы загадали число ${answerNumber }?`;
            //( VAL NEW Рандомный вывод разных сообщений при угадывании на кнопке Меньше
            const phraseRandom = Math.round( Math.random() * 3);
            const answerPhrase = (phraseRandom === 1) ?
                `Да это легко ${answerNumber }?\n\u{1F916}` :
                `Ты загадал ${answerNumber }?\n\u{1F981}`;
                `Наверное, это число ${answerNumber }?\n\u{1F9C0}`;
            answerField.innerText = answerPhrase;
            //)
    gameRun = true;   
})