import { useState } from "react"

export default function BoardName({displayForm, setDisplayForm, createOrChangeBoardName}){
    const [newBoardName, setNewBoardName] = useState("")

    const handleNewName = (event)=>{
        setNewBoardName(event.target.value);
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        if(newBoardName)
        {
            createOrChangeBoardName(newBoardName);
        }
        setNewBoardName("");
        setDisplayForm({display: "none"})
    };

    const handleCloseForm = ()=>{
        setNewBoardName("");
        setDisplayForm({display: "none"})
    }

    return<>
        <div style={displayForm} className="formBoardName">
            <button onClick={handleCloseForm}>X</button>
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