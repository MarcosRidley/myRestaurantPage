import logo from "../src/logo.png"

export function writeRestaurantDescription(whichDiv, whichText, isHours = false){
    const div = document.createElement("div");
    const p = document.createElement("p");
    if(whichText == "Mario's Fine Burguer") {
        const restaurantLogo = document.createElement("img")
        restaurantLogo.src = logo
        div.appendChild(restaurantLogo);
    }
    p.textContent = whichText
    div.appendChild(p);
    whichDiv.appendChild(div)
    if(isHours === true){
        writeWorkingHours(div)
    }

}


function writeWorkingHours(whichDiv) {
    const workingHours = ["Segunda-feira: 18:30 - 23:30", "Terça-feira: 18:30 - 23:30", "Quarta-feira: 18:30 - 23:30", "Quinta-feira: 18:30 - 23:30", "Sexta-Feira: 18:30 - 23:30", "Sábado: Fechado", "Domingo: Fechado"];
 for(let i = 0; i < workingHours.length; i++) {
    const p = document.createElement("p");
    p.classList.add("workingHours")
    p.textContent = workingHours[i];
    whichDiv.appendChild(p)
 }
}