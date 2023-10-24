import { useState } from "react";
import Task from "./Task";

export default function Board(props){
    const [name, setName] = useState(props.name)
    const [taskList, setTaskList] = useState([])
    const [columnList, setColumnList] = useState([])
    const [nextTaskId, setNextTaskId] = useState(0)
    return<>
        <div>
            <p>{name}</p>
        </div>
    </>
}