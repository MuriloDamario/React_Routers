import React, { Component } from 'react';

export default class KeysComponents extends Component {

    keyPressed = button => {
        this.props.keyPressed(button.target.name);
    };

    render() {
        
        return(
            <div className="buttons">
                <button name="(" onClick={this.keyPressed}>(</button>
                <button name=")" onClick={this.keyPressed}>)</button>
                <button name="CE" onClick={this.keyPressed}>CE</button>
                <button name="C" onClick={this.keyPressed}>C</button>
                <button name="1" onClick={this.keyPressed}>1</button>
                <button name="2" onClick={this.keyPressed}>2</button>
                <button name="3" onClick={this.keyPressed}>3</button>
                <button name="4" onClick={this.keyPressed}>4</button>
                <button name="5" onClick={this.keyPressed}>5</button>
                <button name="6" onClick={this.keyPressed}>6</button>
                <button name="7" onClick={this.keyPressed}>7</button>
                <button name="8" onClick={this.keyPressed}>8</button>
                <button name="9" onClick={this.keyPressed}>9</button>
                <button name="0" onClick={this.keyPressed}>0</button>
                <button name="." onClick={this.keyPressed}>.</button>
                <button name="=" onClick={this.keyPressed}>=</button>
                <button name="+" className="sp_btn" onClick={this.keyPressed}>+</button>
                <button name="-" className="sp_btn" onClick={this.keyPressed}>-</button>
                <button name="*" className="sp_btn" onClick={this.keyPressed}>*</button>
                <button name="/" className="sp_btn" onClick={this.keyPressed}>/</button> 
            </div>
        );
    }
}