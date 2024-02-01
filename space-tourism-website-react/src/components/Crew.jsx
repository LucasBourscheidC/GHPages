import {crew} from '../data.json';
import "../styles/crew.css"
import { useState } from "react";

export default function Crew(){
    const [activeButton, setActiveButton] = useState(1);
    const [currentInfo, setCurrentInfo] = useState(crew[0]);
    const handleClick = (button) => {
        setActiveButton(button);
        setCurrentInfo(crew[button-1]);
    }
    return <>
        <div className="container-crew">
            <h1 className="barlow-condense crew-title title">02 MEET YOUR CREW</h1>
            <img className="crew-img" src={currentInfo.images.png} alt="destination" />
            <div className="container-crew-buttons">
                    <button className={activeButton === 1 ? 'active-button-crew' : 'innactive-button-crew'}
                    onClick={() => handleClick(1)}></button>
                    <button className={activeButton === 2 ? 'active-button-crew' : 'innactive-button-crew'}
                    onClick={() => handleClick(2)}></button>
                    <button className={activeButton === 3 ? 'active-button-crew' : 'innactive-button-crew'}
                    onClick={() => handleClick(3)}></button>
                    <button className={activeButton === 4 ? 'active-button-crew' : 'innactive-button-crew'}
                    onClick={() => handleClick(4)}></button>
            </div>
            <div className="container-crew-description">
                <h3 className="crew-role bellefair">{currentInfo.role}</h3>
                <h1 className="crew-name bellefair">{currentInfo.name}</h1>
                <p className="text-accent crew-bio">{currentInfo.bio}</p>
            </div>
        </div>
    </>
}