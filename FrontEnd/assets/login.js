

// form.addEventListener("submit", event => {
//     event.preventDefault()
//     connexion()
// })

// function connexion(){
//     const login = {
//         email: email.value,
//         mdp: motDePasse.value
//     }
// }

// function showLogIn (apiLogin) {
//     const logIn = document.querySelector("#login")
//     const form = document.getElementById("form")
//     const email = document.getElementById("email")
//     const motDePasse = document.getElementById("mdp")
//     const boutonConnexion = document.querySelector("submit")

//     // boutonObjets.addEventListener ("click", async function(){
//     //     const works = await getWorks()
//     //     const filterWorksObjets = works.filter((work) => work.categoryId == 1)
//     //     console.log(filterWorksObjets)
//     //     showWorks(filterWorksObjets) 
//     //     console.log("Bouton Objets")
//     //   })

//     boutonConnexion.addEventListener("click", async function() {
//         const login = await getLogin()
//         if (email == "sophie.bluel@test.tld" && motDePasse == "S0phie") {
            
//         }

//     })

// }

// const form = document.getElementById("form")
// const inputEmail = document.getElementById("email")
// const inputPassword = document.getElementById("mdp")
// const boutonConnexion = document.querySelector("submit")

// form.addEventListener("submit", event => {
//   event.preventDefault()
//   connexion()
// })

// function connexion () {
//   inputEmail.innerText = "sophie.bluel@test.tld"
//   inputPassword.innerText = "S0phie"

//   boutonConnexion.appendChild(inputEmail)
//   boutonConnexion.appendChild(inputPassword)

//   const chargeUtile = JSON.stringify(login)
//   console.log(chargeUtile)

//   boutonConnexion.addEventListener ("click", async function(){
//     const login = await getLogin()
//     if (inputEmail == inputEmail.value && inputPassword == inputPassword.value) {

//     }

//   })
// }

document.addEventListener("DOMContentLoaded", function() {
  const connexionButton = document.getElementById("connexion");

  connexionButton.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const emailInput = document.getElementById("email");
      const passwordInput = document.getElementById("password");
      
      emailInput.innerText = "sophie.bluel@test.tld"
      passwordInput.innerText = "S0phie"

      const email = emailInput.value;
      const password = passwordInput.value;
  });
});

