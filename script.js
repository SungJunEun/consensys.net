const announcebar = document.querySelector('.announcebar');
const announcebarBtn = document.querySelector('.announcebar__btn');

// remove announcebar if its clicked
announcebarBtn.addEventListener('click', function(e) {
  e.preventDefault();
  announcebar.remove();
})