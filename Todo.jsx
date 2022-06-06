import React, { useState } from "react";
import TodoItem from "./TodoItem";
import styles from "./todo.module.css";
import Remove from "./Remove";

const Todo = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [mark, setMark] = useState([]);
  const [comp, setComp] = useState(todos.isComplete);
  const [showCompletedTodos, setShowCompletedTodos] = useState(false);
  const handleDelete = (xyz) => {
    const newTodo = todos.filter((todo) => todo.id !== xyz);
    setTodos(newTodo);
  };

  const handleComp = (abc,index) => {
    // console.log(abc);
    if (!todos[index].isComplete) {
      let changedData = todos.map((item) => {
        if (item.id == abc) {
          item.isComplete = true;
        }
        return item;
      });
      setTodos([...changedData]);
      const newComp = todos.filter((todo) => todo.id === abc);
      setMark([...mark, newComp[0]]);
      setComp(newComp);
    }

    //console.log(newComp)
  };

  const showAll = () => {
    setShowCompletedTodos(true);
  };

  const removeAll = () => {
    setTodos([]);
  };

  return (
    <>
      <h1>MY TODO APP ✍️</h1>
      <div className={styles.box}>
        <input
          placeholder=" ✎ add-a-todo ⋯"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDownCapture={(e) => {
            if (e.key === "Enter") {
              setTodos([
                ...todos,
                { value: value, id: Date.now(), isComplete: false },
              ]);
              setValue("");
            }
          }}
        />
        <div className={styles.todoList}>
          {todos.map((todos,index) => (
            <TodoItem
              key={todos.id}
              index={index}
              handleDelete={handleDelete}
              todos={todos}
              handleComp={handleComp}
              
            />
          ))}
        </div>

        <div>
          <button onClick={() => removeAll()} className={styles.show_todo}>
            Delete All ❌
          </button>
        </div>
        <div>
          <button onClick={() => showAll()} className={styles.show_todo}>
            Show-completed-todos ✔️
          </button>
        </div>
      </div>
      {showCompletedTodos && (
        <div>
          {mark.map((e) => (
            <Remove key={e.id} value={e.value} />
          ))}
        </div>
      )}
    </>
  );
};

export default Todo;
