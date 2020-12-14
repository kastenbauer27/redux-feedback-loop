import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Thankyou extends Component {
    
    goHome = () => {
        this.props.history.push('/');
    }

    render() { 
        return ( 
            <div>
                <h1>Thanks For Your Feedback!</h1>
                <button onClick={this.goHome}>Back to Home</button>
            </div>
         );
    }
}
 
export default withRouter(Thankyou);