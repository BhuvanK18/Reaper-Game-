// AUDIO FILES
$(document).ready(function () {
  $('#intro').prop('volume', 0.3);
})

var intro = document.getElementById("intro");
intro.load();
// var hover = document.getElementById("hover");
// hover.load();

// GAME'S SCRIPT SHEET!

// I HAVE USED JAVASCRIPT JQUERY AND REACT LIBRARY SCRIPTS IN THIS SINGLE JS FILE!.


// HIDING UNWANTED CONTENT ON LOADING OF THE PAGE.


// Hiding certain contents of the web page on loading to display relative content according to user.
// I have used jquery's hide effect here.
$("#settingsBar").hide();
$("#startMenu").hide();
$("#controls").hide();
$("#diffMenu").hide();
$("#Level1").hide();
$("#DiffLev1").hide();
$("#DiffLev3").hide();
$("#loading").hide();
$("#comingSoon").hide();
$("#HOW2PLAY").hide();


//GLOBAL VARIABLES

//Initialized Global variables(used inside various functions).


//Used for assigning and removing active class from menu page's elements.
var nodes = document.querySelectorAll("li");

// Variable for checking if the level is beginner's.
var unlimitedLives = false;


// FUNCTIONS USED

//Selected option from menu items.
function activeOption() {
  for (i = 1; i < 8; i++) {
    if ((nodes[i].classList.contains("active")) == true) {

      var main = i;
      return main;
    };
  }
}

//Removing .active class from each option in the Menu page.
//This helps in highlighting an individual option and avoid selection of multiple options
function activeRemove() {
  for (i = 1; i < 8; i++) {
    nodes[i].classList.remove("active");
  }

}

//Displaying the selected option 
function activeScreen() {

  //Calling of the activeOption function for knowing the user's desire or chosen option.
  //Displaying start screen.

  //Main menu options choice 
  if (activeOption() == 1) {
    $("#mainMenu").hide();
    $("#settingsBar").show();
    $("#nMusic").hide();

    $("#startMenu").show();

    intro.play();

  }

  //Displaying controls screen.
  else if (activeOption() == 2) {
    $("#mainMenu").hide();
    $("#settingsBar").show();
    $("#nMusic").hide();

    $("#controls").show();

    intro.play();


  }

  //Displaying how to play screen.
  else if (activeOption() == 3) {

    $("#mainMenu").hide();
    $("#settingsBar").show();
    $("#nMusic").hide();

    $("#HOW2PLAY").show();
    intro.play();

  }

  //Displaying difficulty screen.
  else if (activeOption() == 4) {
    $("#mainMenu").hide();
    $("#settingsBar").show();
    $("#nMusic").hide();

    $("#diffMenu").show();


    intro.play();


  }
}

function activeLevel() {

  //Calling of the activeOption function for knowing the user's desire or chosen option.

  $("#backButton").hide();

  if (activeOption() == 6) {
    console.log("LEVEL 1");
    $("#startMenu").hide();
    $("#Level1").hide(6000);
    $("#Level1").show(6000);
    $("#loading").show(3000);
    $("#loading").hide(3000);

  } else if (activeOption() == 7) {
    $("#mainMenu").hide();
    $("#settingsBar").show();
    $("#nMusic").hide();
    $("#startMenu").hide();
    $("#comingSoon").fadeIn();


  } else if (activeOption() == 4) {
    $("#menu").hide();
    console.log("difficulty");
    $("#startMenu").hide();
  }
}

// MISCELLANEOUS FUNCTIONS

function nMusic() {
  $("#nMusic").hide();
  $("#Music").show();
  intro.play();

}

function Music() {
  $("#Music").hide();
  $("#nMusic").show();
  intro.pause();
}

function homeButton() {
  window.location.reload();
}

function backButton() {

  $("#mainMenu").show();
  $("#nMusic").hide();
  $("#startMenu").hide();
  $("#settingsBar").show();
  $("#Music").show();
  $("#controls").hide();
  $("#diffMenu").hide();
  $("#comingSoon").hide();
  $("#HOW2PLAY").hide();
}

function diffParameter(diffNumber) {
  if (diffNumber == 1) {
    $("#DiffLev1").show();
    $("#DiffLev2").hide();
    $("#DiffLev3").hide();
  } else if (diffNumber == 2) {
    $("#DiffLev2").show();
    $("#DiffLev1").hide();
    $("#DiffLev3").hide();
  } else if (diffNumber == 3) {
    $("#DiffLev3").show();
    $("#DiffLev1").hide();
    $("#DiffLev2").hide();
  }
  return difficultyOfLevel(diffNumber);
}


//Using activeRemove function to avoid selection of multiple options.
nodes[1].addEventListener("mouseenter", function () {
  activeRemove();
  nodes[1].classList.add('active');

})

nodes[2].addEventListener("mouseenter", function () {
  activeRemove();
  nodes[2].classList.add('active');
})

nodes[3].addEventListener("mouseenter", function () {

  activeRemove();
  nodes[3].classList.add('active');
})

nodes[4].addEventListener("mouseenter", function () {
  activeRemove();
  nodes[4].classList.add('active');
})


nodes[6].addEventListener("mouseenter", function () {
  activeRemove();
  nodes[6].classList.add('active');
})

nodes[7].addEventListener("mouseenter", function () {
  activeRemove();
  nodes[7].classList.add('active');
})
//Calling of activeScreen function on click event to display desired screen.
document.getElementById('menu').addEventListener("click", function () {
  activeScreen();
});