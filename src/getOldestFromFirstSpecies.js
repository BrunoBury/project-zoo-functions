const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const oldAnimal = data.species.find((specie) =>
    data.employees.find((employee) => employee.id === id)
      .responsibleFor.includes(specie.id)).residents
    .reduce((acc, currAnimal) =>
      (acc.age > currAnimal.age ? acc : currAnimal));
  return [oldAnimal.name, oldAnimal.sex, oldAnimal.age];
};
getOldestFromFirstSpecies('c1f50212-35a6-4ecd-8223-f835538526c2');
module.exports = getOldestFromFirstSpecies;
