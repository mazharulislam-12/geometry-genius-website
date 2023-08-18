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
}
// Ellipse
function calculateEllipseArea() {
    const ellipseA = getInputValue('ellipse-a');
    const ellipseB = getInputValue('ellipse-b');
    area = Math.PI * ellipseA * ellipseB;
    if (isNaN(ellipseA) || isNaN(ellipseB)) {
        alert('please insert number');
        return;
    }
    setElementInnerText('ellipse-area', area)
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


// add to 
