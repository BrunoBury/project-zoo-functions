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

calculateEntry();

module.exports = { calculateEntry, countEntrants };
