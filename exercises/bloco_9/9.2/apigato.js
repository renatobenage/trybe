window.onload = async function () {
  console.log('Ok, start!')
  const cats = await getCats()
  renderCats(cats)
}

function createCatImageElement(src, height, width) {
  const img = document.createElement('img');
  img.src = src;
  img.height = heightimg.width = width
  return img;
}

function renderCats(cats){
  const elementCats = document.getElementById('cats')
  cats.forEach(({url}) => {
    const elementImageCat = createCatImageElement(url, )
  })
}

async function getCats(){
  const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=10&page=10&order=Desc')
  const cats = await response.json()
  return cats
}
