import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Posts: [],
             selectedPostId : null,
             error: false
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholdler.typicode.com/posts')
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

    selectedPostHandler = (id) => {
        this.setState({
            selectedPostId: id 
        })
    }
    render () {
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
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;