// Basic toggle function for dropdowns
const dropdown = document.querySelector(".navbar_main nav li a[href='dropdown']");
const dropdownMenu = document.createElement("ul");
dropdownMenu.innerHTML = `
  <li><a href="#">Subpage 1</a></li>
  <li><a href="#">Subpage 2</a></li>
  <li><a href="#">Subpage 3</a></li>
`;
dropdownMenu.style.display = "none";
dropdown.parentElement.appendChild(dropdownMenu);

dropdown.addEventListener("click", function (event) {
  event.preventDefault();
  dropdownMenu.style.display = dropdownMenu.style.display === "none" ? "block" : "none";
});

// Show an alert when the "Shop Now" button is clicked
document.querySelectorAll("button").forEach((button) => {
  if (button.innerText === "Shop Now") {
    button.addEventListener("click", () => {
      alert("Taking you to our shop!");
    });
  }
});


/*JUICE*/
    const swiper = new Swiper('.swiper', {
        loop: true, // Enable looping of slides
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


// Initialize Swiper
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
      // Swiper options
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      autoplay: {
          delay: 5000,
          disableOnInteraction: false,
      },
  });
});

