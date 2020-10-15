import "./Calculator.css"
import React, { Component } from "react";
import ResultComponent from "./ResultComponent";
import KeysComponents from "./KeysComponents";

class App extends Component {

  state = {
    result: ''
  }

  keyPressed = button => {
    
    if(button === '=') {
      this.operationMath()

    } else {
      if(button === 'C') {
        this.reset() 

      } else if(button === 'CE') {
        this.back()

      } else {
        this.setState({
          result: this.state.result + button
        })

      }
    }
  };

  reset = () => {
    this.setState({
      result: ''
    })
  }

  back = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  operationMath = () => {
    try{
      this.setState({
        result: (eval(this.state.result) || "") + ""
      });
    } catch(erro) {
      this.setState({
        result: "Erro"
      })
    }
  }

  render() {

    return(
      <div className="AppCalculator">
        <div className="calc">
          <ResultComponent result={this.state.result}/>
          <KeysComponents keyPressed={this.keyPressed}/>
        </div>
      </div>
    );
  }

}

export default App;
