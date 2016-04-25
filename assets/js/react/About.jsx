import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <h1>{this.props.route.title}Route Title?</h1>
        );
    }
}

export default About;