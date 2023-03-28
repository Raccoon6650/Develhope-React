import Message from './Message';
const Hello = (props) => {
    return(
        <>
        <div> <h1> Hello, {props.name} </h1></div>
        <Message/>
        </>
    );
}
Hello.defaultProps = {
    name: "You" 
}
export default Hello;