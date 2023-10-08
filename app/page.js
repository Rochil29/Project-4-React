"use client"
import React, { useState } from 'react'

const page = () => {
    const [task, settask] = useState("")
    const [dec, setdec] = useState("")
    const [mainTask, setmainTask] = useState([])

    const submitHandler = (e) =>{

      e.preventDefault()
      setmainTask([...mainTask,{task,dec}])
      settask("")
      setdec("")
    }
    let renderTask = <h2>No Task Available</h2>

    const deleteHandler = (i)=>{

      let copyTask = [...mainTask]
      copyTask.splice(i,1)                   ////here "1" is to delete only one task at a time, if taken 2 ,two tasks would be deleted at the same time
      setmainTask(copyTask)
    }

    if(mainTask.length>0){
      renderTask = mainTask.map((t,i) => {

      return (
      <li key={i} className="flex items-center justify-between pb-3">
      <div className="flex justify-between  mr-10 w-2/3">
        <h5 className="text-xl">{t.task}</h5>
        <h5>{t.dec}</h5>
      </div>
      <button 
      onClick={()=>{
        deleteHandler(i)
      }}
      className="bg-red-400 text-xl font-bold rounded text-white px-3 py-2">Delete</button>
      </li>
        );
     });
    }
    

  return (
    <>

        <h1 className="bg-zinc-700 p-8 text-2xl text-center font-medium rounded-md ">My Todo List</h1>

        <form onSubmit={submitHandler}>
            <input type="text"
            className="m-9 mt-20 p-2 ml-16 pl-8 border-4 rounded-md border-gray-800 "
            placeholder="Entre task here"
            value = {task}
            onChange={(e)=>{                                      ////e=event
              settask(e.target.value)
            }}
            />
            <input type="text"
            className=" m-9 mt-20 p-2 ml-72 pl-8 border-4 rounded-md border-gray-800 "
            placeholder="Entre Discription"
            value={dec}
            onChange={(e)=>{                                      ////e=event
              setdec(e.target.value)
          }}
            />
            <button className="bg-gray-800 p-2 ml-28 mt-20 text-white px-9 py-2 rounded-md">Add</button>
        </form>

        
        <div className="tasks  bg-slate-400 p-8 mt-8">
          <ul>{renderTask}</ul>
        </div>
    </>
  )
}

export default page