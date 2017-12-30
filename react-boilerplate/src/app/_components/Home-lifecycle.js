import React from "react";
import PropTypes from 'prop-types';

export class HomeLifecycle extends React.Component{

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
        console.log('constructor');
    }
    componentWillMount() {
        console.log('component WILL mount');
    }
    componentDidMount() {
        console.log('component DID mount');
    }
    componentWillReceiveProps(nextProps) {
        console.log('component Will recieve props',nextProps);
    }
    shouldComponentUpdate(nextProps, nextState){
        console.log('Should component UPDATE',nextProps,nextState);
        // if(nextState.status === 1){
        //     return false;
        // }
        return true;
    }
    componentWillUpdate(nextProps, nextState){
        console.log('Component will UPDATE',nextProps,nextState);
    }
    componentDidUpdate(prevProps, prevState){
        console.log('Component did UPDATE', prevProps, prevState);
    }
    componentWillUnmount(){
        console.log('Component will unMount');
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

HomeLifecycle.propTypes = {
    name: PropTypes.string,
    initialAge: PropTypes.number
};