import { useState } from "react";

export default function Task(props){
    const [id, setId] = useState(props.id)
    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)
    const [category, setCategory] = useState(props.category)

    return <>
        <div>
            <p>{id}</p>
            <p>{title}</p>
            <p>{description}</p>
            <p>{category}</p>
        </div>
    </>
}
