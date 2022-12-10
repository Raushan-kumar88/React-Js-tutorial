import {useState} from 'react'

function State2() {
    const [data,setData]=useState(0);
    
    function changeData(){
        setData(data+1);
    }
  return (
    <>
        <div>
            <img src="https://m.espacepourlavie.ca/sites/espacepourlavie.ca/files/ls002028.jpg" alt='Raushan' width="30%" height="33%" />
            <p>image name lotus</p>
        </div>
        <h1>My first name is {data} Raushan</h1>

        <button onClick={changeData}>change name</button>
    </>
  )
}

export default State2