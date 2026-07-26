// =====================================
// ChicTheory JavaScript
// =====================================


document.addEventListener("DOMContentLoaded", function(){


const searchInput = document.querySelector(".search-box input");

const searchButton = document.querySelector(".search-box button");

const cards = document.querySelectorAll(".card");



console.log("Cards Found:", cards.length);



function searchProducts(){


let value = searchInput.value.toLowerCase().trim();



cards.forEach(function(card){


let text = card.textContent.toLowerCase();



if(text.includes(value) || value === ""){

card.style.display = "";

}

else{

card.style.display = "none";

}


});


}



if(searchButton){

searchButton.addEventListener("click", function(){

searchProducts();

});

}



if(searchInput){

searchInput.addEventListener("keyup", function(e){


if(e.key === "Enter"){

searchProducts();

}


});


}




// Navbar Shadow


const navbar = document.querySelector(".navbar");



if(navbar){


window.addEventListener("scroll", function(){


if(window.scrollY > 20){


navbar.style.boxShadow =
"0 8px 30px rgba(0,0,0,.12)";


}

else{


navbar.style.boxShadow =
"0 2px 10px rgba(0,0,0,.08)";


}



});


}



console.log("✅ ChicTheory Loaded Successfully");


});
