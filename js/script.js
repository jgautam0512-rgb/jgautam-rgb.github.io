document.addEventListener("DOMContentLoaded",function(){

const searchInput=document.querySelector(".search-box input");
const searchButton=document.querySelector(".search-box button");
const cards=document.querySelectorAll(".card");

function searchProducts(){

const value=searchInput.value.trim().toLowerCase();

cards.forEach(function(card){

const title=card.querySelector("h3").textContent.toLowerCase();
const text=card.textContent.toLowerCase();

if(title.includes(value)||text.includes(value)||value===""){

card.style.display="";

}else{

card.style.display="none";

}

});

}

if(searchButton){

searchButton.addEventListener("click",searchProducts);

}

if(searchInput){

searchInput.addEventListener("keyup",function(e){

if(e.key==="Enter"){

searchProducts();

}

});

}

document.querySelectorAll('a[href^="#"]').forEach(function(anchor){

anchor.addEventListener("click",function(e){

const href=this.getAttribute("href");

if(href!=="#"){

e.preventDefault();

document.querySelector(href).scrollIntoView({

behavior:"smooth"

});

}

});

});

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",function(){

if(window.scrollY>40){

navbar.style.boxShadow="0 15px 35px rgba(0,0,0,.12)";

}else{

navbar.style.boxShadow="0 8px 25px rgba(0,0,0,.06)";

}

});

const observer=new IntersectionObserver(function(entries){

entries.forEach(function(entry){

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{threshold:.15});

document.querySelectorAll(".card,.category,.review-card,.faq-item").forEach(function(el){

el.style.opacity="0";
el.style.transform="translateY(50px)";
el.style.transition=".7s";

observer.observe(el);

});

const newsletterBtn=document.querySelector(".newsletter-box button");

if(newsletterBtn){

newsletterBtn.addEventListener("click",function(){

const email=document.querySelector(".newsletter-box input").value.trim();

if(email===""){

alert("Please enter your email.");

}else{

alert("Thank you for subscribing!");

document.querySelector(".newsletter-box input").value="";

}

});

}

const copyright=document.querySelector(".copyright p");

if(copyright){

copyright.innerHTML="© "+new Date().getFullYear()+" ChicTheory. All Rights Reserved.";

}

console.log("✅ ChicTheory Premium Loaded");

});
