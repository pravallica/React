import React, { Component } from 'react';
import { Route } from "react-router-dom";
import FullPost from "../FullPost/FullPost";
import Post from '../../components/Post/Post';
import axios from 'axios';
import classes from './Posts.module.css'

class Posts extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Posts: [],
             selectedPostId : null,
             error: false
        }
    }

    selectedPostHandler = (id) => {
        this.props.history.push('/posts/'+id)
    }

    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post=>{
                    return {
                        ...post,
                        author: 'Pravu'
                    }
                })
                this.setState({
                    Posts: updatedPosts
                });
                // console.log(this.state.Posts)
            })
            .catch(error => {
                this.setState({
                    error: true
                })
                
            })
    }
    render() {
        let posts = this.state.Posts.map(post =>{
            return(
            // <Link to ={'/'+post.id}  >
                <Post 
                key = {post.id}
                title={post.title} 
                author = {post.author}
                clicked = {this.selectedPostHandler.bind(this,post.id)}/>
            // </Link>)
            )
    });

    if(this.state.error){
        posts = <p style={{fontSize: '20px', color: 'red'}}> Something went wrong!!</p>
    }
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url +'/:id'} exact component={FullPost} />
            </div>
        );
    }
}

export default Posts;
