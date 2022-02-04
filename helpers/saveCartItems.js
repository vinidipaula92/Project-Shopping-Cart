const saveCartItems = (itemsAdicionados) => {
  const storage = localStorage.setItem('cartItems', itemsAdicionados);
  return storage;
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
