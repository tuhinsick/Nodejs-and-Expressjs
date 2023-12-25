function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => loading(data));
}


function loading(data){
    console.log(data)
    const posts = document.getElementById('comment-container');
    for(comment of data){
        const div = document.createElement('div');
        div.innerHTML = `
           <h4> PostID- ${comment.postId}</h4>
           <h5> Email: ${comment.email}</h5>
           <p>  Comment: ${comment.body}</p>
        `;

        posts.appendChild(div);
    }
}