export const API_URL = "http://localhost:52950/api";

export function Login(userName, password){
    return fetch(`${API_URL}/Account/login`, { headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST', 
      body: JSON.stringify({user: userName, password:password})})
    .then(response => response.json());
}