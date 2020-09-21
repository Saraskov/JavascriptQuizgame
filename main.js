/*
Create an object that works as a quiz program. The quiz object needs to have an
array of objects with the properties: quiz questions, quiz answers and a property
to check if the answer is answered correctly.
It also needs a function to run the quiz program. The function needs to prompt
the user for a question. (Hint: use prompt in JS… google it)
when the question is answered it needs to check if the answer is correct or not
and then go to the next question. Finally the function should inform the quiz
player how many questions answered correctly.
To solve this exercise you can use "prompt"(to prompt the user for an answer) and
"alert" to inform the user.... e.g. how many questions were answered correctly.
You should NOT use the DOM. 
*/

function QuizQuestion(question, answer){
    this.question = question;
    this.answer = answer;
    this.result = false;
    this.makeTrue = function(){
        return this.result = true;
    };
}

function startQuiz(){
    //Create game
    let questions = [
        new QuizQuestion("How many legs does a cat have?", 4),
        new QuizQuestion("How many legs does a Spider have?", 8),
        new QuizQuestion("How many eyes does a cat have?", 2),
        new QuizQuestion("How many eyes does a spider usually have?", 8)
    ];

    //In game
    for(i = 0; i < questions.length + 1; i++){
        if (i < questions.length){
            checkAnswer(i);
        } else {
            endGame();
        }
    }

    function checkAnswer(index){
    let question = prompt(questions[index].question,"");
        if(questions != null){
            if(question == questions[index].answer){
                questions[index].makeTrue();
            } else {
                return false;
            }
        }
    }

    // End game
    function endGame(){
        let rightAnswers = 0;
        for(i = 0; i < questions.length; i++){
            if(questions[i].result == true){
            rightAnswers++;
            }
        }
        alert(`You answered ${rightAnswers} right!`);
    }
}

startQuiz();