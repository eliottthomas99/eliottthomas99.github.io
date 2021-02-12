//const first = document.querySelector('#number1');
//const second = document.querySelector('#number2');

//const result = document.querySelector('.result');

if (window.Worker) {
    const myWorker1 = new Worker("worker1.js");
    const myWorker2 = new Worker("worker2.js");
    const myWorker3 = new Worker("worker3.js");
    const myWorker4 = new Worker("worker4.js");
    const myWorker5 = new Worker("worker5.js");
    const myWorker6 = new Worker("worker6.js");
    const myWorker7 = new Worker("worker7.js");
    const myWorker8 = new Worker("worker8.js");
    const myWorker9 = new Worker("worker9.js");
    const myWorker10 = new Worker("worker10.js");

    initSquareIntervId = setInterval(newCoor, 500);
    canvas = document.getElementById('myCanvas');

    class Point {
        constructor(x, y, canvas,color) {
            this.canvas = canvas;
            this.canvas2dContext = this.canvas.getContext("2d");
            this.x = x;
            this.y = y;

            this.ache = function () {

                this.canvas2dContext.beginPath();
                this.canvas2dContext.arc(this.x, this.y, 10, 0, 2 * Math.PI, false);
                this.canvas2dContext.strokeStyle = 'black'; //l'extérieur
                this.canvas2dContext.stroke();
                this.canvas2dContext.fillStyle = color; //l'intérieur
                this.canvas2dContext.fill();

            };
        }
    }



    function newCoor() {
        let num = Math.random();
        if (num < 0.5) {
            let whichWorker = Math.random();
            switch (whichWorker) {
                case whichWorker < 0.1:
                    myWorker1.postMessage("go");
                    console.log("worker1 send");
                    break;
                case whichWorker < 0.2:
                    myWorker2.postMessage("go");
                    console.log("worker2 send")
                    break;
                case whichWorker < 0.3:
                    myWorker3.postMessage("go");
                    console.log("worker3 send");
                    break;
                case whichWorker < 0.4:
                    myWorker4.postMessage("go");
                    console.log("worker4 send")
                    break;
                case whichWorker < 0.5:
                    myWorker5.postMessage("go");
                    console.log("worker5 send");
                    break;
                case whichWorker < 0.6:
                    myWorker6.postMessage("go");
                    console.log("worker6 send");
                    break;
                case whichWorker < 0.7:
                    myWorker7.postMessage("go");
                    console.log("worker7 send");
                    break;
                case whichWorker < 0.8:
                    myWorker8.postMessage("go");
                    console.log("worker8 send");
                    break;
                case whichWorker < 0.9:
                    myWorker9.postMessage("go");
                    console.log("worker9 send");
                    break;
                case whichWorker < 1:
                    myWorker10.postMessage("go");
                    console.log("worker10 send");
                    break;

            }

        }
    }


    myWorker1.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker1');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker2.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker2');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker3.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker3');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker4.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker4');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker5.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker5');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker6.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker6');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker7.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker7');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker8.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker8');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker9.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker9');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }
    myWorker10.onmessage = function (e) {
        var coorX = e.data[0];
        var coorY = e.data[1];
        var color = e.data[2]; 
        console.log('Message received from worker10');


        point1 = new Point(coorX, coorY, canvas,color);
        point1.ache();
    }





} else {
    console.log('Your browser doesn\'t support web workers.')
}