const menu = document.querySelector('.menu-btn');
const body = document.querySelector('.body');

menu.addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('active');
});

document.addEventListener('scroll', () => {
  document.querySelector('.menu').classList.remove('active');
});
