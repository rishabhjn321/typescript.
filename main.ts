// function dosomething() {
//     for (var i=0; i<5; i++){
//         console.log(i)
//     }
//     console.log('finally:' + i)
// }
// dosomething();  

// different type in typescript

// let a: number;
// let b: boolean;
// let c: string;
// let d: any;
// let e: number[] = [1,2,3];
// let f: any[] = [1,true,a];

// const colorred = 0;
// const colorblue = 1;
// const colorgreen = 2;
// const coloroffwhite = 3;


// enum Color {red, green, blue, white};
// let backgroundColor = Color.green

//type essertion

// let message:
// message = 'abs';
// let endwithC = (<string>.message).endwith('c');

// using interface
//  let drawpoint = (point:{x:number, y:number}) => {

//  }
//  drawpoint({
//      x:1,
//      y:2
     
//  })
//or
// interface point
// {
//     x:number,
//      y:number
// }
//  let drawpoint = (point:point) => {

//  }
//  drawpoint({
//      x:1,
//      y:2
     
//  })

// class
// class point{
//     x:number;
//     y:number;
//         constructor(x: number, y:number){
//             this.x = x;
//             this.y = y;
//         }
//         draw(){
//             console.log('X:' +this.x 'Y:'this.y);
//         }
// }
// let point = point(1,2);
// point.draw(); 

// acess modifier public protected private
// class
import {point} from './point;
let point = new Point(1,2);
let x = point.X; //getting x because it is private member //instead of getX(); we can use X bec its become a property   
point.draw(); 

