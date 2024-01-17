export const jumpToDown = () =>
  setTimeout(() => {
    document.getElementById("bottom")?.scrollIntoView({ behavior: "smooth" });
  }, 10);
