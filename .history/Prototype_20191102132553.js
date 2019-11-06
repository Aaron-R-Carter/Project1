var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var ingredientsArray= [];
// var ingredientsString = ingredientsArray.join();


form.on("submit", function(event){
   event.preventDefault();
   var inputVal = input.val();
   // console.log(inputVal);
   ingredientsArray.push(inputVal);
   console.log(ingredientsArray);
   // console.log(ingredientsString);
   renderChips();
   input.val("");
});
function renderChips(){
   //create html element;
   var chipsColumn = $("#chips-column");
   chipsColumn.text(`<div><p>${input.val()}</p></div>`);

  
}