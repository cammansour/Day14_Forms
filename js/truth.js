let fname = "";
let lname = "";
let age = 0;
function greet() {
    let greetParagraph = document.getElementById("greet");
    let lname = document.getElementById("lname").value;
    let fname = document.getElementById("fname").value;
    let age = document.getElementById("age").value;
    greetParagraph.style.color = "black";
    greetParagraph.innerHTML = "Hi " + fname + " " + lname + "! " + "You're " + age + "???";

    
}

function trivial() {
    let triviaAnswer = document.getElementById("trivia1-answer");
    let fname = document.getElementById("fname").value;
    let one = document.getElementById("one").checked;
    let two = document.getElementById("two").checked;
    let three = document.getElementById("three").checked;
    if (one){
        triviaAnswer.innerHTML= fname + ", ur nasty! Try again!"
    }
    else if (two){
        triviaAnswer.innerHTML= fname + ", ur nasty! Try again!"
    }
    else if (three){
        triviaAnswer.innerHTML= fname + ", you are correct!"
    }

    
}

function twotruth() {
    let truthAnswer = document.getElementById("twotruth1");
    let fname = document.getElementById("fname").value;
    let truth1 = document.getElementById("truth1").checked;
    let truth2 = document.getElementById("truth2").checked;
    let lie3 = document.getElementById("lie3").checked;

    if (truth1){
        truthAnswer.innerHTML = fname + ", I have two sisters! You are incorrect!"
    }
    else if (truth2){
        truthAnswer.innerHTML = fname + ", I am half egyptian and half iranian! You are incorrect!"
    }
    else if (lie3){
        truthAnswer.innerHTML = fname + ", you got it right! I have a dog, not a cat."
    }


}