import React from "react";
import PropTypes from "prop-types";
import Col from "../Grid/Col";
import Row from "../Grid/Row";
import { QuestionBoxStyles, QuestionStyles, AnswerStyles } from "./styles";

export const FeedbackRadioQuestion = ({ question, answer, text }) => (
  <QuestionBoxStyles>
    <Row verticalAlign="middle">
      <Col lg={6}>
        <QuestionStyles>{question}</QuestionStyles>
      </Col>
      <Col lg={6}>
        <AnswerStyles>
          <Row verticalAlign="middle">
            <Col lg={2}> {answer}/3 </Col>
            <Col lg={10}> {text} </Col>
          </Row>
        </AnswerStyles>
      </Col>
    </Row>
  </QuestionBoxStyles>
);

FeedbackRadioQuestion.propTypes = {
  answer: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
