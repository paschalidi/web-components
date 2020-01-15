import styled from "styled-components";
import Colors from "../Colors";

export const QuestionBoxStyles = styled.div`
  border-bottom: 1px solid ${Colors.divider};
  border-left: 1px solid ${Colors.divider};
`;

export const QuestionStyles = styled.div`
  padding: 12px 0 14px 24px;
`;

export const AnswerStyles = styled.div`
  padding: 18px;
  border-left: 1px solid ${Colors.divider};
`;

export const TableStyles = styled.div`
  flex: 1;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${Colors.divider};
`;

export const CaptionStyles = styled.div`
  padding: 12px 0 14px 13px;
  border-bottom: 1px solid ${Colors.divider};
  border-right: ${props =>
    props.isSelected ? "none" : `1px solid ${Colors.divider}`};
`;

export const FeedbackStyles = styled.div`
  padding: 18px 0 18px 26px;
  border-bottom: 1px solid ${Colors.divider};
  border-left: 1px solid ${Colors.divider};
`;

export const UserInfoStyles = styled.div`
  cursor: pointer;
  height: 96px;
  border-bottom: 1px solid ${Colors.divider};
  border-right: ${props =>
    props.isSelected ? "none" : `1px solid ${Colors.divider}`};

  &:hover {
    background-color: ${props =>
      props.active ? `${Colors.background}` : `${Colors.primaryDim}`};
  }

  background: ${props => (props.active ? `${Colors.background}` : "inherit")};
`;
