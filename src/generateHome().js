import { content } from "./index";
const theRestaurantName = "Mario's Fine Burguer"
import { writeRestaurantDescription } from "./writeRestaurantDescription";
let homeExists = false;

export function generateHome() {
    if(homeExists == false) {
        const homeDiv = document.createElement("div");
        homeDiv.classList.add("centerDiv");
        writeRestaurantDescription(homeDiv,theRestaurantName);
        writeRestaurantDescription(homeDiv, "Aqui você preenche o sanduíche da vida com os melhores ingredientes");
        content.appendChild(homeDiv);
        createHours();
        createAddress();
        homeExists = true;
    } else {
        homeDiv.classList.remove("hidden");
    }

}


function createHours() {
    const workingHoursDiv = document.createElement("div");
    workingHoursDiv.classList.add("centerDiv");
    writeRestaurantDescription(workingHoursDiv, "Horário de funcionamento", true);
    content.appendChild(workingHoursDiv)
}

function createAddress() {
    const addressDiv = document.createElement("div");
    addressDiv.classList.add("centerDiv");
    const addressParagraph = document.createElement("p");
    addressParagraph.textContent = "Localização";
    addressDiv.appendChild(addressParagraph)
    const addressMap = document.createElement("div");
    addressMap.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1115.5988013901053!2d-43.983962322781736!3d-19.86481197307746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2d31675716bedacc!2sMario&#39;s%20Fine%20Burguer&#39;s!5e0!3m2!1spt-BR!2sbr!4v1643241718461!5m2!1spt-BR!2sbr" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>'
    addressMap.classList.add("map")
    addressDiv.appendChild(addressMap);
    content.appendChild(addressDiv);
    const addressString = document.createElement("p");
    addressString.textContent = "Avenida Fleming, 1481"
    addressDiv.appendChild(addressString)
}