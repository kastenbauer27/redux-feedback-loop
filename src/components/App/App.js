import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Comprehension from '../Comprehension/Comprehension';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewPage from '../ReviewPage/ReviewPage';
import AdminPage from '../AdminPage/AdminPage';
import Thankyou from '../Thankyou/Thankyou';

class App extends Component {

  state = {
    feedbackData: []
  }

  componentDidMount() {
    this.getFeedbackData();
  }

  getFeedbackData = () => {
    axios.get('/feedback').then(response => {
      console.log(response.data);
      this.setState({
        feedbackData: response.data
      })
    }).catch(err => {
      console.log('Error getting feedback from database', err);
    })
  }

//   postNewFeedback = (event, feedbackObject) => {
//     event.preventDefault();
//     axios.post('/feedback', feedbackObject).then(response => {
//         console.log(response);
//         this.getFeedbackData();
//     }).catch(err => {
//         console.log('Error in POST for feedback', err);
//         alert('Unable to add feedback at this time.');
//     })
// }

  render() {
    return (
      <div className="App">
        <Header />
        <br/>
        <Router>
          <Route exact path="/" component={Home}></Route>
          <Route path="/feeling" component={Feeling}></Route>
          <Route path="/comprehension" component={Comprehension}></Route>
          <Route path="/support" component={Support}></Route>
          <Route path="/comments" component={Comments}></Route>
          <Route path="/thankyou" component={Thankyou}></Route>
          <Route path="/review" component={ () => <ReviewPage getFeedbackData={this.getFeedbackData} />}></Route>
          <Route path="/admin" component={ () => <AdminPage getFeedbackData={this.getFeedbackData} feedbackData={this.state.feedbackData}/> }></Route>
        </Router>
      </div>
    );
  }
}

export default App;
