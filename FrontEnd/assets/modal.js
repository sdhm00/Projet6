function modalDisplay (){
    const modal = document.getElementById("modal")
    const loginButton = document.getElementById("loginButton")
    const logoutButton = document.getElementById("logoutButton")
    const token = localStorage.getItem("token")

    if (localStorage !== null && token !== null) {
        loginButton.style.display = "none"
        logoutButton.style.display = "unset"
        modal.style.display = "flex";
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


function openModal () {
    const buttonModal = document.getElementById("buttonmodal")
    const modalGallery = document.getElementsByClassName("modalGallery")
    const galleryPhoto = document.getElementById("galleryPhoto")

    modalGallery = showWorks.cloneNode(true)

    buttonModal.addEventListener ("click", async function(){
        galleryPhoto.style.display = "unset";
    })
}

modalDisplay();
openModal();


