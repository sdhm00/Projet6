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
    const catAll = document.getElementById("tous")
    const catObjets = document.getElementById("objets")
    const catAppartements = document.getElementById("appartements")
    const catHotelEtResto = document.getElementById("hotels")
    
    catObjets.innerText = apiCategories[i].categoryId
    catAppartements.innerText = apiCategories[i].categoryId
    catHotelEtResto.innerText = apiCategories[i].categoryId

    catButtons.appendChild(catAll)
    catButtons.appendChild(catObjets)
    catButtons.appendChild(catAppartements)
    catButtons.appendChild(catHotelEtResto)

    portfolio.appendChild(catButtons)

    console.log(catObjets)

    
  }

  // const portfolio = document.querySelector(".portfolio")
  // for (let i = 0; i < apiCategories.length; i++) {
  //   const catButtons = document.createElement("button");
  //   const catAll = new Set("Objets", "1", "Appartements", "2", "Hôtel et restaurants", "3");
  //   const catObjets = new Set("Objets", "1");
  //   const catAppartements = new Set("Appartements", "2");
  //   const catHotelEtResto = new Set("Hôtel et restaurants", "3");

  //   catObjets.innerText = apiCategories[i].category
  //   catAppartements.innerText = apiCategories[i].category
  //   catHotelEtResto.innerText = apiCategories[i].category

  //   catButtons.appendChild(catAll)
  //   catButtons.appendChild(catObjets)
  //   catButtons.appendChild(catAppartements)
  //   catButtons.appendChild(catHotelEtResto)

  //   portfolio.appendChild(catButtons)

  //   console.log(catObjets)
    
  // }
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