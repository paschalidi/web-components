import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.h2`
  font-size: 2.2rem;
  line-height: 2.6rem;
  font-weight: normal;
`;

export default function H2({ children, style }) {
  return <Styles style={style}>{children}</Styles>;
}

H2.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.shape({})
};

H2.defaultProps = {
  style: {}
};
