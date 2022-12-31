import { FC, useState } from "react";

import { applyMask, unMask } from "services";

import * as S from "./styles";

const Masks: FC = () => {
  const [phone, setPhone] = useState("");
  const [cpf, setCPF] = useState("");
  const [cnpj, setCNPJ] = useState("");

  const handleChangeMask = (value: string, patter: string) => {
    const unMaskInput = unMask(value);
    const maskInput = applyMask(unMaskInput, patter);

    return maskInput;
  };

  return (
    <>
      <S.Label>
        Telefone
        <S.Container
          type="text"
          value={phone}
          onChange={({ target }) =>
            setPhone(handleChangeMask(target.value, "(##) #####-####"))
          }
        />
      </S.Label>
      <br />
      <S.Label>
        CPF
        <S.Container
          type="text"
          value={cpf}
          onChange={({ target }) =>
            setCPF(handleChangeMask(target.value, "###.###.###-##"))
          }
        />
      </S.Label>
      <br />
      <S.Label>
        CNPJ
        <S.Container
          type="text"
          value={cnpj}
          onChange={({ target }) =>
            setCNPJ(handleChangeMask(target.value, "##.###.###/####-##"))
          }
        />
      </S.Label>
      <br />
    </>
  );
};

export default Masks;
