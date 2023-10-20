async function workIndex(){
  const apiDataProject = await fetch("http://localhost:5678/api/works",{
    headers : {
      "Accept" : "application/json",
    }
  })
   if (apiDataProject.ok === true) {
     return apiDataProject.json();
   }
   throw new Error('Impossible de contacter le serveur')
}

workIndex().then(application => showImg(application))


function showImg (apiDataProject) {
  if (!Array.isArray(apiDataProject)) {
    return;
  }

  for (let i = 0; i < apiDataProject.length; i++) {
    const projetDiv = document.createElement("figure")
    const projetImg = document.createElement("img")
    const projetText = document.createElement("figcaption")

    projetImg.src = apiDataProject[i].imageUrl
    projetText.innerText = apiDataProject[i].title

    projetDiv.appendChild(projetImg)
    projetDiv.appendChild(projetText)
  }
}

console.log(showImg)