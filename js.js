// let num = 50

// if (num < 49) {
//     console.log("Хрень!")
// } else if (num > 100) {
//     console.log("дохуя!")
// } else {
//     console.log("Верно!")
// };

// (num == 50) ? console.log("Верно!") : console.log("хрень!");

// switch (num) {
//     case num < 49:
//         console.log("Хрень!");
//         break;
//     case num > 100:
//         console.log("Дохуя!");
//         break;
//     case num > 80:
//         console.log("тоже Дохуя!");
//         break;
//     case 50:
//         console.log("Верно!");
//         break; 
//     default: 
//         console.log("что-то пошло не так!");
//         break;

// }

let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

do {
    console.log(num);
    num++;
}
while (num < 55);

for(let i = 1; i < 9; i++){
    console.log(i);
    if (i == 4) {
       break
    }
};