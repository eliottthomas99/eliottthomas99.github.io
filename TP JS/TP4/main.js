//const first = document.querySelector('#number1');
//const second = document.querySelector('#number2');

//const result = document.querySelector('.result');

if (window.Worker) {
	const myWorker = new Worker("worker.js");

    initSquareIntervId = setInterval(newCoor, 500);
    canvas = document.getElementById('myCanvas');

    class Point {
        constructor(x, y, canvas) {
            this.canvas = canvas;
            this.canvas2dContext = this.canvas.getContext("2d");
            this.x = x;
            this.y = y;
    
            this.ache = function () {
    
                this.canvas2dContext.beginPath();
                this.canvas2dContext.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
                this.canvas2dContext.strokeStyle = 'black'; //l'extérieur
                this.canvas2dContext.stroke();
                this.canvas2dContext.fillStyle = 'cyan'; //l'intérieur
                this.canvas2dContext.fill();
    
            };
        }
    }
    


    function newCoor(){
        let num = Math.random();
        if(num<0.5){
            myWorker.postMessage("go");
        }
    }


	myWorker.onmessage = function(e) {
		var coorX = e.data[0];
        var coorY = e.data[1];
		console.log('Message received from worker');


        point1 = new Point(coorX,coorY,canvas);
		point1.ache();
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}