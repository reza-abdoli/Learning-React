import React from 'react'
import Lists from './Lists'
export default function Body(props) {
  const heading = (<>
    <span style={{ display: 'flex', justifyContent: 'space-around', width: '700px' }}>
      <p>N</p>
      <p>Tasks</p>
      <p>Action</p> 
    </span>
    <hr style={{ margin: '0' }}></hr>
  </>)

    const todoLists = props.tasks.map((todo) => {
      return <Lists handleDeletee={props.handleDeletee} id={todo.id} tasks={todo.tasks}/>
    })


  return (

    <div style={{ margin: '0 auto', width: '700px', backgroundColor: 'lightyellow' }}>
      {heading}
      {todoLists}
    </div>
  )
}
