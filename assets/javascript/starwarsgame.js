var 







		// Javascript function that wraps everything
		$(document).ready(function(){
			// Gets Link for Theme Song
	        var audioElement = document.createElement('audio');
	        audioElement.setAttribute('src', 'Assets/captainplanet24.mp3');
			// Theme Button
			$(".themeButton").on("click", function(){
        		audioElement.play();

		var laughElement = document.createElement('audio');
	        laughElement.setAttribute('src', 'Assets/captainplanet24.mp3');
			// Theme Button
			$(".laughButton").on("click", function(){
        		laughElement.play();


			});
			$(".pauseButton").on("click", function(){
        		audioElement.pause();
			});
			// Size Buttons
			$(".normalButton").on("click", function(){
	    		$(".captainplanet").animate({height: '300px'});
			}); 
			$(".growButton").on("click", function(){
	    		$(".captainplanet").animate({height: '700px', width: '700px'});

			}); 
			$(".shrinkButton").on("click", function(){
	    		$(".captainplanet").animate({height: '100px'});
			}); 
			// Visibility Buttons
			$(".visButton").on("click", function(){
	    		$(".captainplanet").animate({opacity: '1'});
			});
			$(".invisButton").on("click", function(){
	    		$(".captainplanet").animate({opacity: '0.05'});
			});
			// Move Buttons
			$(".upButton").on("click", function(){
				$(".captainplanet").animate({top:"-=200px"}, "normal");
			});
			$(".downButton").on("click", function(){
				$(".captainplanet").animate({top:"+=200px"}, "normal");
			});
			$(".leftButton").on("click", function(){
				$(".captainplanet").animate({left:"-=200px"}, "normal");
			});
			$(".rightButton").on("click", function(){
				$(".captainplanet").animate({left:"+=200px"}, "normal");
			});
			$(".backButton").on("click", function(){
				$(".captainplanet").animate({top:"50px", left: "80px"}, "fast");
			});
			// Move Buttons (Keyboard Down)
			$(document).keyup(function(e){
				switch (e.which){
					case 40:
    			$(".captainplanet").animate({top:"+=200px"}, "normal");}
			});
			// Move Buttons (Keyboard Right)
			$(document).keyup(function(e){
				switch (e.which){
					case 39:
    			$(".captainplanet").animate({left:"+=200px"}, "normal");}
			});
			// Move Buttons (Keyboard Up)
			$(document).keyup(function(e){
				switch (e.which){
					case 38:
    			$(".captainplanet").animate({top:"-=200px"}, "normal");}
			});
			// Move Buttons (Keyboard Left)
			$(document).keyup(function(e){
				switch (e.which){
					case 37:
    			$(".captainplanet").animate({left:"-=200px"}, "normal");}
			});
			
		});
	