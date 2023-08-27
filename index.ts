// את הקוד שלכם תכתבו כאן

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
class Rectangle {
  width: number;
  height: number;
  constructor(width: number, height: number) {
    this.height = height
    this.width = width
  }
  scale(parameter:number):Rectangle{
    this.width *= parameter
    this.height*= parameter
    return this

  }
}
// 5. Shape with draw method
