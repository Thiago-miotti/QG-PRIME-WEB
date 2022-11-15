import './style.css';

function button_primary(props){
    return(
        <div className="button">
            <button>{props.title}</button>
        </div>
    )
}

export default button_primary;