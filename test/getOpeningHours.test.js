const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica retorno hours', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Veririfca primeira letra maiúscula', () => {
    expect(getOpeningHours('monday', 11)).toEqual('Monday');
  });
});
