const apiDataProjet = fetch("http://localhost:5678/api/works");

projetIndex = 0
workIndex(projetIndex)

function workIndex (apiDataProjet){
    const projets = document.createElement("figure")
    const projetImg = document.createElement("img")
    const projetText = document.createElement("figcaption")

    projets.appendChild(projetImg)
    projets.appendChild(projetText)

    projetImg.src = apiDataProjet[projetIndex].imageUrl
    projetText.innerText = apiDataProjet[projetIndex].title

    let body = document.querySelector("body")
    body.appendChild(projets)

    if (index >= projets.length) {
        projetIndex = 0;
      }
      if (index < 0) {
        projetIndex = projets.length - 1;
      }
}
