class roof
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
			var roof1Pos=this.body.position;		

			push()
			translate(roof1Pos.x, roof1Pos.y);
			rectMode(CENTER)
			fill("black");
			rect(0,0,this.w, this.h);
			pop()
			
	}

}