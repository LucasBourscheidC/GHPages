import { useState, useEffect } from "react";
import Task from "./Task";

export default function Board({board, setCurrentBoard}){
    const [name, setName] = useState(board.name)
    const id = board.id
    
    useEffect(() => {
        setName(board.name);
      }, [board.name]);

    return<>
        <div> 
            <button onClick={()=>setCurrentBoard(board)}>{name}</button>
        </div>
    </>
}