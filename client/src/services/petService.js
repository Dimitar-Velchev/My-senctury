const URL = "http://localhost:5000/data/catalog";

async function createPet(pet){
let response = fetch(URL, {
    method: 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(pet)
});

let result = await response.json();
return result; 
}

export {createPet}