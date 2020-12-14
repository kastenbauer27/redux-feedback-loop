import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {

    state = {
        feedbackObject: { 
            feeling: Number(this.props.reduxState.feelingReducer),
            understanding: Number(this.props.reduxState.comprehensionReducer),
            support: Number(this.props.reduxState.supportReducer),
            comments: this.props.reduxState.commentsReducer           
         }
    }
    
    render() { 
        return (
        <div>
            <table>
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
            <button onClick={(event) => this.props.postNewFeedback(event, this.state.feedbackObject)}>Submit Review</button>
        </div>
            
            
         );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})
 
export default connect(mapStateToProps)(ReviewPage);