import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';

export class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.text}</h1>
                <p>{this.props.children}</p>
            </header>
        );
    }
}
export class Main extends React.Component {
    render() {
        return (
            <main><h1>{this.props.text}</h1>
                <p>{this.props.children}</p></main>
        );
    }
}
export class Footer extends React.Component {
    render() {
        return (
            <footer><h1>{this.props.text}</h1>
                <p>{this.props.children}</p></footer>
        );
    }
}
ReactDOM.render(
    <div>
        <Header text="Title">
            This is a Hellos
        </Header>
        <Main text="Main Title">
            stuffs
        </Main >

        <Footer text="Footer Title">
            Hellos
        </Footer>
    </div>,
    document.querySelector("#main"));
