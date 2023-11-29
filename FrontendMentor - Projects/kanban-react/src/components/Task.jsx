import { useState } from "react";
import { useDrag } from "react-dnd";

export default function Task({task, boardList, currentBoard}){
    const [id, setId] = useState(task.id)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [category, setCategory] = useState(task.category)
    const changeCategory = (newCategory)=>{
        setCategory(newCategory);
        console.log(newCategory)
    }
    const [{isDragging}, drag] = useDrag(()=>({
        type: "task",
        item: {
            id: id,
            title: title,
            description: description,
            newCategory: changeCategory,
            boardList: boardList,
            currentBoard:currentBoard,
        },
        collect: (monitor)=>({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    return <>
        <div 
        ref={drag}
        style={{border: isDragging ? "2px solid black" : "0px"}} 
        className="container-task">
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
        </div>
    </>
}
