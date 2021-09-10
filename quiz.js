const quizForm = document.querySelector('.quiz-form');
const submit = document.querySelector('.btn');

const output = document.querySelector('#output');

const Right = ["60","90"];
function calculateScore(){
    let score = 0;
    let index = 0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if(value === Right[index]){
            score = score+1;
        }
        index = index+1;

    }
    output.innerText = "Your high score is "+ score ;


}
submit.addEventListener("click",calculateScore);