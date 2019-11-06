
    
var input = $("#form-column");
        
input.on("submit", function(event){
    
    event.preventDefault();
    var inputVal = $("#ingredients-input").val();
    console.log(inputVal);
});