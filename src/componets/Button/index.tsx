import GlobalStyle from "styles/global";

import * as S from "./styles";

export type ButtonPropsReact = React.HTMLAttributes<HTMLButtonElement>;

export interface ButtonProps extends ButtonPropsReact {
  text: string;
  bgColor: string;
  color: string;
  width: number;
  height: number;
  icon: string;
}

const Button = ({ text, bgColor, color, width, height, icon, ...rest }: ButtonProps) => (
  <>
    <GlobalStyle />
    <S.Container width={width} height={height} color={color} bgColor={bgColor} {...rest}>
      {text} {icon && <img src={icon} alt={text} />}
    </S.Container>
  </>
);

export default Button;
