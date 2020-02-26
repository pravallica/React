import React, { Component } from "react";
import Posts from "../Posts/Posts";
import NewPost from "../NewPost/NewPost";
import { Route, NavLink } from "react-router-dom";
import "./Blog.css";

class Blog extends Component {
  render() {
    return (
      <div>
        <div className="Menu">
          <ul>
            {/* <li> <a href="/">Home</a></li> */}
            <li>
              {" "}
              <NavLink to="/" 
                       exact 
                       activeClassName="active"
                       activeStyle = {{
                           color: 'green',
                           textDecoration: 'underline'
                       }}>
                Home
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
          <Route path="/" exact component={Posts} />
          <Route path="/newPost" exact component={NewPost} />
          {/* <Route path="/" exact component={Posts} /> */}
        </div>
      </div>
    );
  }
}

export default Blog;
