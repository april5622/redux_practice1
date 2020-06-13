import { FETCH_POSTS, NEW_POST } from './types';

// thunk middleware allows us to call the dispatch function directly
// so we make a synchronous request

// dispatch is like a resolver and a promise

// when the action is called it is fetching and dispatching the type and the
// payload to the reducer 

export const fetchPosts = () => dispatch => {
   fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    
}

export const createPost = (postData) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch({
        type: NEW_POST,
        payload: post
    }));
}

// this will be reduce in the postreducer function