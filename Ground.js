class Ground{
constructor(a,b,c,d){
    var options={
        isStatic:true
    }
    this.body=Bodies.rectangle(a,b,c,d,options)
    this.width=c
    this.height=d
    World.add(world,this.body)
}
display(){
    var pos=this.body.position
    rectMode(CENTER)
    fill("brown")
    rect(pos.x,pos.y,this.width,this.height)
}}