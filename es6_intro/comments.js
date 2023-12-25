function loadComments() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    fetch(url)
    .then(res => res.json())
    .then(data => loading(data));
}


function loading(comments){
    const ol = document.getElementById("comments-list");
    for(comment of comments){
        const li = document.createElement('li');
        li.innerText = comment.body;
        ol.appendChild(li)
    }
}