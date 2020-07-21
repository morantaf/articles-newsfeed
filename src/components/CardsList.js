import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticles } from "../store/actions/news";

class CardsList extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    console.log(this.props.news);
    return <div>card component</div>;
  }
}

const mapStateToProps = (state) => ({
  news: state.news,
});

const mapDispatchToProps = {
  getArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
