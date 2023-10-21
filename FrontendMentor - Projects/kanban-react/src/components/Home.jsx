import { useState } from "react"
import Board from "../Board.js"

export default function Header(){
    const [boardsList, setBoardsList] = useState([])
    const addNewBoard = () =>{
        setBoardsList(prevData => [...prevData, new Board("tarefas")]);
        console.log(boardsList);
        console.log("teste");
    }
    const addNewTask = () =>{

    }
    return<>
    <div className="container-sidebar">
        <div>
            <h1>Kanban</h1>
            <p>All Boards({boardsList.length})</p>
            <button onClick={addNewBoard}>+Create New Board</button>
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
    <div className="container-header">
        <h1>Board name</h1>
        <div className="header-container-buttons">
            <button onClick={addNewTask()}>+Add New Task</button>
            <button>...</button>
        </div>
    </div>
    <div>
            <button onClick={null} className="board-button">+New Column</button>
    </div>
    </>
}