import React from "react";
import { storiesOf } from "@storybook/react";
import { H2, Colors } from "../src/index";

storiesOf("H2", module)
  .add("basic", () => <H2>Components are here to stay</H2>)
  .add("styled", () => (
    <H2 style={{ color: Colors.primary }}>Components are here to stay</H2>
  ));
