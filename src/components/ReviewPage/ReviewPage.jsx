import React, { Component } from 'react';
import { connect } from 'react-redux';

class ReviewPage extends Component {
    state = {  }
    render() { 
        return (
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
            
         );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState
})
 
export default connect(mapStateToProps)(ReviewPage);