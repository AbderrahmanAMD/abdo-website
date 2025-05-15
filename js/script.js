// page title
document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    document.title = 'Portfolio | Swaraj Thakre';
    document.querySelector("link[rel*='icon']").href =
      './assets/images/img/favicon.png';
  } else {
    document.title = 'Come Back To Portfolio';
    document.querySelector("link[rel*='icon']").href =
      './assets/images/img/favhand.png';
  }
});

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth',
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.navbar a');

  links.forEach((link) => {
    link.addEventListener('click', () => {
      links.forEach((otherLink) => {
        otherLink.classList.remove('active');
      });
      link.classList.add('active');
    });
  });

  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute('id');
      }
    });

    links.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

// navbar toggle
function initializeNavbarToggle() {
  const menu = document.querySelector('#menu');
  const navbar = document.querySelector('.navbar');

  menu.addEventListener('click', () => {
    console.log('Menu clicked');
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
  });
}
document.addEventListener('DOMContentLoaded', initializeNavbarToggle);

// typed js effect starts
document.addEventListener('DOMContentLoaded', function () {
  var typed = new Typed('#typing-text', {
    strings: ['frontend development', 'web designing', 'web development'],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
  });
});

// Skills data from json file
async function fetchSkills() {
  try {
    const response = await fetch('./assets/json/skills.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    return [];
  }
}

function loadSkills(skill) {
  let skills = document.getElementById('skillsContainer');
  let data = '';
  skill.forEach((skill) => {
    data += `<div class="bar">
      <div class="info">
        <img src="${skill.icon}" alt="${skill.name}" />
        <span>${skill.name}</span>
      </div>
    </div>`;
  });
  skills.innerHTML = data;
}

fetchSkills().then((skill) => {
  loadSkills(skill);
});

async function fetchProjects() {
  try {
    const response = await fetch('./assets/json/projects.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}

// Projects data from json file
function loadProjects(project) {
  let projects = document.getElementById('projectsContainer');
  let data = '';
  project.forEach((project) => {
    data += `<div class="projects" data-tilt>
      <div class="project-image">
      <img src="${project.image}" alt="${project.name}" />
      </div>
      <div class="project-info">
        <h3>${project.name}</h3>
        <p>${project.description}</p>
        <div class="project-links">
        <a href="${project.url}" target="_blank">View Project</a>
        <a href="${project.github}" target="_blank">View Code</a>
        </div>
      </div>
    </div>`;
  });
  projects.innerHTML = data;
}

fetchProjects().then((project) => {
  loadProjects(project);
});
