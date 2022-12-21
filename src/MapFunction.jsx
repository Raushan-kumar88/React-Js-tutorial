import React from 'react'
import Table from 'react-bootstrap/Table';
const data=[
    {
        id:'1',name:"Raushan",phone:'838',Email:"rk@gmail.com"
    },
    {
        id:'2',name:"Karan",phone:'832',Email:"kr@gmail.com"
    },
    {
        id:'3',name:"Shyam",phone:'800',Email:"shyam@gmail.com"
    },
    {
        id:'4',name:"Khushi",phone:'111',Email:"khushi@gmail.com"
    }
]
function MapFunction() {
    return (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Name</th>
              <th>PHONE</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
          {
            data.map((dt)=>
            <tr>
              <td>{dt.id}</td>
              <td>{dt.name}</td>
              <td>{dt.phone}</td>
              <td>{dt.Email}</td>
            </tr>
          )
          }
          </tbody>
        </Table>
      );
}

export default MapFunction

// for loop function is note used in react js because forloop is not support in return function
// only used in map functin 