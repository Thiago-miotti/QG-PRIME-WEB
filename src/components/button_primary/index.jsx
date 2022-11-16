import './style.css';

function button_primary(props){
    return(
        <div className="button">
            <button onClick={props.onClick}>{props.title}</button>
        </div>
    )
}

export default button_primary;
