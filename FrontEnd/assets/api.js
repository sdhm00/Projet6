const baseUrl = "http://localhost:5678/api"

async function getWorks(){
    const apiDataProject = await fetch(baseUrl + "/works")
     if (apiDataProject.ok === true) {
       return apiDataProject.json();
     }
     throw new Error('Impossible de contacter le serveur')
}

