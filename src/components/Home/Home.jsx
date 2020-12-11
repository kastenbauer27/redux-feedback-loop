import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Home extends Component {

    startFeedback = () => {
        this.props.history.push('/feeling');
    }

    goToAdminPage = () => {
        this.props.history.push('/admin');
    }

    render() { 
        return (
            <div>
                <button onClick={this.startFeedback}>Start New Feedback</button>
                <button onClick={this.goToAdminPage}>Admin Page</button>
            </div> 
            
         );
    }
}
 
export default withRouter(Home);