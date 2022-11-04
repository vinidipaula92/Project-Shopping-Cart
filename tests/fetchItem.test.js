require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Teste se fetchItem é uma função', async () => {
    expect.assertions(1);
    await expect(typeof fetchItem).toBe('function')
  });
  it('fetchItem com o argumento do item "MLB1615760527" e teste se fetch', async () => {
    expect.assertions(1)
    const resultFetch = await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  });
  it('deve chamar o fetch no endpoint correto', async () => {
    const url = 'https://api.mercadolibre.com/items/MLB1615760527'
    await fetchItem('MLB1615760527')
    expect(fetch).toBeCalledWith(url);
  });
  it('função fetchItem com o argumento do item "MLB1615760527" é uma estrutura de dados igual ao objeto item', async () => {
    const getUrlItems = await fetchItem('MLB1615760527');
    expect(getUrlItems).toBe(item)
  });
  it('Função fetchItem sem argumento, retorna erro', async() => {
    expect.assertions(1)
    try {  
      await fetchItem()
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
});

});
