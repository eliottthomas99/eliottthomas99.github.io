var Point = function(x,y,canvas)
{
	this.canvas=canvas;
	this.canvas2dContext=this.canvas.getContext("2d");
	this.x=x;
	this.y=y;

	this.ache = function()
	{

		this.canvas2dContext.beginPath();
		this.canvas2dContext.arc(this.x,this.y,10,0,2*Math.PI,false);
        this.canvas2dContext.strokeStyle  = 'black'; //l'extérieur
        this.canvas2dContext.stroke();
        this.canvas2dContext.fillStyle = 'cyan'; //l'intérieur
        this.canvas2dContext.fill();
		
	}
}
