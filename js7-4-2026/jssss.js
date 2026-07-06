let btn = document.getElementsByTagName('button')
console.log(btn)
let imageChange = ()=>{
    let img = document.getElementById('myImg')
    if(img.src.includes("1.jpg")){
        img.src="2.jpg";
    }
    else{
        img.src="1.jpg";
    }
}