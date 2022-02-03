const saveCartItems = (itemsAdicionados) => {
  localStorage.setItem('cartItems', itemsAdicionados);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
