const container = document.querySelector('.container'); //get magazine container
const outer = document.querySelector('.outer'); //get outer

const resizeMag = function() {

    let width = window.innerWidth; //get browser window width
    let height = window.innerHeight; //get browser window height
    let scale;

    if(container.clientHeight > height) { //if container doesn't fit the browser window
      scale = Math.min(width/container.clientWidth, height/container.clientHeight); //get the scale
      container.style.transform = 'scale(' + scale + ')'; //transform magazine container
      outer.style.width = container.clientWidth * scale + "px"; //set new width for scale (it must be smaller because of the conatiner transformation) to get centering working
    }

}

window.addEventListener('resize', resizeMag, true); //on window resize make magazine container fit the browser window
resizeMag(); //fire reziseing at the start


//Generate bookblock

let book = document.querySelector("#bb-bookblock");

window.$_GET = location.search.substr(1).split("&").reduce((o,i)=>(u=decodeURIComponent,[k,v]=i.split("="),o[u(k)]=v&&u(v),o),{}); //get data from $_GET

if($_GET['id'] == "undefined") { //if id specified
  document.querySelector('body').innerHTML = "<p>There is no such file...</p>";
} else {
  let issue = data.filter(item => item.id == $_GET['id'] );
  if(issue.length < 1) document.querySelector('body').innerHTML = "<p>There is no such file...</p>"; //if there is no book with such id
  else {

    book.innerHTML = `
      <div class="bb-item" style="background:transparent">
        <div class="bb-custom-side" style="background:transparent">
        </div>
        <div class="bb-custom-side" style="">
        ${issue[0].pages[0].content}
        </div>
      </div>
      `;


    book.innerHTML += issue[0].pages.slice(1).map((item, i) => {

       let html = '';
       if(i%2 == 0) html += `<div class="bb-item">`;
       html += `<div class="bb-custom-side" style="background:transparent">${item.content}
       </div>`;
       if(i%2 != 0) html += `</div>`;
       return `
       ${(i%2==0) ? '<div class="bb-item">' : ''}
          <div class="bb-custom-side" style="background:transparent">
            ${item.content}
          </div>
       ${(i%2!=0) ? '</div>' : ''}
       `;

    }).join('');

    console.log(test);

  }
}
