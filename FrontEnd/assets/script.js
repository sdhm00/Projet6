// Affichage de la galerie de projet

function showWorks (apiWorks) {
  const gallery = document.querySelector(".gallery")
  gallery.innerHTML = "";
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

// Fin Affichage de la galerie de projet

// Affichage des catégories

function showCategories (apiCategories) {
  const categories = document.querySelector(".categories")
  const boutonTous = document.createElement("button")
  const boutonObjets = document.createElement("button")
  const boutonAppartements = document.createElement("button")
  const boutonHotelEtResto = document.createElement("button")

  boutonTous.innerText = "Tous"
  boutonObjets.innerText = apiCategories[0].name
  boutonAppartements.innerText = apiCategories[1].name
  boutonHotelEtResto.innerText = apiCategories[2].name

  categories.appendChild(boutonTous)
  categories.appendChild(boutonObjets)
  categories.appendChild(boutonAppartements)
  categories.appendChild(boutonHotelEtResto)

  boutonTous.addEventListener ("click", async function(){
    const works = await getWorks()
    const filterWorks = works.filter((work) => work)
    console.log(filterWorks)
    showWorks(filterWorks) 
    console.log("Bouton Tous")
  })
  
  boutonObjets.addEventListener ("click", async function(){
    const works = await getWorks()
    const filterWorksObjets = works.filter((work) => work.categoryId == 1)
    console.log(filterWorksObjets)
    showWorks(filterWorksObjets) 
    console.log("Bouton Objets")
  })
  
  boutonAppartements.addEventListener ("click", async function(){
    const works = await getWorks()
    const filterWorksAppartement = works.filter((work) => work.categoryId == 2)
    console.log(filterWorksAppartement)
    showWorks(filterWorksAppartement) 
    console.log("Bouton Appartements")
  })

  boutonHotelEtResto.addEventListener ("click", async function(){
    const works = await getWorks()
    const filterWorksHotel = works.filter((work) => work.categoryId == 3)
    console.log(filterWorksHotel)
    showWorks(filterWorksHotel) 
    console.log("Bouton Hôtels & restaurants")
  })
}

// Affichage des catégories

const init = async()=>{
  const works = await getWorks()
  showWorks(works)

  const categories = await getCategories()
  showCategories(categories)

  console.log(works)
  console.log(categories)
}
init();