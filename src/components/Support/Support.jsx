import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {

    state = {
        value: ''
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.value === '') {
            alert('Please enter or select a value.')
        } else {
            this.props.dispatch( {type: 'SUPPORT_SCORE', payload: this.state.value} );
            this.props.history.push('/comments');
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
        this.props.history.push('/comprehension');
    }
    
    render() { 
        return (
            <div>
                <div>
                    <h1>How supported did you feel today?</h1>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <button onClick={(event) => this.handlePreviousPage(event)}>Back</button>
                    <input type="number" id="supportInput" min="0" max="5" onChange={(event) => this.handleChange(event)}/>
                    <button type="submit">Next</button>
                </form>               
            </div> 
            
         );
    }
}
 
export default connect()(Support);