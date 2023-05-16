{
   const welcome = () => {
      console.log("Witam wszystkich developerów");
   };
   const toggleBackground = () => {
      const mainElement = document.querySelector(".js-main");
      const themeName = document.querySelector(".js-buttonThemeName")
      mainElement.classList.toggle("js-mainChangeBgCol");
      themeName.innerText = mainElement.classList.contains("js-mainChangeBgCol") ? "jasny" : "ciemny";
   };
   const init = () => {
      const button = document.querySelector(".button");
      button.addEventListener("click", toggleBackground);
      welcome();
   };
   init();
};