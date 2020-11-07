//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
        var x = document.getElementById("users")
        if (x === " "){
            window.location.href = "login.html"
        }
   
});
function load_user(){
    var userdata = localStorage.getItem("userdata");
  if(typeof userdata === undefined || userdata === null){
    userdata = JSON.stringify({apellido:"",name:"",telefono:"",email:"",edad:""});
    localStorage.setItem("userdata",userdata);
  }
    return JSON.parse(userdata);
}

function save_user(apellido, name, telefono, email, edad){
    userdata = JSON.stringify({apellido:apellido,name:name,telefono:telefono,email:email,edad:edad});
    localStorage.setItem("userdata",userdata);
      return userdata;
}

document.getElementById('save').addEventListener("click",function(){
    save_user(
    document.getElementById('apellido').value,
    document.getElementById('name').value,
    document.getElementById('telefono').value,
    document.getElementById('email').value,
    document.getElementById('edad').value
    );
  userdata = load_user();
    document.getElementById('apellido_guardado').value = userdata.apellido;
    document.getElementById('nombre_guardado').value = userdata.name;
    document.getElementById('telefono_guardado').value = userdata.telefono;
    document.getElementById('email_guardado').value = userdata.email;
    document.getElementById('edad_guardado').value = userdata.edad;
});

userdata = load_user();
document.getElementById('apellido_guardado').value = userdata.apellido;
document.getElementById('nombre_guardado').value = userdata.name;
document.getElementById('telefono_guardado').value = userdata.telefono;
document.getElementById('email_guardado').value = userdata.email;
document.getElementById('edad_guardado').value = userdata.edad;