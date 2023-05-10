{
   const welcome = () => {
      console.log("Witam wszystkich developerów");
   };
   const toggleBackground = () => {
      const mainElement = document.querySelector(".main");
      const themeName = document.querySelector(".button__themeName")
      mainElement.classList.toggle("mainChangeBgCol");
      themeName.innerText = mainElement.classList.contains("mainChangeBgCol") ? "jasny" : "ciemny";
   };
   const init = () => {
      const button = document.querySelector(".button");
      button.addEventListener("click", toggleBackground);
      welcome();
   };
   init();
};