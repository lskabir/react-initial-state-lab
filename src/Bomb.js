import React from 'react'

export default class Bomb extends React.Component {

    constructor(props) {
        super()
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    boom = () => {
        
        
    }

    render() {
        const seconds = this.state.secondsLeft - 1
        this.setState = ({
            secondsLeft: seconds
        })

        return (this.state.secondsLeft !== 0 ? <div>{this.state.secondsLeft} seconds left before I go boom!</div> : <div>Boom!</div>)
    }

}