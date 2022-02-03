const localStorageSimulator = require('../mocks/localStorageSimulator');
const getSavedCartItems = require('../helpers/getSavedCartItems');

localStorageSimulator('getItem');

describe('4 - Teste a função getSavedCartItems', () => {
  it('executar getSavedCartItems, o método localStorage.getItem', async () => {
    expect.assertions(1);
    getSavedCartItems();
    await expect(localStorage.getItem).toHaveBeenCalled();
  });
  it('executar getSavedCartItems, o método localStorage.getItem é chamado com o cartItems como parâmetro.', async () => {
    expect.assertions(1);
    getSavedCartItems();
    await expect(localStorage.getItem).toHaveBeenCalledWith('cartItems');
  });
});
