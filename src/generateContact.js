import { content } from "./index";
import { writeRestaurantDescription } from "./writeRestaurantDescription";
import { homeDiv } from "./generateHome";
import { menuDiv } from "./GenerateMenu";

const contactDiv = document.createElement("div");
let contactExists = false;

export {contactDiv}
export {contactExists}

export function generateContact() {
    homeDiv.classList.add("hidden");
    menuDiv.classList.add("hidden");
    if(!contactExists) {
        contactDiv.classList.add("centerDiv");
        const contactIntroductionDivParagraph = document.createElement("div")
        contactIntroductionDivParagraph.classList.add("centerDiv");
        writeRestaurantDescription(contactIntroductionDivParagraph, "Nossas Redes");
        const contactIntroductionDiv = document.createElement("div");
        contactIntroductionDiv.classList.add("centerDiv", "logos");
        
        const wppAnchor = document.createElement("a");
        wppAnchor.classList.add("centerDiv", "transformScale");
        wppAnchor.href = "https://api.whatsapp.com/send?phone=5531992298584&text=Boa noite Mario! Gostaria de fazer um pedido!";
        const whatsappImage = document.createElement("img");
        whatsappImage.src="../src/wpp-logo.svg";
        wppAnchor.appendChild(whatsappImage)
        contactIntroductionDiv.appendChild(wppAnchor);

        const instagramAnchor = document.createElement("a");
        instagramAnchor.classList.add("centerDiv", "transformScale")
        instagramAnchor.href = "https://www.instagram.com/mariosfineburguer/";
        const instagramImage = document.createElement("img");
        instagramImage.src="../src/ig-logo.svg";
        instagramAnchor.appendChild(instagramImage)
        contactIntroductionDiv.appendChild(instagramAnchor);



        const fbAnchor = document.createElement("a");
        fbAnchor.classList.add("centerDiv", "transformScale");
        fbAnchor.href = "https://www.facebook.com/mariosfineburgers/";
        const fbImage = document.createElement("img");
        fbImage.src="../src/fb-logo.svg";
        fbAnchor.appendChild(fbImage);
        contactIntroductionDiv.appendChild(fbAnchor);


        contactDiv.appendChild(contactIntroductionDivParagraph)
        contactDiv.appendChild(contactIntroductionDiv);
        content.appendChild(contactDiv);
        contactExists = true;
        contactDiv.classList.remove("hidden")
    } else {
        contactDiv.classList.remove("hidden");
    }
}