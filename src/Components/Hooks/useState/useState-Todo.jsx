import React, { useState } from "react";
import "./useState.css";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [isEditing, setIsEditing] = useState("");
  const [editText, setEditText] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      let data = {
        id: Math.floor(Math.random() * Date.now()).toString(16),
        todo: todo.trim(),
      };
      setTodoList([...todoList, data]);
      setTodo("");
      setIsEditing("");
    }
  };

  const handleEdit = (id, text) => {
    setIsEditing(id);
    setEditText(text);
  };

  const handleSave = (id, text) => {
    const updatedTodoList = todoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, todo: text.trim() };
      }
      return todo;
    });
    setTodoList(updatedTodoList);
    setIsEditing("");
    setEditText("");
  };

  const handleCancel = () => {
    setIsEditing("");
    setEditText("");
  };

  const handleDelete = (id) => {
    const filteredTodo = todoList.filter((eachTodo) => eachTodo.id !== id);
    setTodoList(filteredTodo);
  };

  return (
    <>
      <form style={{ margin: "10px" }}>
        <input
          className="todo-input"
          type="text"
          name="todo"
          id="todo1"
          placeholder="Enter your TODO"
          value={todo}
          onChange={handleChange}
        />
        {todo === "" ? (
          <button className="todo-btn" onClick={(e) => handleAdd(e)} disabled>
            Add
          </button>
        ) : (
          <button className="todo-btn" onClick={(e) => handleAdd(e)}>
            Add
          </button>
        )}
      </form>
      <hr></hr>
      {todoList.length === 0 && (
        <>
          <h4>There is no Data</h4>
          <hr></hr>
        </>
      )}
      {todoList.length !== 0 && (
        <>
          <ul className="todo-list">
            {todoList.map((eachTodo) => {
              const { id, todo } = eachTodo;
              return (
                <React.Fragment key={id}>
                  {isEditing === id ? (
                    <li>
                      <div className="todo-text">
                        <input
                          className="todo-input"
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                        />
                      </div>
                      <div className="todo-button" style={{ width: "15%" }}>
                        <button
                          className="count-btn"
                          onClick={() => handleSave(id, editText)}
                        >
                          Save
                        </button>
                      </div>
                      <div className="todo-button" style={{ width: "15%" }}>
                        <button
                          className="count-btn"
                          onClick={() => handleCancel(id)}
                        >
                          Cancel
                        </button>
                      </div>
                    </li>
                  ) : (
                    <li>
                      <div className="todo-check">
                        <input type="checkbox"></input>
                      </div>
                      <div className="todo-text">{todo}</div>
                      <div className="todo-button">
                        <button
                          className="count-btn"
                          onClick={() => handleEdit(id, todo)}
                        >
                          Edit
                        </button>
                      </div>
                      <div className="todo-button">
                        <button
                          className="count-btn"
                          onClick={() => handleDelete(id)}
                        >
                          Delete
                        </button>
                      </div>
                    </li>
                  )}
                  <hr className="seperator" />
                </React.Fragment>
              );
            })}
          </ul>
          <hr></hr>
        </>
      )}
    </>
  );
};

export default Todo;
