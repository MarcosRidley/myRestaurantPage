import { content } from "./index";
const theRestaurantName = "Mario's Fine Burguer"


import { writeRestaurantDescription } from "./writeRestaurantDescription";

export function generateHome() {
    const homeDiv = document.createElement("div");
    homeDiv.classList.add("centerDiv");
    writeRestaurantDescription(homeDiv,"Mario's Fine Burguer");
    writeRestaurantDescription(homeDiv, "Aqui você preenche o sanduíche da vida com os melhores ingredientes");
    content.appendChild(homeDiv);
    createHours();
    writeRestaurantDescription(homeDiv, "Endereço")
}


function createHours() {
    const workingHoursDiv = document.createElement("div");
    workingHoursDiv.classList.add("centerDiv");
    writeRestaurantDescription(workingHoursDiv, "Horário de funcionamento", true);
    content.appendChild(workingHoursDiv)
}