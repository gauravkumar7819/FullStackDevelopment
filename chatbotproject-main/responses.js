function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    }  else if(input== "about codelions")
    {
        return "codelions is a team of 6 mamber which is going to grave 1 position in GLAthon23";
    }
    else {
        return "Try asking something else!";
    }
   
}