function Sub(props){
    return(
        <>
            <h1>This is subtract component</h1>
            <h3>Subtraction of {props.x} and {props.y} is {props.x - props.y} </h3>
        </>
    );
}

export default Sub;