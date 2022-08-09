import React, { useContext, useEffect, useState } from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import axios from "axios";
import CountryContext from "Context/Currencycontext";
import { HistoricalChart } from "utils/Api-Routes";
import { Spinner } from "@chakra-ui/react";
import ClickButton from "./Button";
import { GlobalWrap } from "./style";

export const chartDays = [
  {
    label: "24 Hours",
    value: 1,
  },
  {
    label: "30 Days",
    value: 30,
  },
  {
    label: "3 Months",
    value: 90,
  },
  {
    label: "1 Year",
    value: 365,
  },
];

type CoinProp = {
  coin: {
    id: string;
  };
};

type DataProp = {
  prices: [number, number][];
};
function Global({ coin }: CoinProp) {
  const [historicData, setHistoricData] = useState<DataProp>();
  const [days, setDays] = useState(1);
  const { currency } = useContext(CountryContext);
  const [flag, setflag] = useState(false);
  ChartJS.register(...registerables);

  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin?.id, currency, days));
    setflag(true);
    setHistoricData(data);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  return (
    <GlobalWrap>
      <div className="content">
        {!historicData || flag === false ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
            }}
          >
            <Spinner style={{ color: "#6900ff" }} />
          </div>
        ) : (
          <>
            <Line
              data={{
                labels: historicData?.prices?.map(item => {
                  const dayDate = item[0];
                  const date = new Date(dayDate);
                  const time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData?.prices?.map(item => item[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: " #6900ff",
                    fill: true,
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div className="btn">
              {chartDays.map(day => (
                <div>
                  <ClickButton
                    key={day.value.toLocaleString()}
                    onClick={() => {
                      setDays(day.value);
                      setflag(false);
                    }}
                    selected={day.value === days}
                  >
                    {day.label}
                  </ClickButton>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </GlobalWrap>
  );
}

export default Global;
