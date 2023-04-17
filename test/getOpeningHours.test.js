const { hours } = require('../data/zoo_data');
const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Verifica se é uma função', () => {
    expect(typeof getOpeningHours).toBe('function');
  });
  it('Verifica retorno hours', () => {
    expect(getOpeningHours()).toEqual(hours);
  });
  it('Verifica se o dia está correto', () => {
    expect(() => getOpeningHours('Mon', '11:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  it('Veririfca retorno zoo fechado ', () => {
    expect(getOpeningHours('Monday', '11:00-AM')).toEqual('The zoo is closed');
  });
  it('Verifica retorno zoo aberto ', () => {
    expect(getOpeningHours('Saturday', '11:00-AM')).toEqual('The zoo is open');
  });
  it('Verifica retorno erro minutos', () => {
    expect(() => getOpeningHours('Saturday', '11:70-AM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Verifica retorno erro horas', () => {
    expect(() => getOpeningHours('Saturday', '14:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  it('Verifica retorno horas tipo number', () => {
    expect(() => getOpeningHours('Saturday', '11:aa-AM')).toThrow('The minutes should represent a number');
  });
  it('Verifica abreviação AM - PM', () => {
    expect(() => getOpeningHours('Saturday', '11:00-BB')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
});
