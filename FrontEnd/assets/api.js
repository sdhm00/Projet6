// Connection à l'API

const baseUrl = "http://localhost:5678/api"

// Fin Connection à l'API

// Connection à l'API pour les différents projets

async function getWorks(){
    const apiWorks = await fetch(baseUrl + "/works")
     if (apiWorks.ok === true) {
       return apiWorks.json();
     }
     throw new Error('Impossible de contacter le serveur')
}

// Fin Connection à l'API pour les différents projets

// Connection à l'API pour les différentes catégories

async function getCategories(){
  const apiCategories = await fetch(baseUrl + "/categories")
   if (apiCategories.ok === true) {
     return apiCategories.json();
   }
   throw new Error('Impossible de contacter le serveur')
}

// Fin Connection à l'API pour les différentes catégories

// Connection à l'API pour la vérification lors de la connexion

async function getLogin(email, password){
  console.log(email, password)
  const apiLogin = await fetch(baseUrl + "/users/login", {
    method : "POST",
    headers : {"Content-type" : "application/json"},
    body: JSON.stringify({ "email" : email, "password" : password })
  })
  console.log(apiLogin)
  if (apiLogin.ok === true) {
    return apiLogin.json();
  }
}

// Fin Connection à l'API pour la vérification lors de la connexion

// Connection à l'API pour l'ajout de nouveau projet

async function postWorks(formData, userToken){
  console.log(formData, userToken)
  try {
    const apiPost = await fetch(baseUrl + "/works", {
      method : "POST",
      headers : { Authorization : "Bearer " + userToken },
      body : formData
    })
    console.log(apiPost)
    if (apiPost.ok) {
      return apiPost.json();
    } else {
      throw new Error('Network response was not ok.');
    }
  }
  catch (error) {
    console.error('Error in postWorks:', error);
    throw error;
  }
}

// Fin Connection à l'API pour l'ajout de nouveau projet

// Connection à l'API pour la suppression d'un projet

async function getDelete(id, userToken){
  console.log(id, userToken)
  const apiDelete = await fetch(baseUrl + "/works/" + id, {
    method : "DELETE",
    headers : { Authorization : "Bearer " + userToken},
  })
  console.log(apiDelete)
  if (apiDelete.ok === true) {
    return true;
  }
  else {
    return false
  }
}

// Fin Connection à l'API pour la suppression d'un projet