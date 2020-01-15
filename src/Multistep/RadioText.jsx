import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Colors from "../Colors";

const TextareaStyles = styled.label`
  cursor: pointer;
  margin: 10px 0;

  &:first-child {
    margin-top: 0px;
  }
  &:last-child {
    margin-bottom: 36px;
  }
  display: block;
  padding: 19px 78px 20px 31px;
  &:hover {
    background-color: ${Colors.blackPearl};
    color: ${Colors.white};
  }
  background: ${({ checked }) =>
    checked ? `${Colors.blackPearl}` : `${Colors.background}`};
  color: ${({ checked }) => (checked ? `${Colors.white}` : `inherit`)};

  input {
    opacity: 0;
    position: absolute;
  }
`;

export default function RadioText({
  style,
  placeholder,
  name,
  value,
  onChange,
  checked,
  children
}) {
  return (
    <TextareaStyles checked={checked} style={style}>
      <input
        placeholder={placeholder}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </TextareaStyles>
  );
}

RadioText.propTypes = {
  style: PropTypes.shape({}),
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};

RadioText.defaultProps = {
  style: {},
  placeholder: ""
};
