onmessage = function(e) {
    console.log('Worker: Message received from main script');
   
   if(e.data=="go"){
    coorx = Math.floor(Math.random()*600) ;
    coory = Math.floor(Math.random()*600); 
    console.log('Worker: Posting message back to main script');
    postMessage([coorx,coory,"grey"]);
   }
   else{
       postMessage('I don\'t get it')
   }
   
    
  }