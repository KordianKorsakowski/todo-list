import TodoForm from "./TodoForm";
import styles from "./NewTodo.module.css";

const NewTodo = (props) => {
  const SetTodoHandler = (todo) => {
    props.onSetNewTodo(todo);
  };

  return (
    <div className={styles["new-todo"]}>
      <TodoForm onSetTodo={SetTodoHandler} />
    </div>
  );
};
export default NewTodo;
