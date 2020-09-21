//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
var category = {}

function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("imagenGaleria").innerHTML = htmlContentToAppend;
    }
}
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            
            let categoryDescriptionHTML = document.getElementById("categoryDescription");
            let productCountHTML = document.getElementById("productCount");
            let productCriteriaHTML = document.getElementById("productCriteria");
        
           
            categoryDescriptionHTML.innerHTML = category.description;
            productCountHTML.innerHTML = category.soldCount;
            productCriteriaHTML.innerHTML = category.category;

            //Muestro las imagenes en forma de galería
            showImagesGallery(category.images);
        }
    });
});

<<<<<<< HEAD
=======
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

            let categoryNameHTML  = document.getElementById("productScore");
            let categoryDescriptionHTML = document.getElementById("productDescripcion");
            let productCountHTML = document.getElementById("productUser");
            let productCriteriaHTML = document.getElementById("productDatetime");
        
            
            categoryDescriptionHTML.innerHTML = category[0].user;
            productCountHTML.innerHTML = category[0].description;
            productCriteriaHTML.innerHTML = category[0].dateTime;

            
        }
    });
});

>>>>>>> 22969d9ad8b881e41db9a315c0cb64ac666f5afd
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

<<<<<<< HEAD
            let categoryNameHTML  = document.getElementById("productScore");
            let categoryDescriptionHTML = document.getElementById("productDescripcion");
            let productCountHTML = document.getElementById("productUser");
            let productCriteriaHTML = document.getElementById("productDatetime");
        
            
            categoryDescriptionHTML.innerHTML = category[0].user;
            productCountHTML.innerHTML = category[0].description;
            productCriteriaHTML.innerHTML = category[0].dateTime;

            
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

=======
>>>>>>> 22969d9ad8b881e41db9a315c0cb64ac666f5afd
           
            let categoryDescriptionHTML = document.getElementById("productDescripcion1");
            let productCountHTML = document.getElementById("productUser1");
            let productCriteriaHTML = document.getElementById("productDatetime1");
        
            
            categoryDescriptionHTML.innerHTML = category[1].user;
            productCountHTML.innerHTML = category[1].description;
            productCriteriaHTML.innerHTML = category[1].dateTime;

            
        }
    });
});

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

           
            let categoryDescriptionHTML = document.getElementById("productDescripcion2");
            let productCountHTML = document.getElementById("productUser2");
            let productCriteriaHTML = document.getElementById("productDatetime2");
        
            
            categoryDescriptionHTML.innerHTML = category[2].user;
            productCountHTML.innerHTML = category[2].description;
            productCriteriaHTML.innerHTML = category[2].dateTime;

            
        }
    });
});
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

           
            let categoryDescriptionHTML = document.getElementById("productDescripcion3");
            let productCountHTML = document.getElementById("productUser3");
            let productCriteriaHTML = document.getElementById("productDatetime3");
        
            
            categoryDescriptionHTML.innerHTML = category[3].user;
            productCountHTML.innerHTML = category[3].description;
            productCriteriaHTML.innerHTML = category[3].dateTime;
<<<<<<< HEAD
            
            
        }
    });
});
// 



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL ).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

           
            let categoryDescriptionHTML = document.getElementById("container-2");
            let productCountHTML = document.getElementById("container-3");
            let productCriteriaHTML = document.getElementById("productDatetime3");
        
            
            categoryDescriptionHTML.innerHTML = category[1].description;
            productCountHTML.innerHTML = '<img class="img-fluid img-thumbnail"src="'+ category[1].imgSrc+'">';
            productCriteriaHTML.innerHTML = category[3].dateTime;
            
            
        }
    });
});



document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL ).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            category = resultObj.data;

           
            let categoryDescriptionHTML = document.getElementById("container-4");
            let productCountHTML = document.getElementById("container-5");
           
        
            
            categoryDescriptionHTML.innerHTML = category[3].description;
            productCountHTML.innerHTML = '<img class="img-fluid img-thumbnail"src="'+ category[3].imgSrc+'">';
           
            
=======

>>>>>>> 22969d9ad8b881e41db9a315c0cb64ac666f5afd
            
        }
    });
});
<<<<<<< HEAD

=======
// 
>>>>>>> 22969d9ad8b881e41db9a315c0cb64ac666f5afd




window.onclick = function(e)
{   var id =  e.target.id;   
 if (id === 'sent')  
 { var txt = document.getElementById('example').value    
   $( "#para" ).empty().append( txt );
 }
}