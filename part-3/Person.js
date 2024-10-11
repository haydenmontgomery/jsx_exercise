const Person = (props) => {
    let message;
    if (props.age < 18) {
        message = "you must be 18"
    } else {
        message = "please go vote!"
    }
    let name = props.name.slice(0, 8);
    return (
        <div>
            <p>Learn some information about this person.</p>
            <h3>{name}, {message}</h3>
            <h4>Hobbies</h4>
            <ul>{props.hobbies.map(h =>
                (
                    <li>
                        <b>{h}</b>
                    </li>
                )
            )}</ul>
        </div>
    )
}