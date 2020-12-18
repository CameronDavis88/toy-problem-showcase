import React, {Component} from 'react'

class FilterObject extends Component {
        constructor(){
            super()
            this.state = {
                unFilteredArray: [
                    {
                      name: 'Jimmy Joe',
                      title: 'Hack0r',
                      age: 12,
                    },
                    {
                      name: 'Jeremy Schrader',
                      age: 24,
                      hairColor: 'brown'
                    },
                    {
                      name: 'Carly Armstrong',
                      title: 'CEO',
                    }],
                userInput: '',
                filteredArray:[]

            }
        }
        
        handleChange(val){
            this.setState({userInput: val})
        }

        filterunFilteredArray(prop){
            let unFilteredArray = this.state.unFilteredArray
            let filteredArray =[]

            for( let i = 0; i<unFilteredArray.length; i++){
                if(unFilteredArray[i].hasOwnProperty(prop)){
                    filteredArray.push(unFilteredArray[i])
                }
            }

            this.setState({filteredArray: filteredArray})
        }

        

    render(){
        return(
                <div className="puzzleBox filterObjectPB">
                    <h4>Filter Object</h4>
                    <span className="puzzleText">Original: {this.state.unFilteredArray, null, 10 }</span>
                    <input className="inputLine" onChange={ (e) => this.handleChange(e.target.value)}/>
                    <button className="confirmationButton" onClick={ () => this.filterunFilteredArray(this.state.userInput)}>Filter</button>
                    <span className="resultsBox filterObjectRB">Filtered : {this.state.filteredArray}</span>
                </div>
        )
    }
}
export default FilterObject