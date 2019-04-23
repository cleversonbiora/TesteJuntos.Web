import React,{Component} from "react";

class InputContainer extends Component {
    render() {
        const {
            label,
            id,
            name,
            type,
            onChange
        } = this.props;
        return (
            <div className="input-container">
                <label htmlFor={id}>{label}</label>
                <div>
                    <input id={id} name={name || id} type={type ||"text"} onChange={({ target: { value } }) => onChange(id, value)}/>
                </div>
            </div>
        );

  }
}

export default InputContainer;