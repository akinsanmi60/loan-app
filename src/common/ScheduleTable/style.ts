import styled from "styled-components";

const TableWrapper = styled.div`
  table {
    width: 100%;
    border-spacing: 0;
  }

  thead {
    background: #16194f;
    color: white;
  }

  th {
    font-size: 12px;
    font-weight: 700;
    padding: 10px;
    text-align: left;
    text-transform: uppercase;
    border-bottom: 1px solid #e6e6e6;
  }
  .right,
  .right-hidden {
    text-align: right;
  }

  // pagination
  .select-btn {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .paginationBttns {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .paginationBttns a {
    padding: 7px;
    margin: 4px;
    border-radius: 4px;
    border: 1px solid #e6e6e6;
    color: #16194f;
    cursor: pointer;
    font-size: 10px;
  }
  .paginationBttns a:hover {
    color: white;
    background-color: #16194f;
  }
  .paginationActive a {
    color: white;
    background-color: #16194f;
  }
  .paginationDisabled a {
    color: grey;
    background-color: transprent;
  }

  @media screen and (max-width: 720px) {
    .right-hidden {
      display: none;
    }
    .right {
      text-align: center;
    }
  }

  td {
    border-bottom: 1px solid #e6e6e6;
    padding: 5px 0;
    font-size: 15px;
  }
  tr {
    text-align: left;
  }
`;
export default TableWrapper;
