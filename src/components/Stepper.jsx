import React from 'react'

export default class Stepper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number:0}
    }
    
    
    addOne = () => {
        this.setState({number:this.state.number+1})
    }

    subtractOne = () => {
        this.setState({number:this.state.number-1})
    }

    render() {
        return (
            <>
                <button type='button' onClick={this.addOne}>+</button>
                <div className='number'>{this.state.number}</div>
                <button type='button' onClick={this.subtractOne}>-</button>
            </>
        )
    }
}