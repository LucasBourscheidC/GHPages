import { useEffect, useState } from "react"
import Task from "./Task"

export default function Column({state, currentBoard}){
    const [stateColumn, setStateColumn] = useState(state)
    const [vamola, setvamola] = useState([])
    const teste = state

    useEffect(()=>{
        if(currentBoard){
            let TODOsTASKs = currentBoard.taskList.filter((task)=>task.category == teste.toUpperCase())
            setvamola(TODOsTASKs)
        }
    }, [currentBoard])

    return <>
        <div>
            <h1>{stateColumn}</h1>
            {
                vamola.length > 0 ? vamola.map((task, index)=>{
                    return <Task task={task} key={index}/>
                }): null
            }
        </div>
    </>
}