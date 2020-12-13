import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class ReviewPage extends Component {

    handleSubmit = (event) => {
        axios.post('')
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
            <button onClick={this.handleSubmit}>Submit Review</button>
        </div>
            
            
         );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})
 
export default connect(mapStateToProps)(ReviewPage);