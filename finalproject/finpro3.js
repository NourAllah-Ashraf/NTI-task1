
const img = document.getElementById("mainImage");
img.addEventListener("mousemove", function(e){

    const rect = img.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    img.style.transformOrigin = `${x}% ${y}%`;
    img.style.transform = "scale(2)";
});

img.addEventListener("mouseleave", function(){

    img.style.transform = "scale(1)";
    img.style.transformOrigin = "center";

});


let images = document.querySelectorAll(".small-img");
let mainImage = document.getElementById("mainImage");

for(let i = 0; i < images.length; i++){

    images[i].addEventListener("click", ()=>{

        mainImage.src = images[i].src;

        for(let j = 0; j < images.length; j++){
            images[j].classList.remove("border-dark");
        }

        images[i].classList.add("border-dark");

    });

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