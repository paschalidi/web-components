import { createGlobalStyle } from "styled-components";
import { Colors } from "../index";
import "react-rater/lib/react-rater.css";

const GlobalStyles = createGlobalStyle`

  html{
    font-size: 62.5%;
  }
  
  body {
    font-size: 1.6rem;
    line-height: 1.9rem;
    color: ${Colors.textPrimary}; 
    margin: 0;
    padding: 0;
    min-height: 100%;
    overflow-x: hidden;
    min-width: 320px;
  }
`;

export default GlobalStyles;
