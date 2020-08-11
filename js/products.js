var categoriesArray = [];
showSpinner();
function showCategoriesList(array){

    let htmlContentToAppend = "";
    for(let i = 0; i < array.length; i++){
        let product = array[i];
        
        
        htmlContentToAppend += `
        <div class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    <img src="` + product.imgSrc + `" alt="` + product.description + ` " class="img-thumbnail">
                </div>
               
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1">`+ product.name +` </h4>
                       
                        <h6 class="text-muted">
                      
                        <br> Coste `+ product.cost +` `+ 'USD' +`
                        <br> Unidades Vendidas `+ product.soldCount + `
                        
                        </h6>
                        
                        </div>
                        <h6>` + product.description + `</h6>
                    
                    
                </div>
            </div>
        </div>
        
        `
       
       
        
       
        document.getElementById("container-1").innerHTML = htmlContentToAppend;
    }
}


 


    
document.getElementById("container-1").innerHTML = PRODUCTS_URL;

//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            categoriesArray = resultObj.data;
            //Muestro las categorías ordenadas
            showCategoriesList(categoriesArray);
        } hideSpinner();
    });
});

