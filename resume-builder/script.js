'use strict';

function addProfile() {
  let inputNode1 = document.createElement('input');
  inputNode1.classList.add('input');
  inputNode1.classList.add('profileName');
  inputNode1.setAttribute('type', 'text');
  inputNode1.setAttribute('name', 'profile');
  inputNode1.setAttribute('placeholder', 'Hackerrank');

  let inputNode2 = document.createElement('input');
  inputNode2.classList.add('input');
  inputNode2.classList.add('profileLink');
  inputNode2.setAttribute('type', 'url');
  inputNode2.setAttribute('name', 'profile');
  inputNode2.setAttribute('placeholder', 'Link to profile');

  const profileName = document.querySelector('#profileName');
  const profileLink = document.querySelector('#profileLink');
  profileName.appendChild(inputNode1);
  profileLink.appendChild(inputNode2);
  console.log(`sjdfh`);
}

function addEducation() {
  const stream = document.querySelector('#stream');
  const college = document.querySelector('#college');
  const time = document.querySelector('#time');

  let newNode1 = document.createElement('input');
  newNode1.setAttribute('type', 'text');
  newNode1.classList.add('input');
  newNode1.setAttribute('name', 'stream');
  newNode1.classList.add('stream');
  newNode1.setAttribute('placeholder', 'Upto Class 10');

  stream.appendChild(newNode1);

  let newNode2 = document.createElement('input');
  newNode2.setAttribute('type', 'text');
  newNode2.classList.add('input');
  newNode2.setAttribute('name', 'college');
  newNode2.classList.add('college');
  newNode2.setAttribute('placeholder', 'DAV');

  college.appendChild(newNode2);

  let newNode3 = document.createElement('input');
  newNode3.setAttribute('type', 'text');
  newNode3.classList.add('input');
  newNode3.setAttribute('name', 'time');
  newNode3.classList.add('time');
  newNode3.setAttribute('placeholder', '2007-2017');

  time.appendChild(newNode3);
}

function addSkills() {
  const skills = document.querySelector('#skills');

  let newNode = document.createElement('input');
  newNode.setAttribute('type', 'text');
  newNode.classList.add('input');
  newNode.setAttribute('name', 'skills');
  newNode.classList.add('skills');
  newNode.setAttribute('placeholder', 'Enter Skill/Certification name');

  skills.appendChild(newNode);
}

function addExperience() {
  const experience = document.querySelector('#experience');

  let newNode = document.createElement('input');
  newNode.setAttribute('type', 'text');
  newNode.classList.add('input');
  newNode.setAttribute('name', 'experienceTitle');
  newNode.classList.add('experienceTitle');
  newNode.setAttribute('placeholder', 'Enter Title');

  experience.appendChild(newNode);

  newNode = document.createElement('input');
  newNode.setAttribute('type', 'text');
  newNode.classList.add('input');
  newNode.setAttribute('name', 'experienceDuration');
  newNode.classList.add('experienceDuration');
  newNode.setAttribute('placeholder', 'Enter duration and place');

  experience.appendChild(newNode);

  newNode = document.createElement('textarea');
  newNode.classList.add('input');
  newNode.setAttribute('name', 'experienceDesc');
  newNode.classList.add('experienceDesc');
  newNode.setAttribute('placeholder', 'Short description');

  experience.appendChild(newNode);
}

function addProjects() {
  const projects = document.querySelector('#projects');

  let newNode = document.createElement('input');
  newNode.setAttribute('type', 'text');
  newNode.classList.add('input');
  newNode.setAttribute('name', 'projectsTitle');
  newNode.classList.add('projectsTitle');
  newNode.setAttribute('placeholder', 'Enter Title');

  projects.appendChild(newNode);

  newNode = document.createElement('textarea');
  newNode.classList.add('input');
  newNode.setAttribute('name', 'projectsDesc');
  newNode.classList.add('projectsDesc');
  newNode.setAttribute('placeholder', 'Short description');

  projects.appendChild(newNode);
}

