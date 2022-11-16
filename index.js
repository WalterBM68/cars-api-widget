//For the cars
const carsTemplateText = document.querySelector('.carsTemplate');
const theCarsTemplate = Handlebars.compile(carsTemplateText.innerText);
//For the color
const colorTemplateText = document.querySelector('.colorsTemplate');
const theColorTemplate = Handlebars.compile(colorTemplateText.innerText);
//For the brand
const brandTemplateText = document.querySelector('.brandTemplate');
const theBrandTemplate = Handlebars.compile(brandTemplateText.innerText);
//Filter cars by brand
const filterByBrandTemplateText = document.querySelector('.filterByBrandTemplate');
const filterTemplate = Handlebars.compile(filterByBrandTemplateText.innerText);
//Filter cars by color
const filterByColorTemplateText = document.querySelector('.filterByColorTemplate');
const filterByColorTemplate = Handlebars.compile(filterByColorTemplateText.innerText);

//Element for cars
const carsElem = document.querySelector('.cars');
const filterCarsElem = document.querySelector('.filter');
//Element for color
const colorElem = document.querySelector('.colors');
//Element for brand
const brandElem = document.querySelector('.brand');
//Filtering Element
const theCarsElem = document.querySelector('.theCars');
// select cars Element
const selectCars = document.querySelector('.selectCars');
//filtering buttons
const filterBtn = document.querySelector('.filter');
//Filtering

filterBtn.addEventListener('click', function(){
    
    axios
    .get(`https://api-tutor.herokuapp.com/v1/cars/make/${selectCars.value}`)
    .then(result => {
        const theCarBrands = result.data;
        theCarsElem.innerHTML = filterTemplate({
            theCarBrands
        });
    });

    axios
    .get(`https://api-tutor.herokuapp.com/v1/cars/color/${selectCars.value}`)
    .then(result => {
        const theCarColor = result.data;
        theCarsElem.innerHTML = filterByColorTemplate({
            theCarColor
        });
    });    
    
});

axios
.get("https://api-tutor.herokuapp.com/v1/cars")
.then(result => {
    const cars = result.data;
    carsElem.innerHTML = theCarsTemplate({
        cars
    });
});

axios
.get("https://api-tutor.herokuapp.com/v1/colors") 
.then(result => {
    const color = result.data;
    colorElem.innerHTML = theColorTemplate({
        color
    });
});
    
axios
.get("https://api-tutor.herokuapp.com/v1/makes") 
.then(result => {
    const brand = result.data;
    brandElem.innerHTML = theBrandTemplate({
        brand
    });
});
