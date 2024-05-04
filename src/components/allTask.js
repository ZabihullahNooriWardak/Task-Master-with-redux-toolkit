  import { useSelector } from "react-redux";
  import { deletTask } from "../taskSlice/taskSlice";
  import { useDispatch } from "react-redux";
  import { ReactComponent as MyIcon } from './deleteIcon.svg';
  import { useState } from "react";
  import { updateTaskR } from "../taskSlice/taskSlice";

  function  AllTask() {
      let taksArr=useSelector(state=>state.taskList.tasks);
      let dispatch=useDispatch();
      let [editIndex,setEditIndex]=useState(null);
      let [updateTask,setUpdateTask]=useState("");
      function EditHandler(index,task){
        setEditIndex(index);
        setUpdateTask(task);
      }

    return (
      <div>
        <h1>All Task</h1>
        <ul>

          {taksArr.length===0? <h4 className="no">no Task</h4> :taksArr.map((task,index) => {
            return editIndex===index?<div key={index}> <input value={updateTask} onChange={(e)=>{setUpdateTask(e.target.value)}} ></input><button className="save" onClick={()=>{dispatch(updateTaskR({index:index,task:updateTask}));setEditIndex(null);setUpdateTask("");}}>Save</button></div> : <li key={index}>{task}<MyIcon className="icon" onClick={()=>{dispatch(deletTask(index))}}/><button onClick={()=>{EditHandler(index,task)}}>Edit</button></li>;
          })}
        </ul>
      </div>
    );
  }
  export default AllTask;