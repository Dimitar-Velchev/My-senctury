const URL = "http://localhost:5000/data/catalog";

async function getAll() {
  let response = await fetch(URL);
  let result = await response.json();

  return result;
}

async function createPet(pet, token) {
  let response = await fetch(URL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(pet),
  });

  let result = await response.json();
  if (response.ok) {
    return result;
  }
  throw result;
}

async function getPetDetails(id) {
  let response = await fetch(`${URL}/${id}`);
  let result = await response.json();

  return result;
}

async function deletePet(id, token) {
  let response = await fetch(`${URL}/${id}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  });
  return response;
}

async function updatePet(pet, token, id) {
  let response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(pet),
  });

  let result = await response.json();
  if (response.ok) {
    return result;
  }
  throw result;
}


async function showInterest(id, token){
 const response = await fetch(`${URL}/${id}/interested`, {
  method: "GET",
  headers: {
    "content-type": "application/json",
    "X-Authorization": token,
  }
  })
 let result = await response.json();
 if (response.ok) {
  return result;
}
throw result;
}


export { 
  getAll, 
  createPet, 
  getPetDetails, 
  deletePet, 
  updatePet,
  showInterest 
};
