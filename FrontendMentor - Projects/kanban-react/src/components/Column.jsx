import { useEffect, useState } from "react"
import Task from "./Task"

export default function Column({state, currentBoard, drop, boardList}){
    const [stateColumn, setStateColumn] = useState(state)
    const [taskList, setTaskList] = useState([])
    const teste = state

    useEffect(()=>{
        if(currentBoard){
            let TODOsTASKs = currentBoard.taskList.filter((task)=>task.category.toUpperCase() == teste.toUpperCase())
            setTaskList(TODOsTASKs)
        }
    }, [currentBoard])

    return <>
        <div ref={drop} className="container-column">
            <h1>{stateColumn}</h1>
            {
                taskList.length > 0  && currentBoard ? taskList.map((task, index)=>{
                    return <Task currentBoard={currentBoard} boardList={boardList} task={task} key={index}/>
                }): null
            }
        </div>
    </>
}