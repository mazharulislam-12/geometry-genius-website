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

    const rectangle = width * length;
    console.log(rectangle);

    const rectangleSpan = document.getElementById('rectangle-area');
    rectangleSpan.innerText = rectangle;
    

}