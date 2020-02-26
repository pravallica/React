import React, { Component } from 'react';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import { Route, Link } from 'react-router-dom';
import './Blog.css';

class Blog extends Component {
    render () {
        return (
            <div>
                <div className= "Menu">
                    <ul>
                        {/* <li> <a href="/">Home</a></li> */}
                        <li> <Link to = "/">Home</Link></li>
                        <li> <Link to = {{ 
                                pathname: "/newPost",
                                hash:'#submit',
                                search: '?quick-submit=true'
                        }}>New Post</Link></li>
                    </ul>
                    {/* <Route path="/" exact render={ () => <h3>Showing the Posts Here</h3>} />
                    <Route path="/" exact render={ () => <Posts/>} /> */}
                    <Route path="/" exact component={Posts} />
                    <Route path="/newPost" exact component={NewPost} />
                    {/* <Route path="/" exact component={Posts} /> */}

                </div>
                
                
            </div>
        );
    }
}

export default Blog;