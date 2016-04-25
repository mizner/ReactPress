import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';

export class Posts extends React.Component {
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
        <a href={post.link}><li>{post.title.rendered}</li></a>
        ));
        return (
            <ul className="Post">
                {posts}
                <span>{console.log('stuff')}</span>
            </ul>
        );
    }
}
ReactDOM.render(
    <div>
        <Posts source="//react.dev/wp-json/wp/v2/posts"></Posts>
    </div>,
    document.querySelector("#main"));
