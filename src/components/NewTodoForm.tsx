import React,{useState} from "react";

export const NewTodoForm:React.FC<{ addTodo:Function}>=(props)=> {
    
    const [inputDescription, setDescription] = useState('');
    const [inputAssigned, setAssigned] = useState('');
    

    const assignedChange = (event: any) =>
    {
        setAssigned(event.target.value);
    }     

    const submitTodo = () => {
        if (inputDescription !== '' && inputAssigned !== '')
            props.addTodo(inputDescription, inputAssigned);
        setDescription('');
        setAssigned('');
    }

  
    return (
        <div className="mt-5">
            <form>
                <div>
                    <label className="form-label">Assigned</label>
                    <input value={inputAssigned} className="form-control" type="text" required onChange={assignedChange}  ></input>
                </div>

                <div>
                    <label className="form-label">Description</label>
                    <textarea value={inputDescription} onChange={e => {
        setDescription(e.target.value);
    }} className="form-control" rows={3} required></textarea>
                </div>
                <button type="button" className="btn btn-primary mt-3" onClick={submitTodo}>Add Todo</button>
            </form>
     </div>    
    )
}

