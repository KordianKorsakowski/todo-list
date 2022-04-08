
import {useState, useEffect} from "react";

import TodoList from "./Components/Item/TodoList";
import NewTodo from "./Components/NewTodo/NewTodo";


// let saveData = JSON.parse(localStorage.getItem('storageTodoList'));
//

const getLocalList = () => {
    let list = JSON.parse(localStorage.getItem('storageTodoList'));
    if(list){
        list.map(el => el.date = new Date(el.date));
        return list;

    }
        return [];
}



function App() {

    const [todoList, setTodoList] = useState(getLocalList());


    const SetNewTodo = (newTodo) => {
        setTodoList((prevTodoList) => {
            return [newTodo, ...prevTodoList];
        });
    }

    const deleteItemHandler = (taskID) =>{
        if(todoList.length === 1){
            localStorage.removeItem('storageTodoList');
        }
        setTodoList((prevTodoList) =>{
            let updatedTodoList = prevTodoList.filter(task => task.id !== taskID);
            return updatedTodoList;
        })
    }
    useEffect(() => {
        if(todoList.length > 0) {
            localStorage.setItem('storageTodoList', JSON.stringify(todoList));
        }


    },[todoList]);


  return (
    <div>
        <NewTodo onSetNewTodo={SetNewTodo}/>
        <TodoList data={todoList} onDeleteItem={deleteItemHandler}/>
    </div>
  );
}

export default App;
