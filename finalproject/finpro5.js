

if(document.getElementById('counter1')){

    let counter1 = document.getElementById('counter1')
    let i = 0
    let set = setInterval(()=>{
        if(i == 24) clearInterval(set)
        i++
        counter1.innerText = i
    
        
    } , 100)
}

if(document.getElementById('counter2')){

    let counter2 = document.getElementById('counter2')
    let i = 0
    let set = setInterval(()=>{
        if(i == 199) clearInterval(set)
        i++
        counter2.innerText = `+${i}`
    
        
    } , 13)
}

if(document.getElementById('counter3')){

    let counter3 = document.getElementById('counter3')
    let i = 0
    let set = setInterval(()=>{
        if(i == 99) clearInterval(set)
        i++
        counter3.innerText = `+${i}M`
    
        
    } , 27)
}

if(document.getElementById('counter4')){

    let counter4 = document.getElementById('counter4')
    let i = 0
    let set = setInterval(()=>{
        if(i == 98) clearInterval(set)
        i++
        counter4.innerText = `${i}%`
    
        
    } , 28)
}


let btn = document.getElementById("btn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }

});

btn.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};