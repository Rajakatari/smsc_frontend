import styled from "@emotion/styled";

export const BarChartMainContainer = styled.div`
  width: 100%;
  background-color: ${(props) => (props.dark ? "black" : "white")};
  color: ${(props) => (props.dark ? "white" : "black")};
  margin-top: 20px;
`;
