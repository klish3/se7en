import React from "react";
import PropTypes from 'prop-types';

export class HomeProps extends React.Component{
    render(){
        var text = "This is text"

        return (
            <div>
                <p>I am a new Props Component!</p>
                <p>UP - <strong> Name: </strong> {this.props.name} <b>Age:</b> {this.props.age} </p>
                <p>• {text}</p>
                <p>User Object => <u>Name:</u> {this.props.user.name}</p>
                <div>
                    <h4>Hobbies</h4>
                    <ul>
                    {/* Looop */}
                    {this.props.user.hobbies.map((hobby, i)=> <li key={i}>{hobby}</li>)}
                    </ul>
                </div>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

HomeProps.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    user: PropTypes.object,
    children: PropTypes.element.isRequired
};