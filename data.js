//templates

/* Sofa template */

const title_page = function(number) {
  this.img = "";
  this.get = () => `<img src='source/--${number}/cover.png' style='width:100%' alt="">`;
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

//data


let data = [{ "id": "1", "title": "SofaMag nr 4", "pages": [
    { "page": "0", "content": new title_page(4).get()},
    { "page": "1", "content": new page("page 2").get()},
    { "page": "2", "content": new page("page 3").get()},
    { "page": "3", "content": new page("page 4").get()}
  ]
}
]
