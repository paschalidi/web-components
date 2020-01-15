import React from "react";
import { storiesOf } from "@storybook/react";
import { FeedbackTable } from "../src/index";

const information = [
  {
    id: 1,
    username: "Chris Johnson",
    feedback: [
      {
        id: 0,
        type: "radio",
        question: "How helpful was X?",
        answer: 1,
        text:
          "You Were Great I and others can count on your courage to help the team do what is right."
      },
      {
        id: 1,
        type: "text",
        question: "How helpful was X lorem?",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ight."
      },
      {
        id: 2,
        type: "scale",
        question: "How helpful was X scale?",
        answer: 5
      }
    ]
  },
  {
    id: 2,
    username: "Nico Perez",
    feedback: [
      {
        id: 0,
        type: "radio",
        question: "How did this person handled X?",
        answer: 2,
        text:
          "You Were Great I and others can count on your courage to help the team do what is right."
      },
      {
        id: 1,
        type: "text",
        question: "How did this person handled X lorem?",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ight."
      },
      {
        id: 2,
        type: "scale",
        question: "How did this person handled X scale?",
        answer: 7
      }
    ]
  },
  {
    id: 3,
    username: "Nathaniel Moon",
    feedback: [
      {
        id: 0,
        type: "radio",
        question: "How well does this do X?",
        answer: 3,
        text:
          "You Were Great I and others can count on your courage to help the team do what is right."
      },
      {
        id: 1,
        type: "text",
        question: "How well does this do X lorem?",
        text:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.ight."
      },
      {
        id: 2,
        type: "scale",
        question: "How well does this do X scale?",
        answer: 2
      }
    ]
  }
];
storiesOf("FeedbackTable", module).add("basic", () => (
  <FeedbackTable title="Feedback Received" information={information}>
    Call to Action
  </FeedbackTable>
));
