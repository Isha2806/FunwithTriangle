const areaInput = document.querySelectorAll('.area');
const areaButton = document.querySelector('.btn');
const outputF = document.querySelector('#output');

function multiplyBaseHeight(a,b){
    const baseHeight = a*b/2;
    
    return baseHeight;

}
function areaOfTriangle(){
    const baseHeight = multiplyBaseHeight(Number(areaInput[0].value),Number(areaInput[1].value));
    outputF.innerText = "The area of Triangle is " + baseHeight;
    
}

areaButton.addEventListener("click", areaOfTriangle
);