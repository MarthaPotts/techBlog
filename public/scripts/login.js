const loginFormHandler = async (event) => {
    event.preventDefault(); 
    const username = document.querySelector('#username-login').value; 
    const email = document.querySelector('#email-login').value; 
    const password = document.querySelector('#password-login').value; 

    if (username && email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST', 
            body: JSON.stringify( { username, email, password }), 
            headers: { 'Content-Type': 'application/json' }, 
        }); 

        if (response.ok) {
            // document.location.replace('loggedinhome');
        } else {
            alert('Failed to log in'); 
        }
    }
}; 

document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler); 
