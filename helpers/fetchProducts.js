const getUrl = (produtoName) => `https://api.mercadolibre.com/sites/MLB/search?q=${produtoName}`;

const fetchProducts = async (produtoName) => {  
  if (!produtoName) {
    throw new Error('mensagem esperada aqui');
}
  const response = await fetch(getUrl(produtoName));
  const produto = await response.json();
  return produto;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
