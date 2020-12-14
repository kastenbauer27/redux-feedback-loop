import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {

    state = {
        value: ''
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value === ''){
            alert('Please select or enter a value to proceed.');
        } else {
            this.props.dispatch( {type: 'FEELING_SCORE', payload: this.state.value} );
            this.props.history.push('/comprehension');
        } 
        
    }

    handleChange = (event) => {
        event.preventDefault();
        this.setState({
              value: event.target.value
            })  
    }


    render() { 
        //console.log(this.state);
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