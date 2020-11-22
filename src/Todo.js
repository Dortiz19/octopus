import React from 'react';

const Todo = (props) => {
    return (
        <div>
            {props.content}
            <button onClick={() => {props.onDelete(props.id)}}>Delete</button>
        </div>
    );
}



export default Todo;