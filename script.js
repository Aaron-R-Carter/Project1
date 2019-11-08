var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var clearItemsBtn = $("#clear-items-btn")
var mainResultsContainer = $("#main-results-container");
var ingredientsArray = [];


// clear all items btn event
clearItemsBtn.on("click", function () {
    window.location.reload(true);
});


// button to submit chip array 
form.on("submit", function (e) {
    e.preventDefault();



    var chipInstance = M.Chips.getInstance($("#ingredients"));
    console.log(chipInstance);
    // get the data from the chip object
    var ingredientsData = chipInstance.chipsData;
    console.log(ingredientsData);
    // create a new blank array
    ingredientsArray = [];
    // loop over our data object and create our array of ingredients
    ingredientsData.forEach(function (ingredient) {
        ingredientsArray.push(ingredient.tag);
    });
    console.log(ingredientsArray);

    getSpoonacularData(ingredientsArray.join(","), 10, function (response) {
        console.log(response)

        mainResultsContainer.removeClass("displayNone");

        var recipeDiv = $("<div>");

        // print dynamic results header
        var resultH3 = $("#result-h3");
        resultH3.text("Your Recipes:");

        response.forEach(function (recipe) {
            var pOne = $("<p>").text(recipe.title).attr("data-id", recipe.id)
            var pTwo = $("<p>").text();
            var base = "https://spoonacular.com/recipes/";
            var title = encodeURI(recipe.title.replace("%20", "-"))
            var resultsArray = $('recipe-view');

            while (resultsArray.firstChild) {
                resultsArray.removeChild(resultsArray.firstChild)
            };

            console.log(title)
            var url = `${base}${title}-${recipe.id}`;
            console.log(url)

            var link = $("<a target = '_blank'>").attr("href", url)


            var img = $("<img>").attr({
                src: recipe.image,
                alt: "food"

            })

            link.append(img)

            recipeDiv.append(pOne, pTwo, link);
        })

        $("#recipe-view").append(recipeDiv);
    })

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


//scroll to top button

var scrollTop = $("#scrollTop");

// scrollTop.on("click", function(){
//     var pageBody = $("body").first();
//     pageBody.scrollTop());
// };

// var p = $( "p" ).first();
// $( "p" ).last().text( "scrollTop:" + p.scrollTop() );







