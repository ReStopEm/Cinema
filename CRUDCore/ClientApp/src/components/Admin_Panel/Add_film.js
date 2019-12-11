import React, { Component } from 'react';
import axios from 'axios';
class SignUpForm extends Component {
    state = {
        name: '',
      }
      handleChange = event => {
        this.setState({ name: event.target.value });
      }
     
      handleSubmit = event => {
        event.preventDefault();
        //  console.log(name);
        const user= {
          name: this.state.name
          
        };
     
        // axios.post(`api/Account/upload`, { user })
        //   .then(res => {
        //     console.log(res);
        //   })
      }
     
      render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
               film: 
                <input type="text" name="name" onChange={this.handleChange} />
              </label>
              <button type="submit">add film</button>
            </form>
          </div>
        )
      }
}
export default (SignUpForm);