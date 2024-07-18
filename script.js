const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}


// PRODUCTS TABS

const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
    tab.addEventListener("click" , () => {
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) =>{
            tabContent.classList.remove("active-tab");
        });

        target.classList.add("active-tab");

        tabs.forEach((tab) => {
            tab.classList.remove("active-tab");
        });
        tab.classList.add("active-tab");

    });
});


// Bag Count
bagItems = [];
displayBagIcon();
function addToBag(itemId){
    bagItems.push(itemId);
    displayBagIcon();
}

function displayBagIcon() {
    let bagItemCountElement = document.querySelector(".bag_item_count");
    if(bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

// Image Gallery
function imgGallery()
{
    const mainImg = document.querySelector(".details_img");
    const smallImg = document.querySelectorAll(".details_small-img");

    smallImg.forEach((img) => {
        img.addEventListener('click' , function() {
            currentMainImg = mainImg.src;
            mainImg.src = this.src;
            this.src = currentMainImg;
        })
    });
}

imgGallery();

// Reviews JS

 var swiper = new Swiper(".slide-content", {
    slidesPerView:3,
    spaceBetween: 25,
    loop: true,
    centerSlide:'true',
    fade: 'true',
    grabCursor: 'true',
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    breakpoints: {
        0: {
            slidesPerView:1,
        },
        520: {
            slidesPerView:2,
        },
        950: {
            slidesPerView:3,
        },
    },
 });


