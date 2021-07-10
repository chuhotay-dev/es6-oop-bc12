import Shape from "./Shape.js";

export default class Circle extends Shape {
    constructor(bgColor, sizeX, sizeY, radius) {
        super('Circle', bgColor, sizeX, sizeY);
        this.radius = radius;
    }

    calcArea() {
        this.area = 3.14 * Math.pow(this.radius, 2);
    }

    draw() {
        const content = `
            <div class="text-center rounded-circle" style="width: ${this.sizeX}; height: ${this.sizeY}; background-color: ${this.bgColor}">
                <p>
                    Name: ${this.name}
                    <br>
                    Area: ${this.area}
                </p>
            </div>
        `;
        document.getElementById('main').innerHTML = content;
    }
}