const projectsArray = [
  {
    name: 'Creative Engineers Website',
    description: 'building the Home and About pages of a fantasy engineering services company website that tries to advertise and attract engineering students to join our upcoming job fair. the website design is suitable for mobile and Desktop devices. built with HTML, CSS, and Plain JavaScript hit it with a star if you liked it',
    'featured image': ['images/creativeEngineersDesktop.png', 'images/creativeEngineersMobile.jpeg'],
    technologies: ['HTML', 'GitHub', 'Javasript', 'CSS', 'Terminal', 'Codepen'],
    'link to live version': 'https://mohamed20163858.github.io/create_engineers_website/',
    'link to source': 'https://github.com/mohamed20163858/create_engineers_website',
  },
  {
    name: 'Nazmaly',
    description: 'Welcome to Nazmaly, the ultimate money transaction app for professionals. With Nazmaly, you can easily and securely manage all your financial transactions in one place. Our user-friendly interface and advanced security features make it simple and safe to send and receive payments, view transaction history, and manage your digital wallet.',
    'featured image': ['images/nazmaly.png', 'images/nazmaly.png'],
    technologies: ['Ruby', 'Git', 'GitHub', 'Ruby on Rails', 'Bootstrap', 'Terminal', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    'link to live version': 'https://nazamly-qx3o.onrender.com/',
    'link to source': 'https://github.com/mohamed20163858/capstone-app/tree/demo',
  },
  {
    name: 'Movie App',
    description: 'Discover your next favorite movie with our app. Our platform fetches real-time data from a movie API to bring you the latest and greatest in cinema. Browse through our extensive collection and find the perfect film for any mood. With our like and dislike feature, you can easily keep track of the movies you love and the ones you’d rather skip.',
    'featured image': ['images/movieApp.png', 'images/movieApp.png'],
    technologies: ['HTML', 'GitHub', 'Javasript', 'CSS', 'Terminal', 'AJAX'],
    'link to live version': 'http://cryptoova.me/MovieApp/dist/index.html',
    'link to source': 'https://github.com/OmarMWarraich/MovieApp',
  },
  {
    name: 'Space Travelers’Hub',
    description: 'build a space travel service site to enable users to reserve tickets in upcoming rockets trips or even joining spacex missions to the outside space for the sake of expolration and having fun.',
    'featured image': ['images/spacex.png', 'images/spacex.png'],
    technologies: ['HTML', 'GitHub', 'Javasript', 'CSS', 'React', 'React Router', 'Redux', 'Jest'],
    'link to live version': 'https://spacex-traveles-hub.netlify.app/',
    'link to source': 'https://github.com/mohamed20163858/spacex-traveles-hub',
  },
  {
    name: 'weather-and-air-pollution',
    description: "create Weather and Air Pollution App to get the recent weather and air pollution analytics for any city around the globe. the app idea is based on getting the countries, cities, flags, and geocoding information from countries and cities API and then using the geocoding info for each selected city through the app to get the weather API and air pollution API. all credits of the design style idea belongs to Nelson Sakwa. the web app consists of 2 pages:- the home page is a page consisting of a list of countries' capital cards when clicking any card it will redirect you to a details page that contains information about the selected city, latitude, and longitude city info, current city temperature and current air pollution level. you can as well use the search bar in the home page to search about any city by wrtiting country then , then city then press enter it will pop up the filtered results.",
    'featured image': ['images/air.png', 'images/air.png'],
    technologies: ['HTML', 'GitHub', 'Javasript', 'CSS', 'React', 'React Router', 'Redux', 'Jest', 'AJAX'],
    'link to live version': 'https://project-weather-and-air-pollution.netlify.app/',
    'link to source': 'https://github.com/mohamed20163858/weather-and-air-pollution',
  },
  {
    name: 'Rails Blog App',
    description: 'Build a Blog project ruby App to enable users to create posts, giving likes and writes comments or using it as API endpoint for their own applications.',
    'featured image': ['images/blog.png', 'images/blog.png'],
    technologies: ['Ruby', 'Git', 'GitHub', 'Ruby on Rails', 'Bootstrap', 'Terminal', 'PostgreSQL', 'HTML', 'CSS', 'JavaScript'],
    'link to live version': 'https://rails-blog-nhes.onrender.com/',
    'link to source': 'https://github.com/mohamed20163858/rails_blog/tree/demo',
  },
];
const portfolio = document.querySelector('#portoflio');
const popup = document.createElement('div');
const main1 = document.querySelector('main');
const header1 = document.querySelector('header');
popup.classList.add('project-pop-up-window');
let index;
popup.innerHTML = `
        <div>
            <img src="images/closeDesktop.png" alt="close-icon">
            <div class="close-item">
                <img src="images/closeWhite.png" alt="close-icon">
            </div>
            <h2></h2>
            <ul>
            </ul>
            <p></p>
            <div class="buttons">
                <button type="submit" class="button-style">See Live <img src="images/live.png" alt="live-icon"></button>
                <button type="submit" class="button-style">See Source <img src="images/githubWhite.png" alt="github-icon"></button>
            </div>
    `;
popup.classList.add('hidden');
document.body.appendChild(popup);
function addPopupWindow() {
  popup.classList.remove('hidden');
  main1.style.opacity = 0.1;
  header1.style.opacity = 0.1;
}
function closePopupWindow() {
  popup.classList.add('hidden');
  main1.style.opacity = 1;
  header1.style.opacity = 1;
}
function redirectLive(index) {
  window.location.href = projectsArray[index]['link to live version'];
}

function redirectSource(index) {
  window.location.href = projectsArray[index]['link to source'];
}
function checkWindowSize() {
  const backgroundImage = document.querySelector('.project-pop-up-window .close-item');
  if (window.innerWidth < 768) {
    backgroundImage.style.backgroundImage = `url(${projectsArray[index]['featured image'][1]})`;
  } else {
    backgroundImage.style.backgroundImage = `url(${projectsArray[index]['featured image'][0]})`;
  }
}
function popupWindowAction(index) {
  addPopupWindow();
  const h2 = document.querySelector('.project-pop-up-window h2');
  const p = document.querySelector('.project-pop-up-window p');
  const ulPopup = document.querySelector('.project-pop-up-window ul');
  const backgroundImage = document.querySelector('.project-pop-up-window .close-item');
  const button1 = document.querySelector('.project-pop-up-window .buttons button:first-of-type');
  const button2 = document.querySelector('.project-pop-up-window .buttons button:last-of-type');
  const x = matchMedia('(max-width: 767px)');
  if (x.matches) {
    backgroundImage.style.backgroundImage = `url(${projectsArray[index]['featured image'][1]})`;
  } else {
    backgroundImage.style.backgroundImage = `url(${projectsArray[index]['featured image'][0]})`;
  }
  backgroundImage.style.backgroundPosition = 'center';
  backgroundImage.style.backgroundSize = 'cover';
  h2.textContent = projectsArray[index].name;
  p.textContent = projectsArray[index].description;
  ulPopup.innerHTML = '';
  for (let j = 0; j < projectsArray[index].technologies.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = projectsArray[index].technologies[j];
    ulPopup.appendChild(li);
  }
  const close1 = document.querySelector('.project-pop-up-window > div > img');
  const close2 = document.querySelector('.project-pop-up-window > div > div > img');
  close1.addEventListener('click', closePopupWindow);
  close2.addEventListener('click', closePopupWindow);
  button1.addEventListener('click', () => redirectLive(index));
  button2.addEventListener('click', () => redirectSource(index));
  window.addEventListener('resize', checkWindowSize);
}
for (let i = 0; i < projectsArray.length; i += 1) {
  index = i;
  const card = document.createElement('div');
  const cardDetials = document.createElement('div');
  const h3 = document.createElement('h3');
  const ul = document.createElement('ul');
  const button = document.createElement('button');
  const img = document.createElement('img');
  img.classList.add('img-resize');
  const featuredImageArray = projectsArray[i]['featured image'];
  const [featuredImageSrc] = featuredImageArray;
  img.src = featuredImageSrc;
  button.classList.add('button-style');
  button.textContent = 'See Project';
  card.classList.add('card', 'container-2');
  cardDetials.classList.add('project-details');
  h3.textContent = projectsArray[i].name;
  for (let j = 0; j < projectsArray[i].technologies.length; j += 1) {
    const li = document.createElement('li');
    li.textContent = projectsArray[i].technologies[j];
    ul.appendChild(li);
  }
  cardDetials.appendChild(h3);
  cardDetials.appendChild(ul);
  cardDetials.appendChild(button);
  card.appendChild(img);
  card.appendChild(cardDetials);
  portfolio.appendChild(card);
  button.addEventListener('click', () => popupWindowAction(i));
}