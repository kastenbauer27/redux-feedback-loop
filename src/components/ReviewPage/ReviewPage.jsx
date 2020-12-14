import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import './ReviewPage.css';

class ReviewPage extends Component {

    state = {
        feedbackObject: { 
            feeling: Number(this.props.reduxState.feelingReducer),
            understanding: Number(this.props.reduxState.comprehensionReducer),
            support: Number(this.props.reduxState.supportReducer),
            comments: this.props.reduxState.commentsReducer           
         }
    }

    postNewFeedback = (event, feedbackObject) => {
        event.preventDefault();
        axios.post('/feedback', feedbackObject).then(response => {
            console.log(response);
            this.props.getFeedbackData();
            this.props.history.push('/thankyou');
        }).catch(err => {
            console.log('Error in POST for feedback', err);
            alert('Unable to add feedback at this time.');
        })
    }
    
    render() { 
        return (
        <div>
            <table className="review-table">
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{this.props.reduxState.feelingReducer}</td>
                        <td>{this.props.reduxState.comprehensionReducer}</td>
                        <td>{this.props.reduxState.supportReducer}</td>
                        <td>{this.props.reduxState.commentsReducer}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={(event) => this.postNewFeedback(event, this.state.feedbackObject)}>Submit Review</button>
        </div>
            
            
         );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})
 
export default withRouter(connect(mapStateToProps)(ReviewPage));