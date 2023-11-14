function modalDisplay (event){
    event.preventDeffault()
    const modal = document.getElementById("modal")
    const loginButton = document.getElementById("loginButton")

    if (token !== null) {
        loginButton.textContent = "logout";
        modal.style.display = "flex";
    }
    else {
        loginButton.textContent = "login";
        modal.style.display = "none";
    }
}
