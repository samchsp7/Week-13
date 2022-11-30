
import React, { Component } from "react";

import "./Login.css";

import { Redirect } from "react-router-dom";

class Login extends Component {

constructor(props) {

super(props);

this.state = {

islogged: false,

loginParams: {

user_id: "",

user_password: ""

}

};

}

handleFormChange = event => {

let loginParamsNew = { ...this.state.loginParams };

let val = event.target.value;

loginParamsNew[event.target.name] = val;

this.setState({

loginParams: loginParamsNew

});

};

login = event => {

let user_id = this.state.loginParams.user_id;

let user_password = this.state.loginParams.user_password;

if (user_id === "admin" && user_password === "123") {

localStorage.setItem("token", "T");

this.setState({

islogged: true

});

}

event.preventDefault();

};

render() {

if (localStorage.getItem("token")) {

return <Redirect to="/" />;

}

return (

<div className="container">

<form onSubmit={this.login} className="form-signin">

<h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

<div className="row">

<div className="col">

<input

type="text"

name="user_id"

onChange={this.handleFormChange}

placeholder="Enter Username"

/>

<input

type="password"

name="user_password"

onChange={this.handleFormChange}

placeholder="Enter Password"

/>

<input type="submit" value="Login" />

</div>

</div>

<p>user_id === "admin" && user_password === "123"</p>

</form>

</div>

);

}

}

export default Login;

body {

font-family: Arial, Helvetica, sans-serif;

}

* {

box-sizing: border-box;

}


.container {

position: relative;

border-radius: 5px;

background-color: #f2f2f2;

padding: 20px 0 30px 0;

}


input

.btn {

width: 100%;

padding: 12px;

border: none;

border-radius: 4px;

margin: 5px 0;

opacity: 0.85;

display: inline-block;

font-size: 17px;

line-height: 20px;

text-decoration: none; 

}

input:hover,

.btn:hover {

opacity: 1;

}


.fb {

background-color: #3b5998;

color: white;

}

.twitter {

background-color: #55acee;

color: white;

}

.google {

background-color: #dd4b39;

color: white;

}


input[type="submit"] {

background-color: #4caf50;

color: white;

cursor: pointer;

}

input[type="submit"]:hover {

background-color: #45a049;

}

h1 {

margin-left: 30px;

}

p {

text-align: center;

}


.col {

float: left;

width: 50%;

margin: auto;

padding: 0 50px;

margin-top: 6px;

}


.row:after {

content: "";

display: table;

clear: both;

}


.vl {

position: absolute;

left: 50%;

transform: translate(-50%);

border: 2px solid #ddd;

height: 175px;

}


.vl-innertext {

position: absolute;

top: 50%;

transform: translate(-50%, -50%);

background-color: #f1f1f1;

border: 1px solid #ccc;

border-radius: 50%;

padding: 8px 10px;

}


.hide-md-lg {

display: none;

}


.bottom-container {

text-align: center;

background-color: #666;

border-radius: 0px 0px 4px 4px;

}

@media screen and (max-width: 650px) {

.col {

width: 100%;

margin-top: 0;

}


.vl {

display: none;

}


.hide-md-lg {

display: block;

text-align: center;

}

}