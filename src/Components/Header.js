import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: #ce8349;
  position: fixed
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-itmes: center;
  padding: 0px 10px;
  background-color: #f9fb97;
  box-shadow: 5px 1px 10px 2px #bbbbbb;
`;

const List = styled.ul`
  display: flex;
  &:hover {
    background-color: blue;
  }
`;

const Item = styled.li`
  width: 50px;
  height: 50px;
  &:not(:last-child) {
    margin-right: 10px;
  }
  text-align: center;
  border-bottom: 5px solid
    ${(props) => (props.current ? "#ffff80" : "transparent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-itmes: ceneter;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
  </Header>
));
