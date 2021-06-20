
const commentFormHandler = async (event) => {
    event.preventDefault(); 
}
const postId = document.querySelector('input[name="post-id"]').value;
const body = docuement.querySelector('textarea[name="new-comment-body"]').value; 

if (body) {
    await fetch('/api/comment', {
        method: 'POST', 
        body: JSON.stringify({postId, body}), 
        headers: {'Content-Type': 'application/json'},
    }); 
    document.location.reload(); 
}
docuement.querySelector('.comment-form')
.addEventListener('submit', commentFormHandler); 