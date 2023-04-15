const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Verifica se é uma função', () => {
    expect(typeof handlerElephants).toBe('function');
  });
  it('Verifica retorno undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Verifica param !== string', () => {
    expect(handlerElephants(123)).toBe('Parâmetro inválido, é necessário uma string');
  });
  it('Verifica parametro = name', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
  it('Verifica quantidade residents', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Verifica nomes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Verifica  media de idade', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  it('Verifica retorno null', () => {
    expect(handlerElephants('age')).toBe(null);
  });
});
