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




// var form = $("#form-column");
// var input = $("#ingredients-input");
// var chipsColumn = $("#chips-column");
// var ingredientsArray= [];
// // var ingredientsString = ingredientsArray.join();


// form.on("submit", function(event){
//    event.preventDefault();
//    var inputVal = input.val();
//    // console.log(inputVal);
//    ingredientsArray.push(inputVal);
//    console.log(ingredientsArray);
//    // console.log(ingredientsString);
//    renderChips();
//    input.val("");
// });
// function renderChips(){
//    //create html element;
//    var chipsColumn = $("#chips-column");
//    var div = $("<div>");
//    var p = $("<p>").text(input.val());
//    div.append(p);
//    chipsColumn.append(div);

  
// }

// var form = $("#form-column");
// var input = $("#ingredients-input");
// var chipsColumn = $("#chips-column");
// var ingredientsArray = [];
// form.on("submit", function(event){
//    event.preventDefault();
//    // get the Materialize object
//    var chipInstance = M.Chips.getInstance($("#ingredients"));
//    // get the data from the chip object
//    var ingredientsData = chipInstance.chipsData;
//    // create a new blank array
//    ingredientsArray = [];
//    // loop over our data object and create our array of ingredients
//    ingredientsData.forEach(function(ingredient){
//        ingredientsArray.push(ingredient.tag);
//    });
//    console.log(ingredientsArray);
//    renderIngredients(ingredientsArray);
// });
// function renderIngredients() {
//    var ul = $("<ul>");
//    ingredientsArray.forEach(function(ingredient){
//        ul.append($("<li>").text(ingredient));
//    });
//    $("body").append(ul);
// }
// $("#ingredients").chips();
// // var ingredientsString = ingredientsArray.join("&")

// Aaron C 12:22 PM
// var form = $("#form-column");
// var input = $("#ingredients-input");
// var chipsColumn = $("#chips-column");
// var ingredientsArray= [];
// form.on("submit", function(event){
//    event.preventDefault();
//    var inputVal = input.val();
//    console.log(inputVal);
//    ingredientsArray.push(inputVal);
//    console.log(ingredientsArray);
//    input.val("");
// });
// function renderChips(){
//    //create html element
// }

// Aaron C 12:46 PM
// function renderChips(){
//    // loop through elements to re-render array each time
//    // create html element
//    // clear array
// Zip 
// materialize_sandbox.zip
// 6 kB Zip — Click to download


// Sophie Leigh 1:28 PM
// function renderChips(){
//    //create html element;
//    var chipsColumn = $("#chips-column");
//    var div = $("<div>");
//    var p = $("<p>").text(input.val());
//    div.append(p);
//    chipsColumn.append(div);
// }
// Sophie Leigh 1:52 PM
// https://zoom.us/j/447383371?pwd=Y3AwQUhFbDVqYVlwczVMY2FlNWpYQT09

// Zoom VideoZoom Video
// Join our Cloud HD Video Meeting now
// Zoom is the leader in modern enterprise video communications, with an easy, reliable cloud platform for video and audio conferencing, chat, and webinars across mobile, desktop, and room systems. Zoom Rooms is the original software-based conference room solution used around the world in board, conference, huddle, and training rooms, as well as executive offices and classrooms. Founded in 2011, Zoom helps businesses and organizations bring their teams together in a frictionless environment to get more done. Zoom is a publicly traded company headquartered in San Jose, CA.(13 kB)
// https://d24cgw3uvb9a9h.cloudfront.net/static/93744/image/thumb.png
// Aaron C 6:03 PM
// the branch was never merged
// in the pull request, can you merge it @Andrew Richard ?
// Andrew Richard 7:39 PM
// should be merge now
// Aaron C 7:39 PM
// Awesome thanks!
// Aaron C 5:59 PM
// Hey guys if anyone wants to cancel I’m fine with that. Let me know if you’re for it
// Chris Walters 6:01 PM
// I am still working on my homework .  I can join the call but I have not worked on traversing the dom to get the recipe info yet.. i will be working all night on my computer but if you need me to join i am more than happy to i just dont know how much i will be able to add
// :+1:
// 1

// Aaron C 6:15 PM
// something broke in my version after David did that chip form, i'm not sure what it is but i cant type in the form anymore
// it looks like it's having trouble loading part of it it's super weird i have no clue
// Sophie Leigh 6:17 PM
// I'll be on my computer the whole night as well, if i can I can be of help.  i haven't been of much help, but I can see how challenging team collaboration is.  with my level of understanding,at this point, it's hard for me to contribute.  But I will help anyway I can...
// Aaron, can you slack me the code Dave gave you?
// Aaron C 6:18 PM
// <!DOCTYPE html>
// <html>
// <head>
//    <!--Import Google Icon Font-->
//    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
//    <!--Import materialize.css-->
//    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
//    <link rel="stylesheet" href="./style.css">
//    <!--Let browser know website is optimized for mobile-->
//    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
// </head>
// <body>
//    <div class="container" id="main-forms-container">
//        <div class="chips" id="ingredients">
//        </div>
//        <div class="row" id="form-row">
//            <form class="col s12" id="form-column">˜
//                <button class="btn waves-effect waves-light" type="submit" name="action">Submit
//                    <i class="material-icons right">send</i>
//                </button>
//            </form>
//        </div>
//        <div class="row" id="chips-row">
//            <div class="col s12" id="chips-column">
//            </div>
//        </div>
//        <div class="row" id="submit-row">
//            <div class="col s12" id="submit-column">
//            </div>
//        </div>
//    </div>
//    <div id="main-container" class="container">
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
//    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
//        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
//    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
//    <script src="./script.js"></script>
// </body>
// </html>