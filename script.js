const announcebar = document.querySelector('.announcebar');
const announcebarBtn = document.querySelector('.announcebar__btn');
const navbar = document.querySelector('.navbar');
// remove announcebar if its clicked
announcebarBtn.addEventListener('click', function(e) {
  e.preventDefault();
  announcebar.remove();
})

window.addEventListener('scroll', function() {
  if(!window.scrollY) {
    navbar.style.backgroundColor = 'transparent';
  }
  else {
    navbar.style.backgroundColor = '#202328';
  }
});