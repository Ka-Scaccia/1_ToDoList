import React from 'react'
import "../CSS/addNewTask.css";

export const AddNewTask = () => {
  return (
    <>
      <div className='newTask flex'>
        <input type='text' placeholder='Aggiungi una nuova attività...'
        className='input_newTask'/>
        <button className='btn_newTask'>Aggiungi</button>
      </div>
    </>
  )
}
