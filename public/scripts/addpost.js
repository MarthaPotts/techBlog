const newPostFormHandler = async function(event) {
    event.preventDefault(); 
    
    const title = document.querySelector('input[id="new-post-title"]').value; 
    const body = document.querySelector('textarea[name=["new-post-body"]').value;

    await fetch(`/api/post`, {
        method: 'POST', 
        body: JSON.stringify({
            title, 
            body, 
        }), 
        headers: { 'Content-Type': 'application/json'}, 
    }); 
    document.location.replace('/dashboard'); 
}