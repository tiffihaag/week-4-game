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

	//The Variables
	var playerPicked = 0;

	// Health for: leia: 120, ahsoka: 180, padme: 100, asajj: 150
	var healthPoints = [120, 180, 100, 150];

	var attackPower = [15, 30, 10, 20];

	// Counter Attack for: leia: 8, ahsoka: 25, padme: 5, asajj: 15
	var counterAttackPower = [8, 25, 5, 15];

	var defenderChosen = -1;

	var opponentChosen = -1;

	var defenderHealth = 0;

	var opponentHealth = 0;

	var numOfFights = 0;

	//The Buttons - Row 1
	$(".Option1").on("click", function() {
		if(playerPicked == 0){
			console.log ("I chose an Opponent.");
			console.log(this);
			console.log($(this).val());
			opponentChosen = $(this).val();
			opponentHealth = healthPoints[opponentChosen];
			console.log("health " + healthPoints[opponentChosen] + " counter: " + counterAttackPower[opponentChosen]);
			$(this).prependTo(".row3");
			$(this).addClass("Opponent");
			$(".row1").appendTo(".row2");
			playerPicked =1;
		}
		//The Buttons -Row 2
		else if(playerPicked == 1) {
			console.log ("I chose an Defender.");
			console.log(this);
			console.log($(this).val());
			defenderChosen = $(this).val();
			defenderHealth = healthPoints[defenderChosen];
			console.log("health " + healthPoints[defenderChosen] + " counter: " + counterAttackPower[defenderChosen]);
			$(this).appendTo("#defender");
			playerPicked = 3;
			$(".row2").hide();
		}
	});

	//The Attack 1
	$("#Attack").on("click", function() {
		if(defenderChosen >= 0 && opponentChosen >= 0){	
			if (defenderHealth > 0 && opponentHealth > 0) {
				defenderHealth = defenderHealth - attackPower[opponentChosen];
				opponentHealth = opponentHealth - counterAttackPower[defenderChosen];
				console.log("Defender health: " + defenderHealth);
				console.log("Opponent health: " + opponentHealth);
			}
			else if(defenderHealth <=0) {
				alert("You win!!! Defender lost.");
				attackPower[opponentChosen] = attackPower[opponentChosen] + 15;
				healthPoints[opponentChosen] = healthPoints[opponentChosen] + 40;
				$(".row2").show();
				defenderChosen = -1;
				numOfFights = numOfFights + 1;
				$("#defender").children().appendTo(".losersRow");
				playerPicked = 1;
			}
			else{
				alert("You lost.");
				opponentChosen = -1;
			}
		}
		else{
			if(numOfFights == attackPower.length - 1) {
				alert("Master the force, you have.")
			}
			else{
			alert("Choose another defender.");
			}
		}
	});

	$("#restartButton").on("click", function(){
	location.reload(); 
	});

}); //Document Ready Closing

		