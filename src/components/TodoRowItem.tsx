import React from "react";

export const TodoRowItem:React.FC<{rowNumber: number, rowAssigned: string, rowDescription: string, deleteTodo: Function }> = (props) => {
    
    const rowNumber = props.rowNumber;
    const rowDescription = props.rowDescription;
    const rowAssigned = props.rowAssigned;
    return (
        <tr >
            <th scope='row' >{ rowNumber}</th>
                <td  >{rowDescription}</td>
                <td>{rowAssigned}</td>
                <td className="text-primary " onClick={() => props.deleteTodo(props.rowNumber)}><div>Done</div></td>
              </tr>
    )
    
}


