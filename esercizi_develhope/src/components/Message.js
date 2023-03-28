const Message = (props) => {
    return(
    <>
        <p> {props.message} </p>
    </>
    )
}
Message.defaultProps= {
    message: "This is the second message, is a paragraf"
}

export default Message