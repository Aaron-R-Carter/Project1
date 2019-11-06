var container = $(".container");
var div1 = $(".col s12");
var formCol = $(".form-column");
var inputDiv = $(".input-field col s12");
var inputField = $(".autocomplete");
var autoCompInput = $("#autocomplete-input");

$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
  });
        