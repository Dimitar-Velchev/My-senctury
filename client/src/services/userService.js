const URL = "http://localhost:5000/user";

async function register(username, email, password){
    let response = await fetch(`${URL}/register`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json',
        },
        body: JSON.stringify({username, email, password})
    });
    
    let result = await response.json();
    return result; 
}

export{
    register
}