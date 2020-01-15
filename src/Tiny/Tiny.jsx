import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Styles = styled.div`
  font-size: 1.1rem;
  line-height: 1.3rem;
`;

export default function Tiny({ children, style }) {
  return <Styles style={style}>{children}</Styles>;
}

Tiny.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.shape({})
};

Tiny.defaultProps = {
  style: {}
};
