import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import TableWrapper from "./style";

type LoanProp = {
  loan: {
    amount: number;
    capitalSum: number;
    interestSum: number;
    sum: number;
    installments: {
      capital: number;
      installment: number;
      interest: number;
      interestSum: number;
      remain: number;
    }[];
  };
};

function ScheduleTable({ loan }: LoanProp) {
  const [pageNumber, setPageNumber] = useState(0);

  const amountFormat = (amount: number) =>
    new Intl.NumberFormat("en-gb", {
      style: "currency",
      currency: "GBP",
    }).format(amount);

  const d = new Date();

  const loanInstallmentsPerPage = 8;
  const pagesVisited = pageNumber * loanInstallmentsPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(
    loan.installments.length / loanInstallmentsPerPage,
  );
  // enable to change page number
  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };

  // the table body
  const displayInstallments = loan.installments
    ?.slice(pagesVisited, pagesVisited + loanInstallmentsPerPage)
    .map((item, index: number) => {
      const nextDate = new Date();
      nextDate.setMonth(d.getMonth() + (index + 1));
      return (
        <tbody key={loan.amount}>
          <tr>
            <td>{nextDate.toDateString()}</td>
            <td className="right-hidden">{amountFormat(item.installment)}</td>
            <td className="right">{amountFormat(item.interest)}</td>
            <td className="right-hidden">{amountFormat(item.capital)}</td>
            <td className="right">{amountFormat(item.remain)}</td>
          </tr>
        </tbody>
      );
    });

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            <th>Month</th>
            <th className="right-hidden">Amount</th>
            <th className="right">Interest</th>
            <th className="right-hidden">Principal</th>
            <th className="right">Balance</th>
          </tr>
        </thead>
        {displayInstallments}
      </table>
      <div className="select-btn">
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName="paginationBttns"
          previousLinkClassName="previousBttn"
          nextLinkClassName="nextBttn"
          disabledClassName="paginationDisabled"
          activeClassName="paginationActive"
        />
      </div>
    </TableWrapper>
  );
}

export default ScheduleTable;
