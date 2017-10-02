  
  //Declaring Global Variables
  var targetNumber;
  var counter;
  var wins;
  var looses;
  var numberOptions = [];
  var imageCrystal = [];
  var imageCrystalGreen;
  var imageCrystalRed;
  var imageCrystalYellow;
  var imageCrystalBlue; 

  //Initializing the Game
  function intializeGame(){
    targetNumber = 0;
    counter = 0;
    wins = 0;
    losses = 0;
    $("#wins").html(wins);
    $("#losses").html(losses);

    // For each crystal, we will create an imageCrystal
    imageCrystalGreen = $("<img>");
    imageCrystalRed = $("<img>");
    imageCrystalYellow = $("<img>");
    imageCrystalBlue = $("<img>");
  }

  //Setting up the New Game
  // Creating multiple crystals each with their own unique number value.
  // We begin by expanding our array to include four options.
  function newGame(){
    targetNumber = Math.floor((Math.random() * 101) + 19);
    counter = 0;
    $("#number-to-guess").text(targetNumber);
    $("#current_score").html(counter);
    for(var i = 0; i < 4; i++){
      numberOptions[i] = Math.floor((Math.random() * 11) + 1);
      console.log(numberOptions[i]);
    }
    
    imageCrystalGreen.attr("data-crystalvalue",numberOptions[0]);
    imageCrystalRed.attr("data-crystalvalue",numberOptions[1]);
    imageCrystalYellow.attr("data-crystalvalue",numberOptions[2]);
    imageCrystalBlue.attr("data-crystalvalue",numberOptions[3]);
  }

  function crystalRender(){

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystalGreen.addClass("crystal-image");
    imageCrystalRed.addClass("crystal-image");
    imageCrystalYellow.addClass("crystal-image");
    imageCrystalBlue.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystalGreen.attr("src", "assets/images/green.png");
    imageCrystalRed.attr("src", "assets/images/red.jpg");
    imageCrystalYellow.attr("src", "assets/images/yellow.jpg");
    imageCrystalBlue.attr("src", "assets/images/blue.jpg");

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystalGreen.attr("data-crystalvalue",numberOptions[0]);
    imageCrystalRed.attr("data-crystalvalue",numberOptions[1]);
    imageCrystalYellow.attr("data-crystalvalue",numberOptions[2]);
    imageCrystalBlue.attr("data-crystalvalue",numberOptions[3]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystalGreen);
    $("#crystals").append(imageCrystalRed);
    $("#crystals").append(imageCrystalYellow);
    $("#crystals").append(imageCrystalBlue);
  
  }

  //Game gets initialized
  intializeGame();

  //New Game is started
  newGame();

  //Crystals are rendered on the screen
  crystalRender();
  

  // This time, our click event applies to every single crystal on the page. Not just one.
  $(".crystal-image").on("click", function() {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter
    
    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    counter += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    //alert("New score: " + counter);
    $("#current_score").html(counter);

    if (counter === targetNumber) {
      wins = wins + 1;
      $("#wins").html(wins);
      newGame();
    }

    else if (counter >= targetNumber) {
      losses = losses + 1;
      $("#losses").html(losses);
      newGame();
    }

  });