function addAchievements() {
  const achievements = document.querySelector('#achievements');

  let newNode = document.createElement('input');
  newNode.setAttribute('type', 'text');
  newNode.classList.add('input');
  newNode.setAttribute('name', 'achievements');
  newNode.classList.add('achievements');
  newNode.setAttribute('placeholder', 'Next achievement');

  achievements.appendChild(newNode);
}

function addClubs() {
  const clubs = document.querySelector('#clubs');

  let newNode = document.createElement('input');
  newNode.setAttribute('type', 'text');
  newNode.classList.add('input');
  newNode.setAttribute('name', 'clubs');
  newNode.classList.add('clubs');
  newNode.setAttribute('placeholder', 'Next Experience');

  clubs.appendChild(newNode);
}

// ==== MANIPULATION ====
function generateCv() {
  console.log('generateCv clicked');
  // ==== values from form ====
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const mail = document.getElementById('mail').value;
  const phone = document.getElementById('phNumber').value;
  /* PROFILE */
  const profileNames = document.getElementsByClassName('profileName');
  const profileLinks = document.getElementsByClassName('profileLink');
  /* EDUCATION */
  const streams = document.getElementsByClassName('stream');
  const colleges = document.getElementsByClassName('college');
  const times = document.getElementsByClassName('time');
  /* SKILLS */
  const skills = document.getElementsByClassName('skills');
  /* EXPERIENCE */
  const experienceTitles = document.getElementsByClassName('experienceTitle');
  const experienceDurations =
    document.getElementsByClassName('experienceDuration');
  const experienceDescriptions =
    document.getElementsByClassName('experienceDesc');
  /* PROJECTS */
  const projectTitles = document.getElementsByClassName('projectsTitle');
  const projectDescriptions = document.getElementsByClassName('projectsDesc');
  /* ACHIEVEMENTS */
  const achievements = document.getElementsByClassName('achievements');
  /* CLUBS */
  const clubs = document.getElementsByClassName('clubs');
  /* PHOTO */
  const photo = document.getElementById('photo');

  // ==== references to resume elements ====
  // textContent
  const reName = document.getElementById('home__title');
  const reMail = document.getElementById('home__mail');
  const rePhone = document.getElementById('home__phone');
  // html element
  const reProfiles = document.getElementById('profile__container');
  const reEducations = document.getElementById('education__container');
  const reSkills = document.getElementById('skills__data');
  const reExperiences = document.getElementById('experience__container');
  const reProjects = document.getElementById('projects__container');
  const reAchievements = document.getElementById('achievements__data');
  const reClubs = document.getElementById('clubs__data');
  // src
  const rePhoto = document.getElementById('home__img');

  // ===== Linking form and resume ====
  reName.innerHTML = `<b>${fname}</b> ${lname}`;
  reMail.textContent = mail;
  rePhone.textContent = phone;

  /* PROFILES */
  let str = '';
  for (let i = 0; i < profileNames.length; i++) {
    str += `<a href=${profileLinks[i].value} target="_blank" class="profile__link">
    <i class="bx bx-hash profile__icon"></i>${profileNames[i].value}
  </a>`;
  }
  reProfiles.innerHTML = str;

  /* EDUCATION */
  str = '';
  for (let i = 0; i < streams.length; i++) {
    if (i != streams.length - 1) {
      str += `<div class="education__content">
    <div class="education__dot">
      <div class="education__rounder"></div>
      <div class="education__line"></div>
    </div>
    <div class="education__data bd-grid">
      <h3 class="education__stream">${streams[i].value}</h3>
      <span class="education__college">${colleges[i].value}</span>
      <span class="education__time">${times[i].value}</span>
    </div>
  </div>`;
    } else {
      str += `<div class="education__content">
    <div class="education__dot">
      <div class="education__rounder"></div>
    </div>
    <div class="education__data bd-grid">
      <h3 class="education__stream">${streams[i].value}</h3>
      <span class="education__college">${colleges[i].value}</span>
      <span class="education__time">${times[i].value}</span>
    </div>
  </div>`;
    }
  }
  reEducations.innerHTML = str;

  /* SKILLS */
  str = '';
  for (let i = 1; i < skills.length - 1; i++) {
    str += `<li class="skills__name">
    <span class="skills__circle"></span>${skills[i].value}</li>`;
  }
  reSkills.innerHTML = str;

  /* EXPERIENCE */
  str = '';
  for (let i = 0; i < experienceTitles.length; i++) {
    if (i != experienceTitles.length - 1) {
      str += `<div class="experience__content">
      <div class="experience__dot">
        <div class="experience__rounder"></div>
        <div class="experience__line"></div>
      </div>
      <div class="experience__data bd-grid">
        <h3 class="experience__title">${experienceTitles[i].value}</h3>
        <span class="experience__duration">${experienceDurations[i].value}</span>
        <p class="experience__description">${experienceDescriptions[i].value}
        </p>
      </div>
    </div>`;
    } else {
      str += `<div class="experience__content">
      <div class="experience__dot">
        <div class="experience__rounder"></div>
      </div>
      <div class="experience__data bd-grid">
        <h3 class="experience__title">${experienceTitles[i].value}</h3>
        <span class="experience__duration">${experienceDurations[i].value}</span>
        <p class="experience__description">${experienceDescriptions[i].value}
        </p>
      </div>
    </div>`;
    }
  }
  reExperiences.innerHTML = str;

  /* PROJECTS */
  str = '';
  for (let i = 0; i < projectTitles.length; i++) {
    str += `<div class="project__content">
    <h3 class="project__title">${projectTitles[i].value}</h3>
    <p class="project__description">${projectDescriptions[i].value}
    </p>
  </div>`;
  }
  reProjects.innerHTML = str;

  /* ACHIEVEMENTS */
  str = '';
  for (let i = 1; i < achievements.length - 1; i++) {
    str += `<li class="achievements__name">
    <span class="achievements__circle"></span>${achievements[i].value}
  </li>`;
  }
  reAchievements.innerHTML = str;

  /* CLUBS */
  str = '';
  for (let i = 1; i < clubs.length - 1; i++) {
    str += `<li class="clubs__name">
    <span class="clubs__circle"></span>${clubs[i].value}
  </li>`;
  }
  reClubs.innerHTML = str;

  /* PHOTO */
  const file = photo.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  // set image src
  reader.onloadend = function () {
    rePhoto.src = reader.result;
  };

  /* HIDE FORM and SHOW RESUME */
  document.querySelector('.container').classList.add('hidden');
  document.querySelector('.bd-container').classList.remove('hidden');
  document.body.style.background = '#F7F7F7';
}

const generateCvBtn = document.getElementById('submit');
generateCvBtn.addEventListener('click', generateCv);

/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/
function scaleCv() {
  document.body.classList.add('scale-cv');
}

/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/
function removeScale() {
  document.body.classList.remove('scale-cv');
}

/*==================== GENERATE PDF ====================*/
// PDF generated area
const areaCv = document.getElementById('area-cv');
const resumeButton = document.getElementById('resume-button');

// Html2pdf options
const opt = {
  margin: 0,
  filename: 'myResume.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4, dpi: 96 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
};

const opt2 = {
  margin: 0,
  filename: 'myfile.pdf',
  image: { type: 'jpeg', quality: 0.98 },
  html2canvas: { scale: 4, dpi: 72 },
  jsPDF: { format: 'a4', orientation: 'portrait' },
};

// Function to call areaCv and Html2Pdf options
function generateResume() {
  html2pdf(areaCv, opt);
}

// When the button is clicked, it executes the three functions
resumeButton.addEventListener('click', () => {
  // 1. The class .scale-cv is added to the body, where it reduces the size of the elements
  scaleCv();

  // 2. The PDF is generated
  generateResume();

  // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
  setTimeout(removeScale, 5000);
});
