//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

var taxRate = 0.05;
var shippingRate = 15.00; 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});



function recalculateCart()
{
  var subtotal = 0;
  
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text());
  });
  
  var tax = subtotal * taxRate;
  var shipping = (subtotal > 0 ? shippingRate : 0);
  var total = subtotal + tax + shipping;
  

  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    $('#cart-tax').html(tax.toFixed(2));
    $('#cart-shipping').html(shipping.toFixed(2));
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
    $('.totals-value').fadeIn(fadeTime);
  });
}


function updateQuantity(quantityInput)
{
 
  var productRow = $(quantityInput).parent().parent();
  var price = parseFloat(productRow.children('.product-price').text());
  var quantity = $(quantityInput).val();
  var linePrice = price * quantity; 
    
 
  productRow.children('.product-line-price').each(function () {
    $(this).fadeOut(fadeTime, function() {
      $(this).text(linePrice.toFixed(2));
      recalculateCart();
      $(this).fadeIn(fadeTime);
    });
  });  
}



function removeItem(removeButton)
{

  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
    recalculateCart();
  });
}
});
var category = {}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

           
            let categoryDescriptionHTML = document.getElementById("cart-container1");
            let productCountHTML = document.getElementById("cart-container2");
            let productCriteriaHTML = document.getElementById("cart-price");
        
            
            categoryDescriptionHTML.innerHTML = category['articles'][0].name;
            productCountHTML.innerHTML = '<img class="img-fluid img-thumbnail"src="'+ category['articles'][0].src+'">';
            productCriteriaHTML.innerHTML = category['articles'][0].unitCost + category['articles'][0].currency;
            
            
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(CART_INFO_URL).then(function(resultObj){
      if (resultObj.status === "ok")
      {
          category = resultObj.data;

         
          let categoryDescriptionHTML = document.getElementById("cart-container4");
          let productCountHTML = document.getElementById("cart-container3");
          let productCriteriaHTML = document.getElementById("cart-price1");
      
          
          categoryDescriptionHTML.innerHTML = category['articles'][1].name;
          productCountHTML.innerHTML = '<img class="img-fluid img-thumbnail"src="'+ category['articles'][1].src+'">';
          productCriteriaHTML.innerHTML = category['articles'][1].unitCost + category['articles'][1].currency;
          
          
      }
  });
});