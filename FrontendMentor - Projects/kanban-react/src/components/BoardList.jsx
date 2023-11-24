import Board from "./Board"

export default function BoardList({boardList, handleCreateNewBoard, setCurrentBoard}){

    return<>
    <div className="container-sidebar">
        <div>
            <h1>Kanban</h1>
            <p>All Boards({boardList.length})</p>
            {
                boardList ? boardList.map((board) =>{
                    return <Board key={board.id} board={board} setCurrentBoard={setCurrentBoard}/>
                }): null 
            }
            <button onClick={handleCreateNewBoard}>+Create New Board</button>
        </div>
        <div>
            <div className="container-theme">
                <img src="" alt="sun" />
                <div className="container-theme-button">
                    <button className="theme-button"/>
                </div>
                <img src="" alt="moon" />
            </div>
            <button> <img src="" alt="eye"/> Hide Sidebar</button>
        </div>
    </div>       
    </>
}