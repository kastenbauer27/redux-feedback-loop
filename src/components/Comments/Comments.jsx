import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comments extends Component {

 
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/review');
    }

    handleChange = (event) => {
        event.preventDefault();
        this.props.dispatch( {type: 'COMMENTS', payload: event.target.value} );
    }

    handlePreviousPage = (event) => {
        event.preventDefault();
        this.props.history.push('/support');
    }

    render() { 
        return (
            <div>
                <div>
                    <h1>Would you like to leave any additional comments?</h1>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <button onClick={(event) => this.handlePreviousPage(event)}>Back</button>
                    <input type="text" id="commentsInput" onChange={(event) => this.handleChange(event)}/>
                    <button type="submit">Next</button>
                </form>                
            </div>
            
         );
    }
}
 
export default connect()(Comments);