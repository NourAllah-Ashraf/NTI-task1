let handleCategory = (type) => {
    let category1 = document.querySelectorAll("[data-category='category1']");
    let category2 = document.querySelectorAll("[data-category='category2']");

    if (type == 'category1') {

        for (let i = 0; i < category1.length; i++) {
            category1[i].classList.remove('d-none');
        }

        for (let i = 0; i < category2.length; i++) {
            category2[i].classList.add('d-none');
        }

    } else {

        for (let i = 0; i < category1.length; i++) {
            category1[i].classList.add('d-none');
        }

        for (let i = 0; i < category2.length; i++) {
            category2[i].classList.remove('d-none');
        }

    }
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