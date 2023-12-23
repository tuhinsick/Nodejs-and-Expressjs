document.getElementById("app-bg").addEventListener("click",myfunction); 

function myfunction(){
    const friends = document.getElementsByClassName("friend");
    console.log(friends);
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';
    }
}


document.getElementById("center-third").addEventListener("click",centering);

function centering(){
    const el = document.getElementById("third-friend");
    el.style.textAlign = 'center';
}

document.getElementById("addFriend").addEventListener("click",function(){
    console.log("adding");
})