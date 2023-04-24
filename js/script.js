console.log("czesc")
let button = document.querySelector(".button");
let mainElement = document.querySelector(".main");
let themeName = document.querySelector(".button__themeName")

button.addEventListener("click", () => {
   mainElement.classList.toggle("mainChangeBgCol");
   themeName.innerText = mainElement.classList.contains("mainChangeBgCol") ? "jasny" : "ciemny";
});
