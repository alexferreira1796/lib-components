import { Container, List, Items, Item } from "./styles";

export interface RadioOptionsProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string | null>>;
}

export const RadioOptions = ({ selected, setSelected }: RadioOptionsProps) => {
  const options = [1, 2, 3, 4, '5+'];

  const handleChangeOption = (option: string) => {
    setSelected(option);
  };

  return (
    <Container>
      <List>
        {options.map((option) => (
          <Items key={option}>
            <Item
              activated={selected === option}
              onClick={() => handleChangeOption(option as string)}
            >
              {option}
            </Item>
          </Items>
        ))}
      </List>
    </Container>
  );
};

export default RadioOptions;
