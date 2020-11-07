//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
	getJSONData(CART_INFO_URL).then(function (resultObj) {
		if (resultObj.status === "ok") {
		  product = resultObj.data;
		  product = product.articles;
		  let htmlContentToAppend = "";
		  let sum = 0;
		  send();

		}
	  });

	});
	function send(){
	  var sent = document.getElementsByName('shipping');
	  let subtotal = document.getElementById("cart-subtotal").innerHTML;
	  for (var i = 0, length = sent.length; i < length; i++)
	  {
		  if (sent[i].checked)
		  {
		  
		  var envio = sent[i].value;
	  
		  break;
		  }
	  }
	  var total = subtotal * parseFloat('1.' + envio);
	  var priceSend = subtotal * parseFloat('0.' + envio);
	  document.getElementById('cart-total').innerHTML =+ total.toFixed(2);
	  document.getElementById('cart-shipping').innerHTML = priceSend.toFixed(2);
	}
	
var taxRate = 0.05;
var shippingRate = 0; 
var fadeTime = 300;



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

  var total = subtotal + tax;
  

  $('.totals-value').fadeOut(fadeTime, function() {
    $('#cart-subtotal').html(subtotal.toFixed(2));
    
    
    $('#cart-total').html(total.toFixed(2));
    if(total == 0){
      $('.checkout').fadeOut(fadeTime);
    }else{
      $('.checkout').fadeIn(fadeTime);
    }
	$('.totals-value').fadeIn(fadeTime);
	send()
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

const tarjeta = document.querySelector('#tarjeta'),
	  btnAbrirFormulario = document.querySelector('#btn-abrir-formulario'),
	  formulario = document.querySelector('#formulario-tarjeta'),
	  numeroTarjeta = document.querySelector('#tarjeta .numero'),
	  nombreTarjeta = document.querySelector('#tarjeta .nombre'),
	  logoMarca = document.querySelector('#logo-marca'),
	  firma = document.querySelector('#tarjeta .firma p'),
	  mesExpiracion = document.querySelector('#tarjeta .mes'),
	  yearExpiracion = document.querySelector('#tarjeta .year');
	  ccv = document.querySelector('#tarjeta .ccv');

// * Volteamos la tarjeta para mostrar el frente.
const mostrarFrente = () => {
	if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}
}

// * Rotacion de la tarjeta
tarjeta.addEventListener('click', () => {
	tarjeta.classList.toggle('active');
});

// * Boton de abrir formulario
btnAbrirFormulario.addEventListener('click', () => {
	btnAbrirFormulario.classList.toggle('active');
	formulario.classList.toggle('active');
});

// * Select del mes generado dinamicamente.
for(let i = 1; i <= 12; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectMes.appendChild(opcion);
}

// * Select del año generado dinamicamente.
const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

// * Input numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;

	if(valorInput == ''){
		numeroTarjeta.textContent = '#### #### #### ####';

		logoMarca.innerHTML = '';
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/visa.png';
		logoMarca.appendChild(imagen);
	} else if(valorInput[0] == 5){
		logoMarca.innerHTML = '';
		const imagen = document.createElement('img');
		imagen.src = 'img/logos/mastercard.png';
		logoMarca.appendChild(imagen);
	}

	// Volteamos la tarjeta para que el usuario vea el frente.
	mostrarFrente();
});

// * Input nombre de tarjeta
formulario.inputNombre.addEventListener('keyup', (e) => {
	let valorInput = e.target.value;

	formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
	nombreTarjeta.textContent = valorInput;
	firma.textContent = valorInput;

	if(valorInput == ''){
		nombreTarjeta.textContent = 'Jhon Doe';
	}

	mostrarFrente();
});

// * Select mes
formulario.selectMes.addEventListener('change', (e) => {
	mesExpiracion.textContent = e.target.value;
	mostrarFrente();
});

// * Select Año
formulario.selectYear.addEventListener('change', (e) => {
	yearExpiracion.textContent = e.target.value.slice(2);
	mostrarFrente();
});

// * CCV
formulario.inputCCV.addEventListener('keyup', () => {
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}

	formulario.inputCCV.value = formulario.inputCCV.value
	// Eliminar los espacios
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '');

	ccv.textContent = formulario.inputCCV.value;
});


//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.




	
(function() {
	'use strict';
	window.addEventListener('load', function() {
	  
	  var forms = document.getElementsByClassName('needs-validation');
	
	  var validation = Array.prototype.filter.call(forms, function(form) {
		form.addEventListener('submit', function(event) {
		  if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		  }
		  form.classList.add('was-validated');
		}, false);
	  });
	}, false);
  })();	


  