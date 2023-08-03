import { technologyData } from "./fetchData.js";

const container1 = document.querySelector('.container1');
const container2 = document.querySelector('.container2');

export default function technology(){
    const technology0 = technologyData[0];
    const technology1 = technologyData[1];
    const technology2 = technologyData[2];
    const technology3 = technologyData[3];
    console.log(technologyData());
}

export function technologyCreatElements(){
    const button1 = document.createElement('button');
    const button2 = document.createElement('button');
    const button3 = document.createElement('button');

    const divImg = document.createElement('div');
    const technologyImg = document.createElement('img');

    const divDesc = document.createElement('div');
    const divButtons = document.createElement('div');
    const technologyTitle = document.createElement('h1');
    const technologySubTitle = document.createElement('h5');
    const technologyName = document.createElement('h1');
    const technologyDesc = document.createElement('p');


    const startButtons = (buttons)=>{
        for(let i = 0; i < 3; i++)
        {
            buttons[i].addEventListener('click', ()=>{
                addInfo(technologyData()[i].images.portrait, 
                    technologyData()[i].name,
                    technologyData()[i].description);
            })
        }
    }

    divDesc.style.display = 'none';
    divImg.style.display = 'none';

    const addInfo = (img, name, desc)=>{
        technologyImg.src = img;

        technologyTitle.innerText = '03 SPACE LAUNCH 101';
        technologySubTitle.innerText = "THE TERMINOLOGY...";
        technologyName.innerText = name;
        technologyDesc.innerText = desc;
    }
    const addClass = ()=>{
        divButtons.classList.add('container-technology-buttons');
        divDesc.classList.add('technology');
        divDesc.classList.add('container-technology1');
        divImg.classList.add('technology');
        divImg.classList.add('container-technology2');
    }

    const append = ()=>{
        container1.append(divImg);
        container2.append(divDesc);

        divImg.append(technologyImg);

        divDesc.append(technologyTitle);
        divDesc.append(divButtons);
        divButtons.append(button1);
        divButtons.append(button2);
        divButtons.append(button3);
        divDesc.append(technologySubTitle);
        divDesc.append(technologyName);
        divDesc.append(technologyDesc);
    }
    addInfo(technologyData()[0].images.portrait, 
        technologyData()[0].name,
        technologyData()[0].description);
    addClass();
    startButtons([button1, button2, button3]);
    append();
}


