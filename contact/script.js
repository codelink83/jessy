
// ...................Navbar...................
let menu = document.getElementById("menu");
let btn = document.getElementById("bar");
let cbtn = document.getElementById("close");
let logo = document.getElementById("logo");
let ebtn = document.getElementById("end-btn");
menu.style.maxHeight = "0px";

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (menu.style.maxHeight == "0px") {
    menu.style.maxHeight = "300px";
    logo.style.display = "none";
    cbtn.style.display = "block";
    btn.style.display = "none";
    ebtn.style.display = "none";
    menu.style.display = "block";
  } else {
    menu.style.maxHeight = "0px";
    logo.style.display = "none";
    cbtn.style.display = "none";
    btn.style.display = "block";
    ebtn.style.display = "block";
  }
});
// .................

cbtn.addEventListener("click", (e) => {
  e.preventDefault();
  if ((menu.style.maxHeight = "300px")) {
    menu.style.maxHeight = "0px";
    cbtn.style.display = "none";
    menu.style.display = "none";
    btn.style.display = "block";
    ebtn.style.display = "block";
    logo.style.display = "block";
  } else {
    cbtn.style.display = "block";
    btn.style.display = "none";
    logo.style.display = "none";
    ebtn.style.display = "none";
  }
});
// ...................Navbar.End..................