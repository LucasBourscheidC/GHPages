import Header from "./Header";
import { Link } from "react-router-dom"
import "../styles/home.css"

export default function Home({setBackgroundState}){
    const handleClick = (newState)=>{
        console.log(newState)
        setBackgroundState(newState);
      }
    return <>
    <main>
        <div className="container-home">
            <div className="container1">
                <div className="container-home1 home">
                    <h5 className="text-accent text-you-want">So, you want to travel to</h5>
                    <h1 className="space">SPACE</h1>
                    <p className="text-accent description">
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                    </p>
                </div>
            </div>
            <div className="container2">
                <div className="container-home2 home">
                    <Link onClick={()=> handleClick("background-destination")} to="/destination" id="destination" className="explore-circle">
                        EXPLORE
                    </Link>
                </div>
            </div>
        </div>
  </main>
    </>
}