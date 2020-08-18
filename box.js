class Box {
    constructor(x,y,w,h){
        var options ={
            restitution:0.5,
            density:1.0,
            friction:0.3,
            isStatic :true
        }
        this.body=rectangle(x,y,w,h,options)
        this.width = w
        this.heigth = h
        World.add(world,this.body)
    }
    display(){
        fill("red")
        var pos = this.body.position
        var angle = this.body.angle
        rectMode(CENTER)
        rect(pos.x,pos.y,this.width,this.heigth)
    }
}