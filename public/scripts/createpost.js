const newPostFormHandler = async (event) => {
    event.preventDefault(); 

    const title = document.querySelector('textarea[id="new-post-title"]').value;
    const body = document.querySelector('textarea[name="new-post-content"]').value;

    await fetch(`/api/post`, {
        method: 'POST', 
        body: JSON.stringify({ title, body}), 
        headers: {'Content-Type': 'application/json'}, 
    }); 
    document.location.replace('/dashboard'); 
}; 
document.querySelector('.create-new-form', newPostFormHandler); 