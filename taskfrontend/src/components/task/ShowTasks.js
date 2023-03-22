import React from 'react'

const ShowTasks = ({data, index}) => {
  return (
      <div onClick={()=>console.log(index)}>
        <ul>
          <li>{data.name}</li>
          <li>{data.status}</li>
        </ul>

      </div>
  )
}

export default ShowTasks