import React from "react";

const Note = ({note}) =>{
    return(
        <li>{note.content}</li>
    )
}
// "export" declared module, the variable Note 
export default Note
