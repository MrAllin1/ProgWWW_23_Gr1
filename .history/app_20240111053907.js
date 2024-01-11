const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

if (menu) {
    menu.addEventListener('click', function () {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    });
}


document.querySelectorAll('.navbar_link').forEach(anchor => {
   
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        console.log(targetElement);
        console.log(' Targettt idd '+targetId);

        if (targetElement) {
            // Calculate the offset of the navbar
            const navbarHeight = document.querySelector('.navbar').offsetHeight;

            // Calculate the exact scroll position considering the header height
            const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const adjustedScroll = targetOffset - navbarHeight;

            window.scrollTo({
                top: adjustedScroll,
                behavior: 'smooth'
            });
        }
    });
    document.querySelectorAll('.navbar_link_buy_rent').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = './pages/BuyRent.html';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const buyHouseBtn = document.getElementById('buyHouseBtn');
    const rentHouseBtn = document.getElementById('rentHouseBtn');
    const sellHouseBtn = document.getElementById('sellHouseBtn');

    if (buyHouseBtn) {
        buyHouseBtn.addEventListener('click', function () {
            window.location.href = './pages/buyRent.html';
        });
    }

    if (rentHouseBtn) {
        rentHouseBtn.addEventListener('click', function () {
            window.location.href = './pages/buyRent.html';
        });
    }

    if (sellHouseBtn) {
        sellHouseBtn.addEventListener('click', function () {
            window.location.href = './pages/sell.html';
        });
    }}
    );


/*SHOW HIDDEN - PASSWORD */
function togglePasswordVisibility(loginPass, loginEye) {
    const input = document.getElementById(loginPass);
    const iconEye = document.getElementById(loginEye);

    if (input.type === 'password') {
        input.type = 'text';
        iconEye.classList.add('ri-eye-line');
        iconEye.classList.remove('ri-eye-off-line');
    } else {
        input.type = 'password';
        iconEye.classList.remove('ri-eye-line');
        iconEye.classList.add('ri-eye-off-line');
    }
}


document.querySelectorAll('.view_button').forEach(button => {
    button.addEventListener('click', function () {
        const targetUrl = this.dataset.targetUrl;
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});

// app.js
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;
    if (currentPage.includes('signUp.html')) {
        // Code specific to the signUp.html page
        const signUpForm = document.querySelector('.signUp__form');
        const signUpButton = signUpForm.querySelector('.signUp__button');
      
        signUpButton.addEventListener('click', function (event) {
          event.preventDefault();
      
          const email = document.getElementById('signUp-email').value;
          const password = document.getElementById('signUp-pass').value;
          const confirmPassword = document.getElementById('signUp-pass-confirm').value;
      
          if (password !== confirmPassword) {
            alert("Passwords do not match");
            return ;
          }
      
          // Store email and password in localStorage
          localStorage.setItem('email', email);
          localStorage.setItem('password', password);
      
          const storedEmail = localStorage.getItem('email');
          const storedPassword = localStorage.getItem('password');
      
          window.history.replaceState(null, document.title, window.location.href);

          // Redirect to home page after successful signup
          window.location.href = '../index.html';
        });
    }
    // Add more conditions for other pages as needed
});

const gallery = document.querySelector(".gallery");
const leftButton = document.querySelector(".arrow-button.left");
const rightButton = document.querySelector(".arrow-button.right");
let index = 0;
const totalImages = gallery.children.length;
const imageWidthPercentage = 100;

// Calculate the maximum translate value based on the total width of all images
let maxTranslate;

window.addEventListener("resize", () => {
  calculateMaxTranslate();
  updateGalleryTransform();
});

leftButton.addEventListener("click", () => {
  index = index > 0 ? index - 1 : totalImages - 1;
  updateGalleryTransform();
});

rightButton.addEventListener("click", () => {
  index = index < totalImages - 1 ? index + 1 : 0;
  updateGalleryTransform();
});

function calculateMaxTranslate() {
  const galleryWidth = gallery.getBoundingClientRect().width;
  maxTranslate = -(totalImages - 1) * galleryWidth;
}

function updateGalleryTransform() {
  calculateMaxTranslate();
  const translateValue = -index * imageWidthPercentage;

  // Loop back to 0% if the translation reaches or exceeds the maximum translate value
  const limitedTranslate = translateValue <= maxTranslate ? 0 : translateValue;

  console.log(`Index: ${index}, Limited Translate Value: ${limitedTranslate}%`);
  gallery.style.transform = `translateX(${limitedTranslate}%)`;

  // Disable right button if the total width is less than or equal to the container width
  rightButton.disabled = gallery.clientWidth >= gallery.scrollWidth;
  // Disable left button if the translation is already at 0%
  leftButton.disabled = translateValue === 0;
}

// Initial setup
calculateMaxTranslate();
updateGalleryTransform();
