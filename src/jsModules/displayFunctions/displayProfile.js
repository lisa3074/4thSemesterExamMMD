export function displayProfile(userId) {
  console.log("jsModules || displayProfile.js | displayProfile()");
  document.querySelector(".ViewProfile").classList.remove("hide");
  document.querySelector(".ViewProfile").setAttribute("data-user", userId);
  document.querySelector(".UserList").classList.add("hide");
  if (window.innerWidth < 1000) {
    document.querySelector(".Menu").classList.add("hide");
    document.querySelector(".MainAdmin").classList.remove("hide");
    document.querySelector(".SubMenu").classList.remove("hide");
    setSubmMenu();
  }
}
export function hidePrivateInfo() {
  console.log("jsModules || displayProfile.js | hidePrivateInfo()");
  document.querySelector(".visibilityOff").classList.add("hide");
  document.querySelector(".visibilityOn ").classList.remove("hide");
  document.querySelector(".Private .info-wrapper").classList.add("hide");
}
export function showPrivateInfo() {
  console.log("jsModules || displayProfile.js | showPrivateInfo()");
  document.querySelector(".visibilityOn").classList.add("hide");
  document.querySelector(".visibilityOff").classList.remove("hide");
  document.querySelector(".Private .info-wrapper").classList.remove("hide");
}
export function setSubmMenu() {
  console.log("jsModules || displayProfile.js | setSubmMenu()");
  document.querySelector(".menuIcon").classList.add("hide");
  document.querySelector(".menuBack").classList.remove("hide");
  document.querySelector(".menuSearch").classList.add("hide");
  document.querySelector(".menuEdit").classList.remove("hide");
  document.querySelector(".newUserIcon").classList.add("hide");
  document.querySelector(".menuDelete").classList.remove("hide");
  document.querySelector(".menuClose").classList.add("hide");
  document.querySelector(".FilterUsers").classList.add("hide");
  document.querySelector(".FilterTasks").classList.add("hide");
}
