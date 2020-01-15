import React from "react";
import { storiesOf } from "@storybook/react";
import { Tiny, Colors } from "../src/index";

storiesOf("Tiny", module)
  .add("basic", () => <Tiny>Components are here to stay</Tiny>)
  .add("styled", () => (
    <Tiny style={{ color: Colors.primary }}>Components are here to stay</Tiny>
  ));
