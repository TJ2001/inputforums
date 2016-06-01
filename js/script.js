// $("form#info").submit(function(event) {
//   var name = $("#name").val();
// event.preventDefault();
// })
//
// // favorite food
// var food = $("#food").val();
//
// // favorite music
// var music = $("music").val();
//
// // Color Picker
// var color = $("#color").val();
//
// // birthday
// var dob = $("#born").val();

$(document).ready(function() {
	$("form#info").submit(function(event) {
  	  event.preventDefault();
      console.log("hey");
  		var namer = $("#name").val();
  		var dob = $("#born").val();
  		var food = $("#food").val();
      var music = $("#").val();
      var color = $("#color").val();
      $("#nameout").text(namer);
      $("#bornout").text(dob);
      $("#foodout").text(food);
      $("#emailout").text(music);
      $("#colorout").text(color);
    });
  });
      	// $("form#info").submit(function(event) {
        // 	  event.preventDefault();
        //     console.log("hey");
        // 		var namer = $("#name").val();
