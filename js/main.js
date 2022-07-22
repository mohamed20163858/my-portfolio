const menu = document.querySelector('header nav img');
const main = document.querySelector('main');
const header = document.querySelector('header');
const ul = document.createElement('ul');
ul.classList.add('menu-decoration', 'hidden');
ul.innerHTML = `
<img src="images/Close.png" alt="close-icon">
<li><a href="#portoflio">Portoflio</a></li>
<li><a href="#about">About</a></li>
<li><a href="#contact">Contact</a></li>`;
document.body.appendChild(ul);
function addMenu() {
  ul.classList.remove('hidden');
  main.classList.add('hidden');
  header.classList.add('hidden');
}
function removeMenu() {
  ul.classList.add('hidden');
  main.classList.remove('hidden');
  header.classList.remove('hidden');
}
function menuAction() {
  addMenu();
  const closeTab = document.querySelector('.menu-decoration img');
  const listItems = document.querySelectorAll('.menu-decoration li');
  for (let i = 0; i < listItems.length; i += 1) {
    const li = listItems[i];
    li.addEventListener('click', removeMenu);
  }
  closeTab.addEventListener('click', removeMenu);
}
menu.addEventListener('click', menuAction);
