const studentGallery = document.getElementById("student-gallery");

function addStudentGallery(data) {
  data.forEach((item) => {
    let card = document.createElement("div");
    card.className = "card";
    let img = document.createElement("img");
    img.className = "card-media";
    img.src = item.img;
    let content = document.createElement("div");
    content.className = "card-content";
    let title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = item.name;
    let text = document.createElement("p");
    text.innerText = item.shortbio;
    let btn = document.createElement("button");
    btn.className = "card-action primary";
    btn.innerText = "View Page";
    card.appendChild(img);
    content.appendChild(title);
    content.appendChild(text);
    content.appendChild(btn);
    card.appendChild(content);
    studentGallery.appendChild(card);
  });
}

getStudents();
