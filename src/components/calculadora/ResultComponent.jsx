import React, { Component } from 'react';

export default class ResultComponent extends Component {
    
    render() {
        return(
            <div className="result">
                <p>{this.props.result}</p>
            </div>
        );
    }
}