//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

    
  
});

function guardar(users, pass){  

       
    localStorage.setItem("usuario", users.trim());
    localStorage.setItem("password", pass.trim()); 
    sessionStorage.setItem("usuario",users.trim());
  
    
   
   
    
    
   
    }
  

      function validate() {
                    var username = document.getElementById("users").value;
                    var password = document.getElementById("pass").value;
                    
                    alert('Ingresado con Exito');
                    
                } 


        var usuario = localStorage.getItem("usuario"); 
        var sesion = sessionStorage.getItem("usuario");
        document.getElementById('user').innerHTML= usuario;

        function deleteItems() {
         localStorage.clear();
                         }
        