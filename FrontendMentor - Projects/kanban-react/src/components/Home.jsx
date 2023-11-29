import { useState, useEffect } from "react"
import BoardName from "./BoardName.jsx"
import CreateTask from "./CreateTask.jsx"
import Task from "./Task.jsx"
import BoardList from "./BoardList.jsx"
import Column from "./Column.jsx"
import { useDrop } from "react-dnd"

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
    const [displayBoard, setDisplayBoard] = useState({visibility: "hidden"})
    //const [teste, setteste] = useState({column: {display: "unset"}})
    const [selectedOptionForBoard, setSelectedOptionForBoard] = useState(0) // 0 create and 1 change, for board name
    const CREATE_BOARD = 0;
    const CHANGE_BOARD_NAME = 1;
    const COLUMNS = {
        todo: "Todo",
        doing: "Doing",
        done: "Done"
    }

    const [{isOverColumnTodo}, todoDrop] =  useDrop(()=>{
        const newCategory = "Todo";
        return{
        accept: "task",
        drop: (item) => updateTasksInColumns(item, newCategory),
        collect: (monitor)=>({
            isOverColumnTodo: !!monitor.isOver(),
        }),
    }})
    const [{isOverColumnDoing}, doingDrop] =  useDrop(()=>{
        const newCategory = "Doing";

        return{
        accept: "task",
        drop: (item) => updateTasksInColumns(item, newCategory),
        collect: (monitor)=>({
            isOverColumnDoing: !!monitor.isOver(),
        }),
    }})
    const [{isOverColumnDone}, doneDrop] =  useDrop(()=>{
        const newCategory = "Done";
        return{
        accept: "task",
        drop: (item) => boardListUpdateForNewTasks(item, newCategory),
        collect: (monitor)=>({
            isOverColumnDone: !!monitor.isOver(),
        }),
    }})
    
    const updateTasksInColumns = (item, newCategory) =>{
        //console.log(item.boardList)
        const newTask = {
            id: item.id,
            title: item.title,
            description: item.description,
            category: newCategory,
          };
        taskUpdate(newTask, item.boardList, item.currentBoard)
    }
    const makeFormCreateTaskVisible = () =>{
        setDisplayFormCreateTask({display: "unset"})
    }

    const taskUpdate = (taskUpdate, boardList, currentBoard)=>{
        console.log("WATF")
        const updatedBoardList = boardList.map((board) => {
            console.log("board")
            console.log(board)
            if (board.id === currentBoard.id) {
                console.log(taskUpdate.id)
                console.log(taskUpdate.title)
                console.log(taskUpdate.description)
                console.log(taskUpdate.category)
                const updatedBoard = {
                    ...board,
                    taskList: board.taskList.map((task)=>
                        task.id === taskUpdate.id ? {...task, category: taskUpdate.category} : task
                    ),
                };
                console.log("updatedBoard",updatedBoard)
                setCurrentBoard(updatedBoard);
                return updatedBoard;
            }
            console.log("board", board)
            return board;
          });
          console.log(updatedBoardList)
          setBoardList(updatedBoardList);
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
        setDisplayBoard({visibility: "unset"})
    }

    const handleCreateNewBoard = ()=>{
        setSelectedOptionForBoard(0)
        setDisplayFormBoardName({display: "unset"})
    }

    useEffect(()=>{
        if(currentBoard){
            setDisplayBoard({visibility: "unset"})
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
    <div className="container-board" /*style={teste.column}*/>
        <Column drop={todoDrop} state={"Todo"} currentBoard={currentBoard} boardList={boardList}/>
        <Column drop={doingDrop} state={"Doing"} currentBoard={currentBoard} boardList={boardList}/>
        <Column drop={doneDrop} state={"Done"} currentBoard={currentBoard} boardList={boardList}/>
    </div>

    {/*add board name */}
        <BoardName displayForm={displayFormBoardName} setDisplayForm={setDisplayFormBoardName} createOrChangeBoardName={createOrChangeBoardName} />
        <CreateTask displayForm={displayFormCreateTask} setDisplayForm={setDisplayFormCreateTask} currentBoard={currentBoard} setCurrentBoard={setCurrentBoard} boardListUpdateForNewTasks={boardListUpdateForNewTasks}/>
    </>
}