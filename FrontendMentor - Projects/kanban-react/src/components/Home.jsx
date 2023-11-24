import { useState, useEffect } from "react"
import BoardName from "./BoardName.jsx"
import CreateTask from "./CreateTask.jsx"
import Task from "./Task.jsx"
import BoardList from "./BoardList.jsx"
import Column from "./Column.jsx"

export default function Header(){
    //BOARD INFO
    /*
        {
            id: 1,
            name: "name",
            taskList: [{
                category: "TODO",
                description: "akposd",
                title: "daksopd"
            }]
        }
    */
    const [boardList, setBoardList] = useState([])
    const [currentBoard, setCurrentBoard] = useState(undefined)
    const [newBoardId, setNewBoardId] = useState(0);
    const [displayFormBoardName, setDisplayFormBoardName] = useState({display: "none"})
    const [displayFormCreateTask, setDisplayFormCreateTask] = useState({display: "none"})
    const [displayBoard, setDisplayBoard] = useState({display: "none"})
    const [teste, setteste] = useState({column: {display: "unset"}})
    const [selectedOptionForBoard, setSelectedOptionForBoard] = useState(0) // 0 create and 1 change, for board name
    const CREATE_BOARD = 0;
    const CHANGE_BOARD_NAME = 1;
    const COLUMNS = {
        todo: "Todo",
        doing: "Doing",
        done: "Done"
    }

    const makeFormCreateTaskVisible = () =>{
        setDisplayFormCreateTask({display: "unset"})
    }

    const boardListUpdateForNewTasks = (newTask)=>{
        const updatedBoardList = boardList.map((board) => {
            if (board.id === currentBoard.id) {
              return {
                ...board,
                taskList: [...board.taskList, newTask],
              };
            }
            return board;
          });
          setBoardList(updatedBoardList);
    }

    const handleSelectBoard = (board)=>{
        setCurrentBoard(board);
    }

    const createOrChangeBoardName = (boardName)=>{
        if(selectedOptionForBoard == CREATE_BOARD)
        {
            createBoard(boardName)
        }
        else if (selectedOptionForBoard == CHANGE_BOARD_NAME)
        {
            changeBoardName(boardName)
        }

    }
    
    const createBoard = (boardName) =>{
        setNewBoardId((prev)=> prev + 1)
        setBoardList(prevData => 
        [...prevData, 
        {name: boardName,
        id: newBoardId,
        taskList: [] }]);
    }

    const changeBoardName = (boardNewName)=>{
        if(currentBoard){
            const boardListUpdated = boardList.map((board,index)=>{
                if(board.id === currentBoard.id){
                    board = {
                        ...board,
                        name: boardNewName,
                      };
                      setCurrentBoard(board)
                    return board
                }
                else{
                    return board
                }
            })
            setBoardList(boardListUpdated)
        }
    }

    const handleDeleteBoard = ()=>{
        deleteBoard()
        unsetCurrentBoard()
    }

    const deleteBoard = ()=>{
        if(currentBoard){
            const boardListUpdated = boardList.filter((board) => board.id !== currentBoard.id);
            setBoardList(boardListUpdated)
        }
    }

    const unsetCurrentBoard = ()=>{
        setCurrentBoard("")
        setDisplayBoard({display: "none"})
    }

    const handleCreateNewBoard = ()=>{
        setSelectedOptionForBoard(0)
        setDisplayFormBoardName({display: "unset"})
    }

    useEffect(()=>{
        if(currentBoard){
            setDisplayBoard({display: "flex"})
        }
    }, [currentBoard])
      
    return<>
    {/*side bar */}
    <BoardList boardList={boardList} 
    handleCreateNewBoard={handleCreateNewBoard}
    setCurrentBoard={setCurrentBoard}/>
    
    {/*selected bord */}
    <div style={displayBoard} className="container-header">
        <div>
            <h1>{currentBoard ? currentBoard.name : ""}</h1>
            <button onClick={()=>{
                setSelectedOptionForBoard(1)
                setDisplayFormBoardName({display: "unset"})
            }}>Edit Name</button>
        </div>
        <div className="header-container-buttons">
            <button onClick={makeFormCreateTaskVisible}>+Create New Task</button>
            <button onClick={handleDeleteBoard}>Delete Board</button>
        </div>
    </div>
    
    {/*board tasks*/}
    <div style={teste.column}>
        <Column state={"Todo"} currentBoard={currentBoard} />
        <Column state={"Doing"} currentBoard={currentBoard} />
        <Column state={"Done"} currentBoard={currentBoard} />
        {
            /*
            currentBoard? currentBoard.taskList.map((task, index)=>{
                console.log("TASK")
                console.log(task)
                return <Task task={task} key={index} />
            }): <></>*/
        }
        <button onClick={null} className="board-button">+New Column</button>
    </div>

    {/*add board name */}
        <BoardName displayForm={displayFormBoardName} setDisplayForm={setDisplayFormBoardName} createOrChangeBoardName={createOrChangeBoardName} />
        <CreateTask displayForm={displayFormCreateTask} setDisplayForm={setDisplayFormCreateTask} currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} boardListUpdateForNewTasks={boardListUpdateForNewTasks}/>
    </>
}