/* Sofa template */

const title_page = function() {
  this.img = "";
  this.get = () => `<img src='${issue.url}/img/cover.png' style='width:100%' alt="">`;
}

const image = function(img) {
  this.img = img;
  this.get = () => `<img src='${issue.url}/img/${img}' style='width:100%' alt="">`;
}

const page = function(page_nr = 0, text = "Empty", type = "content", title = "Untitled", author = "Unknown", category = "No category", main_image = "") {
  this.text = text;
  this.type = type;
  this.title = title;
  this.author = author;
  this.category = category;
  this.main_image = main_image;
  this.get = () => {
  if(this.type != "with_image") {
     return `
     <div class="text">${this.text}</div>
    `;
  }
  else {
    let title_len = this.title.length;
    let title_size = 100-this.title.length+'px';
    return `
    <span class="nr"><strong>${page_nr}</strong></span>
    <header style="background:url('${issue.url}/img/${this.main_image}');background-size:cover;background-position:center center;">
      <div class="fog"></div>
      <div class="cat">${this.category}</div>
      <h1 style="font-size:${title_size}">${this.title}</h1>
    </header>
      <div class="text">
        ${this.text}
      </div>
    `; }
}
}
