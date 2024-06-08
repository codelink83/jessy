const btnToggle = document.getElementById("btn-toggle");
const navbar = document.getElementById("nav");


btnToggle.addEventListener('click', (e)=>{
  e.preventDefault();
  if (navbar.style.width === '0px') {
    navbar.style.width = '300px';
  } else {
    navbar.style.width = '0px';
  }
});