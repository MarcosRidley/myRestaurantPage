import { content } from "./index.js";
import { generateHome } from "./generateHome.js";
import { generateMenu } from "./GenerateMenu.js";
import { homeDiv } from "./generateHome.js";
import { generateContact } from "./generateContact.js";

export function generateHeader() {
const header = document.createElement("header");
const homeButton = document.createElement("button");
homeButton.textContent = "Home"
const menuButton = document.createElement("button");
menuButton.textContent = "Cardápio"
const contactButton = document.createElement("button");
contactButton.textContent = "Contato"
header.appendChild(homeButton);
header.appendChild(menuButton);
header.appendChild(contactButton);
homeButton.addEventListener("click", generateHome);
menuButton.addEventListener("click", generateMenu);
contactButton.addEventListener("click", generateContact);
content.appendChild(header);
return homeButton, menuButton, contactButton
}