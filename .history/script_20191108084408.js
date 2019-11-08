var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var ingredientsArray = [];

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
    ingredientsData.forEach(function(ingredient){
        ingredientsArray.push(ingredient.tag);
    });
    console.log(ingredientsArray);

    getSpoonacularData(ingredientsArray.join(","), 10, function (response) {
        console.log(response)

        var recipeDiv = $("<div>");

        response.forEach(function (recipe) {
            var pOne = $("<p>").text("recipe: " + recipe.title)
            // var pTwo = $("<p>").text("recipeId: " + recipe.id);
            var base = "https://spoonacular.com/recipes/";
            var title = encodeURI(recipe.title.replace("%20", "-"))
            console.log(title)
            var url = `${base}${title}`;
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





        // -${recipe.id}

    })
};


