import { useState } from "react"

export default function BoardName({addNewBoard}){
    const [newBoardName, setNewBoardName] = useState("")
    const handleNewName = (event)=>{
        console.log(event.target.value)
        setNewBoardName(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        if(newBoardName)
        {
            addNewBoard(newBoardName);
        }
        setNewBoardName("");
        console.log('Name:', newBoardName);
    };
    return<>
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Board Name"
                    value={newBoardName}
                    onChange={handleNewName}/>
                <input type="submit" value="OK" />
            </form>
        </div>
    </>

}