import React from "react";
import { InfoWrapper } from "./style";
import { TrendingProp } from "./type";

type InfoProp = {
  coin: TrendingProp;
  symbol: string;
};

function Coininfo({ coin, symbol }: InfoProp) {
  const profit = coin?.price_change_percentage_24h >= 0;
  return (
    <InfoWrapper>
      <div className="coin-row">
        <div className="coinposition">
          <p className="position">{coin.market_cap_rank}</p>
          <div className="img-symbol">
            <img src={coin.image} alt="" />
            <p className="coin-name_hide">{coin.symbol.toUpperCase()}</p>
          </div>
        </div>
        <p>
          {symbol}
          {coin.current_price.toLocaleString()}
        </p>
        <p
          className="coin-name_hide"
          style={{
            color: profit ? "rgb(14, 203, 129)" : "red",
            fontWeight: 500,
          }}
        >
          {profit && "+"}
          {coin.price_change_percentage_24h.toFixed(2)}%
        </p>
        <p className="hide-mobile">
          {symbol}
          {coin.total_volume.toLocaleString()}
        </p>
        <p className="hide-mobile">
          {symbol}
          {coin.market_cap.toLocaleString()}
        </p>
      </div>
    </InfoWrapper>
  );
}

export default Coininfo;
