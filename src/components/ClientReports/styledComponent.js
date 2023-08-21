import { styled } from "styled-components";

export const ClientReportContainer = styled.div`
  width: 100%;
  padding: 15px;
  background-color: ${(props) => (props.isDarkTheme ? "black" : "white")};
  color: ${(props) => (props.isDarkTheme ? "white" : "black")};
`;
