let images = ['dice1.png',
"dice2.png",
"dice3.png",
"dice4.png",
"dice5.png",
"dice6.png"];

let dice = document.querySelectorAll("img")

function roll() {
    dice.forEach(function(dice) {
        dice.classList.add('shake');
    })
    setTimeout(function() {
        dice.forEach(function(dice) {
            dice.classList.remove("shake")
        });
        let diceOneValue = Math.floor(Math.random() * 6);
        let diceTwoValue = Math.floor(Math.random() * 6);
        document.querySelector('#dice1').setAttribute
        ("src", images[diceOneValue]);
        document.querySelector('#dice2').setAttribute
        ("src", images[diceTwoValue]);
        document.querySelector('#total').innerHTML = 
        "YOUR ROLL IS " + ( (diceOneValue +1) + (diceTwoValue + 1));
    }, 1000);
}