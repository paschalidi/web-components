import React from "react";
import { storiesOf } from "@storybook/react";
import { Caption, Colors } from "../src/index";

storiesOf("Caption", module)
  .add("basic", () => <Caption>Components are here to stay</Caption>)
  .add("styled", () => (
    <Caption style={{ color: Colors.primary }}>
      Components are here to stay
    </Caption>
  ))
  .add("type bold", () => (
    <Caption type="bold">Components are here to stay</Caption>
  ));
