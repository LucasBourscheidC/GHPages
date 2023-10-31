import { useState, useEffect } from "react"
import Board from "./Board.jsx"
import BoardName from "./BoardName.jsx"
import CreateTask from "./CreateTask.jsx"
import Task from "./Task.jsx"

export default function Header(){
    const [boardsList, setBoardsList] = useState([])
    const [currentBoard, setCurrentBoard] = useState(undefined)
    const [newBoardId, setNewBoardId] = useState(0);
    const [displayFormBoardName, setDisplayFormBoardName] = useState({display: "none"})
    const [displayFormCreateTask, setDisplayFormCreateTask] = useState({display: "none"})
    const [displayBoard, setDisplayBoard] = useState({display: "none"})

    const createBoard = (boardName) =>{
        setNewBoardId((prev)=> prev + 1)
        setBoardsList(prevData => 
        [...prevData, 
        {name: boardName,
        id: newBoardId,
        taskList: [] }]);
    }

    const createTask = () =>{
        setDisplayFormCreateTask({display: "unset"})
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

    const findcurrentBoardInboardsList = ()=>{
        boardsList.map((board, index)=>{
            if(board.id === currentBoard.id){

            }
        })
    }
    const updateBoardName = ()=>{
        
    }
    useEffect(()=>{
        if(currentBoard){
            setDisplayBoard({display: "flex"})
        }
    }, [currentBoard])
      
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
            <button onClick={()=>setDisplayFormBoardName({display: "unset"})}>+Create New Board</button>
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
    <div style={displayBoard} className="container-header">
        <div>
            <h1>{currentBoard ? currentBoard.name : ""}</h1>
            <button>Edit Name</button>
        </div>
        <div className="header-container-buttons">
            <button onClick={createTask}>+Create New Task</button>
            <button>Delete Board</button>
        </div>
    </div>
    
    {/*board tasks*/}
    <div >
        {
            currentBoard? currentBoard.taskList.map((task, index)=>{
                console.log("TASK")
                console.log(task)
                return <Task task={task} key={index} />
            }): <></>
        }
        <button onClick={null} className="board-button">+New Column</button>
    </div>

    {/*add board name */}
        <BoardName displayForm={displayFormBoardName} setDisplayForm={setDisplayFormBoardName} createBoard={createBoard} />
        <CreateTask displayForm={displayFormCreateTask} setDisplayForm={setDisplayFormCreateTask} currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} boardListUpdateForNewTasks={boardListUpdateForNewTasks}/>
    </>
}