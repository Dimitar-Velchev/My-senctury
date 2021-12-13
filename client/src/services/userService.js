const URL = "http://localhost:5000/user";

async function register(username, email, password) {
  let response = await fetch(`${URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  let result = await response.json();
  if (response.ok) {
    return result;
  }
  throw result;
}

async function login(email, password) {
  let response = await fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  let result = await response.json();

  if (response.ok) {
    return result;
  }
  throw result;
}

async function logout(){
    let response = await fetch(`${URL}/logout`);
    return response;

    }

async function getUser(id) {
  let response = await fetch(`${URL}/profile/${id}`);
  let result = await response.json();
  return result;
}

export { register, login, getUser, logout };
