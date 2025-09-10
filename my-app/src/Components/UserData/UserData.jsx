const UserData = (props) => {
    console.log(props);
    return (
        <div style={{border: "2px solid white",margin:"20px"}}>
            {/* <p>{props.userId}</p>
            <p>{props.id}</p> */}
            <h1>{props.title}</h1>
            <p>{props.body}</p>
        </div>
    )
}

export default UserData;