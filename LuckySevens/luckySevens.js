/*
Creator: Anne Hellerman
Date Created: 6/17/19
Date last modified:6/19/19
*/

function rollDice(numSides){
    return Math.floor(Math.random() * numSides) + 1;
}

function playGame() {

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
    document.getElementById("highAmount").innerText = maxMoney - initialBet; //subtract initial bet to show just the money won, not the max money held
    document.getElementById("highAmountRoll").innerText = numRollsAtMax;

    return false;
}