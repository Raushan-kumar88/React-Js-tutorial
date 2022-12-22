import React from 'react'
import Table from 'react-bootstrap/Table';
const data=[
    {
        name:"Raushan",phone:'838',Email:"rk@gmail.com"
    },
    {
        name:"Karan",phone:'832',Email:"kr@gmail.com"
    },
    {
        name:"Shyam",phone:'800',Email:"shyam@gmail.com"
    },
    {
        name:"Khushi",phone:'111',Email:"khushi@gmail.com"
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
            data.map((dt,i)=>
            /* dt.phone==='111'? */
            <tr key={i}>
              <td>{i+1}</td>
              <td>{dt.name}</td>
              <td>{dt.phone}</td>
              <td>{dt.Email}</td>
            </tr>
            /* :null */
          )
          }
          </tbody>
        </Table>
      );
}

export default MapFunction

// for loop function is note used in react js because forloop is not support in return function
// only used in map functin 