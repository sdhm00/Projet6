function showLogIn (apiLogin) {
    const login = document.querySelector("#login")
    const email = document.querySelector("email")
    const motDePasse = document.querySelector("mdp")
    const boutonConnexion = document.querySelector("submit")
    const token = apiLogin.token 

    console.log(token)

    // boutonObjets.addEventListener ("click", async function(){
    //     const works = await getWorks()
    //     const filterWorksObjets = works.filter((work) => work.categoryId == 1)
    //     console.log(filterWorksObjets)
    //     showWorks(filterWorksObjets) 
    //     console.log("Bouton Objets")
    //   })

    boutonConnexion.addEventListener("click", async function() {
        const login = await getLogin()
        // if (email = "")
    })

}