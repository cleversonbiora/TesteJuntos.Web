import React,{Component} from "react";

class ButtonContainer extends Component {
    render() {
        const {
            label,
            id,
            icon,
            onClick
        } = this.props;
        return (
            <div className="btn-container">
                <button id={id} onClick={() => onClick()}>
                <span>{label} </span>
                <img src={icon} className="App-logo" alt="logo" />
                </button>
            </div>
        );

  }
}

export default ButtonContainer;