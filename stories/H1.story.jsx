import React from "react";
import { storiesOf } from "@storybook/react";
import { H1, Colors } from "../src/index";

storiesOf("H1", module)
  .add("basic", () => <H1>Components are here to stay</H1>)
  .add("styled", () => (
    <H1 style={{ color: Colors.primary }}>Components are here to stay</H1>
  ));
