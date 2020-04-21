let money = prompt ("Ваш бюджет на месяц?", '');
    time = prompt ("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};

let answer = prompt("Введите обязательную статью расходов в этом месяце", ''),
    answer2 = prompt("Во сколько обойдется?", '');

appData.expenses = answer;
appData.expenses = answer2;

alert(appData.budget / 30);