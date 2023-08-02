import crew from "./crew.js";
import destination from "./destination.js";
import technology from "./technology.js";
import handleState from "./handleState.js";
const buttonHome = document.getElementById('home');
const buttonDestination = document.getElementById('destination');
const buttonCrew = document.getElementById('crew');
const buttonTechnology = document.getElementById('technology');
const buttonExplore = document.querySelector('.explore-circle');

export default function startButtons(){
    buttonHome.addEventListener('click', ()=>{
        handleState('home');
    })
    buttonExplore.addEventListener('click', ()=>{
        handleState('destination');
    })
    buttonDestination.addEventListener('click', ()=>{
        handleState('destination');
        destination();
    })
    buttonCrew.addEventListener('click', ()=>{
        handleState('crew');
        crew();
    })
    buttonTechnology.addEventListener('click', ()=>{
        handleState('technology');
        technology();
    })
}