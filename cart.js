$(document).ready(function () {

  $("span.addToCart").on("click", function () {
    var id = $(this).attr("data-id");
	var prod = $(this).attr("data-prod");
	var prodreset = $(this).attr("data-prodreset");
	var quantity = document.getElementById("product_quantity").value;
	var varaction = "add";
	  if(prod == "try") {
		  varaction = "try";
	  }
    $.ajax({
        type: "GET",
        url: "/functions/ajax.php?id=" + id + "&action=" + varaction + "&qty=" + quantity,
      })
      .done(function () {
		if(quantity > 0){
        window.location.href = "/cart";
		   } 
      });
  });

  $("span.removeFromCart").on("click", function () {
    var id = $(this).attr("data-id");
    $.ajax({
        type: "GET",
        url: "/functions/ajax.php?id=" + id + "&action=remove"
      })
      .done(function () {
        location.reload();
      });
  });

  $("a.emptyCart").on("click", function () {
    $.ajax({
        type: "GET",
        url: "/functions/ajax.php?action=empty"
      })
      .done(function () {
        location.reload();
      });
  });
	
  $("span.updateCart").on("click", function () {
	  var id = $(this).attr("data-id");
    $.ajax({
        type: "GET",
        url: "/functions/ajax.php?action=update&" + $('#Cart :input').serialize(),
      })
      .done(function () {
		if(id == "checkoutCart") {
			window.location.href = "/checkout";
		} else {
        	location.reload();
		}
      });
  });
});
