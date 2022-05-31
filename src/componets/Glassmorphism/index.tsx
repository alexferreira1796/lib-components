import * as S from "./styles";

const Glassmorphism = () => (
  <>
    <S.Card />
    <S.Circle bgColor="linear-gradient(120deg, #8e2de2, #4a00e0)" top={-10} left={-5} />
    <S.Circle bgColor="linear-gradient(120deg, #2DA1E2, #0016E0)" bottom={10} left={25} />
  </>
);

export default Glassmorphism;
