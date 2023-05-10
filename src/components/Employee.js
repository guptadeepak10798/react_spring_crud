import React from 'react'
import { useNavigate } from 'react-router-dom';

const Employee = ({employee,deleteEmployee}) => {
    const navigate = useNavigate();

    const editEmployee = (e,id) =>{
        e.preventDefault();
        navigate(`/editEmployee/${id}`); 
    };

    const viewEmployee = (e,id) =>{
        e.preventDefault();
        navigate(`/viewEmployee/${id}`); 
    };

  return (
    
        <tr key={employee.id}>  
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.firstName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.lastName}</div>
            </td>
            <td className='text-left px-6 py-4 whitespace-nowrap'>
                <div className='text-sm text-gray-500'>{employee.emailId}</div>
            </td>
            <td className='text-right px-6 py-4 whitespace-nowrap'>
                <a onClick={(e,id)=> editEmployee(e,employee.id)} className='text-indigo-600 hover:text-indigo-800 cursor-pointer px-4'>Edit</a>
                <a onClick={ (e,id)=> deleteEmployee(e,employee.id) } className='text-indigo-600 hover:text-indigo-800 cursor-pointer' >Delete</a>
                <a onClick={ (e,id)=> viewEmployee(e,employee.id) } className='text-indigo-600 hover:text-indigo-800 cursor-pointer px-4' >View</a>
            </td>   
        </tr>
    
  )
}

export default Employee
