//The Theme Song
$(document).ready(function(){
	$(".themeButton1").hide();
	
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'assets/confrontation.mp3');
	// Theme Button
	$(".themeButton").on("click", function(){
		audioElement.play();
		$(".themeButton").hide();
		$(".themeButton1").show();
	});
	

	$(".themeButton1").on("click", function(){
		audioElement.pause();
		$(".themeButton1").hide();
		$(".themeButton").show();
	});
});
	
//The Variables
	var healthPoints = {
		leia: 120,
		ahsoka: 180,
		padme: 100,
		asajj: 150
	}

	var attackPower = [];

	var counterAttackPower = {
		leia: 8,
		ahsoka: 25,
		padme: 5,
		asajj: 15
	}
	
//The Buttons
$(".btnLeia").on("click", function(){
	console.log ("I clicked Leia");
	$(".imgAhsoka").appendTo("#row2");
	$(".imgPadme").appendTo("#row2");
	$(".imgAsajj").appendTo("#row2");
  });

$(".btnAhsoka").on("click", function(){
	console.log ("I clicked Ahsoka");
	$(".imgLeia").appendTo("#row2");
	$(".imgPadme").appendTo("#row2");
	$(".imgAsajj").appendTo("#row2");
  });

$(".btnPadme").on("click", function(){
	console.log ("I clicked Padme");
	$(".imgAhsoka").appendTo("#row2");
	$(".imgLeia").appendTo("#row2");
	$(".imgAsajj").appendTo("#row2");
  });

$(".btnAsajj").on("click", function(){
	console.log ("I clicked Asajj");
	$(".imgAhsoka").appendTo("#row2");
	$(".imgPadme").appendTo("#row2");
	$(".imgLeia").appendTo("#row2");
  });

