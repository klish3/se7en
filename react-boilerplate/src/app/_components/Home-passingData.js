import React from "react";
import PropTypes from 'prop-types';

export class HomePassingData extends React.Component{
    constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
    }
    onChangeLink() {
        this.props.changeLink(this.state.homeLink)
        
    } 
    onHandleChange(event){
        this.setState({
            homeLink: event.target.value
        });
    }
    render(){
        return (
            <div>
                <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                <br />
                <input type="text" 
                value={this.state.homeLink} 
                onChange={(event) => this.onHandleChange(event)}
                />
                <br />
                <button onClick={() => this.onChangeLink()} className="btn btn-primary">Change Header Link</button>
                
                
            </div>
        );
    }
}

HomePassingData.propTypes = {
    greet: PropTypes.func,
    age: PropTypes.number,
    status: PropTypes.number,
    homeLink: PropTypes.string,
    initialLinkName: PropTypes.string
}