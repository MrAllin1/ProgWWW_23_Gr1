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
function filterByCity() {
    var selectedCity = document.getElementById('location').value;
    var propertyType = document.getElementById('property-type').value;
    var minPrice = parseFloat(document.getElementById('min-price').value);
    var maxPrice = parseFloat(document.getElementById('max-price').value);
  
    // Perform filtering logic based on the selected city and other criteria
    // Replace this with your actual filtering logic
    console.log("Selected City: " + selectedCity);
    console.log("Property Type: " + propertyType);
    console.log("Minimum Price: " + minPrice);
    console.log("Maximum Price: " + maxPrice);
  
    // Add logic to display filtered properties for the selected city
    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = "Search results for properties in " + selectedCity + " with criteria: " + propertyType + ", between $" + minPrice + " and $" + maxPrice;
    searchResults.style.display = "block";
  }
  
  function searchProperties() {
    var searchInput = document.getElementById('search-input').value;
    var minPrice = parseFloat(document.getElementById('min-price').value);
    var maxPrice = parseFloat(document.getElementById('max-price').value);
    var propertyType = document.getElementById('property-type').value;
    var location = document.getElementById('location').value;
  
    // Perform search logic based on the input values
    // Replace this with your actual search logic
    console.log("Search Input: " + searchInput);
    console.log("Minimum Price: " + minPrice);
    console.log("Maximum Price: " + maxPrice);
    console.log("Property Type: " + propertyType);
    console.log("Location: " + location);
      
    // Hide all property cards
    var allCards = document.querySelectorAll('.services_card');
    allCards.forEach(function(card) {
    card.style.display = "none";
  });

  // Show property cards for the selected city
  var selectedCityCards = document.querySelectorAll('.services_card.' + selectedCity);
  selectedCityCards.forEach(function(card) {
    card.style.display = "block";
  });
    // Display search results
    var searchResults = document.getElementById('search-results');
    searchResults.innerHTML = "Search results for: " + searchInput + ", " + propertyType + ", " + location + " between $" + minPrice + " and $" + maxPrice;
    searchResults.style.display = "block";
  }
  let currentIndex = 0;
  const photos = document.querySelector('.photos');
  const photoWidth = document.querySelector('.photo').clientWidth;

  function movePhotos(direction) {
    if (direction === 'next' && currentIndex < 2) {
      currentIndex++;
    } else if (direction === 'prev' && currentIndex > 0) {
      currentIndex--;
    }
    photos.style.transform = `translateX(-${photoWidth * currentIndex}px)`;
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
      movePhotos('next');
    } else if (event.key === 'ArrowLeft') {
      movePhotos('prev');
    }
  });
  