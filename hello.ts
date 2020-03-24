let container = document.getElementById('dice-container'); //sets the variable container to the square container div in the html
let diceSum = document.getElementById('sum-dice');  //button that adds all current dice and displays and alert of the sum
let sqButton = document.getElementById('sq-button'); //assigns sqButton to the html button "sq-button"
let rerollButton = document.getElementById('re-button');

class Square {

    public items: Array<Dice> = [];

    constructor() {
        this.div = document.createElement('div'); //creates a new div 
        this.div.classList.add('square');          // adds a css class 
        this.dieValue();              // calls the die Value function              
        diceArray.push(this);   //pushes each dice div into the diceArray
        console.log(diceArray) //displays dice array in console
        container.appendChild(this.div); //uses the variable 'container' and appends this div inside of square container div
        this.div.addEventListener('click', () => {              //event lister that changes value of single die when clicked
            this.dieValue();
        })
        this.div.addEventListener('dblclick', () => {       //adds event lister that when a die is double clicked it removes it
            const index = diceArray.indexOf(this);
            if(index > -1){
                diceArray.splice(index, 1);             
            }
            
            this.div.parentNode.removeChild(this.div);
        })
    }

    dieValue() {
        this.div.innerText = randomVal(1, 7);
    }
    updateColor () {
        let randomColor = `rgb(${randomVal(0,255)}, ${randomVal(0,255)}, ${randomVal(0,255)})`  //calls on randomVal function to pick a number from 0-255 which then inturn will give us a rgb color value
        // chooses a random color
        this.div.style.backgroundColor = randomColor;  //sets the random color to the background of the div that is being created inside square container div
    }

}

//Buttons-----------------------------

sqButton.addEventListener('click', insertSquare);       //adds an event listener that when clicked executes the insert square function

rerollButton.addEventListener('click', () => {
    diceArray.forEach(die => {
        console.log(die);
        die.dieValue();
    })
});
console.log(diceArray)

diceSum.addEventListener('click', () => {
    let diceVal = [];
    diceArray.forEach((val) => {
        let num = parseInt(val.div.innerText)
        diceVal.push(num);
    });
    let answer = diceVal.reduce((acc, val) => acc + val)
    alert(`Your total is ${answer}`);

});

//Functions-------------------------

function insertSquare() {
    let sq = new Square();
}

function randomVal(min: number, max:number) {    //a random value function that pics a number between the inserted min and max values
    return Math.floor(Math.random() * (max - min)) + min;
}
