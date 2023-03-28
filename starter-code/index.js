const output = document.getElementById("output");
const outputFooter = document.getElementById("output-footer");

const backNav = document.querySelector("#back-nav");
const forwardNav = document.querySelector("#forward-nav");
let jsonData;
let jsonDatalength;
let index = 0;
cookie = getCookie('slideindex')
if (cookie) {
  index = cookie
}
function slide() {
  let html = ` <div class="myModal" id="myModal" style="display: none;">
    <div class="modal-inner"><span style="color: rgb(255, 255, 255);">
        <h5 id="close-modal">Close</h5></span><img src=${jsonData[
          index
        ].images.hero.small.toString()} alt="">
    </div>
</div>
<div class="gallery-details">
    <div class="gallery-image">
        <img src=${jsonData[
          index
        ].images.hero.large.toString()} alt="" class="artist">
        <div class="img-tag"><img src="./assets/shared/icon-view-image.svg" alt="">
            <h1>VIEW IMAGE</h1>
        </div>
    </div>
    
    <div class="gallery-name">
        <h1>${jsonData[index].name}</h1>
        <p>${jsonData[index].artist.name}</p>
    </div>
    <div class="gallery-artist">
        <img src=${jsonData[index].artist.image.toString()} alt="">
    </div>
</div>
<div class="artist-message">
    <h1>${jsonData[index].year}</h1>
    <div class="artist-text">
        <p>${jsonData[index].description}</p>
         <a href=${
           jsonData[index].source
         } target="source" class="source-link" rel="noreferrer">GO TO SOURCE</a>
    </div>
</div>`;

  let footerHtml = `<h1>${jsonData[index].name}</h1>
  <p>${jsonData[index].artist.name}</p>
  `;
  output.innerHTML = html;
  outputFooter.innerHTML = footerHtml;
  addMyEventListeners();
}
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    jsonData = data;
    jsonDatalength = data.length;
    slide();
  });

backNav.addEventListener("click", () => {
  if (index === 0) {
    index = 0;
  } else {
    index = index - 1;
  }
  slide();
});

function addMyEventListeners() {
  var modal = document.querySelector(".img-tag");
  modal.addEventListener("click", () => {
    showModal();
  });
}

forwardNav.addEventListener("click", () => {
  if (index === jsonDatalength - 1) {
    index = 0;
  } else {
    index = index + 1;
  }
  slide();
});

function showModal() {
  var modal = document.getElementById("myModal");

  modal.style.display = "block";
  var closeModal = document.getElementById("close-modal");
  closeModal.addEventListener("click", () => {
    modal.style.display = "none"
  });
}


function move(progressBar, progress, value) {
  progress.style.width = value + "%";
  progressBar.setAttribute("aria-valuenow", value);
  progressBar.style.width = value + "%";
}
const logo = document.getElementById("logo"); 

logo.addEventListener("click", () => {
  window.location.href = "logo"; 
});

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}