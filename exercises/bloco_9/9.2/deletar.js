window.onload = function onload() { 
  // cartItemClickListener()
  searchInformationsOnApi()
};

function getProductId() {
  const APIurl = 'https://api.mercadolibre.com/sites/MLB/search?q=$QUERY';
  const fetchProduct = new Promise ()
}

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

function createProductItemElement({ sku, name, image }) {
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

async function cartItemClickListener(event) {
  const xablau = await fetch('');
  console.log(xablau);
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function simplifyTvShow(tvShow) {
  const show = tvShow.show;
  return {
    id: show.id,
    name: show.name,
    image: show.image,
  }  
}

const searchInformationsOnApi = () => {
  console.log(fetch('http://api.tvmaze.com/search/shows?q=girls'))
}

