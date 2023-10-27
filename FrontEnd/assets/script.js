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
  // const portfolio = document.querySelector("#portfolio")
  const boutonTous = document.getElementById("tous")
  const boutonObjets = document.getElementById("objets")
  const boutonAppartements = document.getElementById("appartements")
  const boutonHotelEtResto = document.getElementById("hotelsetresto")

  boutonObjets.innerText = apiCategories[0].name
  boutonAppartements.innerText = apiCategories[1].name
  boutonHotelEtResto.innerText = apiCategories[2].name

  // portfolio.appendChild(boutonObjets)
  // portfolio.appendChild(boutonAppartements)
  // portfolio.appendChild(boutonHotelEtResto)
  // portfolio.appendChild(boutonTous)

  console.log(boutonObjets)
}


// function filterButtons (apiWorks, apiCategories){
//   boutonTous.addEventListener ("click", function(apiWorks){
//     if (boutonObjets)
//     console.log("Bouton Tous")
//     allCategory(apiWorks)
//   })
  
//   boutonObjets.addEventListener ("click", function(apiWorks){
//     console.log("Bouton Objets")
//     objetsCategory(apiWorks)
//   })
  
//   boutonAppartements.addEventListener ("click", function(apiWorks){
//     console.log("Bouton Appartements")
//     appartementsCategory(apiWorks)
//   })
  
//   boutonHotelEtResto.addEventListener ("click", function(apiWorks){
//     console.log("Bouton Hôtels & restaurants")
//     hotelsCategory(apiWorks)
//   })

//   console.log(filterButtons)
// }

const init = async()=>{
  const works = await getWorks()
  showWorks(works)

  const categories = await getCategories()
  showCategories(categories)

  console.log(works)
  console.log(categories)
}
init();