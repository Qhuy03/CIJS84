import React from "react";

const Student = (props) => {
    return (
        <tr>
         <th scope="row">
           {props.id}
         </th>
         <td>
           {props.firstName}
         </td>
         <td>
           {props.lastName}
         </td>
         <td>
           {props.username}
         </td>
       </tr>
    );
}

export default Student;