import React, { Component } from 'react'

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './userprofile.css';
class userprofile extends Component {
    state = {}
  render() {
    const {  user } = this.props.auth;
    return (
     <div className="login_text">

              <p className="cab" ></p>
              <p className="cabtext">Name : {user.name} <br/>Email : {user.email}</p>
               <div className="scrol" >
                    <p className="foto" ></p>
                    <p className="s1"></p>
                    <p className="s2"></p>
                </div> 
     </div>
    )
  }
}
const mapStateToProps = (state) => {
    return {
      auth: state.auth
    };
}
    export default connect(mapStateToProps)(userprofile);