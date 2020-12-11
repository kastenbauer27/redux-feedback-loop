import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home/Home';
import Header from '../Header/Header';
import Feeling from '../Feeling/Feeling';
import Comprehension from '../Comprehension/Comprehension';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import ReviewPage from '../ReviewPage/ReviewPage';
import AdminPage from '../AdminPage/AdminPage';

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
          <Route path="/review" component={ReviewPage}></Route>
          <Route path="/admin" component={ () => <AdminPage getFeedbackData={this.getFeedbackData} feedbackData={this.state.feedbackData}/> }></Route>
        </Router>
      </div>
    );
  }
}

export default App;
