import styled from "styled-components";

interface ButtonProps {
  width: number;
  height: number;
  bgColor: string;
  color: string;
  size: number;
}

export const Button = styled.button<ButtonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ bgColor }) => bgColor};
  border: 1px solid ${({ bgColor }) => bgColor};
  border-radius: 5px;
  cursor: pointer;
  line-height: 86px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: 0.2s;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 570px) {
    width: auto;
    margin: 10px;
  }

  color: ${({ color }) => color};
  font-family: "Graphik", sans-serif;
  font-weight: 400;
  font-size: ${({ size }) => size}px;
  line-height: 34px;

  span {
    flex-shrink: 0;
  }

  img {
    margin-left: 5px;
  }
`;
