const sides = document.querySelectorAll('.side');
const hypotenuseBtn = document.querySelector('.btn');
const outputE = document.querySelector('#output');


function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b ;
 return sumOfSquares;
}

function calculateHypotenuse(){
  
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));

    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    outputE.innerText = "The length of hypotensuse is  " + lengthOfHypotenuse ;
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse);  