import React from "react";
import { storiesOf } from "@storybook/react";
import { H3, Colors } from "../src/index";

storiesOf("H3", module)
  .add("basic", () => <H3>Components are here to stay</H3>)
  .add("styled", () => (
    <H3 style={{ color: Colors.primary }}>Components are here to stay</H3>
  ));
