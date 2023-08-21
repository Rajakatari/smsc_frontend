import styled, { css } from "styled-components";

export const ListItem = styled.li`
  min-width: 320px;
  max-width: 400px;
  height: 200px;
  margin-bottom: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  background-color: ${(props) => (props.isdarktheme ? "black" : "white")};
  color: ${(props) => (props.isdarktheme ? "white" : "black")};
  border-radius: 10px;

  ${(props) =>
    props.hover &&
    !props.isdarktheme &&
    css`
      &:hover {
        box-shadow: 0px 0px 10px 4px black;
        font-family: "Bree Serif";
      }
    `}

  ${(props) =>
    props.hover &&
    props.isdarktheme &&
    css`
      &:hover {
        box-shadow: 0px 0px 16px 4px white;
        font-family: "Bree Serif";
        border: 1px solid white;
      }
    `}
`;

export const PieChartContainerStyle = styled.div`
  max-width: 800px;
  height: 425px;
  border-radius: 15px;
  background-color: ${(props) => (props.isdarktheme ? "black" : "white")};
  color: ${(props) => (props.isdarktheme ? "white" : "black")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.hover &&
    !props.isdarktheme &&
    css`
      &:hover {
        box-shadow: 0px 0px 10px 4px black;
        font-family: "Bree Serif";
      }
    `}
  ${(props) =>
    props.hover &&
    props.isdarktheme &&
    css`
      &:hover {
        box-shadow: 0px 0px 16px 4px white;
        font-family: "Bree Serif";
      }
    `}


  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
