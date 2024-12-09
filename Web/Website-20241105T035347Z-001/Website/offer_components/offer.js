// leftsidepanel js
function leftSide_panel() {
    const leftSidePanel = document.querySelector('.leftSidepnl_wrapper');
    const leftPanel_Side = document.querySelector('.leftSide_panel');

    leftSidePanel.classList.toggle('active');
    leftPanel_Side.classList.toggle('active');
}

// rightside panel js
function rightSide_panel() {
    const rightSidePanel = document.querySelector('.rightPanel_wrapper');

    rightSidePanel.classList.toggle('active');

}


//right side panel slideshow js
let slideIndex = 0; 
let slideInterval; 
function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

   
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }


    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; 
    }

   
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

  
    slideInterval = setTimeout(showSlides, 4000); 
}
function currentSlide(n) {
    clearTimeout(slideInterval); 
    slideIndex = n - 1; 
    showSlides(); 
}
showSlides();

//show panel hover 
// Select all the li items in the nav menu
const navItems = document.querySelectorAll('.nav_menu li');
const navContentItems = document.querySelectorAll('.header_navContent .home_hoverItems');

// Function to show the corresponding nav content
const showNavContent = (id) => {
    // Hide all nav content first
    navContentItems.forEach(content => {
        content.style.display = 'none'; // Hide all the content
    });

    // Show the content with the matching id
    const matchingContent = document.getElementById(id);
    if (matchingContent) {
        matchingContent.style.display = 'flex'; // Show the matching content (use 'flex' for layout)
    }
};

// Function to hide all nav content
const hideNavContent = () => {
    navContentItems.forEach(content => {
        content.style.display = 'none'; // Hide all the content
    });
};

// Add hover event listeners to each nav item
navItems.forEach(item => {
    // Clean the text content of the item and create a corresponding nav content ID
    const navId = item.textContent.trim().toLowerCase().replace(/\s+/g, '_') + '_Nav'; // Match ids like 'home_Nav', 'pages_Nav', etc.
    
    item.addEventListener('mouseenter', () => {
        showNavContent(navId); // Show the corresponding content when hovering over the item
    });

    item.addEventListener('mouseleave', hideNavContent); // Hide the content when mouse leaves the item
});

















//drop down
const faqs = document.querySelectorAll('.veggy_dropDown');

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faqs.forEach(f => {
            if (f !== faq) {
                f.classList.remove('active');
            }
        });

        faq.classList.toggle('active');
    });
});

