import React, { useState } from "react";
import PropTypes from "prop-types";
import UserAvatar from "react-user-avatar";
import Button from "../Buttons/Button";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import Caption from "../Caption";
import Colors from "../Colors";
import H2 from "../H2";
import { BoxStyles, TopStyles } from "./styles";

const MultistepTitle = ({ question, username }) => (
  <TopStyles>
    <Row>
      <Col lg={10}>
        <H2 style={{ marginBottom: 12, marginTop: 0 }}>{question}</H2>
        <Caption>share your feedback for {username}</Caption>
      </Col>
      <Col lg={2}>
        <UserAvatar style={{ float: "right " }} size="58" name={username} />
      </Col>
    </Row>
  </TopStyles>
);

MultistepTitle.propTypes = {
  question: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

const Multistep = ({ length, handleSubmit, feedback, username, children }) => {
  const [currentStep, setStep] = useState(0);

  const nextStep = () => setStep(currentStep + 1);

  const previousStep = () => setStep(currentStep - 1);

  return (
    <React.Fragment>
      <MultistepTitle
        question={feedback[currentStep].question}
        username={username}
      />
      <Row>
        <Col>
          <BoxStyles>
            <form>
              {children(currentStep)}
              <div style={{ marginTop: 28 }}>
                <Row textAlign="center">
                  <Col lg={6}>
                    <Button
                      onClick={previousStep}
                      type="secondary"
                      disabled={currentStep === 0}
                    >
                      Previous
                    </Button>
                  </Col>
                  {length === currentStep + 1 ? (
                    <Col lg={6}>
                      <Button
                        onClick={handleSubmit}
                        style={{ float: "right" }}
                        type="secondary"
                      >
                        Submit
                      </Button>
                    </Col>
                  ) : (
                    <Col lg={6}>
                      <Button
                        onClick={nextStep}
                        style={{ float: "right" }}
                        type="secondary"
                      >
                        Next
                      </Button>
                    </Col>
                  )}
                </Row>
              </div>
            </form>

            <Caption style={{ color: Colors.textPrimary, paddingTop: 16 }}>
              Questions Completed
            </Caption>
            <div
              style={{ paddingTop: 8, paddingBottom: 13, fontSize: "1.6rem" }}
            >
              {currentStep + 1}/{length}
            </div>
          </BoxStyles>
        </Col>
      </Row>
    </React.Fragment>
  );
};

Multistep.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  children: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  feedback: PropTypes.shape({ question: PropTypes.string }).isRequired
};

export default Multistep;
