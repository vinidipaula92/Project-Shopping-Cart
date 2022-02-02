require('../mocks/fetchSimulator');
const { type } = require('mocha/lib/utils');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  it('Teste se fetchProducts é uma função', async () => {
    expect.assertions(1);
    await expect(typeof fetchProducts).toBe('function')
  } );
  it('Execute a função fetchProducts com o argumento "computador" e teste se fetch foi chamada', async () => {
    expect.assertions(1)
    const resultFetch = await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });
  it('deve chamar o fetch no endpoint correto', async () => {
    const url = 'https://api.mercadolibre.com/sites/MLB/search?q=computador'
    await fetchProducts('computador')
    expect(fetch).toBeCalledWith(url);
  });

  it('Teste se o retorno da função fetchProducts com o argumento "computador" é uma estrutura de dados igual ao objeto computadorSearch', async() => {
    const getUrl = await fetchProducts('computador');
    expect(getUrl).toEqual(computadorSearch)
  })
  it('Função fetchProducts sem argumento, retorna erro', async() => {
    expect.assertions(1)
    try {  
      await fetchProducts()
    } catch (error) {
      expect(error).toEqual(new Error('mensagem esperada aqui'));
    }
});
});
