import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import TodoPriority from "./TodoPriority";

import Button from "../UI/Button";
import styles from "./TodoForm.module.css";

const TodoForm = (props) => {
  let enteredPriority;
  const [enteredTask, setEnteredTask] = useState("");
  const [isValid, setIsValid] = useState(true);

  const taskChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredTask(e.target.value);
  };
  const sendPriorityHandler = (priority) => {
    enteredPriority = priority;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (enteredTask.trim().length === 0) {
      setIsValid(false);
      return;
    }
    const todoData = {
      task: enteredTask,
      priority: [enteredPriority, "all"],
      date: new Date(),
      id: uuidv4(),
    };
    setEnteredTask("");
    props.onSetTodo(todoData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-todo__controls"]}>
        <div
          className={`${styles["new-todo__control"]} ${
            !isValid && styles.invalid
          }`}
        >
          <label>New Task</label>
          <input type="text" value={enteredTask} onChange={taskChangeHandler} />
        </div>

        <div className={styles["new-todo__control"]}>
          <TodoPriority onSendPriority={sendPriorityHandler} />
        </div>
        <div className={styles["new-todo__actions"]}>
          <Button type="submit" className={styles["btn-add"]}>
            Add Task
          </Button>
        </div>
      </div>
    </form>
  );
};
export default TodoForm;
