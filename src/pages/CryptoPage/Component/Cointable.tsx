import React, { useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import CountryContext from "Context/Currencycontext";
import { CoinList } from "utils/Api-Routes";
import TableEmptyState from "common/TableError/TableEmptyState";
import Coininfo from "./Coininfo";
import { TrendingProp } from "./type";
import TableWrapper from "./style";

function Cointable() {
  const [coins, setCoins] = useState<TrendingProp[]>([]);
  const { currency, symbol, setCurrency } = useContext(CountryContext);
  const navigate = useNavigate();
  const [pageNumber, setPageNumber] = useState(0);

  const { isLoading } = useQuery(
    ["scoin", currency],
    () => axios.get(CoinList(currency)),
    {
      onSuccess(e) {
        setCoins(e?.data);
      },
      refetchOnWindowFocus: false,
    },
  );

  const coinsPerPage = 50;
  const pagesVisited = pageNumber * coinsPerPage;
  // setting the pageCount in number
  const pageCount = Math.ceil(coins.length / coinsPerPage);
  // enable to change page number
  const changePage = ({ selected }: { selected: any }) => {
    setPageNumber(selected);
  };

  const displayCoin = coins
    ?.slice(pagesVisited, pagesVisited + coinsPerPage)
    .map(coin => (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div onClick={() => navigate(`/coins/${coin.id}`)} key={coin.id}>
        <Coininfo coin={coin} symbol={symbol} />
      </div>
    ));

  const handleChange = (event: { target: { value: string } }) => {
    setCurrency(event.target.value as string);
  };

  return (
    <TableWrapper>
      <div className="container">
        <div className="currency">
          <p>Currency</p>
          <select value={currency} onChange={handleChange}>
            <option value="NGN">NGN</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
          </select>
        </div>
        <div>
          <div className="heading">
            <div className="tableposition">
              <p>#</p>
              <p>Coin</p>
            </div>
            <p className="coin-name">Price</p>
            <p className="coin-name_hide">24h</p>
            <p className="hide-mobile">Volume</p>
            <p className="hide-mobile">Mkt Cap</p>
          </div>
          {isLoading ? (
            <div className="loadingbox">
              <Spinner />
              <TableEmptyState content="Please wait while the coins is fetched" />
            </div>
          ) : (
            <>
              {displayCoin}
              <div className="select-btn">
                <ReactPaginate
                  previousLabel="<<<"
                  nextLabel=">>>"
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="paginationBttns"
                  previousLinkClassName="previousBttn"
                  nextLinkClassName="nextBttn"
                  disabledClassName="paginationDisabled"
                  activeClassName="paginationActive"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </TableWrapper>
  );
}

export default Cointable;
