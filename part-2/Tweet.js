const Tweet = (props) => {
    return (
        <ul>
            <li class="user">{props.username}</li>
            <li class="name">{props.name}</li>
            <li class="date">{props.date}</li>
            <li class="message">{props.message}</li>
        </ul>
    )
}