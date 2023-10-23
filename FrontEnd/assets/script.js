

//getWorks().then(application => console.log(application))


function showWorks (apiDataProject) {
  const gallery = document.querySelector(".gallery")
  for (let i = 0; i < apiDataProject.length; i++) {
    const projetDiv = document.createElement("figure")
    const projetImg = document.createElement("img")
    const projetText = document.createElement("figcaption")

    projetImg.src = apiDataProject[i].imageUrl
    projetText.innerText = apiDataProject[i].title

    projetDiv.appendChild(projetImg)
    projetDiv.appendChild(projetText)
    gallery.appendChild(projetDiv)
  }
}

const init = async()=>{
  const works = await getWorks()
  showWorks(works)


  console.log(works)
}
init();