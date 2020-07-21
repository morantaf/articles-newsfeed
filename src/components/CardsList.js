import React, { Component } from "react";
import { connect } from "react-redux";
import { getArticles } from "../store/actions/news";
import Card from "./Cards";
import styled from "styled-components";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3% 0 0 3%;
`;

class CardsList extends Component {
  componentDidMount() {
    this.props.getArticles();
  }

  render() {
    const articles = this.props.articles;
    console.log(articles);

    if (!articles) {
      return <p>Loading...</p>;
    } else {
      return (
        <CardsContainer>
          {articles.map((article) => {
            return <Card details={article} />;
          })}
        </CardsContainer>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  articles: state.news.articles,
});

const mapDispatchToProps = {
  getArticles,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
