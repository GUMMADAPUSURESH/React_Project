import React, { useState } from 'react';
import './useState.css';

const TodoModified = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [isEditing, setIsEditing] = useState(null);
    const [editText, setEditText] = useState("");

    const handleAdd = (e) => {
        e.preventDefault();
        if (todo.trim() !== "") {
            const newTodo = {
                id: Math.floor(Math.random()*Date.now()).toString(16),
                todo: todo.trim()
            }
            setTodoList([...todoList, newTodo])
            setTodo("")
            setIsEditing(null)
        }
    }

    const handleEdit = (id, todo) => {
        setIsEditing(id);
        setEditText(todo);
    }

    const handleSave = (id, newText) => {
        const updatedTodoList = todoList.map(todo => {
            if (todo.id === id) {
                return { ...todo, todo: newText.trim() };
                
            }
            return todo;
        });
        setTodoList(updatedTodoList);
        setIsEditing(null);
        setEditText('');
    }

    const handleCancel = () => {
        setIsEditing(null);
        setEditText("");
    }

    const handleDelete = (id) => {
        const filteredTodo = todoList.filter((eachTodo) => eachTodo.id !== id)
        setTodoList(filteredTodo);
    }

    return (
        <>
            <form style={{ margin: '10px' }}>
                <input
                    className='todo-input'
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder='Enter your TODO'
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                {todo === "" ?
                    <button className="todo-btn" onClick={(e) => handleAdd(e)} disabled>Add</button>
                    :
                    <button className="todo-btn" onClick={(e) => handleAdd(e)}>Add</button>
                }
            </form>
            <hr></hr>
            {todoList.length === 0 && (<><h4>There is no Data</h4><hr></hr></>)}
            {todoList.length !== 0 && (
                <>
                    <ul className='todo-list'>
                        {todoList.map((eachTodo) => {
                            const { id, todo } = eachTodo;
                            return (
                                <React.Fragment key={id}>
                                    <li>
                                        {isEditing === id ?
                                            <>
                                                <div className='todo-text'><input className="todo-input" type="text" value={editText} onChange={e => setEditText(e.target.value)} /></div>
                                                <div className='todo-button' style={{width: '15%'}}><button className="count-btn" onClick={() => handleSave(id, editText)}>Save</button></div>
                                                <div className='todo-button' style={{width: '15%'}}><button className="count-btn" onClick={handleCancel}>Cancel</button></div>
                                            </>
                                            :
                                            <>
                                                <div className='todo-check'><input type="checkbox"></input></div>
                                                <div className='todo-text'>{todo}</div>
                                                <div className='todo-button'><button className="count-btn" onClick={() => handleEdit(id, todo)}>Edit</button></div>
                                                <div className='todo-button'><button className="count-btn" onClick={() => handleDelete(id)}>Delete</button></div>
                                                
                                            </>
                                        }
                                    </li>
                                    <hr className="seperator" />
                                </React.Fragment>
                            )
                        })}
                    </ul>
                    <hr></hr>
                </>
            )}
        </>
    )
}

export default TodoModified;