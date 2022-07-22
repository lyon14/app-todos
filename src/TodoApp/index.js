import React from 'react';
import './TodoApp.css';

function TodoApp(props) {
    return (
        <div className='TodoApp'>
            {props.children}
        </div>
    );
}

export {  TodoApp  };