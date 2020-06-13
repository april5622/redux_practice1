import React, { Component } from 'react'
// connect Post component to the redux store from the provider component
import { connect } from "react-redux";
import { fetchPosts } from "../actions/postAction";

import PropTypes from 'prop-types';



class Posts extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    // this new lifecycle will receive a prop and will run and will take in param of
    // nextProps. This will access new post property
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            // unshift will add the nextProps.newPost which is a new post to the beginning
            // to all the other posts which is this.props.posts
            this.props.posts.unshift(nextProps.newPost);
        }
    }
 
// NO longer need a cosntructor or a componentDidMount since we don't need the component
// state anymore since it will come from redux, from the app state in the store

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         posts: []
    //     }
    // }

// the fetch will be in the action to fetch the post

    // componentDidMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({posts: data}));
    // }

// we have to get the new item from the state and to that we need to use mapStateToProp
// so we can get the state from redux and map it to property of the component and use that 
// inside of our component

// change this this.state.post to props from mapState
    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    // using the word posts because in rootReducer it is what is set
    // in the first posts, we want the items
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, {fetchPosts})(Posts);