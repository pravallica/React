import React, { Component } from "react";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";

import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import "./Blog.css";

class Blog extends Component {
  state ={
    auth: false
  }
  render() {
    return (
      <div>
        <div className="Menu">
          <ul>
            {/* <li> <a href="/">Home</a></li> */}
            <li>
              {" "}
              <NavLink
                to="/posts/"
                exact
                activeClassName="active"
                activeStyle={{
                  color: "green",
                  textDecoration: "underline"
                }}
              >
                Posts
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to={{
                  pathname: "/newPost",
                  hash: "#submit",
                  search: "?quick-submit=true"
                }}
              >
                New Post
              </NavLink>
            </li>
          </ul>
          {/* <Route path="/" exact render={ () => <h3>Showing the Posts Here</h3>} />
                    <Route path="/" exact render={ () => <Posts/>} /> */}
            
            <Switch>
                {this.state.auth ? <Route path="/newPost" exact component={NewPost} /> :null}
                <Route path="/posts" component={Posts} />
                <Redirect from = "/" to = "/posts"/>
                {/* <Route path="/posts/:id" component={FullPost} /> */}
              
            </Switch>
        </div>
      </div>
    );
  }
}

export default Blog;
