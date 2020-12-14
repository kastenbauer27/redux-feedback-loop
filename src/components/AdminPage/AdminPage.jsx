import React, { Component } from 'react';
import './AdminPage.css';

class AdminPage extends Component {
    
    handleDelete = () => {
        console.log('Clicked Delete');
    }

    render() { 
        return (
            <section> 
                <h1>Administrator Page</h1>
                <table className="Admin-table">
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.feedbackData.map(feedback => (
                            <tr key={feedback.id}>
                                <td>{feedback.feeling}</td>
                                <td>{feedback.understanding}</td>
                                <td>{feedback.support}</td>
                                <td>{feedback.comments}</td>
                                <td><button onClick={this.handleDelete}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
         );
    }
}
 
export default AdminPage;