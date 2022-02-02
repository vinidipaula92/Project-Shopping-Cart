const fetchItem = async (itemName) => { 
  const getUrlItems = `https://api.mercadolibre.com/items/${itemName}`; 
  if (!itemName) {
    throw new Error('You must provide an url');
}
  const response = await fetch(getUrlItems);
  const item = await response.json();
  return item;
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
