import Post from '../../components/Post/Post';
import React, { Component } from 'react';
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
        this.setState({
            selectedPostId: id 
        })
    }

    componentDidMount(){
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
            return <Post 
            title={post.title} 
            key = {post.id} 
            author = {post.author}
            clicked = {this.selectedPostHandler.bind(this,post.id)}/>
    });

    if(this.state.error){
        posts = <p style={{fontSize: '20px', color: 'red'}}> Something went wrong!!</p>
    }
        return (
            <div>
                <section className={classes.Posts}>
                    {posts}
                </section>
            </div>
        );
    }
}

export default Posts;
