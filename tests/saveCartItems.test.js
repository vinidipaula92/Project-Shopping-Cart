const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('4 - Teste a função saveCartItems', () => {
  it('executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem', async () => {
    expect.assertions(1);
    saveCartItems();
    await expect(localStorage.setItem).toHaveBeenCalled();
  });
  it('executar saveCartItems com o argumento <ol><li>Item</li></ol>, o método localStorage.setItem é chamado com dois parâmetros', async () => {
    expect.assertions(1);
    saveCartItems('itemsAdicionados')
    await expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', 'itemsAdicionados');
  })
});
