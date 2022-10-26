import React from "react";
import HashLoader from "react-spinners/HashLoader";
import LoaderWrapper from "./style";

function LoaderLayout({ loading }: { loading: true }) {
  return (
    <LoaderWrapper>
      <div>
        <HashLoader
          color="#16194f"
          size={70}
          loading={loading}
          speedMultiplier={2}
        />
        <h1>Ace Finance</h1>
      </div>
    </LoaderWrapper>
  );
}

export default LoaderLayout;
