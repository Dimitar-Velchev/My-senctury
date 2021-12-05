const URL = "http://localhost:5000/data/catalog";


async function getAll(){
    let response = await fetch(URL);
    let data = await response.json();

    return data;
}


async function createPet(pet){
let response = await fetch(URL, {
    method: 'POST',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(pet)
});

let result = await response.json();
return result; 
}

export {getAll, createPet}