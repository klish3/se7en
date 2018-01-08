import React from "react";

import { Header } from "./Header";

export class Root extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                        <Header />
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
