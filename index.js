 
let form = document.getElementById('product-form');
let weatherInfo = document.getElementById('product-info');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let Product = document.getElementById('product').value;
    getinfo(Product);
});
async function getinfo(Product) {
    
    try {
    let response = await fetch(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${Product}`);
    let data = await response.json();
      console.log(data)

      for (let i=0;i<data.length;i++){
        product_Info.innerHTML+=`
    <div class="row">
        <div class="col-sm-md">
            <div class="card m-4" style="">
            <img src="${data[i].image_link}" class="card-img-top" alt="no_image"  >
            <div class="card-body">
                <h5 class="card-title ">PRODUCT NAME:${data[i].name}</h5>
            </div>
            <ul class="list-group list-group-flush ">
                <li class="list-group-item bg-info">BRAND:${data[i].brand}</li>
                <li class="list-group-item bg-primary">PRICE:${data[i].price}</li>
                <li class="list-group-item bg-warning">CATEGORY:${data[i].category}</li>
                <li class="list-group-item bg-light">DESCRIPTION:${data[i].description}</li>
                </ul>
            <a href="#" class="productlink">${data[i].product_link}></a>
            </div>
        </div>
     </div>
    `


}
 

}
catch (error) {
    console.error('error fetching the weather data');
}
}



 