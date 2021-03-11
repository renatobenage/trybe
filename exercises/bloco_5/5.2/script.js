let musicName = ['Só em Ti']

// console.log(soEmTi)

let acessUlNav = document.querySelector('.music-nav')
// console.log(acessUlNav)

for (let i = 0; i < musicName.length; i++) {
  let keepMusic = musicName[i]
  console.log(keepMusic)
  let createLi = document.createElement('p')
  // console.log(createLi)
  createLi.innerText = keepMusic

  acessUlNav.appendChild(createLi)
}

