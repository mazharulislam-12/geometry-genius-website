function calculateTriangleArea() {
    // get triangle base value
   const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const base = parseFloat(baseValueText)
    console.log(base);

    // get triangle height
    const heightField = document.getElementById('triangle-height');
    const heightValueText = heightField.value;
    const height = parseFloat(heightValueText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);
    
    const areaSpan = document.getElementById('triangle-area');
    areaSpan.innerText = area;

}

function calculateRectangleArea() {
    const widthBase = document.getElementById('rectangle-width');
    const widthValueText = widthBase.value;
    const width = parseFloat(widthValueText);
    console.log(width);

    const lengthBase = document.getElementById('rectangle-length');
    const lengthValueText = lengthBase.value;
    const length = parseFloat(lengthValueText);
    console.log(length);

    const area = width * length;
    console.log(area);

    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = area;

}


// Parallelogram-----
function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base');
    console.log(base);
    const height = getInputValue('parallelogram-height');
    // console.log(height);
    area = base * height;
    // console.log(area);
    setElementInnerText('parallelogram-area', area);
}


// Rhombus
function calculateRhombusArea() {
    const diagonal1 = getInputValue('rhombus-diagonal1');
    const diagonal2 = getInputValue('rhombus-diagonal2');
    area = 0.5 * diagonal1 * diagonal2;
    setElementInnerText('rhombus-area', area);

}

// Pentagon
function calculatePentagonArea() {
    const pentagonP = getInputValue('pentagon-p');
    const pentagonB = getInputValue('pentagon-b');
    area = 0.5 * pentagonP * pentagonB;
    setElementInnerText('pentagon-area', area);                                                                                        
}
// Ellipse
function calculateEllipseArea() {
    const ellipseA = getInputValue('ellipse-a');
    const ellipseB = getInputValue('ellipse-b');
    area = Math.PI * ellipseA * ellipseB;
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

