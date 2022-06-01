var a;
function show_hide() {
  if (a == 1) {
    document.getElementById("hideit").style.display = "inline";

    return (a = 0);
  } else {
    document.getElementById("hideit").style.display = "none";
    return (a = 1);
  }
}

const burger = document.querySelector(".burger");
const mainmenu = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links ul");

burger.addEventListener("click", () => {
  mainmenu.classList.toggle("open");
});
