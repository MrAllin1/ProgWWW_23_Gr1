const menu= document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar_menu');

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

document.querySelectorAll('.navbar_link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

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
});
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('buyHouseBtn').addEventListener('click', function () {
        window.location.href = '/';
    });

    document.getElementById('rentHouseBtn').addEventListener('click', function () {
        window.location.href = '/';
    });

    document.getElementById('sellHouseBtn').addEventListener('click', function () {
        window.location.href = '/';
    });
});

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

function checkPasswordsMatch() {
    const password = document.getElementById('login-pass').value;
    const confirmPassword = document.getElementById('login-pass-confirm').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // Redirect to home page if passwords match
    // Replace 'home.html' with the desired URL for your home page
    window.location.href = 'home.html';
    return true;
}

document.querySelector('.login__form').addEventListener('submit', function (event) {
    if (!checkPasswordsMatch()) {
        event.preventDefault(); // Prevents the form from submitting if passwords don't match
    }
});

document.querySelectorAll('.view_button').forEach(button => {
    button.addEventListener('click', function () {
        const targetUrl = this.dataset.targetUrl;
        if (targetUrl) {
            window.location.href = targetUrl;
        }
    });
});

var priceSlider = document.getElementById("price-slider-input");
var priceInput = document.getElementById("price-input");

priceSlider.addEventListener("input", function() {
    priceInput.textContent = "$" + numberWithCommas(this.value);
});

// Set initial price value
priceInput.textContent = "$" + numberWithCommas(priceSlider.value);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}ring().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
