import GlobalStyle from "styles/global";

import * as S from "./styles";

export type ButtonDefaultPropsReact = React.HTMLAttributes<HTMLButtonElement>;

export interface ButtonDefaultProps extends ButtonDefaultPropsReact {
  text: string;
  bgColor: string;
  color: string;
  width: number;
  height: number;
  icon?: string;
}

const ButtonDefault = ({
  text,
  bgColor,
  color,
  width,
  height,
  icon,
  ...rest
}: ButtonDefaultProps) => (
  <>
    <GlobalStyle />
    <S.Button
      role="button"
      width={width}
      height={height}
      color={color}
      bgColor={bgColor}
      {...rest}>
      {text} {icon && <img role="icon" src={icon} alt={text} />}
    </S.Button>
  </>
);

export default ButtonDefault;
