
import React from "react";
import { Button } from 'react-bootstrap'

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <Button bsStyle='primary' bsSize='large'>{message}</Button>
            </div>
        );
    }
}