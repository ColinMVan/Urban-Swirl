const lightButton = document.querySelector("#light");
const darkButton = document.querySelector("#dark");

lightButton.onclick = () => {
  document.documentElement.style.setProperty("--background", "hsl(0, 0%, 90%)");
};

darkButton.onclick = () => {
  document.documentElement.style.setProperty("--background", "hsl(0, 0%, 8%)");
};
