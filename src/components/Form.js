import React, { useState } from 'react'

const Form = () => {
    const [input ,setInput]=useState('');
    const [tasks, setTasks] = useState([]);
    const [editlist, setEditlist]=useState(null);

    const handleSubmit = () => {
        if(input){
         if(editlist !== null){
          const updatelist = tasks.map((x,i)=> i === editlist ? input : x);
          setTasks(updatelist);
          setEditlist(null);
         }else{
          setTasks([...tasks, input]);
         }
          setInput('');
        }
    }
  const deleteitem = (task)=>{
  let update = tasks.filter((x)=>{
    return x!== task;
  })
  setTasks(update);
  }

const updateitem = (index)=>{
  setEditlist(index);
  setInput(tasks[index]);
 
}
  return (
    <div className='container'>
      <h3 className='text-center py-3'>Todo App</h3>
      <div className='d-flex justify-content-between'>
        <input type='text' className='form-control input' value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Add a task...' />
        <button type='submit' className='btn btn-primary' onClick={handleSubmit}>

          {editlist ==null ? "additem" :"edit"}
        </button>
      </div>
      {/* TODO: Add Task List Here */}
      <div>
        {tasks.map((task, index) => (
        <div className='d-flex justify-content-between'>
        <div key={index} className='alert alert-info my-2'>{task}</div>
<div className=''>
<button className='ms-auto my-2 mx-2 btn btn-warning' onClick={()=>deleteitem(task)}>Delete</button>
<button className='ms-auto my-2 mx-2 btn btn-danger' onClick={()=>updateitem(index)}>Edit</button>
</div>
        </div>
        ))}
      </div>
      </div>
  )
}

export default Form

