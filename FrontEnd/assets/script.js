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

function showCategories (apiCategories) {
  const portfolio = document.querySelector(".portfolio")
  for (let i = 0; i < apiCategories.length; i++) {
    const catButtons = document.createElement("button")
    const catAll = document.getElementById("")
    const catObjets = document.getElementById("Objets")
    const catAppartements = document.getElementById("Appartements")
    const catHotelEtResto = document.getElementById("Hôtels & restaurants")

    catObjets.innerText = apiCategories[i].categor
    catAppartements.innerText = apiCategories[i].categor
    catHotelEtResto.innerText = apiCategories[i].categor

    catButtons.appendChild(catObjets)
    catButtons.appendChild(catAppartements)
    catButtons.appendChild(catHotelEtResto)
    portfolio.appendChild(catButtons)
  }
}


const init = async()=>{
  const works = await getWorks()
  showWorks(works)
  const categories = await getCategories()
  

  console.log(works)
  console.log(categories)
}
init();