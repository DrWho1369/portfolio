function toggleNav(params) {
    const outerGrid = document.querySelector(".outer-grid");
    outerGrid.classList.toggle("outer-grid-expanded");

    const nav = document.querySelector("nav");
    nav.classList.toggle("hide-nav");
}

function expandImage(img) {
    img.classList.toggle("expanded");
  }