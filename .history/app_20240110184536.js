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
// Function to apply filters based on price range, property type, and location
function applyFilters() {
    var minPrice = parseFloat(document.getElementById('min-price').value);
    var maxPrice = parseFloat(document.getElementById('max-price').value);
    var propertyType = document.getElementById('property-type').value;
    var city = document.getElementById('city').value;
  
    if (maxPrice > 100000000) {
      alert("Maximum price cannot exceed 100,000,000");
      return;
    }
  
    // Perform filtering logic based on the min and max price, property type, and selected city
    // Replace this with your actual filtering logic
    console.log("Minimum Price: " + minPrice);
    console.log("Maximum Price: " + maxPrice);
    console.log("Property Type: " + propertyType);
    console.log("City: " + city);
  
    // Display properties from the selected city
    switch (city) {
      case "Chicago":
        console.log("Properties in Chicago: 1400 W Monroe St, 757 S Kedvale Ave");
        break;
      case "New York":
        console.log("Properties in New York: 322 W 57th St, 111 Central Park N, 33 E 70th St");
        break;
      case "Seattle":
        console.log("Properties in Seattle: 12253 9th Ave NW");
        break;
      case "Los Angeles":
        console.log("Properties in Los Angeles: 6550 W 84th St, 3917 Mclaughlin Ave");
        break;
      case "Porter Ranch":
        console.log("Properties in Porter Ranch: 20352 Via Galileo");
        break;
      case "Las Vegas":
        console.log("Properties in Las Vegas: 4575 Dean Martin Dr, 10770 Maltese Falcon Ave, 19 Flying Cloud Ln, 2747 Paradise Rd");
        break;
      case "Miami":
        console.log("Properties in Miami: 2675 S Bayshore Dr, 900 Biscayne Blvd");
        break;
      case "San Francisco":
        console.log("Properties in San Francisco: 2266 9th Ave, 1515 Union St");
        break;
      default:
        console.log("No properties available for the selected city");
    }
  }