import { useState } from 'react';
import './css/Q4.css';

function Q4() {
    const [task, setTask] = useState('');
    const [todos, setTodos] = useState([]);

    const handleAdd = () => {
        if (task.trim() === '') return;
        setTodos([...todos, task.trim()]);
        setTask('');
    };

    const handleDelete = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    return (
        <div className="q4-container">
            <table>
                <tr>
                    <td>
                        <input
                            className="btn"
                            type="text"
                            placeholder="Please input a Task"
                            value={task}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </td>
                    <td>
                        <input
                            className="btn-submit"
                            type="submit"
                            value="Add Todo"
                            onClick={handleAdd}
                        />
                    </td>
                </tr>
            </table>

            {todos.length > 0 && (
                <div className="todo-list">
                    <h3>Todo List</h3>
                    <table className="todo-table">
                        <tbody>
                            {todos.map((item, index) => (
                                <tr key={index}>
                                    <td className="todo-item">{item}</td>
                                    <td>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDelete(index)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
export default Q4;