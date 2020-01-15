import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Colors from "../Colors";

const TextareaStyles = styled.textarea`
  padding: 20px;
  font-size: 1.6rem;
  width: calc(100% - 40px);
  min-height: 232px;
  max-height: 15em;
  background-color: #ffffff;
  border: solid 1px ${Colors.divider};
  resize: vertical;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
  border-radius: 3px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px ${Colors.primaryDim};
    border-color: ${Colors.primary};
    transition: border-color 0.2s ease, box-shadow 0.2s ease;
  }

  &::placeholder {
    color: #bfbfbf;
  }
`;

const Textarea = ({ style, placeholder, onAnswer }) => {
  return (
    <TextareaStyles
      style={style}
      placeholder={placeholder}
      onChange={({ target }) => onAnswer({ text: target.value })}
    />
  );
};

Textarea.propTypes = {
  style: PropTypes.shape({}),
  placeholder: PropTypes.string,
  onAnswer: PropTypes.func.isRequired
};

Textarea.defaultProps = {
  style: {},
  placeholder: ""
};

export default Textarea;
