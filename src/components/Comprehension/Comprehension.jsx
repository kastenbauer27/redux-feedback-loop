import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comprehension extends Component {
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/support');
    }

    handleChange = (event) => {
        event.preventDefault();
        this.props.dispatch( {type: 'COMPREHENSION_SCORE', payload: event.target.value} );
    }

    render() { 
        return (
            <div>
                <h1>How well did you understand the material covered today?</h1>
            <div>    
            </div> 
                <form onSubmit={(event) => this.handleSubmit(event)}>
                        <input type="number" id="compInput" min="0" max="5" onChange={(event) => this.handleChange(event)}/>
                        <button type="submit">Next</button>
                    </form>
             </div>
         );
            
    }
}
 
export default connect()(Comprehension);