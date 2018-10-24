import React, { Component } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postsActions";
import PostItem from "./PostItem";

class Posts extends Component {
  state = {
    posts: {}
  };

  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts } = this.props.posts;
    let treta;

    if (posts === null) {
      treta = <h1>Alecrim</h1>;
    } else if (posts.length > 0) {
      treta = posts.map(post => (
        <PostItem key={post["dta_post"]} post={post} />
      ));
    }

    return <ol>{treta}</ol>;
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
