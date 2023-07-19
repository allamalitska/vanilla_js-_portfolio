const GITHUB_URL = "https://api.github.com/users/";
let GITHUB_USERNAME = "allamalitska";
let githubInfo = GITHUB_URL + GITHUB_USERNAME;

fetch(githubInfo)
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("portfolio-img").src = data.avatar_url;
    document.getElementById("title").textContent = data.login;
  });
