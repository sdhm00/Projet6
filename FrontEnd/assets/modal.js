function modalDisplay (){
    const modal = document.getElementById("modal")
    const loginButton = document.getElementById("loginButton")
    const logoutButton = document.getElementById("logoutButton")
    const token = localStorage.getItem("token")
    const buttonModif = document.getElementById("buttonmodif")
    const hideCategories = document.querySelector(".categories")
    const titreProjet = document.getElementById("titreprojet")

    if (localStorage !== null && token !== null) {
        loginButton.style.display = "none";
        logoutButton.style.display = "unset";
        buttonModif.style.display = "unset";
        modal.style.display = "flex";
        titreProjet.style.marginLeft = "90px"
        hideCategories.style.opacity = 0
    }
    else {
        modal.style.display = "none";
    }

    logoutButton.addEventListener("click", function(){
        localStorage.removeItem("token");
        modalDisplay();
        window.location.reload();
    })
}

function showWorksModal (apiWorks) {
    const modalGallery = document.querySelector(".modalGallery")
    modalGallery.innerHTML = "";
    for (let i = 0; i < apiWorks.length; i++) {
      const projetDiv = document.createElement("figure")
      const projetImg = document.createElement("img")
  
      projetImg.src = apiWorks[i].imageUrl
  
      projetDiv.appendChild(projetImg)
      modalGallery.appendChild(projetDiv)
    }
}


function openModif () {
    const buttonModif = document.getElementById("buttonmodif");
    const galleryPhoto = document.getElementById("galleryPhoto");
    
    buttonModif.addEventListener ("click", async function(){
        galleryPhoto.style.display = "flex";
        const works = await getWorks()
        showWorksModal(works)
    })
}



modalDisplay();
openModif();



