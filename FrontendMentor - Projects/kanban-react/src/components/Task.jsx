import { useState } from "react";

export default function Task({task}){
    const [id, setId] = useState(0)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [category, setCategory] = useState(task.category)

    return <>
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
        </div>
    </>
}
