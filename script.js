$(document).ready(function(){
  // create 6x6 grid
  for (var i = 0; i < 36 ; i++) {
    $(".container").append("<div class='square'></div>");
  }; // end create 6x6 grid

  // call to server on click
  $(".square").click(function(){
    var that = this;
    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/random/int",
      method : "GET",
      success : function (data) {
            if (!$(that).hasClass("green") && !$(that).hasClass("yellow")) {
                addColorAndNumber(data.response , that) // end if data.response <= 5
            }
          }, // end success function
      error : function (richiesta,stato,errori) {
          alert("E' avvenuto un errore. "+errore);
      }
    }); // end Ajax
  }); // end square click
}); // end DOM

// adds color to backgound according to successfully gotten number from server
function addColorAndNumber(x , y){
  if (x <= 5) {
    $(y).addClass("yellow");
    $(y).append("<div class='number'>" + x + "</div>");
  } else{
    $(y).addClass("green");
    $(y).append("<div class='number'>" + x + "</div>");
  }
}; // end addColorAndNumber
