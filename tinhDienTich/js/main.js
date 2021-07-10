import Shape from './Shape.js';
import Square from './Square.js';
import Circle from './Circle.js';

const shape = new Shape();
shape.draw();

const getEle = id => document.getElementById(id);

const handleSquare = () => {
    const side =  +getEle('side').value;
    const sizeX = getEle('squareX').value + 'px';
    const sizeY = getEle('squareY').value + 'px';
    const bgColor = getEle('squareColor').value;

    const square = new Square(bgColor, sizeX, sizeY, side);
    square.calcArea();
    square.draw();
}

getEle('areaSquare').onclick = handleSquare;

const handleCircle = () => {
    const radius = +getEle('radius').value;
    const sizeX = getEle('cirX').value;
    const sizeY = getEle('cirY').value;
    const bgColor = getEle('cirColor').value;

    const circle = new Circle(bgColor, sizeX, sizeY, radius);
    circle.calcArea();
    circle.draw();
}

getEle('areaCircle').onclick = handleCircle;



