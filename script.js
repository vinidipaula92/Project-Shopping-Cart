const sectionItems = document.querySelector('.items');
const cartItems = document.querySelector('.cart__items');
const esvaziarCarrinho = document.querySelector('.empty-cart');
const carregando = document.querySelector('.loading');

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
// Removendo produto do carrinho ao clicar
function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
// Adicionando produtos a minha página com API
const objProduct = async () => {
  const produtos = await fetchProducts('computador');
  const { results } = produtos;
  return results;
};
const append = (product) => product.forEach((produto) => {
  const objResult = createProductItemElement(produto);
  sectionItems.appendChild(objResult);
});
// Adicionando items ao meu carrinho
const itemSelect = async (element) => {
  const getItem = element.target.parentNode;
  const selectId = getSkuFromProductItem(getItem);
  const { id, title, price } = await fetchItem(selectId);
  const objCreateItems = createCartItemElement({ sku: id, name: title, salePrice: price });
  cartItems.appendChild(objCreateItems);
  saveCartItems(cartItems.innerHTML);
};

function limparCarrinho() {
  const apagarCarrinho = document.querySelectorAll('.cart__item');
  for (let index = 0; index < apagarCarrinho.length; index += 1) {
    apagarCarrinho[index].remove();
  }
}
esvaziarCarrinho.addEventListener('click', limparCarrinho);
window.onload = async () => {
  cartItems.innerHTML = getSavedCartItems();
  const elementProduct = await objProduct();
  append(elementProduct);
  const eventAdicionarCarrinho = document.querySelectorAll('.item__add');
  eventAdicionarCarrinho.forEach((myItems) => myItems.addEventListener('click', itemSelect));
  cartItems.addEventListener('click', cartItemClickListener);
  carregando.remove();
 };
