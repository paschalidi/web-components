import PropTypes from "prop-types";
import React, { useState } from "react";
import RadioText from "./RadioText";

const RadioGroup = ({ choices, onAnswer }) => {
  const [select, setSelect] = useState("betterPriceOnly");
  const handleSelectChange = event => {
    onAnswer(choices[event.target.value]);
    setSelect(event.target.value);
  };

  return (
    <React.Fragment>
      {choices.map(choice => (
        <RadioText
          key={choice.position}
          value={choice.position}
          name="radio"
          onChange={event => handleSelectChange(event)}
          checked={select === choice.position.toString()}
        >
          {choice.answer}
        </RadioText>
      ))}
    </React.Fragment>
  );
};

RadioGroup.propTypes = {
  choices: PropTypes.arrayOf(
    PropTypes.shape({ answer: PropTypes.string, position: PropTypes.number })
  ).isRequired,
  onAnswer: PropTypes.func.isRequired
};

export default RadioGroup;
