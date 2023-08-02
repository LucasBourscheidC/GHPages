import { destinationsData } from "./fetchData.js";

const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');

export default function destination(){
    const destination0 = destinationsData[0];
    const destination1 = destinationsData[1];
    const destination2 = destinationsData[2];
    const destination3 = destinationsData[3];
    console.log(destinationsData());
}

export function destinationCreatElements(){
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    const button4 = document.createElement('button');

    const divImg = document.createElement('div');
    const destTitle = document.createElement('h1');
    const destinationImg = document.createElement('img');

    const divDesc = document.createElement('div');
    const destinationName = document.createElement('h1');
    const destinationDesc = document.createElement('p');
    const destinationHr = document.createElement('hr');

    const destinationTravelDiv = document.createElement('div');
    const destinationAVGDist = document.createElement('p');
    const destinationEST = document.createElement('p');
    const destinationDist = document.createElement('h3');
    const destinationTravel = document.createElement('h3');


    const startButtons = (buttons)=>{
        for(let i = 0; i < 4; i++)
        {
            buttons[i].addEventListener('click', ()=>{
                addInfo(destinationsData()[i].images.png, 
                    destinationsData()[i].name,
                    destinationsData()[i].description, 
                    destinationsData()[i].distance,
                    destinationsData()[i].travel);
            })
        }
    }
    const addInfo = (img, name, desc, dist, travel)=>{
        destTitle.innerText = '01 PICK YOUR DESTINATION';
        destinationImg.src = img;

        destinationName.innerText = name;
        destinationDesc.innerText = desc;
        destinationAVGDist.innerText = 'AVG. DISTANCE';
        destinationEST.innerText = 'EST. TRAVEL TIME';
        destinationDist.innerText = dist;
        destinationTravel.innerText = travel;
    }
    const addClass = ()=>{
        divDesc.classList.add('container-destination');
        divImg.classList.add('container-destination');
        divDesc.classList.add('hide');
        divImg.classList.add('hide');
    }

    const append = ()=>{
        container1.append(divImg);
        container2.append(divDesc);

        divImg.append(destTitle);
        divImg.append(destinationImg);

        divDesc.append(button1);
        divDesc.append(button2);
        divDesc.append(button3);
        divDesc.append(button4);
        
        divDesc.append(destinationName);
        divDesc.append(destinationDesc);
        divDesc.append(destinationHr);
        divDesc.append(destinationTravelDiv);
        divDesc.append(destinationAVGDist);
        divDesc.append(destinationEST);
        divDesc.append(destinationDist);
        divDesc.append(destinationTravel);
    }
    addInfo(destinationsData()[0].images.png, 
        destinationsData()[0].name,
        destinationsData()[0].description, 
        destinationsData()[0].distance,
        destinationsData()[0].travel);
    addClass();
    startButtons([button1, button2, button3, button4]);
    append();
}


