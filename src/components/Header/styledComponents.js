import styled, { css } from "styled-components";

export const DarkThemeButton = styled.button`
  border: none;
  background-color: ${(props) => (props.isdarktheme ? "white" : "grey")};
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-left: 10px;
  ${(props) =>
    props.hover &&
    css`
      &:hover {
        box-shadow: 0px 0px 10px 4px black;
      }
    `}
`;
