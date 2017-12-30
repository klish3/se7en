import React from "react";

export class Home extends React.Component{
    render(){
        let content = ""
        if(true){
            content = "Hello Again!"
        }
        return (
            <div>
                <p>I am a new Component!</p>
                {2+2} 
                <br/>
                {content} 
                <br/>
                {5 == 2 ? 'Yes' : 'No'}
            </div>
        );
    }
}