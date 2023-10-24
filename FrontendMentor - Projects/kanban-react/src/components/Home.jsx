import { useState, useEffect } from "react"
import Board from "../Board.js"
import BoardName from "./boardName.jsx"
import CreateTask from "./CreateTask.jsx"

export default function Header(){
    const [boardsList, setBoardsList] = useState([])
    const [currentBoard, setCurrentBoard] = useState(undefined)
    const [currentBoardTasks, setCurrentBoardTasks] = useState(undefined)

    useEffect(() => {
        if(currentBoard){
            setCurrentBoardTasks(currentBoard.getTasks());
        }
        console.log("teste")
      }, [currentBoard]);

      
    const addNewBoard = (name) =>{
        setBoardsList(prevData => [...prevData, new Board(name)]);
    }
    const addNewTask = () =>{

    }
    const handleSelectingBoard = (board)=>{
        setCurrentBoard(board);
    }
    return<>
    {/*side bar */}
    <div className="container-sidebar">
        <div>
            <h1>Kanban</h1>
            <p>All Boards({boardsList.length})</p>
            {
                boardsList.map((board, index) =>{
                    return <button onClick={()=>handleSelectingBoard(board)} key={index}>{board.getName()}</button>
                })
                
            }
            <button onClick={()=>addNewBoard("default")}>+Create New Board</button>
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
            {
                currentBoard ? currentBoardTasks? currentBoardTasks.map((task, index)=>{
                    return <h1 key={index}>{task.title}</h1>
                }): <h1>false </h1>: <h1>false</h1>
            }
            <button onClick={null} className="board-button">+New Column</button>
    </div>

    {/*add board name */}
        <BoardName addNewBoard={addNewBoard} />
        <CreateTask currentBoard={currentBoard} setCurrentBoard={setCurrentBoard}/>
    </>
}