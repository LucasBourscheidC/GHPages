import { useState } from "react";
import Task from "./Task";

export default function Board({board, handleSelectingBoard}){
    const [name, setName] = useState(board.name)
    const id = board.id
    const [taskList, setTaskList] = useState([])
    const [columnList, setColumnList] = useState([])
    const [nextTaskId, setNextTaskId] = useState(0)
    return<>
        <div> 
            <button onClick={()=>handleSelectingBoard(board)}>{name}</button>
        </div>
    </>
}