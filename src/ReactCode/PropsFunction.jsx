
function PropsFunction(props){
    return(
        <div style={{backgroundColor:"yellow",margin:22}}>
            <h1>Name : {props.name}</h1>
            <h3>Email : {props.email}</h3>
            <h4>Address : {props.other.address}</h4>
            <h4>Mobile : {props.other.Mobile}</h4>
        </div>
    )
}
export default PropsFunction