var form = $("#form-column");

form.on("submit", function(event){
   event.preventDefault();
   var input = $("#ingredients-input");
   var inputVal = input.val();
   console.log(inputVal);
});
    input.val("");
    
// {/* <div id="main-container" class="container">
//        <div id="results-header-row" class="row">
//            <div id="results-header-col" class="col s12 center-align ">
//                <h2>Results</h2>
//            </div>
//        </div>
//        <div id="results-recipe-row" class="row">
//            <div id="results-recipe-col" class="col s12 center-align z-depth-2">
//                <h2>Recipe</h2>
//                <img src="./images/food-pic.jpeg" alt="" class="responsive-img" alt="recipe-test">
//            </div>
//        </div>
//    </div>
// #main-container{
//    margin-top: 20px;
// }
// #results-recipe-col{
//    padding:20px;
// } */}