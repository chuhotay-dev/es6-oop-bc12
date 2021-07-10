export default class Shape {
    constructor(name, bgColor, sizeX, sizeY) {
        this.name = name;
        this.bgColor = bgColor;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
    }

    draw() {
        const content = '<div class="alert alert-primary">Chưa có diện tích</div>';
        document.getElementById("main").innerHTML = content;
    }
}
