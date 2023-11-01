const statusHTML = document.querySelector(".Status");
const buttonAdd = document.querySelector("button");

let isFriend = 0;
buttonAdd.addEventListener("click", function(){
    if(isFriend === 0){
        statusHTML.textContent = "Friend"
        statusHTML.style.color = "green"
        buttonAdd.style.background = "rgb(190, 56, 56)"
        buttonAdd.textContent = "Remove"
        buttonAdd.style.border ="1px solid rgb(136, 13, 13)"
        isFriend = 1;
    }else{
        statusHTML.textContent = "Stranger"
        statusHTML.style.color = "red"
        buttonAdd.style.background = "teal"
        buttonAdd.textContent = "Add Friend"
        buttonAdd.style.border ="1px solid rgb(43, 110, 110)"
        isFriend = 0;
    }
})
buttonAdd.addEventListener("mouseenter", function(){
    if(isFriend){
        buttonAdd.style.background = 'rgb(131, 37, 37)';
    }else{
        buttonAdd.style.background = 'rgb(0, 92, 92)';
    }
})
buttonAdd.addEventListener("mouseleave", function(){
    if(isFriend){
        buttonAdd.style.background = 'rgb(190, 56, 56)';
    }else{
        buttonAdd.style.background = 'teal';
    }
})