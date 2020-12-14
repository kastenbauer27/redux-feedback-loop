import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comprehension extends Component {

    state = {
        value: ''
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value === '') {
            alert('Please enter or select a value.')
        } else {
            this.props.dispatch( {type: 'COMPREHENSION_SCORE', payload: this.state.value} );
            this.props.history.push('/support');
        }   
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
              value: event.target.value
            })  
    }

    handlePreviousPage = (event) => {
        event.preventDefault();
        this.props.history.push('/feeling');
    }

    render() { 
        return (
            <div>
                <h1>How well did you understand the material covered today?</h1>
            <div>    
            </div> 
                <form onSubmit={(event) => this.handleSubmit(event)}>
                        <button onClick={(event) => this.handlePreviousPage(event)}>Back</button>
                        <input type="number" id="compInput" min="0" max="5" onChange={(event) => this.handleChange(event)}/>
                        <button type="submit">Next</button>
                    </form>
             </div>
         );
            
    }
}
 
export default connect()(Comprehension);