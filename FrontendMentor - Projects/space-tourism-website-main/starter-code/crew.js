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
    const crewTitle = document.createElement('h1');
    const crewImg = document.createElement('img');

    const divDesc = document.createElement('div');
    const divButtons = document.createElement('div');
    const crewName = document.createElement('h1');
    const crewRole = document.createElement('h3');
    const crewBio = document.createElement('p');

    const startButtons = (buttons)=>{
        for(let i = 0; i < 4; i++)
        {   
            buttons[i].classList.add('crew-button');
            buttons[i].addEventListener('click', ()=>{
                const innerButtons = buttons;
                addInfo(crewData()[i].images.png, 
                crewData()[i].name,
                crewData()[i].role, 
                crewData()[i].bio);
                for(let i = 0; i < 4; i++)
                {
                    innerButtons[i].style.backgroundColor = 'gray';
                }
                innerButtons[i].style.backgroundColor = 'white';
            })
        }
    }

    divDesc.style.display = 'none';
    divImg.style.display = 'none';

    const addInfo = (img, name, role, bio)=>{
        crewTitle.innerText = '02 MEET YOUT CREW';
        crewImg.src = img;
        crewImg.alt = 'crew member';
        crewName.innerText = name;
        crewRole.innerText = role;
        crewBio.innerText = bio;

         button1.style.backgroundColor = 'gray';
         button2.style.backgroundColor = 'gray';
         button3.style.backgroundColor = 'gray';
         button4.style.backgroundColor = 'gray';
    }

    const addClass = ()=>{
        divDesc.classList.add('crew');
        divButtons.classList.add('container-crew-buttons');
        divDesc.classList.add('container-crew1');
        divImg.classList.add('crew');
        divImg.classList.add('container-crew2');
        crewImg.classList.add('crewImg');
        crewRole.classList.add('crew-role');
    }

    const append = ()=>{
        container1.append(divImg);
        container2.append(divDesc);

        divImg.append(crewTitle);
        divImg.append(crewImg);

        divDesc.append(divButtons);
        divButtons.append(button1);
        divButtons.append(button2);
        divButtons.append(button3);
        divButtons.append(button4);
        divDesc.append(crewRole);
        divDesc.append(crewName);
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

