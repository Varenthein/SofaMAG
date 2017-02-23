/* Sofa template */

const title_page = function(number) {
  this.img = "";
  this.get = () => `<img src='source/--${number}/cover.png' style='width:100%' alt="">`;
}

const image = function(number, img) {
  this.img = img;
  this.get = () => `<img src='source/--${number}/${img}' style='width:100%' alt="">`;
}

const page = function(text = "Empty", type = "content", title = "Untitled", author = "Unknown", category = "No category", main_image = "") {
  this.text = text;
  this.type = type;
  this.title = title;
  this.author = author;
  this.category = category;
  this.main_image = main_image;
  this.get = () => {
  if(this.type != "with_image") return `<div class="text">${this.text}</div>`;
  else { return `
  <header style="background:url('${main_image}') cover">
    ${title}
  </header>
  <img src='source/--${number}/cover.png' style='width:100%' alt="">`; }
}
}
