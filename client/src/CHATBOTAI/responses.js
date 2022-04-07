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
    if (input == "Buna") {
        return "Buna";
    } else if (input == "La revedere") {
        return "Vorbim mai tarziu";
    } else {
        return "Intreaba-ma altceva";
    }
}