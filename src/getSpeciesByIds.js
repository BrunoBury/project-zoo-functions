const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => (ids.length === 0
  ? [] : data.species.filter((specie) => ids.includes(specie.id)));

console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
