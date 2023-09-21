import { useState } from "react";
import { Link } from "react-router-dom"
import "../styles/header.css"


export default function Header({setBackgroundState}) {
  const hamburger = "./assets/shared/icon-hamburger.svg";
  const close = "./assets/shared/icon-close.svg";
  const [mobile, setMobile] = useState([hamburger, "hide"]);
  const [hrPosition, setHrPosition] = useState({gridColumn: 1});
  const handleClick = (newState, gridColumn)=>{
    setHrPosition({gridColumn: gridColumn});
    setBackgroundState(newState);
  }
  const handleMobile = ()=>{
    setMobile( prevImg => prevImg[0] === close ? [hamburger, "hide"] : [close, "grid"])
  }
    return (
      <header>
        <img className="img-star" src="./assets/shared/logo.svg" alt="" />
        <hr className="hr-header" />
        <div className={`container-header-content ${mobile[1]}`}>
          <Link onClick={()=> handleClick("background-home", 1)} to="/" id="home" className="button-content">
          00 HOME
          </Link>
          <Link onClick={()=> handleClick("background-destination", 2)} to="/destination" id="destination" className="button-content">
          01 DESTINATION
          </Link>
          <Link onClick={()=> handleClick("background-crew", 3)} to="/crew" id="crew" className="button-content">
          02 CREW
          </Link>
          <Link onClick={()=> handleClick("background-technology", 4)} to="/technology" id="technology" className="button-content">
          03 TECHNOLOGY
          </Link>
          <hr className="hr-content" style={hrPosition}/>
        </div>
        <button id="button-hamburger">
          <img onClick={handleMobile} className="img-hamburger" src={mobile[0]} alt="hamburger" />
        </button>
      </header>
    );
  }