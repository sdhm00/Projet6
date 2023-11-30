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
            
            const id = event.target.id;
            const userToken = localStorage.getItem("token");

            const deleteClick = await getDelete(id, userToken);

            const works = await getWorks();
            showWorksModal(works);
        }
    });
}

function addWorks () {
    const galleryPhoto = document.getElementById("galleryPhoto");
    const openPost = document.getElementById("addButton");
    const addForm = document.getElementById("addFormulaire");

    openPost.addEventListener ("click", async function(event){
        event.stopPropagation();
        galleryPhoto.style.display = "none";
        addForm.style.display = "flex";
        const categories = await getCategories()
        selectCategories(categories)
    })

    const addImgButton = document.getElementById("addImgButton");
    const inputImg = document.getElementById ("addimage");

    addImgButton.addEventListener("click", function(event) {
        event.stopPropagation();
        inputImg.click();
    });

    inputImg.addEventListener("change", function(event) {
        event.stopPropagation();
        const spanImg = document.getElementById("imgInput");
        const previewImg = document.createElement("img");
        const vectorImg = document.getElementById("img-vector");
        const pImg = document.getElementById ("add-img-text");
        const addImgButton = document.getElementById("addImgButton");

        spanImg.appendChild(previewImg)

        const selectedFile = this.files[0];
        if (selectedFile) {
            const fileSizeInMB = selectedFile.size
            if (fileSizeInMB > 4000000) {
                alert("L'image doit faire moins de 4Mo");
                this.value = null;
                return;
            }
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImg.src = e.target.result;
            };
            reader.readAsDataURL(selectedFile);
            vectorImg.style.display = "none"
            pImg.style.display = "none"
            addImgButton.style.display = "none"
        }
    });

    addForm.addEventListener("submit", async function(event) {
        event.preventDefault();
        const addImgButton = document.getElementById("addImgButton").value;
        const titreImg = document.getElementById("titre").value;
        const catImg = document.getElementById("categorie").value;

        try {
            const post = await postWorks(addImgButton, titreImg, catImg);
        }
        catch (error) {
        }
    })
}

function selectCategories (apiCategories) {
    const addForm = document.getElementById("addFormulaire");

    if (addForm.style.display = "flex") {
        const spanCategories = document.querySelector("#categorie")
        const optionObjets = document.createElement("option")
        const optionAppartements = document.createElement("option")
        const optionHotelEtResto = document.createElement("option")

        optionObjets.innerText = apiCategories[0].name
        optionAppartements.innerText = apiCategories[1].name
        optionHotelEtResto.innerText = apiCategories[2].name

        spanCategories.appendChild(optionObjets)
        spanCategories.appendChild(optionAppartements)
        spanCategories.appendChild(optionHotelEtResto)
    }
}

modalDisplay();
openModif();
closeModif();
deleteWork();
addWorks();
