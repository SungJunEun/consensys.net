const body = document.querySelector('body');
const announcebar = document.querySelector('.announcebar');
const announcebarBtn = document.querySelector('.announcebar__btn');
const navbar = document.querySelector('.navbar');
const navbarBtns = document.querySelector('.navbar__btns');
const searchPage = document.querySelector('.search__page');
const serachPageBtn = document.querySelector('.search__page__btn');
const loginPage = document.querySelector('.login__page');
const overlay = document.querySelector('.overlay');

let visibility = false;
// remove announcebar if its clicked
announcebarBtn.addEventListener('click', function(e) {
  e.preventDefault();
  announcebar.remove();
  navbar.style.top = '0px';
})
//scroll event handle
window.addEventListener('scroll', function() {
  if(!window.scrollY) {
    navbar.style.backgroundColor = 'transparent';
  }
  else {
    navbar.style.backgroundColor = '#202328';
  }
});

//navbar button click event
navbarBtns.addEventListener('click', function(e) {
  let id = e.target.id;
  if(e.target.tagName == 'I') {
    id = e.target.parentNode.id;
  }
  if(!id) {
    return;
  }
  else if(id == "search") {
    searchPage.style.display = "inline-block";
    body.style.overflow = "hidden";
  }
  else if(id == "login") {
    loginPage.classList.add('visible');
    body.style.overflow = "hidden";
    overlay.classList.add('visible');
    visibility = true;
  }
});

//close search page
serachPageBtn.addEventListener('click', function() {
  searchPage.style.display = "none";
});

//close login page
overlay.addEventListener('click', function() {
  if(visibility) {
    loginPage.classList.remove('visible');
    overlay.classList.remove('visible');
    visibility = false;
  }
});
