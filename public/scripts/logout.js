const logout = async () => {
    const response = await fetch('api/users/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'applications/json' }
    }); 

    if (response.ok) {
        document.location.replace('/login'); 
    } else {
        alert(response.statusText);
    }
}; 

document.querySelector('#logout').addEventListener('click', logout); 