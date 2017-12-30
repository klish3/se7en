import React from 'react';
import 'jquery';
import { render } from "react-dom";

import { Header } from './components/Header';
import { Home } from './components/Home';

import { HomeProps } from './components/Home-props';
import { HeaderProps } from './components/Header-props';

import { HomeEvents } from './components/Home-events';
import { HomeLifecycle } from './components/Home-lifecycle';

import { HomePassingData } from './components/Home-passingData';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            homeLink: "Home",
            homeMounted: true
        };
    }
    onGreet() {
        alert('Hello')
    }
    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
    }
    onChangeHomeMounted() {
        this.setState({
            homeMounted: this.state.homeMounted
        });
    }
    render() {
        var user = {
            name: "Tawanda",
            hobbies: ["Slaying Code", "Bouncing", "Rap Album"]
        }
        let homeCmp = "";
        if (this.state.homeMounted) {

            homeCmp = (
                <HomeLifecycle
                    name={"Taw"}
                    initialAge={27}>
                    <p> This is the content like ng-content for lifecycle</p>
                </HomeLifecycle>
            );

        }
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <HeaderProps homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        { homeCmp }
                        <br />
                        <button onClick={() => this.onChangeHomeMounted()} className="btn btn-secondary">(Un)Mount Home Comp</button>
                        <hr />
                        <HomePassingData
                            greet={this.onGreet}
                            changeLink={(newName) => this.onChangeLinkName(newName)}
                            initialLinkName={this.state.homeLink}
                        />
                        <hr />
                        <HomeEvents name={"Tawi"} initialAge={27}>
                            <p> This is the content like ng-content</p>
                        </HomeEvents>
                        <hr />
                        <HomeProps name={"Taw"} age={27} user={user}>
                            <p> This is the content like ng-content</p>
                        </HomeProps>
                        <hr />
                        <Home />
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('app')); 