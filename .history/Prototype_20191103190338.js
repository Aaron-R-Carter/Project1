

var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var ingredientsArray = [];
form.on("submit", function(event){
   event.preventDefault();
   // get the Materialize object
   var chipInstance = M.Chips.getInstance($("#ingredients"));
   // get the data from the chip object
   var ingredientsData = chipInstance.chipsData;
   // create a new blank array
   ingredientsArray = [];
   // loop over our data object and create our array of ingredients
   ingredientsData.forEach(function(ingredient){
       ingredientsArray.push(ingredient.tag);
   });
   console.log(ingredientsArray);
   renderIngredients(ingredientsArray);
});
function renderIngredients() {
   var ul = $("<ul>");
   ingredientsArray.forEach(function(ingredient){
       ul.append($("<li>").text(ingredient));
   });
   $("body").append(ul);
}
$("#ingredients").chips();
var ingredientsString = ingredientsArray.join("&");