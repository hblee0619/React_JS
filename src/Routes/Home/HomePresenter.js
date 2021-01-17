import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Section from "../../Components/Section";
import Loader from "../../Components/Loader";

const Container = styled.div`
  padding: 20px;
  color: #f3f5c2;
`;

const HomePresenter = ({ nowPlaying, upcoming, popular, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
      {upcoming && upcoming.length > 0 && (
        <Section title="upcoming movies">
          {upcoming.map((movie) => movie.title)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="Popular movies">
          {popular.map((movie) => (
            <span key={movie.id}>{movie.title}</span>
          ))}
        </Section>
      )}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
