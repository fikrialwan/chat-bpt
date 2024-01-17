export const jumpToDown = () =>
  setTimeout(() => {
    document.getElementById("bottom")?.scrollIntoView({ behavior: "smooth" });
    document.getElementsByTagName("textarea")[0].focus();
  }, 10);
