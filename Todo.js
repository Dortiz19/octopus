import React from 'react';

const Todo = (props) => {
    return(
      <div className='list-item'>
        {props.content}
        <button onClick={() => {props.onDelete(props.id)}}>X</button>
      </div>
    );
  }

  export default Todo;