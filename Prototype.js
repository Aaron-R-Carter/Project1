var form = $("#form-column");

form.on("submit", function(event){
   event.preventDefault();
   var input = $("#ingredients-input");
   var inputVal = input.val();
   console.log(inputVal);
   displayRecipe(inputVal)
});

function displayRecipe(search) {


   var settings = {
       "async": true,
       "crossDomain": true,
       "url": `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients?number=10&ranking=1&ignorePantry=false&ingredients=${search}`,
       "method": "GET",
       "headers": {
           "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
           "x-rapidapi-key": "1ef656e72fmshe5f4267e958ab0fp1174eejsndba562eb441a"
       }
   }
   
   $.ajax(settings).done(function (response) {
       console.log(response);

    response.forEach(function(recipe){
        var base = "https://spoonacular.com/recipes/";
        var title = encodeURI(recipe.title.replace(" ","-"))
        console.log(title)

        var url = `${base}${title}-${recipe.id}`;
        console.log(url)



    })
   });





}
    
