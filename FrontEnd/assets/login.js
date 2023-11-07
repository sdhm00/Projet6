function installConnexion(){
  const form = document.getElementById("form");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit",async function(event) {
      event.preventDefault();
      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;

      const login = await getLogin(emailInput, passwordInput);

      
      const getToken = await JSON.stringify(login.token);
      window.localStorage.setItem("token", getToken);
      const token = localStorage.getItem("token")

      if (getToken === null) {
        errorMessage.style.display = flex;
      }
      else {
        window.location.href = "./index.html";
      }
  });

};

const init = ()=>{
  installConnexion()
}
init();