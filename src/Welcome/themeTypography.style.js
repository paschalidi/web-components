import styled from "styled-components";
import { Colors } from "../index";

const FontStyles = styled.div`
  br {
    margin-bottom: 32px;
  }

  h5 {
    font-weight: 500;
    font-size: 1.4rem;
    margin-bottom: 8px;
    color: ${Colors.secondary};
  }

  a {
    display: block;
    text-decoration: none;
    color: #00bfac;
  }
`;

export default FontStyles;
