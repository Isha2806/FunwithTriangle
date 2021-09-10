const inputs = document.querySelectorAll('.inputAngle');
const isTriangleBtn = document.querySelector('.btn');
const outputE = document.querySelector('#output');

function calculateSum(input1,input2,input3){
    const sumOfAngles = input1+input2+input3;
    
    return sumOfAngles ;
}
function isTriangle(){
    const sumOfAngles = calculateSum(Number(inputs[0].value),Number(inputs[1].value) ,Number(inputs[2].value));
    if(sumOfAngles===180){ 
        outputE.innerText = "yoohoooo🤑🤑, You are  a Triangle. You get a chance to bring  pizza  for mee ! ";
    }
        else{
            outputE.innerText = "Oh!  �😲 Don't Worry. Work hard on your edges. You can also be a Triangle one Day!";
        }
    }

 
isTriangleBtn.addEventListener("click",isTriangle)
