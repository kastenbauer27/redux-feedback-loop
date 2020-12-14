import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class Thankyou extends Component {
    
    goHome = (event) => {
        event.preventDefault();
        this.props.history.push('/');
        this.props.dispatch( { type: 'RESET' } );
    }

    render() { 
        return ( 
            <div>
                <h1>Thanks For Your Feedback!</h1>
                <button onClick={(event) => this.goHome(event)}>Back to Home</button>
            </div>
         );
    }
}
 
export default withRouter(connect()(Thankyou));