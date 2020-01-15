import React from "react";
import { Row, Col, H1, H2, H3, Caption } from "../index";

import Styles from "./themeTypography.style";

export default function ThemeTypography() {
  return (
    <Styles>
      <Row position="center">
        <Col lg={8}>
          <h5>H1</h5>
          <H1>Heading One</H1>
          <br />

          <h5>H2</h5>
          <H2>Heading Two</H2>
          <br />

          <h5>H3</h5>
          <H3>Heading Two</H3>
          <br />

          <h5>Paragraph</h5>
          <br />

          <h5>Caption</h5>
          <Caption>
            We design products to be open, honest and re­liable. Their
            interfaces are channels of truth which never obscure our intentions.
          </Caption>
          <br />

          <h5>Anchor</h5>
          <a href="https://www.google.com/" rel="noopener noreferrer">
            This is a link
          </a>
        </Col>
      </Row>
    </Styles>
  );
}
