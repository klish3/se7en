import React from "react";
import PropTypes from 'prop-types';

export class HomeEvents extends React.Component{

    constructor(props){
        super();
        // this.age = props.age;
        this.state = {
            age: props.initialAge,
            status: 0
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        },3000);
        
    }

    onMakeOlder(){
        // this.age += 3;
        // console.log(this.age);   
        this.setState({
            age: this.state.age + 3
        });
    }

    
    render(){
        return (
            <div>
                <p>I am a new Events Component!</p>
                <p><strong> Name: </strong> {this.props.name} <b>Age:</b> {this.state.age} </p>
                <p>Status: {this.state.status}</p>
                {/* <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary"> Make me older!</button> */}
                <button onClick={() => this.onMakeOlder()} className="btn btn-primary"> Make me older!</button>
            </div>
        );
    }
}

HomeEvents.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number
};