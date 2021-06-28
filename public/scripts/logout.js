const logout = async () => {
    const response = await fetch('api/user/logout', {
        method: 'POST', 
        headers: { 'Content-Type': 'applications/json' }
    }); 

    if (response.ok) {
        document.location.replace('/'); 
    } else {
        alert('Did not log out!');
    }
}; 
console.log('log out file loaded');
document.querySelector('.logout').addEventListener('click', logout); 