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
            scrollToElement(targetId);
        }
    });
    document.querySelectorAll('.navbar_link_buy_rent').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = './pages/BuyRent.html';
        });
    });
    document.querySelectorAll('.navbar_link_sell').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = './pages/sell.html';
        });
    });
    document.querySelectorAll('.navbar_link_home_in_buy_rent').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    });
    document.querySelectorAll('.navbar_link_services_in_buy_rent').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            window.location.href = '../index.html';
            scrollToElement('services'); 
        });
    });
    document.querySelectorAll('.navbar_link_sell_in_buy_rent').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = 'sell.html';
        });
    });
    document.querySelectorAll('.navbar_link_services_sell').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    });
    document.querySelectorAll('.navbar_link_home_sell').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    });
    document.querySelectorAll('.navbar_link_buy_rent_sell').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = './BuyRent.html';
        });
    });
    document.querySelectorAll('.navbar_link_buy_rent_in_property_display').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = './BuyRent.html';
        });
    });
    document.querySelectorAll('.navbar_link_services_in_property_display').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    });
    document.querySelectorAll('.navbar_link_home_in_property_display').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    });
    document.querySelectorAll('.navbar_link_sell_in_property_display').forEach(link => {
        link.addEventListener('click', function () {
            window.location.href = './sell.html';
        });
    });

    document.querySelectorAll('.main_btn').forEach(link => {
        link.addEventListener('click', function () {
            scrollToElement('services');
        });
    });
});

function scrollToElement(targetElementId) {
    const targetElement = document.getElementById(targetElementId);

    if (targetElement) {
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        const targetOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const adjustedScroll = targetOffset - navbarHeight;

        window.scrollTo({
            top: adjustedScroll,
            behavior: 'smooth'
        });
    }
}
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

const gallery = document.querySelector(".gallery");
const leftButton = document.querySelector(".arrow-button.left");
const rightButton = document.querySelector(".arrow-button.right");
let index = 0;
if(gallery){
const totalImages = gallery.children.length;

const imageWidthPercentage = 100;
const maxTranslate = -1100; 

leftButton.addEventListener("click", () => {
  index = index > 0 ? index - 1 : totalImages - 1;
  updateGalleryTransform();
});

rightButton.addEventListener("click", () => {
  index = index < totalImages - 1 ? index + 1 : 0;
  updateGalleryTransform();
});

function updateGalleryTransform() {
  const translateValue = -index * imageWidthPercentage;

  
  const limitedTranslate = translateValue <= maxTranslate ? 0 : translateValue;

  console.log(`Index: ${index}, Limited Translate Value: ${limitedTranslate}%`);
  gallery.style.transform = `translateX(${limitedTranslate}%)`;
}}


function checkLogin() {
    
    var userEmail = document.getElementById('login-email').value;
    var userPassword = document.getElementById('login-pass').value;

    
    var storedEmail = localStorage.getItem(userEmail);

    
    if (storedEmail && storedEmail === userPassword) {
        localStorage.setItem('isUserSignedIn', 'true');
        localStorage.setItem('currentUserEmail',userEmail)
        window.location.href = '../index.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;
    if (currentPage.includes('signIn.html')) {
        
        const logInForm = document.querySelector('.login__form');
        const logInButton = logInForm.querySelector('.login__button');
      
        logInButton.addEventListener('click', function (event) {
          event.preventDefault();
            checkLogin();        
        });
    }
    const signInButton = document.getElementById('signIn-button');
    const profileButton = document.getElementById('profile-button');
    if(signInButton){    
        const isUserSignedIn = localStorage.getItem('isUserSignedIn') === 'true';
    if (isUserSignedIn) {
        signInButton.style.display = 'none';
        profileButton.style.display = 'flex';
    } else {
        signInButton.style.display = 'flex';
        profileButton.style.display = 'none';
    }
}
});
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname;
    if (currentPage.includes('signUp.html')) {
        
        const signUpForm = document.querySelector('.signUp__form');
        const signUpButton = signUpForm.querySelector('.signUp__button');
      
        signUpButton.addEventListener('click', function (event) {
          event.preventDefault();
            saveData();        
        });
    }
});

function saveData() {
    var userEmail = document.getElementById('signUp-email').value;
    var userPassword = document.getElementById('signUp-pass').value;
    var userPasswordConfirm = document.getElementById('signUp-pass-confirm').value;

    if (userPassword !== userPasswordConfirm) {
        alert("Passwords do not match");
        return ;
      }else{
        localStorage.setItem('isUserSignedIn', 'true');
        localStorage.setItem('currentUserEmail',userEmail);
        localStorage.setItem(userEmail, userPassword);
        window.location.href = '../index.html';
      }
}


document.getElementById("profile-button").addEventListener("click", function() {
    const displayStyle= document.getElementById("myDropdown").style.display;
    if(displayStyle==="block"){
        document.getElementById("myDropdown").style.display = "none";
    }else{
    document.getElementById("myDropdown").style.display = "block";
}});


document.getElementById("log-out").addEventListener("click", function() {
    localStorage.setItem('isUserSignedIn', 'false');
    localStorage.removeItem('currentUserEmail');
    location.reload();
}
);

document.getElementById("delete-account").addEventListener("click", function() {

   if(confirm('Are you sure you want to delete your account permamently')==true){
    localStorage.setItem('isUserSignedIn', 'false');
    const currentUserEmail = localStorage.getItem('currentUserEmail');
    localStorage.removeItem(currentUserEmail);
    localStorage.removeItem('currentUserEmail');
    location.reload();
    }else{

    }
}
);