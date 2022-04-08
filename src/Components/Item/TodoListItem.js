import { useState } from "react";

import Button from "../UI/Button";
import Confirm from "../Confirm/Confirm";
import TodoListDate from "./TodoListDate";
import styles from "./TodoListItem.module.css";

const TodoListItem = (props) => {
  const [confirm, setConfirm] = useState();
  let borderColor;
  if (props.priority.includes("high")) {
    borderColor = "1px solid red";
  } else if (props.priority.includes("medium")) {
    borderColor = "1px solid orange";
  } else {
    borderColor = "1px solid green";
  }
  const deleteHandler = () => {
    setConfirm(true);
  };
  const noConfirmHandler = () => {
    setConfirm(false);
  };
  const confirmHandler = () => {
    props.onDelete(props.id);
    setConfirm(false);
  };

  return (
    <li>
      <div>
        {confirm && (
          <Confirm onNoConfirm={noConfirmHandler} onConfirm={confirmHandler} />
        )}
      </div>
      <div className={styles.todoItem} style={{ border: borderColor }}>
        <TodoListDate date={props.date} />
        <h2>{props.title}</h2>
        <Button onClick={deleteHandler} className={styles["btn-delete"]}>
          delete
        </Button>
      </div>
    </li>
  );
};

export default TodoListItem;
