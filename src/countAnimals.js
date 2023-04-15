const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (!animal) {
    const obj = {};
    data.species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
    return obj;
  }
  if (Object.keys(animal).length === 1) {
    return data.species.find((specie) => specie.name === animal.species).residents.length;
  }
  return data.species.find((specie) => specie.name === animal.species)
    .residents.filter((resident) => resident.sex === animal.sex).length;
};

module.exports = countAnimals;
