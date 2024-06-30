const imgElement = document.getElementById("github-img");
const introElement = document.getElementById("github-intro");
const aboutMeButton = document.getElementById('about-me-button');
const aboutMeBlurb = document.getElementById('about-me-blurb');
const gitHubIntro = document.getElementById('github-intro');
const resumeLinkContainer =  document.getElementById('resume-link-container');
const open = document.getElementById('contact-modal-open');
const modalContainer = document.getElementById('contact-modal-container');
const send= document.getElementById('contact-modal-send');
const close = document.getElementById('contact-modal-close')

fetchGitHubUserInfo();

//Fetching Info from Github
async function fetchGitHubUserInfo() {
  try {
    const response = await fetch(`https://api.github.com/users/ben-woodard`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const userInfo = await response.json();
    console.log(userInfo);

    //Add github image to page
    const profileImg = document.createElement("img");
    profileImg.src = userInfo.avatar_url;
    profileImg.alt = `${userInfo.login}'s avatar`;
    imgElement.appendChild(profileImg);
    //Add intro to page
    const githubIntro = document.createElement("h3");
    githubIntro.innerHTML = userInfo.bio;
    introElement.appendChild(githubIntro);
    return userInfo;
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
}

//About Me Section Visible
aboutMeButton.addEventListener("click", () => {
  aboutMeBlurb.classList.toggle('show');
  gitHubIntro.classList.toggle('none');
  resumeLinkContainer.classList.toggle('adjust');
})

//Contact Modal Container

open.addEventListener('click', () => {
  modalContainer.classList.add('show');
});

send.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

close.addEventListener('click', () => {
  modalContainer.classList.remove('show');
});

