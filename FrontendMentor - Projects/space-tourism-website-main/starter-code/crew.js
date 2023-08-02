import { crewData } from "./fetchData.js";
const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');


export default function crew(){

    const crew0 = crewData()[0];
    const crew1 = crewData()[1];
    const crew2 = crewData()[2];
    const crew3 = crewData()[3];
    console.log(crew0.images.png);
}

export function crewCreatElements(){
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');
    const button4 = document.createElement('button');

    const divImg = document.createElement('div');
    const crewImg = document.createElement('img');
    divImg.classList.add('crewteste');
    const divDesc = document.createElement('div');
    const crewName = document.createElement('h1');
    const crewRole = document.createElement('h3');
    const crewBio = document.createElement('p');

    const startButtons = (buttons)=>{
        for(let i = 0; i < 4; i++)
        {
            buttons[i].addEventListener('click', ()=>{
                addInfo(crewData()[i].images.png, 
                crewData()[i].name,
                crewData()[i].role, 
                crewData()[i].bio);
            })
        }
    }

    const addInfo = (img, name, role, bio)=>{
        crewImg.src = img;
        crewImg.alt = 'crew member';
        crewName.innerText = name;
        crewRole.innerText = role;
        crewBio.innerText = bio;
    }

    const addClass = ()=>{
        divDesc.classList.add('hide');
        divDesc.classList.add('container-crew');
        divImg.classList.add('container-crew');
        divImg.classList.add('hide');
        crewImg.classList.add('crewImg');
    }

    const append = ()=>{
        container1.append(divImg);
        container2.append(divDesc);

        divImg.append(crewImg);

        divDesc.append(button1);
        divDesc.append(button2);
        divDesc.append(button3);
        divDesc.append(button4);
        divDesc.append(crewName);
        divDesc.append(crewRole);
        divDesc.append(crewBio);
    }
    addInfo(crewData()[0].images.png, 
        crewData()[0].name,
        crewData()[0].role, 
        crewData()[0].bio);
    addClass();
    startButtons([button1, button2, button3, button4]);
    append();
}

