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

async function postWorks(){
  const apiPost = await fetch(baseUrl + "/works", {
    method : "POST",
    headers : {"Content-type" : "application/json"},
  })
  console.log(apiPost)
  if (apiPost.ok === true) {
    return apiPost.json();
  }
}

async function deleteWorks(workId, userToken){
  const apiDelete = await fetch(baseUrl + "/works/${workId}", {
    method : "DELETE",
    headers : { Authorization : "Bearer ${userToken}",},
    body : JSON.stringify({ "workId" : workId, "userToken" : userToken})
  })
  console.log(apiDelete)
}