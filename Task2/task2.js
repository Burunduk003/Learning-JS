let money = +prompt ("Ваш бюджет на месяц?", '');
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

for(let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется?", '');

    if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null 
        && a != '' && b != '' && a.length < 50) {
        console.log('done')
        appData.expenses[a] = b;
    } else {
        console.log('ошибка');
        i--;
    }
  
};

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50)
//         console.log('done')
//         appData.expenses[a] = b;
//     } else {
//         console.log('ошибка');
//         i--;
    
//     i++    
// }
// while( i < 2 ) ;

// let i = 0;

// while( i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется?", '');

//     if( (typeof(a))=== 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50)
//         console.log('done')
//         appData.expenses[a] = b;
//     } else {
//         console.log('ошибка');
//         i--;
    
//     i++    
// }

appData.monyPerDay = appData.budget / 30

alert('Ежедневный бюджет: ' + appData.monyPerDay);

if(appData.monyPerDay < 100 ) {
    console.log('минимальный уровень достатка');
} else if(appData.monyPerDay > 100 && appData.monyPerDay < 2000) {
    console.log('средний уровень достатка');
} else if(appData.monyPerDay > 2000) {
    console.log('высокий уровень достака')
} else {
    console.log('произошла ошибка')
}