import styled from "styled-components";

interface ItemProps {
  activated: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Items = styled.li`
  cursor: pointer;
`;

export const Item = styled.div<ItemProps>`
  width: 5px;
  height: 5px;
  padding: 25px;
  font-size: 1.5em;
  font-weight: bold;
  border: 1px solid #000;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ activated }) => activated ? "#F0C20D" : "#fff"};
  color: #000;
`;
