document.addEventListener("DOMContentLoaded", function(apiLogin) {
  const connexionButton = document.getElementById("connexion");

  connexionButton.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      
      emailInput.innerText = apiLogin.email
      passwordInput.innerText = apiLogin.password
  });
});

const init = async()=>{
  const login = await getLogin()
  showLogIn(login)

  console.log(login)
}
init();