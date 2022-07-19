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
menu.addEventListener('click', function () {
  ul.classList.remove('hidden');
  main.classList.add('hidden');
  header.classList.add('hidden');
  let closeTab=document.querySelector('.menu-decoration img');
  let listItems=document.querySelectorAll('.menu-decoration li');
  for(let i=0; i<listItems.length;++i)
    {
        let li=listItems[i];
        li.addEventListener('click',function() {
            ul.classList.add('hidden');
            main.classList.remove('hidden');
            header.classList.remove('hidden');
            });
    }
  closeTab.addEventListener('click',function() {
  ul.classList.add('hidden');
  main.classList.remove('hidden');
  header.classList.remove('hidden');
  }); 
});
