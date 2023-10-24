import React, { useState } from 'react';
import Task from "../Task";
import Board from "../Board";

export default function CreateTask({currentBoard, setCurrentBoard}){
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const handleCreateTask = (e)=>{
        e.preventDefault();
        console.log('Título:', title);
        console.log('Descrição:', description);
        console.log('Categoria:', category);
        if(currentBoard)
        {
          let aux = new Board("aaaa");
          let newBoard =  currentBoard;
          setCurrentBoard(aux)
          newBoard.setName("arrsadsa")
          newBoard.createTask(title, description, category)
          setCurrentBoard(newBoard)
          console.log(currentBoard)
        }
    }
  return (
    <div>
      <h2>New Task</h2>
      <form onSubmit={handleCreateTask}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="category">Status:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Selecione uma categoria</option>
            <option value="TODO">Todo</option>
            <option value="DOING">Doing</option>
            <option value="DONE">Done</option>
          </select>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
  );
}