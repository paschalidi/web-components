import React from "react";
import { storiesOf } from "@storybook/react";
import { Multistep, RadioGroup, Textarea, Scale } from "../src/index";

const information = {
  id: 100,
  username: "Peter peterson",
  feedback: [
    {
      id: 40,
      order: 0,
      type: "text",
      question: "Where have you been when you were needed X?"
    },
    {
      id: 41,
      order: 2,
      type: "text",
      question: "How did this person handled X?"
    },
    {
      id: 42,
      order: 1,
      type: "scale",
      question: "How well does this do X?"
    },
    {
      id: 30,
      order: -1,
      type: "radio",
      question: "How helpful was X?",
      answers: [
        {
          position: 0,
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
          position: 1,
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever"
        },
        {
          position: 2,
          answer:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
      ]
    }
  ]
};

const feedbackIncrementallyOrdered = information.feedback
  .sort((a, b) => a.order - b.order)
  .reduce((acc, item, index) => {
    return { ...acc, [index]: { ...item, incrementedOrder: index } };
  }, {});

storiesOf("Multistep", module).add("basic", () => (
  <React.Fragment>
    <Multistep
      handleSubmit={() => alert("Feedback Submitted")}
      username={information.username}
      feedback={feedbackIncrementallyOrdered}
      length={Object.values(feedbackIncrementallyOrdered).length}
    >
      {currentStep => {
        switch (feedbackIncrementallyOrdered[currentStep].type) {
          case "text":
            return <Textarea onAnswer={answer => console.log(answer)} />;
          case "scale":
            return <Scale onAnswer={answer => console.log(answer)} />;
          case "radio": {
            return (
              <RadioGroup
                onAnswer={answer => console.log(answer)}
                choices={feedbackIncrementallyOrdered[currentStep].answers}
              />
            );
          }
          default:
            return <div />;
        }
      }}
    </Multistep>
  </React.Fragment>
));
