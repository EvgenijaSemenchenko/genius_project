// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.
//et con = prompt("enter number");
//let a;
//if ( a>0 ) {
   // console.log("true");
//}
//else {
   // console.log("false");
//
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true
//let cost = prompt("enter word");
//let a;
//if (a === "test") {console.log("true");
////} 
//else {console.log("false");
//}

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.
//let input = prompt("Введіть число"); // викликаємо вікно prompt для введення числа

//let variable = parseInt(input); // перетворюємо введене значення на ціле число

//if (variable > 10) {
  //variable -= 5;
//} else {
  //variable += 5;
//}
//console.log(variable); 

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
//const value = prompt("Введіть число від 1 до 12");
//let cost;
//switch (value) {
    //case "1": cost = "Січень";
    //break;
   // case "2": cost = "Лютий";
    //break;
    //case "3": cost = "Березень";
    //break;
    //case "4": cost = "Квітень";
    //break;
    //case "5": cost = "Травень";
    //break;
    //case "6": cost = "Червень";
   // break;
    //case "7": cost = "Липень";
   // break;
    //case "8": cost = "Серпень";
   // break;
   // case "9": cost = "Вересень";
    //break;
   // case "10": cost = "Жовтень";
    //break;
    //case "11": cost = "Листопад";
    //break;
    //case "12": cost = "Грудень";
    ///break;
//default:
   // alert (`Число ${value} недійсне`);}
    //console.log(cost);
//Зробіть сервіс який отримує тризначне число
//if (isNaN(number) || number < 100 || number > 999) {
 // alert("Будь ласка, введіть тризначне число.");
//} else {
 // console.log(`Отримане число: ${number}`);
  // тут можна виконати додаткові дії з числом
//}
//Поверніть користувачу сумму цих чисел
//let input1 = prompt("Введіть перше число:");
//let input2 = prompt("Введіть друге число:");
//let input3 = prompt("Введіть третє число:");

//let number1 = parseInt(input1);
//let number2 = parseInt(input2);
//let number3 = parseInt(input3);
//if (isNaN(number1) || isNaN(number2) || isNaN(number3)) {alert ("Будь ласка введіть три чила"); }
//else { let sum = number1 + number2 +number3; console.log(sum);}


let cost = prompt("enter number");
let a = parseInt(cost);
if (a>10) {
 cost = a-5;
}
else {
 cost = a+5;
}

    console.log(cost);