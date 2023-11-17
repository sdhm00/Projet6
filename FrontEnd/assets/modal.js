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
    const galleryPhoto = document.getElementById("galleryPhoto")
    const modalGallery = document.getElementsByClassName("modalGallery")

    galleryPhoto.appendChild(modalGallery)

    buttonModal.addEventListener("click",function(){
        galleryPhoto.style.display = "flex";
    })

}

openModal();

modalDisplay();


