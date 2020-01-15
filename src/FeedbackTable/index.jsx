import React from "react";
import PropTypes from "prop-types";
import Avatar from "react-user-avatar";
import Col from "../Grid/Col";
import Row from "../Grid/Row";
import Caption from "../Caption";
import Colors from "../Colors";
import H3 from "../H3";
import { FeedbackRadioQuestion } from "./FeedbackRadioQuestion";
import { FeedbackTextQuestion } from "./FeedbackTextQuestion";
import { FeedbackScaleQuestion } from "./FeedbackScaleQuestion";
import {
  CaptionStyles,
  TableStyles,
  FeedbackStyles,
  UserInfoStyles
} from "./styles";

class FeedbackTable extends React.Component {
  state = { selectedUserId: null };

  setSelectedUser = id => this.setState({ selectedUserId: id });

  renderComponentOfType = (type, question, answer, text) => {
    switch (type) {
      case "radio":
        return (
          <FeedbackRadioQuestion
            question={question}
            answer={answer}
            text={text}
          />
        );

      case "text":
        return (
          <FeedbackTextQuestion
            question={question}
            answer={answer}
            text={text}
          />
        );

      case "scale":
        return (
          <FeedbackScaleQuestion
            question={question}
            answer={answer}
            text={text}
          />
        );

      default:
        return <div />;
    }
  };

  render() {
    const { title, information } = this.props;
    const { selectedUserId } = this.state;
    const feedbackPerUser = information.reduce((acc, user) => {
      return { ...acc, [user.id]: user.feedback };
    }, {});

    return (
      <Row>
        <Col lg={12}>
          <TableStyles>
            <Row>
              <Col lg={4}>
                <CaptionStyles isSelected={selectedUserId}>
                  <Caption>{title}</Caption>
                </CaptionStyles>
                {information.map(user => (
                  <UserInfoStyles
                    key={user.id}
                    isSelected={selectedUserId}
                    active={user.id === selectedUserId}
                    onClick={() => this.setSelectedUser(user.id)}
                  >
                    <Row verticalAlign="middle">
                      <Col offset={1} lg={3}>
                        <Avatar
                          color={Colors.affirmative}
                          size="58"
                          name={user.username}
                        />
                      </Col>
                      <Col lg={8}>{user.username}</Col>
                    </Row>
                  </UserInfoStyles>
                ))}
              </Col>
              <Col lg={8}>
                {selectedUserId && (
                  <FeedbackStyles>
                    <H3 style={{ margin: 0 }}>Feedback</H3>
                  </FeedbackStyles>
                )}
                {selectedUserId &&
                  feedbackPerUser[selectedUserId].map(
                    ({ type, question, answer, text }) => {
                      switch (type) {
                        case "radio":
                          return (
                            <FeedbackRadioQuestion
                              key={question}
                              question={question}
                              answer={answer}
                              text={text}
                            />
                          );

                        case "text":
                          return (
                            <FeedbackTextQuestion
                              key={question}
                              question={question}
                              answer={answer}
                              text={text}
                            />
                          );

                        case "scale":
                          return (
                            <FeedbackScaleQuestion
                              key={question}
                              question={question}
                              answer={answer}
                              text={text}
                            />
                          );

                        default:
                          return <div />;
                      }
                    }
                  )}
              </Col>
            </Row>
          </TableStyles>
        </Col>
      </Row>
    );
  }
}

FeedbackTable.propTypes = {
  title: PropTypes.string.isRequired,
  information: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      username: PropTypes.string,
      feedback: PropTypes.array
    })
  ).isRequired
};

export default FeedbackTable;
