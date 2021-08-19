import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }
    componentDidMount = () => document.title = this.state.count
    componentDidUpdate = () => document.title = this.state.count
    incrementCount = () => this.setState((prevState)=> {return {count: prevState.count+1}})
    render() {
        const {count} = this.state
        return (
            <div>
                <button onClick={this.incrementCount}>Clicked {count} times</button>                
            </div>
        )
    }
}

export default ClassCounter
