// את הקוד שלכם תכתבו כאן
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//  1. Rectangle - מלבן
// class Rectangle {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.height = height;
//     this.width = width;
//   }
//   area(): number {
//     return this.height * this.width;
//   }
// }
//  2. Square - ריבוע
// class Square extends Rectangle {
//   lenghtSide: number;
//   constructor(width: number, height: number, lenght: number) {
//     super(width, height);
//     this.lenghtSide = lenght
//   }
//   areasquare():number {
//     return this.lenghtSide * this.lenghtSide
//   }
// }
// 3. Shape - צורה
// class Shape {
//     constructor(){
//     }
//     info():string{
//     return "this is a shape"}
// }
// class Rectangle extends Shape{
//     width : number
//     height : number
//     constructor(width: number, height : number){
//         super()
//         this.width = width
//         this.height = height
//     }
//     info():string{
//         return "this is a rectangle"
//     }
// }
// 4. Method Chaining
// class Rectangle {
//   width: number;
//   height: number;
//   constructor(width: number, height: number) {
//     this.height = height;
//     this.width = width;
//   }
//   scale(parameter: number): Rectangle {
//     this.width *= parameter;
//     this.height *= parameter;
//     return this;
//   }
//   static newRectangle(obj1: Rectangle, obj2: Rectangle): Rectangle {
//      return new Rectangle(
//       (obj1.width + obj2.width) / 2,
//       (obj1.height + obj2.height) / 2
//     );
//   }
// }
// 5. Shape with draw method
var Shape = /** @class */ (function () {
    function Shape() {
    }
    Shape.prototype.draw = function () {
        console.log("drawing a shape");
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.draw = function () {
        console.log("drawing a circle");
    };
    return Circle;
}(Shape));
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.draw = function () {
        console.log("drawing a triangle");
    };
    return Triangle;
}(Shape));
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Square.prototype.draw = function () {
        console.log("drawing a square");
    };
    return Square;
}(Shape));
function renderShapes(arrayObjects) {
    for (var i = 0; i < arrayObjects.length; i++) {
        arrayObjects[i].draw();
    }
}
