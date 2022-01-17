export class Point{
    x:number; //private
    y:number; //public
        constructor(x: number, y:number){
            this.x = x;
            this.y = y;
        }
        draw(){
            console.log('X:' + this.x ',Y:' + this.y);
        }
        get X(){
            return this.x;
        }
}