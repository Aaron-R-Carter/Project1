var container = $(".container");
var div1 = $(".col s12");
var formCol = $(".form-column");
var inputDiv = $(".input-field col s12");
var inputField = $(".autocomplete");
var ingredientInput = $("#ingredient-input");

function () {
    let queryURL = 

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

$("#ingredient-input").on("click", function (){
    console.log(ingredientInput)
}

$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
  });
        