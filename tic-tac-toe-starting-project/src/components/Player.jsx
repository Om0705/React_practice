import { useState } from "react";


export default function Player({name , symbol, isActive}){
    const [isEditing , setIsEditing] = useState(false);
    const [newName , setNewName] = useState(name);

    function handleEditClick(){
        setIsEditing((editing) => !editing);
    }

    function handleChange(event){
        setNewName(event.target.value);
    }

    let playerName = <span className="player-name">{newName}</span>

    if(isEditing){
        playerName = <input type="text" required value={newName} onChange={handleChange}/>
    }

    return (
        <li className={isActive ? 'active' : undefined}>
          <span className="player">
          {playerName}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}