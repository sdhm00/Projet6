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

async function getLogin(){
  const apiLogin = await fetch(baseUrl + "/users/login", {
    method : "POST",
    headers : {"Content-type" : "application/json"},
    body: JSON.stringify({ email, password })
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
        window.location.href = "./FrontEnd/index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
  })
  .catch(error => {
    console.error("Error:", error);
})}

