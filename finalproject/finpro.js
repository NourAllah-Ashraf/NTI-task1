$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        navText: ['<span>&#8249;</span>', '<span>&#8250;</span>'], 
        responsive: {
            0: { items: 1 },
            480: { items: 2 },
            768: { items: 3 },
            1200: { items: 5 }
        }
    });


    let totalSeconds = (11 * 3600) + (6 * 60) + 20; 
    
    const hoursBox = document.getElementById("hours");
    const minutesBox = document.getElementById("minutes");
    const secondsBox = document.getElementById("seconds");


    if (hoursBox && minutesBox && secondsBox) {
        const countdownInterval = setInterval(function() {
            if (totalSeconds <= 0) {
                clearInterval(countdownInterval);
                return;
            }
            totalSeconds--;
            const hrs = Math.floor(totalSeconds / 3600);
            const mins = Math.floor((totalSeconds % 3600) / 60);
            const secs = totalSeconds % 60;
            hoursBox.textContent = String(hrs).padStart(2, '0');
            minutesBox.textContent = String(mins).padStart(2, '0');
            secondsBox.textContent = String(secs).padStart(2, '0');
        }, 1000); 
    }
});

let mainImage = document.getElementById("mainImage");
let images = document.querySelectorAll(".small-img");

for (let i = 0; i < images.length; i++) {

    images[i].addEventListener("click", function () {

        mainImage.src = this.src;

        for (let j = 0; j < images.length; j++) {
            images[j].classList.remove("border-dark", "border-2");
        }

        this.classList.add("border-dark", "border-2");

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