var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var ingredientsArray = [];


form.on("submit", function (e) {
    e.preventDefault();

    var ingredients = $("#ingredients");
    // var ingredientDivArr = ingredients[0].M_Chips["$chips"];
    // console.log(ingredientDivArr);
    // var searchIngredients = [];
    // for (var i = 0; i < ingredientDivArr.length; i++) {
    //     var thisIngredient = ingredientDivArr[i];
    //     searchIngredients.push($(thisIngredient).text().replace("close", ""))
    // }
    var chipInstance = M.Chips.getInstance($("#ingredients"));
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
    getSpoonacularData(searchIngredients.join("&"), 10, function (response) {
        console.log(response)

        var recipeDiv = $("<div>");

        response.forEach(function (recipe) {
            var pOne = $("<p>").text("recipe: " + recipe.title).attr("data-id", recipe.id)
            var pTwo = $("<p>").text("recipeId: " + recipe.id);
            

            var img = $("<img>").attr({
                src: recipe.image,
                alt: "food"
                
            })
            recipeDiv.append(pOne, pTwo, img);
        })

        $("#recipe-view").append(recipeDiv);
    })
})


function renderIngredients() {
    var ul = $("<ul>");
    ingredientsArray.forEach(function (ingredient) {
        ul.append($("<li>").text(ingredient));
    });
    $("#result").append(ul);
}
$("#ingredients").chips();



function getSpoonacularData(searchItem, number, callBack) {

    $.ajax({
        // method: "GET",
        // url: `https://api.spoonacular.com/recipes/search?query=${searchItem}&number=${number}&apiKey=bd181a4abdb64fba83f1add04302f39c`,
        // {
        "async": true,
        "crossDomain": true,
        "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=${number}&ranking=1&ignorePantry=false&ingredients=${searchItem}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            "x-rapidapi-key": "1ef656e72fmshe5f4267e958ab0fp1174eejsndba562eb441a"
        }
        // }
    }).then(function (response) {

        callBack(response)







    })
};


