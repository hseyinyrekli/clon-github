class UI {
  constructor() {
    this.allProfile = document.getElementById("shownInfos");
    this.messages = document.getElementById("messages");
  }

  showError(message) {
    const div = document.createElement("div");
    div.classList.add("notifications");
    div.textContent = message;
    this.messages.appendChild(div);
    setTimeout(() => {
      div.remove();
    }, 2000);
  }

  showInfos(user) {
    this.allProfile.innerHTML = `
    <div class="row">
            <div class="col-md-4" id="bio">
              <a href="${user.html_url}" target="_blank">
                <img
                  id="avatar"
                  class="img-fluid m-4"
                  src="${user.avatar_url}"
                />
              </a>
              <div class="infos">
              <button id="follow">
              Followers <span id="followers">${user.followers}</span>
               </button>
              <button id="follow">Follows <span id="follows">${user.following}</span></button>
             <button id="follow">Repos <span id="repos">${user.public_repos}</span></button>
       
                <div id="fullName"><strong>${user.name}</strong></div>
                <hr />
                <div id="bio">${user.bio}</div>
                <br />
              </div>
            </div>
            <div id="list" class="col-md-6">
              <br />
              <div class="list-group">
                <li class="list-group-item borderzero">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16">
                <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z"/>
              </svg>
                 <span id="company">${user.company}</span>
                </li>
                <br />
                <li class="list-group-item borderzero">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
              </svg>
                  <span id="Location">${user.location}</span>
                </li>
                <br />
              </div>
            </div>
          </div>
    `;
  }
}
