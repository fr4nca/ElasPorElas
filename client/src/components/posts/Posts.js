import React, { Component, Fragment } from "react";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { getPosts } from "../../actions/postsActions";
import PostItem from "./PostItem";
import PostForm from "./PostForm";

class Posts extends Component {
  state = {
    reload: false
  };

  componentDidMount() {
    this.props.getPosts();
  }

  refresh = () => {
    this.setState({
      reload: !this.state.reload
    });
  };

  render() {
    const { posts } = this.props.posts;
    let treta;

    if (posts === null) {
      treta = <h1>Alecrim</h1>;
    } else if (posts.length > 0) {
      posts.reverse();
      treta = posts.map(post => {
        return (
          <PostItem key={post.dta_post} post={post} cpf={post.mulher_CPF} />
        );
      });
    }
    return (
      <Fragment>
        <PostForm refresh={this.refresh} />
        <h3 className="center">Depoimentos</h3>
        <ul>{treta}</ul>
      </Fragment>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(
  mapStateToProps,
  { getPosts }
)(Posts);
