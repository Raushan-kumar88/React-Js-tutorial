import { Button } from 'react-bootstrap';
function Liftingchild(props) {
    const name={
        name:'child send from parents',
        email:"child@gmail.com"
    }
  return (
    <>
        <h1>{props.name}</h1>
        {/* here process is send data from child to parents */}
        <Button onClick={()=>props.alert(name)}>child Button</Button>
    </>
  )
}

export default Liftingchild