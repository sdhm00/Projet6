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
      const binBlock = document.createElement("span")
      const vectorBin = document.createElement("i")

      binBlock.classList.add("binblock")
      vectorBin.classList.add("fa","fa-solid", "fa-trash-can", "trash")

      vectorBin.id = apiWorks[i].id
  
      projetImg.src = apiWorks[i].imageUrl
  
      binBlock.appendChild(vectorBin)
      projetDiv.appendChild(projetImg)
      projetDiv.appendChild(binBlock)
      modalGallery.appendChild(projetDiv)
    }
}

function openModif () {
    const buttonModif = document.getElementById("buttonmodif");
    const galleryPhoto = document.getElementById("galleryPhoto");
    
    buttonModif.addEventListener ("click", async function(event){
        event.stopPropagation();
        galleryPhoto.style.display = "flex";
        const works = await getWorks();
        showWorksModal(works);
    })

    document.addEventListener("click", function(event) {
        if (!galleryPhoto.contains(event.target) && event.target !== buttonModif) {
            galleryPhoto.style.display = "none";
        }
    });
}

function closeModif () {
    const buttonClose = document.getElementById("closebox");
    const galleryPhoto = document.getElementById("galleryPhoto");

    buttonClose.addEventListener ("click", function(event){
        galleryPhoto.style.display = "none";
        event.stopPropagation();
    })
}



function deleteWork () {
    const modalGallery = document.querySelector(".modalGallery");

    modalGallery.addEventListener("click", async function(event) {
        if (event.target.classList.contains("trash")) {
            event.preventDefault();
            
            const Id = event.target.id;
            const userToken = localStorage.getItem("token");

            const deleteClick = await getDelete(Id, userToken);
        }
    });
}

function addWorks () {}

modalDisplay();
openModif();
closeModif();
deleteWork();
