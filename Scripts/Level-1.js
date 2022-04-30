//LEVEL1

//HIDING UNWANTED CHARACTERS
$("#char2").hide();
$("#char3").hide();
$("#winP").hide();
$("#lossP").hide();


//STANDING CHARACTER(RIGHT)
var char1 = document.getElementById('char1');
char1.style.marginTop = "440px";
char1.style.marginLeft = "150px";

//JUMPING CHARACTER(RIGHT)
var char2 = document.getElementById('char2');
char2.style.marginTop = "440px";
char2.style.marginLeft = "150px";

//STANDING CHARACTER(LEFT)
var char3 = document.getElementById('char3');
char3.style.marginTop = "440px";
char3.style.marginLeft = "150px";

// IMPORTANT VARIABLES
var Upward = true;
var JumpHeight = 440;
var RightMove = 150;
var LossCounter = 0;
var DragKilled = false;
var onPlatform = true;


// AUDIO FILES

var hurt = document.getElementById("hurt");
hurt.load();

var jumpAudio = document.getElementById("jumpAudio");
jumpAudio.load();

var gameOver = document.getElementById("gameOver");
gameOver.load();

var gameVic = document.getElementById("gameVic");
gameVic.load();

// FUNCTIONS


function JumpInterval() {
	var jump = setInterval(function () {
		jumpAudio.play();

		if (JumpHeight >= 130 && Upward == true) {
			Check4Obs(RightMove, JumpHeight);
			JumpHeight -= 5;
			char1.style.marginTop = JumpHeight + "px";
			char2.style.marginTop = JumpHeight + "px";
			char3.style.marginTop = JumpHeight + "px";
			Check4Plat(RightMove, JumpHeight, jump);
		} else {
			Upward = false;
			JumpHeight += 5;
			char1.style.marginTop = JumpHeight + "px";
			char2.style.marginTop = JumpHeight + "px";
			char3.style.marginTop = JumpHeight + "px";
			if (JumpHeight >= 440) {
				clearInterval(jump);
				$("#char2").hide();
				$("#char3").hide();
				$("#char1").show();
			}
		}

	}, )
}


function lossCheck(LossCounter) {
	if (LossCounter == 1) {
		$("#fire1").hide();
	} else if (LossCounter == 2) {
		$("#fire2").hide();
	} else if (LossCounter == 3 && unlimitedLives == false) {
		$("#fire3").hide();
		intro.pause();
		gameOver.play();
		$("#Level1").hide();

		$("#lossP").fadeIn(500);


	} else if (LossCounter >= 4 && unlimitedLives == true) {
		alert("Avoid the obstacles!\n(As this is beginners level no life is being deducted)");


	}

}

function difficultyOfLevel(diffNumber) {

	if (diffNumber == 1) {
		unlimitedLives = true;
		LossCounter = 3;
	} else if (diffNumber == 2) {
		unlimitedLives = false;
		LossCounter = 0;
	} else if (diffNumber == 3) {
		unlimitedLives = false;
		$("#fire1").hide();
		$("#fire2").hide();
		LossCounter = 2;
	}


}


function Check4Obs(CurrentPosi, JumpHeight) {
	if ((CurrentPosi >= 600 && CurrentPosi <= 650) && JumpHeight == 440) {
		LossCounter += 1;
		lossCheck(LossCounter);
		hurt.play();
	} else if (CurrentPosi == 550 && JumpHeight == 185) {
		LossCounter += 1;
		lossCheck(LossCounter);
		hurt.play();
	} else if ((CurrentPosi >= 300 && CurrentPosi <= 400) && JumpHeight == 185) {
		LossCounter += 1;
		lossCheck(LossCounter);
		hurt.play();
	} else if ((CurrentPosi >= 850 && CurrentPosi <= 950) && JumpHeight == 185) {
		LossCounter += 1;
		lossCheck(LossCounter);
		hurt.play();
	} else if (CurrentPosi == 700 && JumpHeight == 300) {
		$("#EnemyDrag").fadeOut(1200);
		DragKilled = true;
	} else if (CurrentPosi == 750 && DragKilled == false) {
		LossCounter += 1;
		lossCheck(LossCounter);
		hurt.play();
	} else if (CurrentPosi >= 1150 && CurrentPosi <= 1200) {
		$("#Level1").hide();
		$("#winP").fadeIn(500);
		intro.pause();

		$("#lives").hide();
		gameVic.play(2000);
	}


}

function Check4Plat(CurrentPosi, JumpHeight, jump) {
	if (CurrentPosi == 500 && JumpHeight == 205) {
		clearInterval(jump);
		char1.style.marginTop = JumpHeight + "px";
		char1.style.marginLeft = CurrentPosi + "px";
		char2.style.marginTop = JumpHeight + "px";
		char2.style.marginLeft = CurrentPosi + "px";
		char3.style.marginTop = JumpHeight + "px";
		char3.style.marginLeft = CurrentPosi + "px";

	}
}

// CONTROLS

document.addEventListener('keydown', function (event) {
	// JUMP EVENT
	// UPWARD ARROW FOR JUMP
	if (event.keyCode == 38) {
		Upward = true;
		JumpInterval();
		$("#char1").hide();
		$("#char3").hide();
		$("#char2").show();

	} else if (event.keyCode == 39) {

		// RIGHT ARROW FOR MOVING RIGHT
		$("#char2").hide();
		$("#char3").hide();
		$("#char1").show();
		Check4Obs(RightMove, JumpHeight);
		RightMove += 50;
		char1.style.marginLeft = RightMove + "px";
		char2.style.marginLeft = RightMove + "px";
		char3.style.marginLeft = RightMove + "px";

		LeftMove = RightMove;
		if ((LeftMove >= 500 && LeftMove <= 650) && JumpHeight == 205) {
			console.log("On platform");
		} else {
			char1.style.marginTop = "440px";
			char2.style.marginTop = "440px";
			char3.style.marginTop = "440px";
		}
	} else if (event.keyCode == 37) {
		// RIGHT ARROW FOR MOVING RIGHT
		$("#char2").hide();
		$("#char1").hide();
		$("#char3").show();
		Check4Obs(LeftMove, JumpHeight);
		LeftMove -= 50;
		char1.style.marginLeft = RightMove + "px";
		char2.style.marginLeft = RightMove + "px";
		char3.style.marginLeft = RightMove + "px";
		RightMove = LeftMove;
		if ((LeftMove >= 450 && LeftMove <= 650) && JumpHeight == 205) {
			console.log("On platform");
		} else {
			char1.style.marginTop = "440px";
			char2.style.marginTop = "440px";
			char3.style.marginTop = "440px";
		}
	}
});5