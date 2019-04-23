import React,{Component} from "react";

class LinkContainer extends Component {
    render() {
        const {
            label,
            id,
            href
        } = this.props;
        return (
            <div className="link-container">
                <a id={id} href={href}>{label}</a>
            </div>
        );

  }
}

export default LinkContainer;