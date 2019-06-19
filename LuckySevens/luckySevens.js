function clearErrors() {    
    for (var loopCounter = 0; 
        loopCounter < document.forms["game"].elements.length; 
        loopCounter++) {
        if (document.forms["game"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {
            
            document.forms["game"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }    
} 

function resetForm() {
    clearErrors();
    document.forms["game"]["inputBet"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Play";
    document.forms["game"]["inputBet"].focus();
}




function rollDice(numSides){
    return Math.floor(Math.random() * numSides) + 1;
}

function playGame() {
    clearErrors();
    var numRolls = 0;
    var numRollsAtMax = 0;
    var die1;
    var die2;

    var initialBet = document.forms["game"]["inputBet"].value;

    if(initialBet <= 0) {
        alert("Starting bet must be greater than $0.00");
        return false;
    }

    var money = initialBet - 0; //include - 0 to force string to convert to number
    var maxMoney = money;

    while(money > 0)
    {
        die1 = rollDice(6);
        die2 = rollDice(6);
        numRolls++;
        if(die1 + die2 == 7)
        {
            money += 4;
            if(money > maxMoney)
            {
                maxMoney = money;
                numRollsAtMax = numRolls;
            }
        }
        else {
            money = money -1;
        }

    }

    document.getElementById("results").style.display = "block";
    document.getElementById("submitButton").innerText = "Play Again";
    document.getElementById("startingBet").innerText = initialBet;
    document.getElementById("totalRolls").innerText = numRolls;
    document.getElementById("highAmount").innerText = maxMoney;
    document.getElementById("highAmountRoll").innerText = numRollsAtMax;

    return false;
}