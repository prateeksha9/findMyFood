
// render all the details on the webpage
function returnDishesOnly(DishArray){
    DishArray.forEach(element => {
        console.log(element.strMeal);
        const html = 
        `<div id = "containerDishOnly">
            <div id="left">
                <!-- contains image -->
                <img src = "${element.strMealThumb}" alt="${element.strMeal} Pic" id="dishOnlyImage"/>
                
            </div>
            <div id="right">
                <div id = "dish-name">
                    <h2 id="dishHeadOnly">${element.strMeal}</h2>
                </div>
                <div id="instructions">
                <span><h3>Cuisine:${element.strArea}</h3></span></br>
                    ${element.strInstructions}
                </div>
            </div>
        </div>`
        
        displayDishesOnly.innerHTML += html
        
    });
}


// fetch the details of specific dish from the api
function fetchDishSpecific(e){
    // e.preventDefault();
    console.log("called to dish")
    // let dish = document.getElementById('search_dish').value;
    // get the name of the dish from local storage
    let dish  =  window.localStorage.getItem('dishOnly');
    console.log(dish)
       
        const url = `www.themealdb.com/api/json/v1/1/lookup.php?i=${dish}`
        console.log(url)
    $.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${dish}`,function(data){
        var dish=data.meals;
        if(dish === null){
            console.log("Dish not found")
        } else{
            returnDishesOnly(dish);
            // console.log(`${dish.strMeal}`)
        }
        
    })
    
}


// call fetchDishSpecific() as soon as the window is loaded
window.onload = fetchDishSpecific();