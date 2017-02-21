var resizeMag = function() {

    var container = document.querySelector('.container'); //get magazine container
    var outer = document.querySelector('.outer'); //get outer

    var width = window.innerWidth; //get browser window width
    var height = window.innerHeight; //get browser window height
    var scale;

    if(container.clientHeight > height) { //if container doesn't fit the browser window
      scale = Math.min(width/container.clientWidth, height/container.clientHeight); //get the scale
      container.style.transform = 'scale(' + scale + ')'; //transform magazine container
      outer.style.width = container.clientWidth * scale + "px"; //set new width for scale (it must be smaller because of the conatiner transformation) to get centering working
    }

}

window.addEventListener('resize', resizeMag, true); //on window resize make magazine container fit the browser window
resizeMag(); //fire reziseing at the start


//Generate bookblock

var book = querySelector("#bb-bookblock");
