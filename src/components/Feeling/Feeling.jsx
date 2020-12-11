import React, { Component } from 'react';

class Feeling extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <div> 
                    <h1>How are you feeling today?</h1>
                </div>
                <form>
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </form>
            </div>
         );
    }
}
 
export default Feeling;