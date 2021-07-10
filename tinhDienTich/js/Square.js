import Shape from "./Shape.js";

export default class Square extends Shape {
    constructor(bgColor, sizeX, sizeY, side) {
        // Gọi lại constructor của lớp cha (Shape)
        super('Square', bgColor, sizeX, sizeY);
        this.side = side;
    }

    calcArea() {
        this.area = Math.pow(this.side, 2);
    }

    // Ghi đè phương thức draw của lớp cha
    draw() {
        const content = `
            <div class="text-center" style="width: ${this.sizeX}; height: ${this.sizeY}; background-color: ${this.bgColor}">
                <p>
                    Name: ${this.name}
                    <br>
                    Area: ${this.area}
                </p>
            </div>
        `;
        document.getElementById("main").innerHTML = content;
    }
}
