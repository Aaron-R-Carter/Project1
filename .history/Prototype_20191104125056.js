var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var ingredientsArray = [];

// form.on("submit", function(event){
//     event.preventDefault(); 
//     var chipInstance = M.Chips.getInstance($("#ingredients"));
//     var ingredientsData = chipInstance.chipsData;
//     ingredientsArray = [];
//     ingredientsData.forEach(function(ingredient){
//         ingredientsArray.push(ingredient.tag);
//     });
//     console.log(ingredientsArray);
//     renderIngredients(ingredientsArray);

// });

form.on("submit", function(e){
    e.preventDefault();

    var ingredients = $("#ingredients");
    var ingredientDivArr = ingredients[0].M_Chips["$chips"];
    var searchIngredients = [];
    for(var i = 0; i < ingredientDivArr.length; i++){
        var thisIngredient = ingredientDivArr[i];
        searchIngredients.push($(thisIngredient).text().replace("close", ""))
    }
    getSpoonacularData(searchIngredients.join("&"), 5, function(data) {
        console.log(data)
    })
})


function renderIngredients() {
    var ul = $("<ul>");
    ingredientsArray.forEach(function(ingredient){
        ul.append($("<li>").text(ingredient));
    });
    $("#result").append(ul);
}
$("#ingredients").chips();
// var ingredientsString = ingredientsArray.join("&");


function getSpoonacularData(searchItem, number, callBack){

    $.ajax({
        method: "GET",
        url: "https://api.spoonacular.com/recipes/search?query="+searchItem+"&number="+number+"&apiKey=bd181a4abdb64fba83f1add04302f39c",
       
    }).then(function(data){
        callBack(data.results)
    })

};