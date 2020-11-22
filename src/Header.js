import React from 'react';

const Header = (props) => {
    return(
        <h1>
          You have {props.numTodos} Todos
        </h1>
    )
  }

  export default Header;