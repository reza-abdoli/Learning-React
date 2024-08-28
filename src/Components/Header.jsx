import React from 'react';
import Form from './Form'
export default function Header(props) {
  return (
    <div style={{ margin: '0 auto' ,width: '700px', backgroundColor: 'lightblue', padding: '10px' }}>
        <Form handleInput={props.handleInput}/>
    </div>
  );
}
