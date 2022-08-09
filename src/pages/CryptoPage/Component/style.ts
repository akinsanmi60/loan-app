import styled from "styled-components";

const TableWrapper = styled.div`
  .container {
    margin: auto;
    .currency {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 10px;
      select {
        outline: none;
      }
    }
    .heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--dark-primary);
      box-shadow: 0px 0px 5px #18191b;
      color: var(--neutral-light);
      border-radius: 8px;
      margin: 1rem 0.2rem;
      padding: 0.7rem 1rem;
      font-weight: 700;
      position: sticky;
      top: 0;
      .coin-name {
        margin-left: -6rem;
      }
      .tableposition {
        display: flex;
        gap: 40px;
      }
    }
    @media screen and (max-width: 320px) {
      .coin-name_hide {
        display: none;
      }
    }
    @media screen and (max-width: 720px) {
      .hide-mobile {
        display: none;
      }
    }
    .paginationBttns {
      width: 80%;
      height: 40px;
      list-style: none;
      display: flex;
      justify-content: center;
      margin-top: 25px;
    }

    .select-btn {
      display: flex;
      justify-content: center;
    }
    .paginationBttns a {
      padding: 6px;
      margin: 5px;
      border-radius: 5px;
      border: 1px solid var(--dark-primary);
      color: var(--dark-primary);
      cursor: pointer;
    }

    .paginationBttns a:hover {
      color: white;
      background-color: var(--dark-primary);
    }

    .paginationActive a {
      color: white;
      background-color: var(--dark-primary);
    }

    .paginationDisabled a {
      color: var(--dark-primary);
      background-color: transprent;
    }
  }
`;
export default TableWrapper;
export const InfoWrapper = styled.div`
  .coin-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--neutral-light);
    box-shadow: 0px 0px 5px #18191b;
    border-radius: 8px;
    margin: 0.8rem 0.2rem;
    padding: 0.7rem 1rem;

    .coinposition {
      display: flex;
      gap: 20px;
    }

    .position {
      margin-top: 7px;
    }

    img {
      height: 40px;
      margin-right: 8px;
      width: auto;
    }

    .img-symbol {
      display: flex;
      align-items: center;
    }

    @media screen and (max-width: 720px) {
      .hide-mobile {
        display: none;
      }
    }
  }
`;

export const GlobalWrap = styled.div`
    .content{
      .btn {
        display: flex;
        margin-top: 20px;
        justify-content: space-around;
        width: 100%;
      }
       @media screen and (max-width: 425px) {
      .btn {
        display: none;
    }
    }
`;
export const SelectedButton = styled.span`
border: 1px solid  #6900ff;
border-radius: 5px;
padding: 10px;
padding-left: 20px;
padding-right: 20px;
font-family: Montserrat;
cursor: pointer;
background-color: none ;
color:  #6900ff;
font-weight: 200,
&:hover: {
background-olor:  #6900ff;
color: black;
},
width: 20%;
      //   margin: 5,
`;
