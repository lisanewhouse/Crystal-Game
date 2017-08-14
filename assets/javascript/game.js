$(document).ready(function() {

var counter = 0;
var win = 0;
var loss = 0;


function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var target = random(19, 120);
var amethyst = random(1,12);
var pearl = random(1,12);
var garnet = random(1,12);
var peridot = random(1,12);
$("#target").html(target);
$("#counter").html(counter);


var score = function(){
	$('#win').empty();
	$('#win').text("Wins: " + win);
	$('#loss').empty();
	$('#loss').text("Losses: " + loss);
	$('#counter').empty();
	$('#counter').text(counter);
}

function reset(){
	amethyst = random(1,12);
	pearl = random(1,12);
	garnet = random(1,12);
	peridot = random(1,12);
	target = random(19, 120);
	counter = 0;
	$("#target").html(target);
	$("#counter").html(counter);
};

// TRIED TO COMBINE CLICK FUNCTIONS
// $(document).on("click", ".gems", function(){
// 	counter += $(this.gems);
// 	$("#counter").text(counter);
// 	check();
// });

$("#pearl").on("click", function(){
	counter += pearl;
	$("#counter").text(counter);
	check();
});
$("#garnet").on("click", function(){
	counter += garnet;
	$("#counter").text(counter);
	check();
});
$("#amethyst").on("click", function(){
	counter += amethyst;
	$("#counter").text(counter);
	check();
});
$("#peridot").on("click", function(){
	counter += peridot;
	$("#counter").text(counter);
	check();
});

function check() {
	if (counter === target) {
		win++;
		alert("you won")
		score();
		reset();
	} else if (counter > target) {
		loss++;
		alert("you lost");
		score();
		reset();
	}
}; 


});