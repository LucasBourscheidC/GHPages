import europa from "../assets/destination/image-europa.png"
import {destinations} from '../data.json';
import "../styles/destination.css"
import { useState } from "react";


export default function Destination(){
    const [activeButton, setActiveButton] = useState(1);
    const [currentInfo, setCurrentInfo] = useState(destinations[0]);
    const [hrPosition, setHrPosition] = useState({gridColumn: 1});
    const handleClick = (button) => {
        setHrPosition({gridColumn: button});
        setCurrentInfo(destinations[button-1]);
    }
    return <>
        <div className="container-destination">
            <div className="container1 destination container-destination2">
                <h1 className="barlow-condense title">01 PICK YOUR DESTINATION</h1>
                <img src={currentInfo.images.png} alt="destination" />
            </div>
            <div className="container2 destination container-destination1">
                <div className="container-destination-buttons">
                    <button className="text-accent barlow-condense" onClick={() => handleClick(1)}>MOON</button>
                    <button className="text-accent barlow-condense" onClick={() => handleClick(2)}>MARS</button>
                    <button className="text-accent barlow-condense"onClick={() => handleClick(3)}>EUROPA</button>
                    <button className="text-accent barlow-condense" onClick={() => handleClick(4)}>TITAN</button>
                    <hr style={hrPosition} className="destination-hr-buttons" />
                </div>
                <h1 className="bellefair">{currentInfo.name}</h1>
                <p className="text-accent">{currentInfo.description}</p>
                <hr className="destination-hr"></hr>
                <div className="container-travel">
                    <p className="text-accent barlow-condense distance">AVG. DISTANCE</p>
                    <p className="text-accent barlow-condense travel">EST. TRAVEL TIME</p>
                    <h3 className="bellefair info-distance">{currentInfo.distance}</h3>
                    <h3 className="bellefair info-travel">{currentInfo.travel}</h3>
                </div>
            </div>
        </div>
    </>
}