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

    componentDidMount(){
        fetch('//react.dev/wp-json/wp/v2/posts')
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
            <li key={post.id}>{post.title.rendered}</li>
        ));

        let child = this.props.children && React.cloneElement(this.props.children,
                { Posts: this.state.Posts }
            );

        return (
            <div>
                <h1>Github Postss</h1>
                <ul>
                    {posts}
                </ul>
                {child}
            </div>
        );
    }
}
ReactDOM.render(
    <div>
        <Posts/>
    </div>,
    document.querySelector("#main"));
