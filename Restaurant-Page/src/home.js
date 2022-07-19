function createHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  home.appendChild(createParagraph("Best pizza in your country"));
  home.appendChild(createParagraph("Made with Love since 2000"));
  home.appendChild(chefImage);
  home.appendChild(createParagraph("Order online or visit us!"));

  return home;
}

function createParagraph(text) {
  const paragraph = document.createElement("p");
  paragraph.textContent = text;
  return paragraph;
}

function loadHome() {
  const main = document.getElementById("main");
  main.textContent = "";
  main.appendChild(createHome());
}

export default loadHome;
