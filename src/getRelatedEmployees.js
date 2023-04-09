const data = require('../data/zoo_data');

const isManager = (id) => data.employees.flatMap((employee) =>
  employee.managers).some((manager) => manager === id);

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((employee) => employee.managers.includes(managerId))
    .map((func) => `${func.firstName} ${func.lastName}`);
};

module.exports = { isManager, getRelatedEmployees };
