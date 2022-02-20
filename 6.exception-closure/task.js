function parseCount(val) {
    let num = Number.parseInt(val, 10);
    if (!isNaN(num)) {
        return num
    } else {
        throw new Error("Невалидное значение");
    }
}  

function validateCount(val) {
    try {
      return parseCount(val);
    } catch (error) {
        return error
    }
} 

class Triangle {
    constructor(a,b,c) {
        if (((a + b) < c) || ((a + c) < b) || ((c + b) < a)) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let hP = 0.5 * this.getPerimeter();
        return parseFloat(Math.sqrt(hP * (hP - this.a) * (hP - this.b) * (hP - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        let failTriangle = new Object();
        failTriangle.getArea = function () {
            return "Ошибка! Треугольник не существует";
        };
        failTriangle.getPerimeter = function () {
            return "Ошибка! Треугольник не существует";
        };
        return failTriangle;
    }
}