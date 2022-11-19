import './style.css';

function ButtonPrimary(props){
    return(
        <div className="button">
            <button style={props.style} disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default ButtonPrimary;
