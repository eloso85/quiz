var startButton = document.getElementById('start');
var gameQuestion = document.getElementById('question');
var buttonA = document.getElementById('bA');
var buttonB = document.getElementById('bB');
var buttonC = document.getElementById('bC');
var time = document.getElementById('time')
//var lastQuestion = questions.length -1;
var runningQuestion = 0;
var score = 0;
var timer = 10;
var countDown;

var questions = [
    {
        question: "What's the infamous name of that street were nightmares will kill you ?",
        choiceA: "Elm Street",
        choiceB: "23rd Street",
        choiceC: "Freddy Street"
    }

];

startButton.addEventListener("click", function () { //makes button work
    var q = questions[runningQuestion]; //internal varable to combine characters and number,sym and caps

    question.innerHTML = "<h2>" + q.question + "<h2>";
    buttonA.innerHTML = q.choiceA;
    buttonB.innerHTML = q.choiceB;
    buttonC.innerHTML = q.choiceC;


     
    
    

    
})

