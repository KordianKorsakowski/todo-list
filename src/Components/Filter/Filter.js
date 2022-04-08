import styles from "./Filter.module.css";

const Filter = (props) => {
  const priorityChangeHandler = (e) => {
    props.onPriorityTodo(e.target.value);
  };

  return (
    <div className={styles.filter}>
      <div className={styles["filter__control"]}>
        <label>Filter your Task</label>
        <select value={props.selcted} onChange={priorityChangeHandler}>
          <option value="all">all</option>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
