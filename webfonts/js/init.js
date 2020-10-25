
const CATEGORIES_URL = "https://japdevdep.github.io/ecommerce-api/category/all.json";
const PUBLISH_PRODUCT_URL = "https://japdevdep.github.io/ecommerce-api/product/publish.json";
const CATEGORY_INFO_URL = "https://japdevdep.github.io/ecommerce-api/category/1234.json";
const PRODUCTS_URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
const PRODUCT_INFO_URL = "https://japdevdep.github.io/ecommerce-api/product/5678.json";
const PRODUCT_INFO_COMMENTS_URL = "https://japdevdep.github.io/ecommerce-api/product/5678-comments.json";
const CART_INFO_URL = "https://japdevdep.github.io/ecommerce-api/cart/987.json";
const CART_BUY_URL = "https://japdevdep.github.io/ecommerce-api/cart/buy.json";



var showSpinner = function(){
 showSpinner();
  document.getElementById("spinner-wrapper").style.display = "block";
  }

var hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}



var showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}
  
var getJSONData = function(PRODUCTS_URL){
    var result = {};
    return fetch(PRODUCTS_URL) 
    .then(response => {
      if (response.ok) {
        
        return response.json();
        
      }else{
        throw Error(response.statusText);
      }
      
    })
   
    
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          return result;
          
    })
    .catch(function(error) {
        result.status = 'error';
        result.data= error;
        return result;
    });
}