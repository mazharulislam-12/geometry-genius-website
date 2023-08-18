function calculateTriangleArea() {
    // get triangle base value
   const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)

    // get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);

    const area = 0.5 * base * height;

    if (isNaN(base) || isNaN(height)) {
        alert('please insert number');
        return;
    }
    
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;
    addToCalculationEntry('Triangle', area);
}

function calculateRectangleArea() {
    const widthBase = document.getElementById('rectangle-width');
    const widthValueText = widthBase.value;
    const width = parseFloat(widthValueText);

    const lengthBase = document.getElementById('rectangle-length');
    const lengthValueText = lengthBase.value;
    const length = parseFloat(lengthValueText);

    const area = width * length;

    // validate part
   if (isNaN(width) || isNaN(length)) {
        alert('please insert  number');
        return;
   }
    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = area;
    addToCalculationEntry('Rectangle', area);

}


// Parallelogram-----
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    const height = getInputValue('parallelogram-height');
    area = base * height;
    // validate
    if(isNaN(base) || isNaN (height)){
        alert('please insert number');
        return;
    }
    
    setElementInnerText('parallelogram-area', area);

     // add to calculation entry
     addToCalculationEntry('Parallelogram', area);
}


// Rhombus
function calculateRhombusArea() {
    const diagonal1 = getInputValue('rhombus-diagonal1');
    const diagonal2 = getInputValue('rhombus-diagonal2');
    area = 0.5 * diagonal1 * diagonal2;
    // validate part
    if (isNaN(diagonal1) || isNaN(diagonal2)) {
        alert('please insert number');
        return;
    }
    setElementInnerText('rhombus-area', area);
    addToCalculationEntry('Rhombus', area);

}

// Pentagon
function calculatePentagonArea() {
    const pentagonP = getInputValue('pentagon-p');
    const pentagonB = getInputValue('pentagon-b');
    area = 0.5 * pentagonP * pentagonB;
    if (isNaN(pentagonP) || isNaN(pentagonB)) {
        alert('please insert number');
        return;
    }
    setElementInnerText('pentagon-area', area); 
    addToCalculationEntry('Pentagon', area);


}
// Ellipse
function calculateEllipseArea() {
    const ellipseA = getInputValue('ellipse-a');
    const ellipseB = getInputValue('ellipse-b');
    area = Math.PI * ellipseA * ellipseB;
    const areaToDecimal = area.toFixed(2);
    if (isNaN(ellipseA) || isNaN(ellipseB)) {
        alert('please insert number');
        return;
    }
    setElementInnerText('ellipse-area', areaToDecimal)

    addToCalculationEntry('Ellipse', areaToDecimal);

}



// reusable get input value 
function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setElementInnerText(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}


// add to calculate entry
/*
1. get the element where you went to add the dynamic HTML
2.create an element you went to add
3.if needed some class
4.set inner html , it could be dynamic template string
5.append the create element as a child of the parent

*/
function addToCalculationEntry(areaType, area) {
    console.log(areaType + ' ' + area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;

    const p = document.createElement('p');
    // p.innerHTML =areaType + ' ' + area;
    p.classList.add('my-4');
    p.innerHTML = `
        ${count + 1} ${areaType} ${area} cm <sup>2</sup>
        <button class = "btn btn-sm btn-success">Convert</button>
    `;
    calculationEntry.appendChild(p);




}
