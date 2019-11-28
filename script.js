//init chips function from materializeCSS
$("#ingredients").chips();

//div grabbers
const form = $("#form-column");
const input = $("#ingredients-input");
const chipsColumn = $("#chips-column");
const clearItemsBtn = $("#clear-items-btn")
const mainResultsContainer = $("#main-results-container");
const recipeView = $("#recipe-view");

//init ingredients array for chips data to input into ajax call 
let ingredientsArray = [];

//localStorage 
let searchedArrays = [];
let storedSearch = localStorage.getItem("searchedArrays");
if (storedSearch !== null) {
    searchedArrays = JSON.parse(storedSearch)
} console.log(searchedArrays);

//button to submit chip array for results
form.on("submit", function (e) {
    //prevent form submit default
    e.preventDefault();
    //clear recipe results container
    recipeView.empty();
    //compile chips into array function
    getChipsArray();
    //set local storage from chips array
    localStorage.setItem("searchedArrays", JSON.stringify(searchedArrays));

    //AJAX Call to Spoonacular including recipe print functionality
    getSpoonacularData(ingredientsArray.join(","), 5, function (response) {

        generateResultsContainer();

        scrollToResults();

        //loop that prints recipe results from response object
        response.forEach(function (recipe) {

            refreshResultsArray();

            //create dynamic url for recipe link
            const base = "https://spoonacular.com/recipes/";
            var url = `${base}${title}-${recipe.id}`;

            //create content for printed results
            let pOne = $("<p id='recipeHeader'>").text(recipe.title).attr("data-id", recipe.id);
            var title = encodeURI(recipe.title.replace("%20", "-"));
            
            //turn image into link
            var link = $("<a target = '_blank'>").attr("href", url)
            var img = $("<img>");
            //set image attributes for source from api
            img.attr({ src: recipe.image, });
            //add image width class to contain inside container
            img.addClass("image-width");
            //apend img variable to link variable
            link.append(img);

            //create card div
            var resultsCardDiv = $("<div class='card results-card'>");
            //print content to results card
            resultsCardDiv.append(pOne, link);
            //prepare to append final results to page
            recipeView.prepend(resultsCardDiv);
        });

    });

});

// *********FUNCTIONS**********

//return results from API
function getSpoonacularData(searchItem, number, callBack) {

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=${number}&ranking=1&ignorePantry=false&ingredients=${searchItem}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "1ef656e72fmshe5f4267e958ab0fp1174eejsndba562eb441a"
        }

    }).then(function (response) {

        callBack(response)

    })

};

function getChipsArray() {
    //init chips instance at form
    var chipInstance = M.Chips.getInstance($("#ingredients"));
    // get the data from the chip object
    var ingredientsData = chipInstance.chipsData;
    // create a new blank array
    ingredientsArray = [];
    // loop over our data object and create our array of ingredients
    ingredientsData.forEach(function (ingredient) {
        ingredientsArray.push(ingredient.tag);
    });

    //local storage array of arrays push
    searchedArrays.push(ingredientsArray);
    console.log(searchedArrays);
};

function generateResultsContainer() {
    mainResultsContainer.removeClass("displayNone");
    clearItemsBtn.removeClass("displayNone");
    resultH3 = $("#result-h3");
    resultH3.text("Your Recipes:");
};

function scrollToResults() {
    $('html, body').animate({
        scrollTop: $("#main-results-container").offset().top
    }, 1000);
};

function refreshResultsArray() {
    var resultsArray = $('recipe-view');
    resultsArray.empty();
};


// *********UI BUTTONS**********

//scroll to top button
var scrollTop = $("#scrollTop");
scrollTop.on("click", function () { $('html, body').scrollTop(0); });

//clear all items btn event
clearItemsBtn.on("click", function () {
    window.location.reload(true);
});



// function to rerender searchedArrays and print call function every time I search
//results in multiple tabs
