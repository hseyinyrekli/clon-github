const githubForm = document.getElementById("github-form");
const ınput = document.getElementById("githubname");
const deleteButton = document.getElementById("deleteButton");
const showInfo = document.getElementById("shownInfos");
const github = new Github();
const ui = new UI();
eventListeners();

function eventListeners() {
  githubForm.addEventListener("submit", getData);
  deleteButton.addEventListener("click", deleteInfo);
}
function getData(e) {
  let username = ınput.value.trim();
  if (username === "") {
    ui.showError("Please Enter a Valid Name! ");
  } else {
    github
      .getGithubData(username)
      .then((response) => {
        if (response.user.message === "Not Found") {
          ui.showError("User not found!");
        } else {
          ui.showInfos(response.user);
          document
            .getElementById("deleteButton")
            .setAttribute("style", "display: inline-block;");
        }
      })
      .catch((err) => {
        ui.showError(err);
      });
  }

  e.preventDefault();
}
function deleteInfo() {
  showInfo.remove();
}
