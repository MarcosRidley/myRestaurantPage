import { content } from "./index";
import { writeRestaurantDescription } from "./writeRestaurantDescription";
import { homeDiv } from "./generateHome";
import { contactDiv } from "./generateContact";

const menuDiv = document.createElement("div");
let menuExists = false;

export {menuDiv};
export {menuExists};

export function generateMenu() {
    homeDiv.classList.add("hidden");
    contactDiv.classList.add("hidden");
    if(!menuExists) {
        menuDiv.classList.add("centerDiv");
        const menuIntroductionDiv = document.createElement("div");
        menuIntroductionDiv.classList.add("centerDiv");
        writeRestaurantDescription(menuIntroductionDiv, "Cardápio");
        const menuImage = document.createElement("img");
        menuImage.src="../src/menu.png";
        menuIntroductionDiv.setAttribute("id", "normalAlign")
        menuIntroductionDiv.appendChild(menuImage);
        menuDiv.appendChild(menuIntroductionDiv);
        menuDiv.setAttribute("id", "menuDiv");
        content.appendChild(menuDiv);
        menuExists = true;
        menuDiv.classList.remove("hidden");
    } else {
        menuDiv.classList.remove("hidden");
    }
    
}


// export function generateHome() {
//     if(homeExists == false) {
//         const introductionDiv = document.createElement("div")
//         introductionDiv.classList.add("centerDiv");
//         writeRestaurantDescription(introductionDiv,theRestaurantName);
//         writeRestaurantDescription(introductionDiv, "Aqui você preenche o sanduíche da vida com os melhores ingredientes");
//         homeDiv.appendChild(introductionDiv);
//         createHours();
//         createAddress();
//         homeExists = true;
//         content.appendChild(homeDiv)
//     } else {
//         homeDiv.classList.remove("hidden");
//     }

// }