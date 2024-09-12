import React,{useState} from "react"

function Task(){

    const [task,setTask] = useState()
    const [list,setList] = useState([])
    const [listItem,setlistItem] = useState()
    const [listpk,setlistpk] = useState(0)
    const [update,setUpdate] = useState()
    const [updateIndex,setupdateIndex] = useState()
    const [addLod,setaddLod] = useState(0)
    const AddTaskpopup = (event) =>{
        setTask(t => event.target.value)

    }
    function TaskUpdateChange(index,event){
        setupdateIndex(index)
        document.querySelector("#updateinput").value = ""
        setUpdate(U => list[index]["task"])
        
        
    }
    function TaskUpdates(event){
        let value = event.target.value
        setUpdate(U => value)
    }
   
    function TaskUpdate(index=updateIndex){
        
        list[index]["task"] = update
        setlistItem(list.map((lists ,index) => { 
             return(<> <tr>{lists.task} <td className="text-end"><p>
                 <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update" onClick={() => TaskUpdateChange(index)}>
  update
</button>
                 <button
                     class="btn-close"
                     type="button"
                     data-listindex={index}
                     onClick={() => TaskDelete(index)}
                     data-bs-toggle="popover"
                     title={index}
                     data-bs-content="Popup content"
                 >
                     
                 </button>
                 
             </p>
             <div class="collapse" id="contentId"></div>
             </td></tr> </>)
    
         }
         ))

    }
    function TaskDelete(index){
        list.splice(index,1)
       setlistItem(list.map((lists ,index) => { 
         return(<> <tr>{lists.task} <td className="text-end"><p>
             
             <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update" onClick={() => TaskUpdateChange(index)}>
  update
</button>


             <button
                 class="btn-close"
                 type="button"
                 data-listindex={index}
                 onClick={() => TaskDelete(index)}
                 data-bs-toggle="popover"
                 title={index}
                 data-bs-content="Popup content"
             >
                 
             </button>
             
         </p>
         <div class="collapse" id="contentId"></div>
         </td></tr> </>)

     }
     ))
        
    }
    function countaddLod(){
        setaddLod(a => a + 1)
    }
    alert(addLod)
    setTimeout(countaddLod(),"9000")
    const AddTask = (e) => {
        setlistpk(l => l + 1)
        let taskvalue = e.target.dataset.task
        
        list.push({"task":taskvalue})
        setlistItem(list.map((lists ,index) => { 
           let r = list.filter(task => task === lists)
            return(<> <tr>{lists.task} <td className="text-end"><p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#update" onClick={() => TaskUpdateChange(index)}>
  update
</button>
                <button
                    class="btn-close"
                    type="button"
                    data-listindex={index}
                    onClick={() => TaskDelete(index)}
                    data-bs-toggle="popover"
                    title={index}
                    data-bs-content="Popup content"
                >
                    
                </button>
                
            </p>
            <div class="collapse" id="contentId"></div>
            </td></tr> 
         
            </>)

        }
        ))
        setTask("")
    
    }

    return(<>
    
        <div
            class="container-fluid"
        >
            <div className="row">
                <div className="col-3">
                <div
            class="table-responsive-md"
        >
            <table
                class="table  table-borderless  align-middle"
            >
                <thead class="table-light">
                    <caption>
                        Tasklist
                    </caption>
                    <tr>
                        <th>Task</th>
                        <th>Update delete</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr
                        class=""
                    >
                    </tr>
                        {listItem}
                    
                    
                </tbody>
                <tfoot>
                    
                </tfoot>
            </table>
        </div>
                </div>
            </div>
        </div>
        
        
        <div className="position-absolute top-50 start-50 translate-middle rounded border border-info  h-50" style={{width:"40%"}}>
            <div className="ms-3 mt-4 mb-4 me-4">
            <div className="mb-4 mt-5">
                <p for="Task" className="form-label fs-1 text-center">Task</p>
                <input
                    type="text"
                    className="form-control"
                    name=""
                    id="taskinput"
                    onChange={ AddTaskpopup}
                    value={task}
                    data-bs-toggle="popover"
                    title={task}
                    data-bs-content="Popup content"
                    placeholder="Add You'r Task"
                />
                
                
                <div className="d-grid gap-2 mt-3" >
                    
                    <button
                        type="subimt"
                        name=""
                        id="AddButton"
                       onClick={(e) => AddTask(e)}
                        className="btn btn-primary"
                        disabled={task ? false : true}
                        data-Task={task}
                    >
                        Add Task 
                    </button>
                    
                </div>
                
                   
                </div>
            </div>
            
        </div>
        <div className="modal fade hover-zoom rounded" id="update" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Update </h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close">
        </button>
      </div>
      <div className="modal-body">
      <p>Befor Use Data <b>{update}</b> pk <b>{updateIndex + 1}</b></p>
        <input type="text" placeholder={update} id="updateinput" className="form-control mb-2" onChange={() => TaskUpdates(event)}/>
        <button className="btn btn-outline-primary mt-2 btn-block w-100" onClick={() => TaskUpdate()} data-bs-dismiss="modal">update</button>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" id="f">Close</button>
      </div>
    </div>
  </div>
</div>
        
    </>);
}

export default Task