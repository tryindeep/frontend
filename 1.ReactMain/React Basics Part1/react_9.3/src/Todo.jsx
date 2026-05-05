

export function Todo(props){

    return (
        <div>
            {props.title} - {props.done ? " Done!" : " not done yet!"}
        </div>
    )
}