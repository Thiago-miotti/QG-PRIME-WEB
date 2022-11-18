import './style.css';

function button_primary(props){
    return(
        <div className="button">
            <button style={props.style} disabled={props.disabled} onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default button_primary;
