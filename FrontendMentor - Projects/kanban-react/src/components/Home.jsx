import { useState, useEffect } from "react"
import Board from "./Board.jsx"
import BoardName from "./boardName.jsx"
import CreateTask from "./CreateTask.jsx"

export default function Header(){
    const [boardsList, setBoardsList] = useState([])
    const [currentBoard, setCurrentBoard] = useState(undefined)
    const [newBoardId, setNewBoardId] = useState(0);

      
    const createBoard = (boardName) =>{
        setNewBoardId((prev)=> prev + 1)
        setBoardsList(prevData => 
        [...prevData, 
        {name: boardName,
        id: newBoardId,
        taskList: [] }]);
    }
    const addNewTask = () =>{

    }
    const boardListUpdateForNewTasks = (newTask)=>{
        const updatedBoardList = boardsList.map((board) => {
            if (board.id === currentBoard.id) {
              return {
                ...board,
                taskList: [...board.taskList, newTask],
              };
            }
            return board;
          });
          setBoardsList(updatedBoardList);
    }
    const handleSelectingBoard = (board)=>{
        console.log(board)
        setCurrentBoard(board);
    }
    return<>
    {/*side bar */}
    <div className="container-sidebar">
        <div>
            <h1>Kanban</h1>
            <p>All Boards({boardsList.length})</p>
            {
                boardsList ? boardsList.map((board, index) =>{
                    return <Board key={board.id} board={board} handleSelectingBoard={handleSelectingBoard}/>
                }): <></>
                
            }
            <button onClick={()=>{
                return createBoard("default")
            }}>+Create New Board</button>
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
        <h1>{currentBoard ? currentBoard.name : ""}</h1>
        <div className="header-container-buttons">
            <button onClick={addNewTask()}>+Add New Task</button>
        </div>
    </div>
    
    {/*board tasks*/}
    <div>
        {
            currentBoard? currentBoard.taskList.map((task, index)=>{
                console.log("TASK")
                console.log(task)
                return <button key={index}>{task.title}</button>
            }): <></>
        }
        <button onClick={null} className="board-button">+New Column</button>
    </div>

    {/*add board name */}
        <BoardName addNewBoard={createBoard} />
        <CreateTask currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} boardListUpdateForNewTasks={boardListUpdateForNewTasks}/>
    </>
}