import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        feeling: ''
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch( {type: 'FEELING_SCORE', payload: this.state.feeling} );
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
            feeling: event.target.value
        })
    }


    render() { 
        console.log(this.state);
        return (
            <div>
                <div> 
                    <h1>How are you feeling today?</h1>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="number" id="feelingInput" min="0" max="5" onChange={(event) => this.handleChange(event)}/>
                    <button type="submit">Next</button>
                </form>
            </div>
         );
    }
}
 
export default connect()(Feeling);