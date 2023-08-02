import {fetchData} from "./fetchData.js";
import startButtons from "./startButtons.js";
import { crewCreatElements } from "./crew.js";
import { destinationCreatElements } from "./destination.js";
import { technologyCreatElements } from "./technology.js";

async function main() {
    await fetchData();
    destinationCreatElements();
    crewCreatElements();
    technologyCreatElements();
    startButtons();
} 

const buttonHamburger = document.getElementById('button-hamburger')
const containerHeader = document.querySelector('.container-header-content');
buttonHamburger.addEventListener('click', ()=>{
    containerHeader.classList.toggle('grid');
    containerHeader.classList.toggle('hide');
    buttonHamburger.classList.toggle('rotate90');
    buttonHamburger.classList.toggle('rotate0');
})
main();