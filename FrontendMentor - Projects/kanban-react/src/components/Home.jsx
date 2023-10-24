import { useState, useEffect } from "react"
import Board from "./Board.jsx"
import BoardName from "./boardName.jsx"
import CreateTask from "./CreateTask.jsx"

export default function Header(){
    const [boardsList, setBoardsList] = useState([])
    const [currentBoard, setCurrentBoard] = useState(undefined)
    const [currentBoardTasks, setCurrentBoardTasks] = useState(undefined)

      
    const createBoard = (name) =>{
        setBoardsList(prevData => [...prevData, <Board name={name} />]);
    }
    const addNewTask = () =>{

    }
    const handleSelectingBoard = (board)=>{
        console.log(typeof(board))
        if(board instanceof Board)
        {
            console.log(board)
            setCurrentBoard(board);
        }
    }
    return<>
    {/*side bar */}
    <div className="container-sidebar">
        <div>
            <h1>Kanban</h1>
            <p>All Boards({boardsList.length})</p>
            {
                boardsList.map((board, index) =>{
                    return <button onClick={()=>handleSelectingBoard(board)} key={index}>
                        {board}
                    </button>
                })
                
            }
            <button onClick={()=>createBoard("default")}>+Create New Board</button>
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

    {/*selected bord */}
    <div className="container-header">
        <h1>{currentBoard ? currentBoard.getName() : ""}</h1>
        <div className="header-container-buttons">
            <button onClick={addNewTask()}>+Add New Task</button>
            <button>...</button>
        </div>
    </div>
    
    {/*board tasks*/}
    <div>
            <button onClick={null} className="board-button">+New Column</button>
    </div>

    {/*add board name */}
        <BoardName addNewBoard={createBoard} />
        <CreateTask currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}/>
    </>
}