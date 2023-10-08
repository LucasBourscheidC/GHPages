import { useState } from "react"

export default function Header(){
    const [boards, setBoards] = useState(0)
    return<>
    <div className="container-sidebar">
        <div>
            <h1>Kanban</h1>
            <p>All Boards({boards})</p>
            <button>+Create New Board</button>
        </div>
        <div>
            <div className="container-theme">
                <img src="" alt="sun" />
                <div className="container-theme-button">
                    <button className="theme-button"/>
                </div>
                <img src="" alt="moon" />
            </div>
            <button> <img src="" alt="eye"/> Hide Sidebar</button>
        </div>
    </div>
    </>
}