import React from "react";
import {Redirect} from "react-router-dom";
import { BehaviorSubject } from 'rxjs';

const currentUserSubject = new BehaviorSubject(JSON.parse(sessionStorage.getItem('currentUser')));

function checkResAuth(response) {
    return response.text()
        .then(text => {
            const data = text && JSON.parse(text);
        if (!response.ok) {
            if ([401, 403].indexOf(response.status) !== -1) {
                logout();
            }
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data;
    });
}

function storeUserObject(userObject){
    sessionStorage.setItem('currentUser', JSON.stringify({
        data: userObject.message.data,
        token: userObject.token
    }));
    currentUserSubject.next(userObject);
}

export const authenticationManager = {
    register,
    login,
    logout,
    isLogged,
    registerGoogle,
    isTokenValid: checkTokenValidity,
    currentUser : currentUserSubject.asObservable(),
    get currentUserValue () {return currentUserSubject.value},
};

function register(email, username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email: email, name: username, password: password })
    };
    return fetch('https://cigout-backend.herokuapp.com/register', requestOptions)
        .then(checkResAuth)
        .then(message => {
            return message;
        });
}

function registerGoogle(email, username) {
   
    return fetch('https://cigout-backend.herokuapp.com/auth/google')
    .then (
        function(response) {
          if (response.status !== 200) {
                console.log('There was a problem. Status Code: ' +
                response.status);
                return;
            }
            response.json().then(function(data) {
                console.log(data);
            });
        }
      )
      .catch(function(err) {
        console.log('Fetch Error : ', err.message);
    });
        //.then(checkResAuth)
        /*.then(message => {
            return message;
        });*/
}


function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': 'Basic '+ new Buffer(username+':'+password).toString('base64')},
    };
    return fetch('https://cigout-backend.herokuapp.com/login', requestOptions)
        .then(checkResAuth)
        .then(user => {
            storeUserObject(user)
            return user;
        });
}

function logout() {
    sessionStorage.removeItem('currentUser');
    currentUserSubject.next(null);
}

function isLogged() {
    return sessionStorage.getItem('currentUser') != null
}

export function checkTokenValidity(token) {
    const requestOptions = {
        method: 'GET',
        headers: {"Authorization": "Bearer " + token},
    };

    fetch("https://cigout-backend.herokuapp.com/api/me/profile", requestOptions)
        .then(response =>{
            console.log(response)
        })
        .catch(error =>{
            return false
        })
}

export class ProtectedComponent extends React.Component {
    render() {
        let toRender = [];
        if (!authenticationManager.isLogged())
            toRender.push(<Redirect to="/login"/>)
        else
            toRender.push(this.props.children)

        return (
            <div key="protected" className={"h-100"}>
                {toRender}
            </div>
        )
    }
}