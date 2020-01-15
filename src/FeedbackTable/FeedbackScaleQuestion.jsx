import React from "react";
import PropTypes from "prop-types";
import Col from "../Grid/Col";
import Row from "../Grid/Row";
import { QuestionBoxStyles, QuestionStyles, AnswerStyles } from "./styles";

export const FeedbackScaleQuestion = ({ question, answer }) => (
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
                <Col lg={2}> {answer}/10 </Col>
              </Row>
            </AnswerStyles>
          </Col>
        </Row>
      </QuestionBoxStyles>
    </Col>
  </Row>
);

FeedbackScaleQuestion.propTypes = {
  answer: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired
};
