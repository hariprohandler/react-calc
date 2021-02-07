import React, { Component } from 'react';
import './ClearButton.css';

class ClearButton extends Component {
    isOperator = val => {
        return !isNaN(val) || val == "." || val == "="
    }

    render(){
        return (
            <div 
            className="clear-btn"
            >
                {this.props.children}
            </div>
        );
    }
}

export default ClearButton;