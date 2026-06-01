import React from "react";
import "../CSS/addNewTask.css";

export const AddNewTask = ({ content, setContent, clickedBtn }) => {
  return (
    <>
      <div className="newTask flex">
        <input
          type="text"
          placeholder="Aggiungi una nuova attività..."
          className="input_newTask"
          value={content}
          onChange={(event) =>
            setContent(event.target.value)
          }
        />
        <button className="btn_newTask"
        onClick={clickedBtn}>Aggiungi</button>
      </div>
    </>
  );
};
