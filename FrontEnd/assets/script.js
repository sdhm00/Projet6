function showWorks (apiWorks) {
  const gallery = document.querySelector(".gallery")
  for (let i = 0; i < apiWorks.length; i++) {
    const projetDiv = document.createElement("figure")
    const projetImg = document.createElement("img")
    const projetText = document.createElement("figcaption")

    projetImg.src = apiWorks[i].imageUrl
    projetText.innerText = apiWorks[i].title

    projetDiv.appendChild(projetImg)
    projetDiv.appendChild(projetText)
    gallery.appendChild(projetDiv)
  }
}

function allCategory (apiWorks) {
  for (let i = 0; i < apiWorks.length; i++){
    if (apiWorks[i].categoryId !== 1) {
      projetDiv.remove()
    }
  }
}

function objetsCategory (apiWorks) {
  for (let i = 0; i < apiWorks.length; i++){
    if (apiWorks[i].categoryId !== 1) {
      projetDiv.remove()
    }
  }
}

function appartementsCategory (apiWorks) {
  for (let i = 0; i < apiWorks.length; i++){
    if (apiWorks[i].categoryId !== 2) {
      projetDiv.remove()
    }
  }
}

function hotelsCategory (apiWorks) {
  for (let i = 0; i < apiWorks.length; i++){
    if (apiWorks[i].categoryId !== 3) {
      projetDiv.remove()
    }
  }
}

function showCategories (apiCategories) {
  const portfolio = document.querySelector(".portfolio")
  for (let i = 0; i < apiCategories.length; i++) {
    const boutonTous = document.getElementById("tous")
    const boutonObjets = document.getElementById("objets")
    const boutonAppartements = document.getElementById("appartements")
    const boutonHotelEtResto = document.getElementById("hotels")

    boutonObjets.innerText = apiCategories[0].name
    boutonAppartements.innerText = apiCategories[1].name
    boutonHotelEtResto.innerText = apiCategories[2].name

    console.log(boutonObjets)
  }
}

const init = async()=>{
  const works = await getWorks()
  showWorks(works)

  const categories = await getCategories()
  showCategories(categories)

  console.log(works)
  console.log(categories)
}
init();