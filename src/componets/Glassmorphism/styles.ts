import styled from "styled-components";

interface CircleProps {
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
  bgColor: string;
}

export const Card = styled.div`
  position: relative;
  z-index: 1;
  height: 300px;
  width: 480px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 1rem;
  margin: 4rem;
  box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(1rem);
  -webkit-backdrop-filter: blur(1rem);
`;

export const Circle = styled.div<CircleProps>`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  position: absolute;
  z-index: -1;
  background: ${({ bgColor }) => bgColor};

  ${({ top }) => (top ? `top: ${top}%` : null)};
  ${({ bottom }) => (bottom ? `bottom: ${bottom}%` : null)};
  ${({ left }) => (left ? `left: ${left}%` : null)};
  ${({ right }) => (right ? `right: ${right}%` : null)};
`;
