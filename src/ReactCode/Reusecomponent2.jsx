function Reusecomponent2(props){
    return(
        <> 
        {/* <p key={i}>{i+1}</p> */}
        <h1>{props.data.name}</h1>
        <h5>{props.data.email}</h5>
        <p>{props.data.phone}</p>
        </>
    )
}
export default Reusecomponent2