import React, { createContext, useEffect, useState, useMemo } from "react";

type ContextProp = {
  currency: string;
  setCurrency: React.Dispatch<React.SetStateAction<string>>;
  symbol: string;
};

const CountryContext = createContext<ContextProp>({
  currency: "",
  symbol: "",
  setCurrency: () => {},
});
type Props = {
  children: React.ReactNode;
};

export function CryptoProvider({ children }: Props) {
  const [currency, setCurrency] = useState("NGN");
  const [symbol, setSymbol] = useState("₦");

  useEffect(() => {
    if (currency === "NGN") setSymbol("₦");
    else if (currency === "USD") setSymbol("$");
    else if (currency === "EUR") setSymbol("€");
    else if (currency === "CAD") setSymbol("$");
  }, [currency]);

  const value = useMemo(
    () => ({ currency, setCurrency, symbol }),
    [currency, setCurrency, symbol],
  );

  return (
    <CountryContext.Provider value={value}>{children}</CountryContext.Provider>
  );
}

export default CountryContext;
