import logo from './logo.svg';
import './App.css';
import React, { useState } from'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Container,Button } from 'reactstrap';
import Student from './layout/Student';


function App() {
  const [listStudent, setListStudent] = useState([
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe'
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Doe',
      username: 'janedoe'
    },
    {
      id: 3,
      firstName: 'Kan',
      lastName: 'Doe',
      username: 'Kandoe'
    },
    {
      id: 4,
      firstName: 'Ane',
      lastName: 'Doe',
      username: 'Anedoe'
    },
    {
      id: 5,
      firstName: 'Jenny',
      lastName: 'Doe',
      username: 'jennydoe'
    },
    {
      id: 6,
      firstName: 'Jane',
      lastName: 'Kant',
      username: 'janekant'
    }
  ])

  const[id,setId] = useState(null);
  const[firstName,setFirstName] = useState('');
  const[lastName,setLastName] = useState('');
  const[username,setUsername] = useState('');
  const[isUpdate,setIsUpdate] = useState(false);

  const handleAddStudent = ()=>{
    console.log('test abc');
    const listStudentOld = [...listStudent];
    const newStudent = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      username: username

    };
    listStudentOld.push(newStudent);
		setListStudent(listStudentOld);
  };

  const handleChangeId = (event)=>{
    setId(event.target.value)
  };
  const handleChangeFirstName = (event)=>{
    setFirstName(event.target.value)
  };
  const handleChangeLastName = (event)=>{
    setLastName(event.target.value)
  };
  const handleChangeUsername = (event)=>{
    setUsername(event.target.value)
  };

  const deleteStudent = (id)=>{
    const listNewStudent = listStudent.filter((student)=>{
      return student.id !== id;
    })

    setListStudent(listNewStudent);
  };

  const updateStudent = (student)=>{
    setId(student.id);
    setFirstName(student.firstName);
    setLastName(student.lastName);
    setUsername(student.username);
    
    setIsUpdate(true);

  };

  const handleUpdateStudent = ()=>{
   
    const listStudentOld = [...listStudent];
    const newStudent = {
      id: id,
      firstName: firstName,
      lastName: lastName,
      username: username

    };
    // listStudentOld.forEach((student)=>{
    //   if(student.id === id){
    //     student.firstName = firstName;
    //     student.lastName = lastName;
    //     student.username = username;
    //   }
    // })
    // setListStudent(listStudentOld);

    const listNewStudent = listStudent.map((student)=>{
      if(student.id === id){
        return {
          id: id,
          firstName: firstName,
          lastName: lastName,
          username: username,
        };
      }
      return student;
    });
    setListStudent(listNewStudent);
    setIsUpdate(false);
    setId('');
    setFirstName('');
    setLastName('');
    setUsername('');
  };


  return (
   <>
   <Container className ='mt-5'>
    
    <div className='mt-2' style={{display: 'flex'}}>
      <label>id</label>
      <input value={id} onChange={handleChangeId} disabled = {isUpdate}/> 
    </div>
    <div className='mt-2' style={{display: 'flex'}}>
      <label>firstName</label>
      <input value={firstName} onChange={handleChangeFirstName} />
    </div>
    <div className='mt-2' style={{display: 'flex'}}>
      <label>lastName</label>
      <input value={lastName} onChange={handleChangeLastName}/>
    </div>
    <div className='mt-2' style={{display: 'flex'}}>
      <label>username</label>
      <input value={username} onChange={handleChangeUsername}/>
    </div>
    <div className='mt-2' style={{display: 'flex'}}>

      {
        isUpdate === true ? (
          <span style={{marginLeft: '10px'}}>
          <Button color='secondary' onClick={handleUpdateStudent}>Update</Button>
         </span>
        ):(
          <Button color='info' onClick={handleAddStudent} >ADD Student</Button>
        )
      }
      
       
       
      
    </div>

    
   
   <Table>
     <thead>
       <tr>
         <th>
           #
         </th>
         <th>
           First Name
         </th>
         <th>
           Last Name
         </th>
         <th>
           Username
         </th>
         <th>
           Actions
         </th>
       </tr>
     </thead>
     <tbody>
      {
        listStudent.map((student) => {
          return (
          
          <Student 
            id={student.id}
            firstName = {student.firstName} 
            lastName = {student.lastName}
            username = {student.username} 
            onDelete = {deleteStudent}
            onUpdate = {updateStudent}
          />
          );
        })
      }
     </tbody>
   </Table>
   </Container>
   </>
  );
}

export default App;
