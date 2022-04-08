import styles from "./TodoListDate.module.css";

const TodoListDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const time = props.date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={styles["todoList-date"]}>
      <div className={styles["todoList-date__month"]}>{month}</div>
      <div className={styles["todoList-date__day"]}>{day}</div>
      <div>{time}</div>
    </div>
  );
};

export default TodoListDate;
