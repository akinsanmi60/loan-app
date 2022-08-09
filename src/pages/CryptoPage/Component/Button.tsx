import React from "react";
import { others } from "@chakra-ui/react";
import { SelectedButton } from "./style";

type ButtonProp = {
  onClick: () => void;
  selected: number | string | boolean;
  children: string;
};
function ClickButton({ onClick, children }: ButtonProp) {
  return (
    <SelectedButton onClick={onClick} {...others}>
      {children}
    </SelectedButton>
  );
}

export default ClickButton;
