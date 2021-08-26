window.addEventListener("DOMContentLoaded", function () {
  const light = "Switch theme",
    dark = "Switch theme";
  const LIGHT = "light",
    DARK = "dark";

  let preferredTheme;
  const storedTheme = localStorage.theme;
  if (storedTheme) {
    preferredTheme = storedTheme;
  } else if (window.matchMedia) {
    preferredTheme = window.matchMedia("(prefers-color-scheme: light)")
      ? LIGHT
      : DARK;
  } else {
    preferredTheme = LIGHT;
  }

  const themeSwitcher = document.getElementById("theme-switcher");

  themeSwitcher.innerHTML = localStorage.theme === LIGHT ? light : dark;

  themeSwitcher.addEventListener("click", function () {
    const currentTheme = localStorage.theme,
      newTheme = currentTheme === LIGHT ? DARK : LIGHT,
      { classList } = document.querySelector("html"),
      text = newTheme === LIGHT ? light : dark;
    classList.remove(currentTheme);
    classList.add(newTheme);
    localStorage.theme = newTheme;
    themeSwitcher.innerHTML = text;
  });
});
