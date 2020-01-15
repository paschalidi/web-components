import React from "react";
import { storiesOf } from "@storybook/react";
import EthosPage from "../src/Welcome/EthosPage";
import ThemeColors from "../src/Welcome/ThemeColors";
import ThemeTypography from "../src/Welcome/ThemeTypography";

storiesOf("Welcome", module)
  .add("Vision & Ethos", () => <EthosPage />)
  .add("Typography", () => <ThemeTypography />)
  .add("Color Palette", () => <ThemeColors />);
