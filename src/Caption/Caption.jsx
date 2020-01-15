import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Colors from "../Colors";

const CaptionStyles = styled.div`
  font-size: 1.2rem;
  line-height: 1.4rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${Colors.blackPearl};
  font-weight: 500;
`;

export default function Caption({ children, style }) {
  return <CaptionStyles style={style}>{children}</CaptionStyles>;
}

Caption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.shape({})
};

Caption.defaultProps = {
  style: {}
};
