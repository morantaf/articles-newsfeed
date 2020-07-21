import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 30%;
  height: fit-content;
  background-color: #262941;
  margin: 0 3% 3% 0;
  color: white;
  @media screen and (max-width: 400px) {
    width: 97%;
    margin-bottom: 10%;
  }
`;

const CardHeader = styled.div`
  position: relative;
  background-color: #33334d;
  color: white;
  height: 250px;
  background-size: cover;
  text-align: center;
  background-position: center;

  &::before {
    content: "";
    background-image: ${(props) => `url(${props.imgUrl})`};
    background-size: cover;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    opacity: 0.5;
    position: absolute;
  }
`;

const Title = styled.h1`
  margin-top: 0;
  position: relative;
`;

const Description = styled.p`
  font-weight: bold;
  margin: 16px 10px;
  text-align: justify;
`;

const StyledLink = styled.a`
  background: #9933ff;
  color: white;
  font-size: 1em;
  padding: 0.7em 1em;
  border: 2px solid;
  border-radius: 7px;
  width: 30%;
  &:hover {
    background: white;
    color: #9933ff;
  }
  text-align: center;

  margin: 1px auto 5% auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 60%;
`;

export default class Cards extends Component {
  render() {
    const articleDetails = this.props.details;
    return (
      <Container>
        <CardHeader imgUrl={articleDetails.urlToImage}>
          <Title>{articleDetails.title}</Title>
        </CardHeader>
        <Content>
          <Description>{articleDetails.description}</Description>
          <StyledLink href={articleDetails.url}>Read More</StyledLink>
        </Content>
      </Container>
    );
  }
}
