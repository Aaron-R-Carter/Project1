//init materializecss components
$(document).ready(() => {
    $("#ingredients").chips();
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
    $('.tap-target').tapTarget();

});

//div element grabbers
const form = $("#form-column");
const input = $("#ingredients-input");
const chipsColumn = $("#chips-column");
const clearItemsBtn = $("#clear-items-btn")
const mainResultsContainer = $("#main-results-container");
const recipeView = $("#recipe-view");
const progressBarDiv = $("#progress-bar");
const fixedBtn = $("#fixed-button");


//init ingredients array for chips data to input into ajax call 
let ingredientsArray = [];

//localStorage 
let searchedArrays = [];
let storedSearch = localStorage.getItem("searchedArrays");
if (storedSearch !== null) {
    searchedArrays = JSON.parse(storedSearch)
}

//button to submit chip array for results
form.on("submit", (e) => {
    //prevent form submit default
    e.preventDefault();
    //clear recipe results container
    recipeView.empty();
    //compile chips into array function
    getChipsArray();
    //engage progress bar
    progressBar();
    //set local storage from chips array
    localStorage.setItem("searchedArrays", JSON.stringify(searchedArrays));

    //AJAX Call to Spoonacular including recipe print functionality
    getSpoonacularData(ingredientsArray.join(","), 50, (response) => {

        generateResultsContainer();

        scrollToResults();

        //loop that prints recipe results from response object
        response.forEach((recipe) => {

            refreshResultsArray();

            //create dynamic url for recipe link
            const base = "https://spoonacular.com/recipes/";
            var url = `${base}${title}-${recipe.id}`;

            //create content for printed results
            let pOne = $("<p id='recipeHeader'>").text(recipe.title).attr("data-id", recipe.id);
            var title = encodeURI(recipe.title.replace("%20", "-"));

            //turn image into link
            var link = $("<a>").attr("href", url)
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
            // kill progress bar
            progressBarDiv.addClass("displayNone");

        });

    });

});

// *********FUNCTIONS**********

//return results from API
const getSpoonacularData = function (searchItem, number, callBack) {

    $.ajax({
        "async": true,
        "crossDomain": true,
        "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=${number}&ranking=1&ignorePantry=false&ingredients=${searchItem}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "1ef656e72fmshe5f4267e958ab0fp1174eejsndba562eb441a"
        }

    }).then((response) => {

        callBack(response)
        // console.log(response);
    })

};


const getChipsArray = function () {
    //init chips instance at form
    var chipInstance = M.Chips.getInstance($("#ingredients"));
    // get the data from the chip object
    var ingredientsData = chipInstance.chipsData;
    // create a new blank array
    ingredientsArray = [];
    // loop over our data object and create our array of ingredients
    ingredientsData.forEach((ingredient) => {
        ingredientsArray.push(ingredient.tag);
    });

    //local storage array of arrays push
    searchedArrays.push(ingredientsArray);
    // console.log(searchedArrays);
};

const generateResultsContainer = function () {
    mainResultsContainer.removeClass("displayNone");
    clearItemsBtn.removeClass("displayNone");
    resultH3 = $("#result-h3");
    resultH3.text("Your Recipes:");
    fixedBtn.removeClass("displayNone");
    const loginWarn = $("#login-warn");
    loginWarn.addClass("displayNone");
};

const scrollToResults = function () {
    $('html, body').animate({
        scrollTop: $("#main-results-container").offset().top
    }, 1000);
};

const refreshResultsArray = function () {
    var resultsArray = $('recipe-view');
    resultsArray.empty();
};

const progressBar = function () {
    if (recipeView.is(':empty')) {
        progressBarDiv.removeClass("displayNone")
    }
};



// *********UI BUTTONS**********

const scrollTop = $("#scrollTop");
const floatingScroll = $("#floating-scroll");
const refreshBtn = $("#refresh-btn");

//scroll to top
scrollTop.on("click", () => {
    $('html, body').scrollTop(0);
});

floatingScroll.on("click", () => {
    $('html, body').scrollTop(0);
});

//clear all items btn event
clearItemsBtn.on("click", () => {
    window.location.reload(true);
    localStorage.clear();

});

//refresh btn floating
refreshBtn.on("click", () => {
    window.location.reload(true);
    localStorage.clear();

});




// function to rerender searchedArrays and print call function every time I search
//results in multiple tabs
