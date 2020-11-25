import React from 'react';
import './App.css';

function Todo({ todo, index, removeTodo }) {

    return (
        <div className="todo">
            {todo.text}
            <button onClick={() => removeTodo(index)}>X</button>
        </div>
    );
};

function TodoForm({ addTodo }) {
    const [value, setValue] = React.useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                onChange={e => setValue(e.target.value)}
            />
            <button>Submit</button>
        </form>
    );
};

function App() {
    const [todos, setTodos] = React.useState([
        { text: "do this" },
        { text: "do this" },
        { text: "do this" }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos)
    }

    const removeTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos)
    }


    return (
        <div className="app">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        removeTodo={removeTodo}
                    />
                ))}
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    )
};

export default App;
