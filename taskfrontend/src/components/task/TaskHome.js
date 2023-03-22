import React, {useState} from 'react';
import ShowTasks from './ShowTasks';

const TaskHome = () => {
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState()
    const [counter, setCounter] = useState(0)
    
    
    const handleFormDataSubmit =(e)=>{
        e.preventDefault();
        setTasks([...tasks, task])
        setCounter(counter+1)
        // alert(task["name"]+task["status"])
    }

    const handleOnChange = (e) =>{
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }


  return (
    <>
        <div>
            <form onSubmit={handleFormDataSubmit}>
                <h2>Create Task:</h2>
                <label htmlFor='name'>Task: </label>
                <input type="text" name='name' onChange={handleOnChange} required/>
                <br/>

                <label htmlFor='status'>Status: </label>
                <input type="text" name="status" onChange={handleOnChange} required/>
                <br/>

                <button>Submit</button>
                <br/>

            </form>
        </div>
        <div>
           { tasks.length<1? <></>: 
            tasks.map((tsk)=>{
                return(
                    // console.log(tsk)
                    <ShowTasks key={counter} data={tsk} index={counter}/>
                    )
                })
            }
        </div>
    </>
  )
}

export default TaskHome