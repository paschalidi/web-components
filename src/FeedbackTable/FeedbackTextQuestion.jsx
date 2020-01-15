import React from "react";
import PropTypes from "prop-types";
import Col from "../Grid/Col";
import Row from "../Grid/Row";
import { QuestionBoxStyles, QuestionStyles, AnswerStyles } from "./styles";

export const FeedbackTextQuestion = ({ question, text }) => (
  <Row>
    <Col lg={12}>
      <QuestionBoxStyles>
        <Row verticalAlign="middle">
          <Col lg={6}>
            <QuestionStyles>{question}</QuestionStyles>
          </Col>
          <Col lg={6}>
            <AnswerStyles>
              <Row verticalAlign="middle">
                <Col lg={2}> free text </Col>
                <Col lg={10}> {text} </Col>
              </Row>
            </AnswerStyles>
          </Col>
        </Row>
      </QuestionBoxStyles>
    </Col>
  </Row>
);

FeedbackTextQuestion.propTypes = {
  question: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};
