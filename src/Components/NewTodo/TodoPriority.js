import { useState } from "react";
import styles from "./TodoPriority.module.css";

const TodoPriority = (props) => {
  const [enteredPriority, setEnteredPriority] = useState("high");

  const priorityChangeHandler = (e) => {
    setEnteredPriority(e.target.value);
  };

  props.onSendPriority(enteredPriority);

  return (
    <div className={styles["todo-filter"]}>
      <div className={styles["todo-filter__control"]}>
        <label>Priority</label>
        <select value={enteredPriority} onChange={priorityChangeHandler}>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
    </div>
  );
};

export default TodoPriority;
