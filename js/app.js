const container = document.querySelector('.container'); //get magazine container
const outer = document.querySelector('.outer'); //get outer

//Resizeing mag dunction
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

//Adding files function

function loadFile(file_name, file_type){
    if (file_type=="js"){ //if filename is a external JavaScript file
        let file=document.createElement('script')
        file.setAttribute("src", file_name)
        file.setAttribute("type", "text/javascript")
        file.onload = function () {
          readPages(pages);
        }
        document.querySelector('head').appendChild(file);
    }
    else if (file_type=="css"){ //if filename is an external CSS file
        var file=document.createElement("link")
        file.setAttribute("rel", "stylesheet")
        file.setAttribute("type", "text/css")
        file.setAttribute("href", file_name)
        document.head.appendChild(file);
    }

}

//Generate bookblock

let book = document.querySelector("#bb-bookblock");

function readPages(pages) {

  book.innerHTML = `
    <div class="bb-item" style="background:transparent">
      <div class="bb-custom-side" style="background:transparent">
      </div>
      <div class="bb-custom-side" style="">
      ${pages[0].content}
      </div>
    </div>
    `;

  book.innerHTML += pages.slice(1).map((item, i) => {

     let html = '';
     if(i%2 == 0) html += `<div class="bb-item">`;
     html += `<div class="bb-custom-side" style="background:transparent">${item.content}
     </div>`;
     if(i%2 != 0) html += `</div>`;
     return `
     ${(i%2==0) ? '<div class="bb-item">' : ''}
        <div class="bb-custom-side">
          ${item.content}
        </div>
     ${(i%2!=0) ? '</div>' : ''}
     `;

  }).join('');

}

window.$_GET = location.search.substr(1).split("&").reduce((o,i)=>(u=decodeURIComponent,[k,v]=i.split("="),o[u(k)]=v&&u(v),o),{}); //get data from $_GET

if($_GET['id'] == "undefined") { //if id specified
  document.querySelector('body').innerHTML = "<p>There is no such file...</p>";
} else {
  let issue = data.filter(item => item.id == $_GET['id'] );
  if(issue.length < 1) document.querySelector('body').innerHTML = "<p>There is no such file...</p>"; //if there is no book with such id
  else {

    //load styling files and data
    loadFile(`${issue[0].url}/pages.js`,"js");
    loadFile(`${issue[0].url}/style.css`,"css");

  }
}
