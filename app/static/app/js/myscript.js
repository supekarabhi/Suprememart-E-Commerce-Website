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