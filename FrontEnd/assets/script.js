function showWorks (apiWorks) {
  const gallery = document.querySelector(".gallery")
  gallery.innerHTML = "";
  for (let i = 0; i < apiWorks.length; i++) {
    const projetDiv = document.createElement("figure")
    const projetImg = document.createElement("img")
    const projetText = document.createElement("figcaption")

    projetImg.src = apiWorks[i].imageUrl
    projetText.innerText = apiWorks[i].title

    projetDiv.appendChild(projetImg)
    projetDiv.appendChild(projetText)
    gallery.appendChild(projetDiv)
  }
}

function showCategories (apiCategories) {
  const categories = document.querySelector(".categories")
  const boutonTous = document.createElement("button")
  const boutonObjets = document.createElement("button")
  const boutonAppartements = document.createElement("button")
  const boutonHotelEtResto = document.createElement("button")

  boutonTous.innerText = "Tous"
  boutonObjets.innerText = apiCategories[0].name
  boutonAppartements.innerText = apiCategories[1].name
  boutonHotelEtResto.innerText = apiCategories[2].name

  categories.appendChild(boutonTous)
  categories.appendChild(boutonObjets)
  categories.appendChild(boutonAppartements)
  categories.appendChild(boutonHotelEtResto)

  boutonTous.addEventListener ("click", async function(){
    const works = await getWorks()
    const filterWorks = works.filter((work) => work)
    console.log(filterWorks)
    showWorks(filterWorks) 
    console.log("Bouton Tous")
  })
  
  boutonObjets.addEventListener ("click", async function(){
    const works = await getWorks()
    const filterWorksObjets = works.filter((work) => work.categoryId == 1)
    console.log(filterWorksObjets)
    showWorks(filterWorksObjets) 
    console.log("Bouton Objets")
  })
  
  boutonAppartements.addEventListener ("click", async function(){
    const works = await getWorks()
    const filterWorksAppartement = works.filter((work) => work.categoryId == 2)
    console.log(filterWorksAppartement)
    showWorks(filterWorksAppartement) 
    console.log("Bouton Appartements")
  })

  boutonHotelEtResto.addEventListener ("click", async function(){
    const works = await getWorks()
    const filterWorksHotel = works.filter((work) => work.categoryId == 3)
    console.log(filterWorksHotel)
    showWorks(filterWorksHotel) 
    console.log("Bouton Hôtels & restaurants")
  })
}

document.addEventListener("DOMContentLoaded", function(apiLogin) {
  const form = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("mdp");
  const message = document.getElementById("message");

  form.addEventListener("submit", async function(event) {
      event.preventDefault();
      const login = await getLogin()

      // Hardcoded user credentials (in practice, use a server for authentication)
      const validEmail = login.email;
      const validPassword = login.password;

      const enteredEmail = emailInput.value;
      const enteredPassword = passwordInput.value;

      if (enteredEmail === validEmail && enteredPassword === validPassword) {
          message.textContent = "Login successful! Redirecting...";
          // Here, you can redirect the user to a different page.
          // For example: window.location.href = "dashboard.html";
      } else {
          message.textContent = "Erreur dans l’identifiant ou le mot de passe";
      }
  });
});

const init = async()=>{
  const works = await getWorks()
  showWorks(works)

  const categories = await getCategories()
  showCategories(categories)

  const login = await getLogin()
  showLogIn(login)

  console.log(works)
  console.log(categories)
  console.log(login)
}
init();