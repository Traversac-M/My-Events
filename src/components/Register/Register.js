import React, { Component } from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";

import EventLogo from "../Images/logo.png";
import "./RegisterStyle.css";

export default class Register extends Component {
  state = {
    isLoggedIn: false,
    userID: null,
    name: null,
    email: null,
    picture: null,
    fbToken: localStorage.getItem("fbToken"),
    googleToken: localStorage.getItem("googleToken")
  };

  componentDidMount() {
    if (this.state.fbToken || this.state.googleToken) {
      this.props.history.push("/");
    }
  }

  responseFacebook = response => {
    // console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.userId,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
      fbToken: localStorage.setItem("fbToken", response.accessToken)
    });

    setTimeout(reloadPage, 2250);
    function reloadPage() {
      window.location.reload();
    }
  };

  responseGoogle = response => {
    // console.log(response);
    this.setState({
      isLoggedIn: true,
      userID: response.profileObj.googleId,
      name: response.profileObj.givenName,
      email: response.profileObj.email,
      picture: response.profileObj.imageUrl,
      googleToken: localStorage.setItem("googleToken", response.tokenId)
    });

    setTimeout(reloadPage, 2250);
    function reloadPage() {
      window.location.reload();
    }
  };

  render() {
    var googleId = "insert google ID here";
    var facebookId = "insert facebook ID here";

    const isLoggedContent = this.state.isLoggedIn ? (
      <div className="loggedIn">
        <img className="mb-3" src={this.state.picture} alt={this.state.name} />
        <h2>Welcome {this.state.name} !</h2>
      </div>
    ) : (
      <div>
        <FacebookLogin
          appId={facebookId}
          fields="name,email,picture"
          callback={this.responseFacebook}
          render={renderProps => (
            <button className="btn btn-facebook btn-block" onClick={renderProps.onClick}>
              <span className="fa fa-facebook pl-4 pr-2" /> Sign in with Facebook
            </button>
          )}
        />

        <GoogleLogin
          clientId={googleId}
          render={renderProps => (
            <button className="btn btn-danger btn-block mb-4 mt-2" onClick={renderProps.onClick}>
              <span className="fa fa-google-plus pl-1 pr-1" /> Sign in with Google
            </button>
          )}
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
        />
      </div>
    );

    const logo = !this.state.isLoggedIn ? (
      <div className="fadeIn first">
        <img className="pl-4 pt-4" src={EventLogo} id="icon" alt="My Events" />
      </div>
    ) : null;

    const formFooter = !this.state.isLoggedIn ? (
      <div id="formFooter">
        <h4 className="underlineHover">Sign up for free !</h4>
      </div>
    ) : null;

    return (
      <div className="container">
        <div className="wrapper fadeInDown mt-4 mb-3">
          <div id="formContent">
            {logo}
            <div className="col-lg-12">{isLoggedContent}</div>
            {formFooter}
          </div>
        </div>
      </div>
    );
  }
}
