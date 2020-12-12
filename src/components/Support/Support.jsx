import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/comments');
    }

    handleChange = (event) => {
        event.preventDefault();
        this.props.dispatch( {type: 'SUPPORT_SCORE', payload: event.target.value} );
    }    
    
    render() { 
        return (
            <div>
                <div>
                    <h1>How supported did you feel today?</h1>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input type="number" id="supportInput" min="0" max="5" onChange={(event) => this.handleChange(event)}/>
                    <button type="submit">Next</button>
                </form>               
            </div> 
            
         );
    }
}
 
export default connect()(Support);