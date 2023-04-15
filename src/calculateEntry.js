const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  const obj = { child: 0, adult: 0, senior: 0 };
  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      obj.child += 1;
    }
    if (entrant.age >= 18 && entrant.age < 50) {
      obj.adult += 1;
    }
    if (entrant.age >= 50) {
      obj.senior += 1;
    }
  });
  return obj;
};

const calculateEntry = (entrants) => {
  if (!entrants) return 0;
  return Object.entries(countEntrants(entrants))
    .reduce((acc, [key, value]) => acc + data.prices[key] * value, 0);
};

calculateEntry([
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
]);

module.exports = { calculateEntry, countEntrants };
