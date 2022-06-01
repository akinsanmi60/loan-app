import React from "react";
import ButtonStyled from "./style";

type BtnProp = {
  name: string;
};
function PrimaryButton({ name }: BtnProp) {
  return <ButtonStyled>{name}</ButtonStyled>;
}

export default PrimaryButton;
