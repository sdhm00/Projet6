const baseUrl = "http://localhost:5678/api"

async function getWorks(){
    const apiWorks = await fetch(baseUrl + "/works")
     if (apiWorks.ok === true) {
       return apiWorks.json();
     }
     throw new Error('Impossible de contacter le serveur')
}

async function getCategories(){
  const apiCategories = await fetch(baseUrl + "/categories")
   if (apiCategories.ok === true) {
     return apiCategories.json();
   }
   throw new Error('Impossible de contacter le serveur')
}

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

async function postWorks(formData, userToken){
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