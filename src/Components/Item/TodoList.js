import { useState } from "react";
import Card from "../UI/Card";
import TodoListItem from "./TodoListItem";

import styles from "./TodoList.module.css";
import Filter from "../Filter/Filter";

const TodoList = (props) => {
  const [filteredPriority, setFilteredPriority] = useState("all");

  const addPriorityTodo = (selectedPriority) => {
    setFilteredPriority(selectedPriority);
  };

  let filteredTodoList = props.data.filter((el) => {
    return el.priority.includes(filteredPriority);
  });

  let todoListContent = (
    <p className={styles.info}>You don't have any task here</p>
  );

  if (filteredTodoList.length > 0) {
    todoListContent = filteredTodoList.map((el) => {
      return (
        <TodoListItem
          key={el.id}
          title={el.task}
          date={el.date}
          priority={el.priority[0]}
          id={el.id}
          onDelete={props.onDeleteItem}
        />
      );
    });
  }

  return (
    <Card className={styles.todoList}>
      <Filter selcted={filteredPriority} onPriorityTodo={addPriorityTodo} />
      <ul>{todoListContent}</ul>
    </Card>
  );
};

export default TodoList;
