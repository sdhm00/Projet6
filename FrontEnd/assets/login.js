const currentUrl = window.location.pathname;

if (currentUrl.includes('login.html')) {
  const loginActive = document.getElementById('loginUrl');
  loginActive.style.fontWeight = 600;
}


function installConnexion(){
  const form = document.getElementById("form");
  const errorMessage = document.getElementById("errorMessage");

  form.addEventListener("submit",async function(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value;
    const passwordInput = document.getElementById("password").value;

    const login = await getLogin(emailInput, passwordInput);

    localStorage.removeItem("token")

    try {
      const token = login.token;
      localStorage.setItem("token", token);
      window.location.href = "./index.html";
    }
    catch (error) {
      errorMessage.style.opacity = 1
    }
  });
};

const init = ()=>{
  installConnexion()
}
init();

