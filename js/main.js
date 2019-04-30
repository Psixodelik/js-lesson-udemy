const money = prompt('Ваш бюджет на месяц?', 0);
const time = prompt('Введите дату в формате YYYY-MM-DD');

const appData = {
  budget:money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

for (let i = 0; i < 2; i += 1) {
  const name = prompt('Введите обязательную статью расходов в этом месяце');
  const money = prompt('Во сколько обойдется?', 0);

  appData.expenses[name] = money;
}

alert(appData.budget / 30);
console.log(appData);