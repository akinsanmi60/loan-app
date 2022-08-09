/* eslint-disable react/no-danger */
import React, { useContext, useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { Progress } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import DOMPurify from "isomorphic-dompurify";
import { SingleCoin } from "utils/Api-Routes";
import CountryContext from "Context/Currencycontext";
import { FaBackward } from "react-icons/fa";
import { CoinProp } from "./type";
import Global from "../Component/Global";
import Wrapper, { ButtonStyled } from "./style";

function CoinPage() {
  const { id } = useParams<string>();
  const [coin, setCoin] = useState<CoinProp>();
  const { currency, symbol } = useContext(CountryContext);
  const navigate = useNavigate();

  useQuery("songlecoin", () => axios.get(SingleCoin(id)), {
    onSuccess(e) {
      setCoin(e?.data);
    },
    refetchOnWindowFocus: false,
  });

  // go back-to-next page
  const goBack = () => navigate(-1);

  if (!coin)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <Progress style={{ color: "#6900ff" }} isIndeterminate />
      </div>
    );

  // checking the boolean state for profit index;
  const profit1h =
    coin?.market_data?.price_change_percentage_1h_in_currency?.[
      currency.toLowerCase()
    ] >= 0;
  const profit7d =
    coin?.market_data?.price_change_percentage_7d_in_currency?.[
      currency.toLowerCase()
    ] >= 0;
  const profit24h =
    coin?.market_data?.price_change_percentage_24h_in_currency?.[
      currency.toLowerCase()
    ] >= 0;
  const profit14d =
    coin?.market_data?.price_change_percentage_14d_in_currency?.[
      currency.toLowerCase()
    ] >= 0;
  const profit30d =
    coin?.market_data?.price_change_percentage_30d_in_currency?.[
      currency.toLowerCase()
    ] >= 0;
  const profit1y =
    coin?.market_data?.price_change_percentage_1y_in_currency?.[
      currency.toLowerCase()
    ] >= 0;
  console.log("ljkfkfnkfnfkf", coin);
  return (
    <Wrapper>
      <div>
        <ButtonStyled onClick={goBack} type="submit">
          <FaBackward />
        </ButtonStyled>
      </div>
      <div className="coin-container">
        <div className="content">
          <div className="rank">
            <span className="rank-btn">Rank # {coin.market_cap_rank}</span>
          </div>
          <div className="info">
            <div className="coin-heading">
              <img src={coin.image.small} alt="" />
              <p>{coin.name}</p>
              <p>
                {coin.symbol.toUpperCase()}/{symbol}
              </p>
            </div>
            <div className="coin-price">
              <p>
                {symbol}
                {coin?.market_data?.current_price?.[
                  currency.toLowerCase()
                ].toLocaleString()}
              </p>
            </div>
          </div>
        </div>
        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>14d</th>
                <th className="coin-name_hide">30d</th>
                <th className="coin-year_hide">1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <p
                    style={{
                      color: profit1h ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {profit1h && "+"}
                    {coin?.market_data?.price_change_percentage_1h_in_currency?.[
                      currency.toLowerCase()
                    ].toFixed(1)}
                    %
                  </p>{" "}
                </td>
                <td>
                  <p
                    style={{
                      color: profit24h ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {profit24h && "+"}
                    {coin?.market_data?.price_change_percentage_24h_in_currency?.[
                      currency.toLowerCase()
                    ].toFixed(1)}
                    %
                  </p>
                </td>
                <td>
                  <p
                    style={{
                      color: profit7d ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {profit7d && "+"}
                    {coin?.market_data?.price_change_percentage_7d_in_currency?.[
                      currency.toLowerCase()
                    ].toFixed(1)}
                    %
                  </p>
                </td>
                <td>
                  <p
                    style={{
                      color: profit14d ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {profit14d && "+"}
                    {coin?.market_data?.price_change_percentage_14d_in_currency?.[
                      currency.toLowerCase()
                    ].toFixed(1)}
                    %
                  </p>
                </td>
                <td>
                  <p
                    className="coin-name_hide"
                    style={{
                      color: profit30d ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {profit30d && "+"}
                    {coin?.market_data?.price_change_percentage_30d_in_currency?.[
                      currency.toLowerCase()
                    ].toFixed(1)}
                    %
                  </p>
                </td>
                <td>
                  <p
                    className="coin-year_hide"
                    style={{
                      color: profit1y ? "rgb(14, 203, 129)" : "red",
                      fontWeight: 500,
                    }}
                  >
                    {profit1y && "+"}
                    {coin?.market_data?.price_change_percentage_1y_in_currency?.[
                      currency.toLowerCase()
                    ].toFixed(1)}
                    %
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                <p>
                  {symbol}
                  {coin.market_data.low_24h?.[
                    currency.toLowerCase()
                  ].toLocaleString()}
                </p>
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                <p>
                  {symbol}
                  {coin.market_data.high_24h?.[
                    currency.toLowerCase()
                  ].toLocaleString()}
                </p>
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4 className="coin-name_hide">Market Cap</h4>
                <p className="coin-name_hide">
                  {symbol}
                  {coin.market_data.market_cap?.[
                    currency.toLowerCase()
                  ].toLocaleString()}
                </p>
              </div>
              <div className="row">
                <h4 className="coin-name_hide">Circulating Supply</h4>
                <p className="coin-name_hide">
                  {coin.market_data.circulating_supply.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="chart">
            <Global coin={coin} />
          </div>
        </div>
        <div className="content">
          <div className="about">
            <h3>About</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : "",
                ),
              }}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default CoinPage;
