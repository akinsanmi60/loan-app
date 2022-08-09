import React from "react";
import { ReactComponent as NoData } from "assets/no_data.svg";
import EmptyStateWrapper from "./style";

interface ITableEmptyState {
  content: string;
}

function TableEmptyState({ content }: ITableEmptyState) {
  return (
    <EmptyStateWrapper>
      <>
        <NoData />
        <p>{content}</p>
      </>
    </EmptyStateWrapper>
  );
}

export default TableEmptyState;
