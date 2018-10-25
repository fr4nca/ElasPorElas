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
    let corpo;

    if (posts === null) {
      corpo = <h1>Não há postagens..</h1>;
    } else if (posts.length > 0) {
      corpo = posts.map(post => {
        return (
          <PostItem key={post.dta_post} post={post} cpf={post.mulher_CPF} />
        );
      });
    }
    return (
      <Fragment>
        <PostForm />
        <h2 className="center">Depoimentos</h2>
        <ul>{corpo}</ul>
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
