var form = $("#form-column");

form.on("submit", function(event){
   event.preventDefault();
   var input = $("#ingredients-input");
   var inputVal = input.val();
   console.log(inputVal);
});
    
