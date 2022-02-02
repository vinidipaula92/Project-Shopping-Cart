function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  // coloque seu código aqui
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
const sectionItems = document.querySelector('.items');
const itemsCart = document.querySelector('.cart__items');

const objProduct = async () => {
  const produtos = await fetchProducts('computador');
  const { results } = produtos;
  return results;
};
const append = (product) => product.forEach((produto) => {
  const objResult = createProductItemElement(produto);
  sectionItems.appendChild(objResult);
});
const objItem = async () => {
  const allItems = await fetchItem('MLB1615760527');
  const { results } = items;
  return results;
};
const appendItem = (item) => item.forEach((itensElement) => {
  const objItemsResult = createCartItemElement(itensElement);
  itemsCart.appendChild(objItemsResult);
});
window.onload = async () => {
  const elementProduct = await objProduct();
  append(elementProduct);
  const elementItems = await objItem();
  appendItem(elementItems);
 };