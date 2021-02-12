//const first = document.querySelector('#number1');
//const second = document.querySelector('#number2');

//const result = document.querySelector('.result');

if (window.Worker) {
	const myWorker = new Worker("worker.js");

    initSquareIntervId = setInterval(newCoor, 500);
    canvas = document.getElementById('myCanvas');

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


        point1 = new Point(20*i,20*j,canvas);
		point1.ache();
	}
} else {
	console.log('Your browser doesn\'t support web workers.')
}