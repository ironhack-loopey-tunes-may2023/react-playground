function User(props){

    console.log(props)

    return(
        <div className="box">
            <p>Name: {props.userName}</p>
            <p>Age: {props.age}</p>
            <p>Favourite food: {props.favFood}</p>
        </div>
    );
}


export default User;