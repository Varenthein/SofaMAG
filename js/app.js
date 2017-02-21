var resizeMag = function() {

    console.log("WIN");

    var container = document.querySelector('.container');

    var width = window.innerWidth;
    var height = window.innerHeight;
    var scale;

    if(container.clientHeight > height) {
      scale = Math.min(width/container.clientWidth, height/container.clientHeight);
      container.style.transform = 'scale(' + scale + ')';
      container.style.width = width;
      //console.log(container.style.width);

      //container.style.height = height  * scale + "px";
    }

}

window.addEventListener('resize', resizeMag, true);
resizeMag(); //fire reziseing at the start
