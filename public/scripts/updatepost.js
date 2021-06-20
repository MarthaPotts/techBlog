const postId = document.querySelector('input[name="edit-title"]').value;

const updatePostFormHandler = async (event) => {
    preventDefault(); 

const title = document.querySelector('textarea[name="edit-title"]').value;
const body = document.querySelector('textarea[name="edit-post-content"]').value; 

await fetch(`api/post/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({title, body}),
    headers: {'Content-Type': 'application/json'}
}); 
document.location.replace('/dashboard'); 
}; 

const deleteHandler = async () => {
    await fetch(`api/post/${postId}`, {
        method: 'DELETE'
    }); 
    document.location.replace('/dashboard'); 
}; 

document.querySelector('.edit-post-form')
.addEventListener('submit', updatePostFormHandler); 
document.querySelector('.delete')
.addEventListener('click', deleteHandler); 