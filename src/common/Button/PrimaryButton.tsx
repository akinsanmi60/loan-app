import React from "react";
import { Button } from "@chakra-ui/react";

type BtnProp = {
  name: string;
};
function PrimaryButton({ name }: BtnProp) {
  return <Button>{name}</Button>;
}

export default PrimaryButton;
