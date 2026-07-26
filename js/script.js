// =============================
// ChicTheory JavaScript
// =============================

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");
const cards = document.querySelectorAll(".card");

console.log(cards.length);

searchButton.addEventListener("click", searchProducts);

searchInput.addEventListener("keyup", function(e){
    if(e.key === "Enter"){
        searchProducts();
    }
});

function searchProducts(){

    const value = searchInput.value.toLowerCase();

    cards.forEach(card=>{

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }

    });

}

// Smooth Scroll

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        const href=this.getAttribute("href");

        if(href.startsWith("#")){

            e.preventDefault();

            document.querySelector(href).scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

    const navbar=document.querySelector(".navbar");

    if(window.scrollY>30){

        navbar.style.boxShadow="0 8px 30px rgba(0,0,0,.12)";

    }

    else{

        navbar.style.boxShadow="0 2px 10px rgba(0,0,0,.08)";

    }

});

console.log("✅ ChicTheory Loaded");
