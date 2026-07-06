let btn = document.querySelectorAll('li')
function colorchange(element){
    for(let i=0; i<btn.length ; i++){
        btn[i].style.color="black";
    }
    element.style.color="red";
}

