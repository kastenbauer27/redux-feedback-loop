import React, { Component } from 'react';

class AdminPage extends Component {
    state = {  }
    render() { 
        return (
            <div> 
                <h1>Administrator Page</h1>
                <table className="Admin-table">
                    <thead>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {this.props.feedbackData.map(feedback => (
                            <tr>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
         );
    }
}
 
export default AdminPage;