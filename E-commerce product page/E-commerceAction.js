let main=document.getElementById('images');
let images=document.querySelectorAll('#lower-div span  img');
let img1=document.getElementById('img1');
let img2=document.getElementById('img2');
let img3=document.getElementById('img3');
let img4=document.getElementById('img4');

images[0].addEventListener('click',()=>{
    main.style.transform="translateX(0px)";
    img1.style.opacity="0.7";
    img2.style.opacity="1";
    img3.style.opacity="1";
    img4.style.opacity="1";

})
images[1].addEventListener('click',()=>{
    main.style.transform="translateX(-12.2rem)";
    img1.style.opacity="1";
    img2.style.opacity="0.7";
    img3.style.opacity="1";
    img4.style.opacity="1";
})
images[2].addEventListener('click',()=>{
    main.style.transform="translateX(-25.2rem)";
    img1.style.opacity="1";
    img2.style.opacity="1";
    img3.style.opacity="0.7";
    img4.style.opacity="1";
})
images[3].addEventListener('click',()=>{
    main.style.transform="translateX(-38.5rem)";
    img1.style.opacity="1";
    img2.style.opacity="1";
    img3.style.opacity="1";
    img4.style.opacity="0.7";
})
let Plus=document.getElementById('operatorPlus');
let Minus=document.getElementById('operatorMinus');
let number=document.getElementById('number');
let n=0;
Plus.addEventListener('click',()=>{
    n=n+1;
    number.innerText=n;
   

})
Minus.addEventListener('click',()=>{
    if(n>0){
    n=n-1;
    number.innerText=n;
    }
})
let nav=document.getElementById('horizontal-nav-bar');
let ul=document.querySelector('ul');
let u=document.getElementById('vertical');
nav.addEventListener('click',()=>{
    if(u.style.display=="none"){
        u.style.display="flex";
    
    u.style.transform="translateX(0rem)";
    
    nav.innerHTML="&#10005";
    }
    else{
        u.style.display="none";
        u.style.transform="translateX(-9rem)";
        nav.innerHTML="&#9776";
    }
})
