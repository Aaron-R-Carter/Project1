var form = $("#form-column");
var input = $("#ingredients-input");
var chipsColumn = $("#chips-column");
var ingredientsArray= [];
// var ingredientsString = ingredientsArray.join();
var inputVal = input.val();

form.on("submit", function(event){
   event.preventDefault();
   
   // console.log(inputVal);
   ingredientsArray.push(inputVal);
   console.log(ingredientsArray);
   // console.log(ingredientsString);
   input.val("");
   renderChips();
});
function renderChips(){
   //create html element;
   var chipsColumn = $("#chips-Column");
   chipsColumn.text(`<div><p>${inputVal}</p></div>`);

  
}
