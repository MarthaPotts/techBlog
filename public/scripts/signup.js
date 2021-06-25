const signupFormHandler = async (event) => {
    event.preventDefault(); 
    const username = document.querySelector('#username-signup'); 
    const email = document.querySelector('#email-signup'); 
    const password = document.querySelector('#password-signup');

const response = await fetch('/api/user', {
    // method: 'POST', 
    // body: JSON.stringify( {username, email, password}),
    // headers: { 'Content-Type': 'application/json'}, 
    
    method: 'POST', 
    body: JSON.stringify({
        username: username.value, 
        password: password.value, 
        email: email.value, 
    }),
    headers: { 'Content-Type': 'application/json'},
    }); 
    console.log(response); 
    if (response.ok) {
        document.location.replace('loggedinhome');
 
    } else {
        alert('WHAT THE HELL');  
    }
}; 
document.querySelector('.signup-form')
.addEventListener('submit', signupFormHandler); 