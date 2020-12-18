import React, {Component} from 'react'

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    updateNumber1(val) {
        this.setState({ number1: parseInt(val, 10) });
      }
    
      updateNumber2(val) {
        this.setState({ number2: parseInt(val, 10) });
      }
    
    adds(number1, number2){
        this.setState({sum: number1 + number2})
    }
    render(){
        return(
            <div className="puzzleBox sumPB">
                <input className="inputLine" onChange={(e) => this.updateNumber1(e.target.value)}/>
                <input className="inputLine" onChange={(e)=> this.updateNumber2(e.target.value)}/>
                <button className="confirmationButton" onClick= {() => this.adds(this.state.number1, this.state.number2)}>Add</button>
                <h4>Sum</h4>
                <span  className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}
export default Sum