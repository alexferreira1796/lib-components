import { StarOutlined, Star, StarMid } from "assets/icons";

import Container from "./styles";

export interface EvaluationProps {
  note: number;
  withNumber?: boolean;
}

const Evaluation = ({ note, withNumber }: EvaluationProps) => {
  let numberNote;

  const starsOutlinedAndMid = (outlinedStars: number) => {
    const starOutline = [...Array(outlinedStars)].map((_star, index) => (
      <img key={`${index}_mid`} src={StarOutlined} alt="star" data-testid="star-outlined" />
    ));

    return (
      <>
        <img src={StarMid} alt="star" data-testid="star-mid" />
        {starOutline}
      </>
    );
  };

  const renderStars = () => {
    numberNote = note;

    if (note > 5) numberNote = 5;
    if (note < 0) numberNote = 0;

    const roundNote = Math.round(numberNote * 2) / 2;

    const stars = Math.floor(numberNote);

    const hasMidStar = (roundNote * 100) % 100 > 0;

    const outlinedStars = 5 - (stars + Number(hasMidStar));

    const starsSolid = [...Array(stars)].map((_star, index) => (
      <img key={`${index}_solid`} src={Star} alt="star" data-testid="star-solid" />
    ));

    const starsOutline = [...Array(outlinedStars)].map((_star, index) => (
      <img
        key={`${index}_outline`}
        src={StarOutlined}
        alt="star"
        data-testid="star-outlined"
      />
    ));

    const starsMidOrOutlined = hasMidStar
      ? starsOutlinedAndMid(outlinedStars)
      : starsOutline;

    return [starsSolid, starsMidOrOutlined];
  };

  return (
    <Container>
      {renderStars()}
      {withNumber && <span>{numberNote}</span>}
    </Container>
  );
};

export default Evaluation;
