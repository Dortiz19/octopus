import React from 'react';

const Header = (props) => {
    return (
        <div className='header'>
      <h1>
        You have {props.numTodos} Todos
      </h1>
    </div>
    )
}


export default Header;