import React from "react";
import styles from "./todo.module.css";

const TodoItem = ({ todos,index, handleDelete,handleComp}) => {
  

  return (
  <>
   <div>
   <div className={styles.todo}>
      <div className={styles.text}>
        <div>
          <input
            type="checkbox"
            checked={todos.isComplete}
            onChange={(e) =>{ handleComp(todos.id,index)}}
            className={styles.checkbox}
          />
        </div>
        <div >
          <p className={todos.isComplete ? styles.striked : ""}>{todos.value}</p>
        </div>
      </div>
      <div className={styles.delete}>
        <button onClick={() => handleDelete(todos.id)}>✖️</button>
        <button onClick={() => handleComp(todos.id,index)}>mark</button>
      </div>

     
    </div>
   </div>
 

   
  </>
  
  );
};

export default TodoItem;
//className={isComplete ? styles.striked : ""}
