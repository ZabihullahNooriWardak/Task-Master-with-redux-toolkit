import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTask } from "../taskSlice/taskSlice";
import { useState } from "react";
function AddTask(){

    let dispatch=useDispatch();
     let [taksState,setTaskState]=useState("")
    return (
        <>
          <h1>TaskMaster</h1>
          <div className="input-container">
  <input
    value={taksState}
    onFocus={() => {
      setTaskState("");
    }}
    onChange={(e) => {
      setTaskState(e.target.value);
    }}
    placeholder="Enter your task"
  />
  <button
    onClick={() => {
      dispatch(addTask(taksState));
    }}
  >
    Add task
  </button>
</div>

        </>
    )
}
export default AddTask;