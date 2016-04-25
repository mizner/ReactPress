import React, { Component } from 'react';
import { Link } from 'react-router';
import 'whatwg-fetch';

class Posts extends Component {
    constructor(){
        super(...arguments);
        this.state = {
            Posts: []
        };
    }
    componentDidMount()
    {
        fetch(this.props.source)
            .then((response) => {
                if(response.ok){
                    return response.json();
                } else {
                    throw new Error("Server response wasn't OK");
                }
            })
            .then((responseData) => {
                this.setState({Posts:responseData});
            })
    }
    render() {
        let posts = this.state.Posts.map((post) => (
            <a key={post.id} href={post.link}><li>{post.title.rendered}</li></a>
        ));

        let child = this.props.children && React.cloneElement(this.props.children,
                { repositories: this.state.repositories }
            );

        return (
            <ul className="Post">
                {posts}
                <span>{console.log('finished')}</span>
            </ul>
        );
    }
}

export default Posts;