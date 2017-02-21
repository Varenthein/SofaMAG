var resizeMag = function() {

    var container = document.querySelector('.container'); //get magazine container

    var width = window.innerWidth; //get browser window width
    var height = window.innerHeight; //get browser window height
    var scale;

    if(container.clientHeight > height) { //if container doesn't fit the browser window
      scale = Math.min(width/container.clientWidth, height/container.clientHeight); //get the scale
      container.style.transform = 'scale(' + scale + ')'; //transform magazine container
      mmcontainer.style.width = width;
    }

}

window.addEventListener('resize', resizeMag, true); //on window resize make magazine container fit the browser window
resizeMag(); //fire reziseing at the start
