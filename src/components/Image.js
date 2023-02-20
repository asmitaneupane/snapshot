const Image = ({ url, title, id }) => {
    return (
        <li>
            <img src={url} alt={title} key={id} />
        </li>
    )
}

export default Image