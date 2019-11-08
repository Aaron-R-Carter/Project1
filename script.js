var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var clearItemsBtn = $("#clear-items-btn")
var mainResultsContainer = $("#main-results-container");
var recipeView = $("#recipe-view");
var ingredientsArray = [];

// clear all items btn event
clearItemsBtn.on("click", function () {
    window.location.reload(true);
});

// button to submit chip array for results
form.on("submit", function (e) {
    e.preventDefault();

    //init chips instance at form
    var chipInstance = M.Chips.getInstance($("#ingredients"));
    // console.log(chipInstance);
    // get the data from the chip object
    var ingredientsData = chipInstance.chipsData;
    // console.log(ingredientsData);
    // create a new blank array
    ingredientsArray = [];
    // loop over our data object and create our array of ingredients
    ingredientsData.forEach(function (ingredient) {
        ingredientsArray.push(ingredient.tag);
    });
    // console.log(ingredientsArray);

    getSpoonacularData(ingredientsArray.join(","), 10, function (response) {
        // console.log(response)

        mainResultsContainer.removeClass("displayNone");

        // print dynamic results header
        var resultH3 = $("#result-h3");
        resultH3.text("Your Recipes:");

        // for each loop that gets results from array
        response.forEach(function (recipe) {
            var pOne = $("<p>").text(recipe.title).attr("data-id", recipe.id)
            var base = "https://spoonacular.com/recipes/";
            var title = encodeURI(recipe.title.replace("%20", "-"))

            //remove recipe array upon re-pressing search
            var resultsArray = $('recipe-view');
            while (resultsArray.firstChild) {
                resultsArray.removeChild(resultsArray.firstChild)
            };

            //create dynamic url for recipe link
            var url = `${base}${title}-${recipe.id}`;

            //turn image into link
            var link = $("<a target = '_blank'>").attr("href", url)

            //create img
            var img = $("<img>");

            //set image sttributes for source from api
            img.attr({
                src: recipe.image,
            });

            //add image width class to contain inside container
            img.addClass("image-width");

            //apend img variable to link variable
            link.append(img);

            var resultsCardDiv = $("<div class='card'>");
           

            resultsCardDiv.append(pOne, link);

            // prepare to append final results to page
            recipeView.append(resultsCardDiv);
        })

        // append final results to page
        // recipeView.append(recipeDiv);


    })

    scrollToResults();
})

// init chips function, materialize
$("#ingredients").chips();


// createunction to return results from API
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

function scrollToResults () {
    form.on('submit', "#main-results-container", function () {
        $('html, body').animate({
          scrollTop: $("#main-results-container").offset().top
        }, 2000);
      });
  };


//scroll to top button

var scrollTop = $("#scrollTop");

// scrollTop.on("click", function(){
//     var pageBody = $("body").first();
//     pageBody.scrollTop());
// };

// var p = $( "p" ).first();
// $( "p" ).last().text( "scrollTop:" + p.scrollTop() );







