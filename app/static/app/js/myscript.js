$('#slider1, #slider2, #slider3').owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            autoplay: true,
        },
        600: {
            items: 3,
            nav: true,
            autoplay: true,
        },
        1000: {
            items: 5,
            nav: true,
            loop: true,
            autoplay: true,
        }
    }
})

$('.plus-cart').click(function() {
    // Get the value of the "pid" attribute and convert it to a string
    var id = $(this).attr("pid").toString();
    // Get the third child element of the parent node of the clicked element
    var eml = this.parentNode.children[2];
  
    // Send an AJAX GET request to the server with the prod_id parameter set to the ID value
    $.ajax({
      type: "GET",
      url: "/pluscart",
      data: { prod_id: id },
      // If the request is successful, update the text of the eml element and two other elements
      success: function(data) {
        eml.innerText = data.quantity;
        document.getElementById("amount").innerText = data.amount;
        document.getElementById("totalamount").innerText = data.totalamount;
      }
    });
})

$('.minus-cart').click(function() {
    // Get the value of the "pid" attribute and convert it to a string
    var id = $(this).attr("pid").toString();
    // Get the third child element of the parent node of the clicked element
    var eml = this.parentNode.children[2];
  
    // Send an AJAX GET request to the server with the prod_id parameter set to the ID value
    $.ajax({
      type: "GET",
      url: "/minuscart",
      data: { prod_id: id },
      // If the request is successful, update the text of the eml element and two other elements
      success: function(data) {
        eml.innerText = data.quantity;
        document.getElementById("amount").innerText = data.amount;
        document.getElementById("totalamount").innerText = data.totalamount;
      }
    });
})

$('.remove-cart').click(function() {
    // Get the value of the "pid" attribute and convert it to a string
    var id = $(this).attr("pid").toString();
    // Get the third child element of the parent node of the clicked element
    var eml = this
  
    // Send an AJAX GET request to the server with the prod_id parameter set to the ID value
    $.ajax({
      type: "GET",
      url: "/removecart",
      data: { prod_id: id },
      // If the request is successful, update the text of the eml element and two other elements
      success: function(data) {
      
        document.getElementById("amount").innerText = data.amount;
        document.getElementById("totalamount").innerText = data.totalamount;
        eml.parentNode.parentNode.parentNode.parentNode.remove()
      }
    });
})
$('.navToggle').on('click', function (e) {
  e.preventDefault();
  $('body').toggleClass('navToggleActive');
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 10) {
    $('body').addClass('fixedHeader');
  } else {
    $('body').removeClass('fixedHeader');
  }
});
window.addEventListener("scroll", function() {
  var headerCol = document.getElementById("navbar");
  if (window.scrollY > 0) {
    headerCol.classList.add("scrolled");
  } else {
    headerCol.classList.remove("scrolled");
  }
});

$(document).ready(function() {
  // Function to handle scroll event
  function handleScroll() {
    const scrollTop = $(window).scrollTop();
    const headerCol = $('.headerCol');

    // Add or remove 'scrolled' class based on scrolling position
    if (scrollTop > 0) {
      headerCol.addClass('scrolled');
    } else {
      headerCol.removeClass('scrolled');
    }
  }

  // Call the function on page load
  handleScroll();

  // Call the function on scroll
  $(window).scroll(handleScroll);
});



var swiper = new Swiper(".testimonialSwiper", {
  navigation: {
    nextEl: ".test-swiper-button-next",
    prevEl: ".test-swiper-button-prev",
  },
});


var swiper = new Swiper(".certificatesSlider", {
  slidesPerView: 1,
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".cert-swiper-button-next",
    prevEl: ".cert-swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
  },
});

