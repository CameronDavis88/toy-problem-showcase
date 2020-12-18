import React, { Component } from 'react';

class EvenAndOdds extends Component {
    constructor() {
        super()
        this.state = {
            evensArray: [],
            oddsArray: [],
            userInput: ''

        }
    }
    handleChange(val) {
        this.setState({ userInput: val })
    }

    assignEvenAndOdds(userInput) {
        let arr = userInput.split(',')
        let evens = []
        let odds = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evens.push(parseInt(arr[i], 10))
            } else {
                odds.push(parseInt(arr[i], 10))
            }
        }
        this.setState({ evensArray: evens, oddsArray: odds })
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)} />
                <button className='confirmationButton' onClick={() => { this.assignEvenAndOdds(this.state.userInput) }}>Split</button>
                <span className='resultsBox'>Evens: {(this.state.evensArray)}</span>
                <span className='resultsBox'>Odds: {(this.state.oddsArray)}</span>

            </div>
        )
    }
}
export default EvenAndOdds