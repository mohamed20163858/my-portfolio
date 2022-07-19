const projectsArray=[
    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        'featured image': ['images/projectDesktop.png','images/projectMobile.png'],
        technologies: ['Codekit','GitHub','Javasript','Bootstrap','Terminal','Codepen'] ,
        'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
        'link to source': 'https://github.com/mohamed20163858/my-portfolio'
    },
    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        'featured image': ['images/projectDesktop.png','images/projectMobile.png'],
        technologies: ['Codekit','GitHub','Javasript','Bootstrap','Terminal','Codepen'] ,
        'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
        'link to source': 'https://github.com/mohamed20163858/my-portfolio'
    },
    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        'featured image': ['images/projectDesktop.png','images/projectMobile.png'],
        technologies: ['Codekit','GitHub','Javasript','Bootstrap','Terminal','Codepen'] ,
        'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
        'link to source': 'https://github.com/mohamed20163858/my-portfolio'
    },
    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        'featured image': ['images/projectDesktop.png','images/projectMobile.png'],
        technologies: ['Codekit','GitHub','Javasript','Bootstrap','Terminal','Codepen'] ,
        'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
        'link to source': 'https://github.com/mohamed20163858/my-portfolio'
    },
    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        'featured image': ['images/projectDesktop.png','images/projectMobile.png'],
        technologies: ['Codekit','GitHub','Javasript','Bootstrap','Terminal','Codepen'] ,
        'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
        'link to source': 'https://github.com/mohamed20163858/my-portfolio'
    },
    {
        name: 'Keeping track of hundreds of components',
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
        'featured image': ['images/projectDesktop.png','images/projectMobile.png'],
        technologies: ['Codekit','GitHub','Javasript','Bootstrap','Terminal','Codepen'] ,
        'link to live version': 'https://mohamed20163858.github.io/my-portfolio/',
        'link to source': 'https://github.com/mohamed20163858/my-portfolio'
    }  
];
const portfolio = document.querySelector('#portoflio');
for (let i=0; i<projectsArray.length;i += 1 )
{
    let card=document.createElement('div');
    let cardDetials=document.createElement('div');
    let h3=document.createElement('h3');
    let ul=document.createElement('ul');
    let button=document.createElement('button');
    button.classList.add('button-style');
    button.textContent='See Project';
    card.classList.add('card','container-2');
    cardDetials.classList.add('project-details');
    h3.textContent=projectsArray[i].name;
    for (let j=0;j<projectsArray[i].technologies.length;j += 1)
    {
        let li=document.createElement('li');
        li.textContent=projectsArray[i].technologies[j];
        ul.appendChild(li);
    }
    cardDetials.appendChild(h3);
    cardDetials.appendChild(ul);
    cardDetials.appendChild(button);
    card.appendChild(cardDetials);
    console.log(card);
    portfolio.appendChild(card);
}