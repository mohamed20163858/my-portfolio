let menu = document.querySelector('header nav img');
let main = document.querySelector('main');
let header=document.querySelector('header');
menu.addEventListener('click', function() {
    main.classList.add('hidden');
    header.classList.add('hidden');
    let ul=document.createElement('ul');
    ul.classList.add('menu-decoration');
    ul.innerHTML=`
    <img src="images/Close.png" alt="close-icon">
    <li><a href="#portoflio">Portoflio</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>`;
    document.body.appendChild(ul);
});
let ul=document.querySelector('.menu-decoration');
let closeTab=document.querySelector('.menu-decoration img');
closeTab.addEventListener('click',function() {
    ul.classList.add('hidden');
    main.classList.remove('hidden');
    header.classList.remove('hidden');
})