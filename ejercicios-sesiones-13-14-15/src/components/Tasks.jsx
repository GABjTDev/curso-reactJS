import React from 'react'

const completed = {
  color: "green"
}

const pendient = {
  color: "orange"
}

const btn = {
  border: "none",
  background: "royalblue",
  padding: "10px",
  borderRadius: "5px",
  cursor: "pointer",
  color: "white"
}

const Tasks = ({task, handleChange}) => {
  return (
    <div>
      {
        task.length === 0 ? (
          <p>No hay tareas...</p>
        )
        :
        (
          task.map(task => {
            return(
              <div key={task.id} style={{maxWidth: "400px", display:"flex", justifyContent: "space-between", marginBottom: "10px"}}>
                <p>{task.title} - <span style={task.status ? completed : pendient}>{task.status ? "Completed" : "Pendient"}</span></p>
                <button style={btn} onClick={() => handleChange(task.id)}>Change Status</button>
              </div>
            )
          })
        )
      }
    </div>
  )
}

export default Tasks