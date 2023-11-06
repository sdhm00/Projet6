function installConnexion(){
  const form = document.getElementById("form");

  form.addEventListener("submit",async function(event) {
      event.preventDefault()
      const emailInput = document.getElementById("email").value;
      const passwordInput = document.getElementById("password").value;

      const login = await getLogin(emailInput, passwordInput)
      console.log(login.token)
  });
};

const init = ()=>{
  installConnexion()
}
init();