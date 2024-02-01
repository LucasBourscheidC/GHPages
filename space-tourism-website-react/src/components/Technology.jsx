import {technology} from '../data.json';
import "../styles/technology.css"
import { useState } from "react";

export default function Technology(){
    const [activeButton, setActiveButton] = useState(1);
    const [currentInfo, setCurrentInfo] = useState(technology[0]);
    const handleClick = (button) => {
        setActiveButton(button);
        setCurrentInfo(technology[button-1]);
    }
    return <>
        <div className="container-technology">
                <h1 className="title barlow-condense">03 SPACE LAUNCH 101</h1>
                <img className="tech-img" src={currentInfo.images.portrait} alt="destination" />
                <div className="container-technology-buttons">
                    <button className={activeButton === 1 ? 'active-button-technology' : 'innactive-button-technology'}
                    onClick={() => handleClick(1)}>1</button>
                    <button className={activeButton === 2 ? 'active-button-technology' : 'innactive-button-technology'}
                     onClick={() => handleClick(2)}>2</button>
                    <button className={activeButton === 3 ? 'active-button-technology' : 'innactive-button-technology'}
                    onClick={() => handleClick(3)}>3</button>
                </div>
                <div className="container-tech-description">
                    <h5 className="text-accent terminology barlow-condense">THE TERMINOLOGY...</h5>
                    <h1 className="tech-name">{currentInfo.name}</h1>
                    <p className="text-accent tech-description ">{currentInfo.description}</p>
                </div>

        </div>
    </>
}