var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var ingredientsArray= [];
form.on("submit", function(event){
   event.preventDefault();
   var inputVal = input.val();
   console.log(inputVal);
   ingredientsArray.push(inputVal);
   console.log(ingredientsArray);
   input.val("");
});
function renderChips(){
   //create html element
}
