const fetchProducts = async (names) => {  
  const getUrl = `https://api.mercadolibre.com/sites/MLB/search?q=${names}`;
  if (!names) {
    throw new Error('You must provide an url');
}
  const response = await fetch(getUrl);
  const produto = await response.json();
  return produto;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
